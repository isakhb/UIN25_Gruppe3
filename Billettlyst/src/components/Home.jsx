/*
I denne koden henter vi festivaldata fra ticketmaster sitt api når siden lastes inn.
Vi bruker useEffect til å hente dataen en gang og lagrer arrangementene i en state med useState
Vi filtrerer 4 eventer ut  basert på navn i event listen.
For å vise riktig navn på festivalene, bruker vi navnet fra attraction objektet i stedet for event.name.
Hver festival vises med bilde, navn og en lenke som fører videre til eventet.
*/
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
    <main>
      <h2>Utvalgte arrangementer i Norge</h2>
      <section className="festival-grid">
        {events.map((event) => (
          <article className="festival-card" key={event.id}>
            <img
              src={event.images[0].url}
              alt={event.name}
              className="festival-img"
            />
            <h3>{event._embedded.attractions[0].name}</h3>
            <Link
              to={`/event/${event._embedded.attractions[0].id}`}
              className="festival-btn"
            >
              Les mer om {event._embedded.attractions[0].name}
            </Link>
          </article>
        ))}
        {events.length === 0 && <p>Ingen arrangementer funnet.</p>}
      </section>
    </main>
  );  
}

