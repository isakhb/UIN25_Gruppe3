import { Link } from "react-router-dom";
export default function EventCard({ festival }) {
  return (
    <article className="gameCard">
      <h3>{festival.name}</h3>
      <img src={festival.images[0].url} alt={festival.name} />
      <Link to={`event/${festival.id}`}>Les mer om {festival.name}</Link>
    </article>
  );
}

