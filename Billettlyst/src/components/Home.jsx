import EventCard from "./EventCard";
import CityEvents from "./cityEvents";

export default function Home({ festivals, setFestivals }) {
  return (
    <main>
      <h1>Forside</h1>
      <section className="flex-section">
      {festivals?.map((festival) => 
      <EventCard key={festival.id} festival={festival} />)}
      </section>
      <CityEvents />
    </main>
  );
}
