export default function ArtistCard({ artist }) {
     return (
       <article className="festivalkort">
         <img
           src={artist.images?.[0]?.url}
           alt={artist.name}
           className="festivalbilde"
         />
         <h3>{artist.name}</h3>
       </article>
     );
   }
   
   