/*
Denne koden viser navnet på festivalen som brukeren har trykket på. Vi henter id-en til festivalen 
fra nettadressen ved hjelp av useparams. useparams henter verdier fra url-en. 
I denne koden bruker vi den til å hente id-en til festivalen som brukeren har trykket på, 
slik at vi kan hente riktig data fra api-et.
Vi lager en state som heter attraksjonsnavn, som skal lagre navnet på festivalen.
Vi lager en funksjon som heter getEventData. Den henter informasjon om festivalen fra ticketmaster sin api
basert på id-en. 
Vi bruker useeffect for å kjøre getEventData en gang når komponenten åpner, eller hvis id-en i 
adressen endrer seg.
Til slutt viser vi navnet på festivalen som en overskrift på siden.
*/

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EventPage() {
  const { id } = useParams();
  const [attraksjonsnavn, setattraksjonsnavn] = useState("");

  const getEventData = async () => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3`
    )
      .then((res) => res.json())
      .then((data) => {
        setattraksjonsnavn(data.name);
      })
      .catch((error) => {
        console.error("Feil under henting av attraction:", error);
      });
  };

  useEffect(() => {
    getEventData();
  }, [id]);

  return (
    <main>
      <h1>{attraksjonsnavn}</h1>
    </main>
  );
}

