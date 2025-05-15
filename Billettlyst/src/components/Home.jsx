import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&countryCode=NO&size=100"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          const filtered = data._embedded.events.filter((event) =>
            [
              "findings festival",
              "neon",
              "tons of rock"
            ].some((name) =>
              event.name.toLowerCase().includes(name)
            )
          );
          setEvents(filtered);
        } else {
          setEvents([]);
        }
      })
      .catch(() => {
        setEvents([]);
      });
  }, []);

  return (
    <div>
      <h2>Utvalgte arrangementer i Norge</h2>
      <div className="festival-grid">
        {events.map((event) => (
          <div className="festival-card" key={event.id}>
            <img
              src={event.images[0].url}
              alt={event.name}
              className="festival-img"
            />
            <h3>{event.name}</h3>
            <Link to={`/event/${event.id}`} className="festival-btn">
              Les mer om {event.name}
            </Link>
          </div>
        ))}
        {events.length === 0 && <p>Ingen arrangementer funnet.</p>}
      </div>
    </div>
  );
}
