import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventPage() {
  const { id } = useParams();
  const [eventData, setEventData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [attractionName, setAttractionName] = useState("");

  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3`
    )
      .then((res) => res.json())
      .then((data) => {
        setAttractionName(data.name);
        const genres = data.classifications?.flatMap((c) => [c.genre?.name, c.subGenre?.name]).filter(Boolean);
        setGenre(genres || []);
      });

    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&attractionId=${id}&countryCode=NO`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._embedded) {
          setEventData(data._embedded.events);
        }
      });
  }, [id]);
  console.log(genre);

  return (
    <main>
      <h1>{attractionName}</h1>

      <section>
        <strong>Sjangrer:</strong>
        <p>{genre.length > 0 ? genre.join(", ") : "Test"}</p>
      </section>

      <section>
        <strong>Festivalpass:</strong>

        {eventData.length === 0 && <p>Ikke tilgjengelig.</p>}

        <section className="festival-grid">
          {eventData.map((event) => (
            <article className="festival-card" key={event.id}>
              <img
                src={event.images[0].url}
                alt={event.name}
                className="festival-img"
              />

              <h3>{event.name}</h3>

              <p>
                Artister:{" "}
                {event._embedded?.attractions?.map((a) => a.name).join(", ") ||
                  "Ukjent"}
              </p>

              <p>Dato: {event.dates.start.localDate}</p>

              <p>
                Sted:{" "}
                {event._embedded?.venues?.[0]?.city?.name},{" "}
                {event._embedded?.venues?.[0]?.country?.name}
              </p>

              <section style={{ display: "flex", gap: "1rem" }}>
                <button className="festivalknapp" disabled>Kjøp</button>
                <button className="festivalknapp" disabled>Legg til i ønskeliste</button>
              </section>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
