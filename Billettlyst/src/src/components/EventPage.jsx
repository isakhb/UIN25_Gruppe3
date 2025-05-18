import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PassCard from "./PassCard";
import ArtistCard from "./ArtistCard";



export default function EventPage() {
  const { event_id } = useParams();
  const [event, setEvent] = useState();
  const [pass, setPass] = useState([]);

  const getEvent = async () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${event_id}?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&locale=*`)
      .then((response) => response.json())
      .then((data) => {setEvent(data);console.log(data);})
      .catch((error) => console.error("det skjedde en feil under fecth", error)
      );
  };

  const getPass = async () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&attractionId=${event_id}&locale=*`)
      .then((response) => response.json())
      .then((data) => {setPass(data);console.log(data);})
      .catch((error) => console.error("det skjedde en feil under fecth", error)
      );
  };

  useEffect(() => {
    getEvent();
    getPass();
  }, [event_id]);
  
  return <main  >
      <h1>{event?.name}</h1>
      <h3>Sjanger: {event?.classifications[0].segment.name} , 
        {event?.classifications[0].genre.name} , 
        {event?.classifications[0].subGenre.name} , 
        {event?.classifications[0].subType.name} </h3>
        <h3 >Følg oss på sosiale medier:</h3>
        <section className="festivalgrid">
            {pass?._embedded?.events?.map((festivalPass) => (
            <PassCard festivalPass={festivalPass} key={festivalPass.id} />))}
        </section>
      <h3 style={{ marginTop: "3rem" }}>Artister</h3>
      <section className="festivalgrid">
        {pass?._embedded?.events?.[0]?._embedded?.attractions?.map((artist) => (
          <ArtistCard artist={artist} key={artist.id} />
        ))}
      </section>
        </main>;
}
