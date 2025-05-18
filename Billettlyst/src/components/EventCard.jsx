import { Link } from "react-router-dom";
import "./../style.css";

export default function EventCard({ festival }) {
  return (
    <article className="festivalkort">
      <img src={festival.images[0].url} alt={festival.name} className="festivalbilde" />
      <h3>{festival.name}</h3>
      <Link to={`event/${festival.id}`} className="festivalknapp">Les mer om {festival.name} </Link>
    </article>
  );
}

