import { Link } from "react-router-dom";
import "./../style.css";

export default function CategoryCard({ category }) {
  return (
    <article className="festivalkort">
      <img src={category.images[0].url} alt={category.name} className="festivalbilde" />
      <h3>{category.name}</h3>

    </article>

  );
}

