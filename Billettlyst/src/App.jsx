import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import EventPage from "./components/EventPage";
import CategoryPage from "./components/CategoryPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:slug" element={<CategoryPage />} />"
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </main>
    </Router>
  );
}


