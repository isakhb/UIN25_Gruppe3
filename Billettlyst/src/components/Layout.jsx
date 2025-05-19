import { Link } from "react-router-dom";
import "./../style.css";


export default function Layout({ children }) {
  return (
    <>
      <header className="header">
              <div className="headerinne">
        <Link to="/" className="logo">BillettLyst</Link>
        <nav className="nav">
          <Link to="musikk">Musikk</Link>
          <Link to="sport">Sport</Link>
          <Link to="teater">Teater/Show</Link>
        </nav>
        <Link to="/dashboard" className="login-link">Logg inn</Link>
              </div>
      </header>
      {children}
      <footer className="footer">
        Data fra <a href="https://developer.ticketmaster.com/" target="_blank" rel="noopener noreferrer">Ticketmaster API</a>
      </footer>
    </>
  );
}
