import { Link } from "react-router-dom";
import "./../style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerinne">
        <Link to="/" className="logo">BillettLyst</Link>

        <nav className="nav">
          <Link to="/category/musikk">Musikk</Link>
          <Link to="/category/sport">Sport</Link>
          <Link to="/category/teater&show">Teater/Show</Link>
        </nav>

        <Link to="/dashboard" className="login-link">Logg inn</Link>
      </div>
    </header>
  );
}



