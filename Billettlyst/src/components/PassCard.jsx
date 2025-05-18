import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PassCard({ festivalPass }) {
  return (
    <article className="gameCard">
      <img src={festivalPass.images[0].url} alt={festivalPass.name} />
      <h3>{festivalPass.name}</h3>
      <h4>{festivalPass._embedded.venues[0].name}</h4>
      <h4>{festivalPass._embedded.venues[0].city.name}</h4>
      <h4>{festivalPass._embedded.venues[0].country.name}</h4>
      <h4>{festivalPass.dates.start.localDate}</h4>
      <button>Kjøp</button>
      <button>Legg til Ønskeliste</button>
    </article>
  );
}
