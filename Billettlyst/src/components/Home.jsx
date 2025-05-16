import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&attractionId=K8vZ917_YJf,K8vZ917K7fV,K8vZ917bJC7,K8vZ917oWOV&locale=*&countryCode=NO&size=100"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          const allEvents = data._embedded.events;

          const festivalNavn = [
            "neon",
            "findings festival",
            "skeikampen",
            "tons of rock"
          ];

          const valgt = [];

          festivalNavn.forEach((navn) => {
            const match = allEvents.find((event) =>
              event.name.toLowerCase().includes(navn)
            );
            if (match) {
              valgt.push(match);
            }
          });

          setEvents(valgt);
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
            <Link to={`/event/${event._embedded.attractions[0].id}`} className="festival-btn">
              Les mer om {event.name}
            </Link>
          </div>
        ))}
        {events.length === 0 && <p>Ingen arrangementer funnet.</p>}
      </div>
    </div>
  );
}

