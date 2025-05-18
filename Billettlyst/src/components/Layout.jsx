import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Hjem</Link>
          <Link to="musikk">Musikk</Link>
          <Link to="sport">Sport</Link>
          <Link to="teater">Teater/Show</Link>
        </nav>
        <Link to="/dashboard" className="login-link">Logg inn</Link>
      </header>
      {children}
      <footer>
      </footer>
    </>
  );
}
