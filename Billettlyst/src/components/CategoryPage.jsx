import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CategoryCard from "./CategoryCard";


export default function CategoryPage() {
    const [search, setSearch] = useState();
    const [categories, setCategories] = useState([]);
    const { slug } = useParams()

    let categoryOverskrift = slug.charAt(0).toUpperCase() + slug.slice(1)
    if (categoryOverskrift === "Teatershow") {
        categoryOverskrift = "Teater/Show"
    }

    const getCategories = async () => {
      fetch(`https://app.ticketmaster.com/discovery/v2/suggest?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&keyword=${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setCategories(data._embedded?.attractions || []);
          console.log(data._embedded?.attractions);
        })
        .catch((error) =>
          console.error("Skjedde noe feil ved fetch av søk", error)
        );
    };
    
    useEffect(() => {
     getCategories();
    console.log("Min state", categories);
    }, [slug]);

    const handleClick = () => {
      if (search && search.trim() !== "") {
        fetch(`https://app.ticketmaster.com/discovery/v2/suggest?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&keyword=${search}`)
          .then((response) => response.json())
          .then((data) => {
            setCategories(data._embedded?.attractions || []);
            console.log("Søkeresultater:", data._embedded?.attractions);
          })
          .catch((error) =>
            console.error("Funker ikke å søke agh", error)
          );
      }
    };

    return (
        <main>
            <h2>{categoryOverskrift}</h2>
      <SearchForm setSearch={setSearch} handleClick={handleClick} />
      <section className="festivalgrid">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <p>Ingen resultater funnet.</p>
        )}
            </section>
        </main>
    )
}

