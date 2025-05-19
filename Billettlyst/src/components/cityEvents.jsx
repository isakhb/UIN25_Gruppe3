import { useEffect, useState } from "react";
import CityCard from "./cityCard";
  
  export default function CityEvents() {
  const [cityEvents, setCityEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Oslo");

    const fetchCityEvents = async (city) => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&size=100&locale=*&city=${city}`)
        .then((response) => response.json()) 
        .then((data) => setCityEvents(data._embedded?.events)) 
        .catch((error) => console.error("Skjedde noe feil ved fetch", error)); 
    };
    useEffect(() => {
        fetchCityEvents(selectedCity);
    }, [selectedCity]);

     return (
    <div>
     <h2 className="hvaskjer">Hva skjer i storbyene</h2>
      <section className="byfilter">
        {["Oslo", "Stockholm", "Berlin", "London", "Paris"].map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className="festivalknapp">
            {city}
          </button>
        ))}
      </section>

      <h3>Hva skjer i {selectedCity}</h3>
      <section className="festivalgrid">
        {cityEvents.slice(0, 10).map((cityEvent) => (
            <CityCard cityEvent={cityEvent} key={cityEvent.id} />
        ))}
      </section>
      </div>
     );
  }
  
  
  
