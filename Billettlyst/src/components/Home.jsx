import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&countryCode=NO&keyword=festival&size=4`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          const allEvents = data._embedded.events;
          console.log("Alle event-navn:", allEvents.map(e => e.name));
          setEvents(allEvents);
        } else {
          console.log("Ingen _embedded i API-responsen:", data);
        }
      })
      .catch(err => console.error("API-feil:", err));
  }, []);
  
  
  

  return (
    <div>
      <h2>Sommerens festivaler!</h2>
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
      </div>
    </div>
  );
}
