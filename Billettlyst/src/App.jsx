import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom"; 
import CategoryPage from "./components/CategoryPage"; 
import Home from "./components/Home"; 
import EventPage from "./components/EventPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [festivals, setFestivals] = useState();

  const getFestivals = async () => {
    fetch("https://app.ticketmaster.com/discovery/v2/attractions?apikey=2z18XWCPogP0EapmKXD2lRLzM10n6jL3&id=K8vZ917_YJf,K8vZ917K7fV,K8vZ917bJC7,K8vZ917oWOV&locale=*") 
      .then((response) => response.json()) 
      .then((data) => setFestivals(data._embedded.attractions)) 
      .catch((error) => console.error("Skjedde noe dritt ved fetch", error)); 
  };

  useEffect(() => {
    getFestivals();
    console.log("Min state", festivals);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home festivals={festivals} setFestivals={setFestivals} />} />
        <Route path=":slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="event/:event_id" element={<EventPage />} />
      </Routes>
    </Layout>
  );
}
export default App;
