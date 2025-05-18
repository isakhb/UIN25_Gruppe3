/*
I denne koden viser vi fire utvalgte festivaler i Norge. Vi bruker usestate for å 
lage en variabel som heter events. Den holder på festivalene vi vil vise.
Vi lager en funksjon som heter fetchevents. Den henter arrangementer fra ticketmaster sin api. 
Når vi får dataen sjekker vi om den inneholder arrangementer. Så lager vi en liste med 
navnene på de fire festivalene vi vil ha.
Koden går gjennom alle arrangementene og sjekker om navnet inneholder ett av festivalnavnene. 
Hvis det gjør det legger koden det til i en ny liste. Den listen lagrer i events.

Vi bruker useeffect til å kjøre fetchevents en gang når siden lastes. Dette gjør at koden
henter dataen automatisk når brukeren åpner siden.
Til slutt vises innholdet fra events i nettsiden hvor hver festival vises med et bilde, navnet på 
festivalen og en knapp.
*/
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&attractionId=K8vZ917_YJf,K8vZ917K7fV,K8vZ917bJC7,K8vZ917oWOV&locale=*&countryCode=NO&size=100"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          const allEvents = data._embedded.events;
          const festivalnavn = [
            "neon",
            "findings festival",
            "skeikampen",
            "tons of rock"
          ];
          const valgt = [];
          festivalnavn.forEach((navn) => {
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
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <main>
      <h2>Utvalgte arrangementer i Norge</h2>
      <section className="festivalgrid">
        {events.map((event) => (
          <article className="festivalkort" key={event.id}>
            <img
              src={event.images[0].url}
              alt={event.name}
              className="festivalbilde"
            />
            <h3>{event._embedded.attractions[0].name}</h3>
            <Link
              to={`/event/${event._embedded.attractions[0].id}`}
              className="festivalknapp"
            >
              Les mer om {event._embedded.attractions[0].name}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

