import EventCard from "./EventCard";
import CityEvents from "./cityEvents";
import "./../style.css";


export default function Home({ festivals, setFestivals }) {
  return (
    <main>
      <h2>Utvalgte arrangementer i Norge</h2>
      <section className="festivalgrid">
      {festivals?.map((festival) => 
      <EventCard key={festival.id} festival={festival} />)}
      </section>
      <CityEvents />
    </main>
  );
}
