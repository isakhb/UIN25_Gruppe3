import { Link } from "react-router-dom";
import "./../style.css";

export default function CityCard({ cityEvent }) {
  return (
          <article className="festivalkort" key={cityEvent.id}>
            <img
              src={cityEvent.images[0].url}
              alt={cityEvent.name}
              className="festivalbilde"
            />
            <h3>{cityEvent.name}</h3>
            <ul className="eventinfo">
              <li>Dato: {cityEvent.dates.start.localDate}</li>
              <li>Tid: {cityEvent.dates.start.localTime || "Ikke oppgitt"}</li>
              <li>Land: {cityEvent._embedded?.venues?.[0]?.country?.name}</li>
              <li>By: {cityEvent._embedded?.venues?.[0]?.city?.name}</li>
              <li>Scene: {cityEvent._embedded?.venues?.[0]?.name}</li>
            </ul>
          </article>
  );
}

