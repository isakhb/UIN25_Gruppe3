import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PassCard({ festivalPass }) {
  return (
    <article className="festivalkort">
      <img src={festivalPass.images[0].url} alt={festivalPass.name}  className="festivalbilde"/>
      <h3>{festivalPass.name}</h3>
      <h4>{festivalPass._embedded.venues[0].name}</h4>
      <h4>{festivalPass._embedded.venues[0].city.name}</h4>
      <h4>{festivalPass._embedded.venues[0].country.name}</h4>
      <h4>{festivalPass.dates.start.localDate}</h4>
      <button className="festivalknapp">Kjøp</button>
      <button className="festivalknapp">Legg til Ønskeliste</button>
    </article>
  );
}
