import { useParams } from "react-router-dom"

export default function CategoryPage() {
    const { slug } = useParams()
    let categoryOverskrift = slug.charAt(0).toUpperCase() + slug.slice(1)
    if (categoryOverskrift === "Teatershow") {
        categoryOverskrift = "Teater/Show"
    }

    return (
        <main>
            <h2>{categoryOverskrift}</h2>
        </main>
    )
}