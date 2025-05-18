import { Link } from "react-router-dom";

export default function EventCard(props) {
  const event = props.event;
  const clickable = props.clickable;

  return (
    <article className="festivalkort">
      <img
        src={event.images[0].url}
        alt={event.name}
        className="festivalbilde"
      />
      <h3>{event.name}</h3>

      {!clickable && (
        <ul className="eventinfo">
          <li>Dato: {event.dates.start.localDate}</li>
          <li>Tid: {event.dates.start.localTime || "Ikke oppgitt"}</li>
          <li>Land: {event._embedded.venues[0].country.name}</li>
          <li>By: {event._embedded.venues[0].city.name}</li>
          <li>Scene: {event._embedded.venues[0].name}</li>
        </ul>
      )}

      {clickable && (
        <Link
          to={`/event/${event._embedded.attractions[0].id}`}
          className="festivalknapp"
        >
          Les mer om {event._embedded.attractions[0].name}
        </Link>
      )}
    </article>
  );
}
