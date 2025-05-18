import { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function Home() {
  const [events, setevents] = useState([]);
  const [cityEvents, setcityevents] = useState([]);
  const [selectedcity, setselectedcity] = useState("Oslo");

  const fetchEvents = async () => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&attractionId=K8vZ917_YJf,K8vZ917K7fV,K8vZ917bJC7,K8vZ917oWOV&locale=*&countryCode=NO&size=100"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          const allEvents = data._embedded.events;
          const festivalnavn = ["neon", "findings festival", "skeikampen", "tons of rock"];
          const valgt = [];

          festivalnavn.forEach((navn) => {
            const match = allEvents.find((event) =>
              event.name.toLowerCase().includes(navn)
            );
            if (match) {
              valgt.push(match);
            }
          });

          setevents(valgt);
        } else {
          setevents([]);
        }
      });
  };

  const fetchcityevents = async (city) => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&size=100&locale=*&city=${city}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          setcityevents(data._embedded.events);
        } else {
          setcityevents([]);
        }
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    fetchcityevents(selectedcity);
  }, [selectedcity]);

  return (
    <main>
      <h2>Utvalgte arrangementer i Norge</h2>
      <section className="festivalgrid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} clickable={true} />
        ))}
      </section>

      <h2 style={{ marginTop: "4rem" }}>Hva skjer i storbyene</h2>
      <section className="byfilter">
        {["Oslo", "Stockholm", "Berlin", "London", "Paris"].map((city) => (
          <button
            key={city}
            onClick={() => setselectedcity(city)}
            className="festivalknapp"
          >
            {city}
          </button>
        ))}
      </section>

      <h3>I {selectedcity} kan du oppleve:</h3>
      <section className="festivalgrid">
        {cityEvents.slice(0, 10).map((event) => (
          <EventCard key={event.id} event={event} clickable={false} />
        ))}
      </section>
    </main>
  );
}

