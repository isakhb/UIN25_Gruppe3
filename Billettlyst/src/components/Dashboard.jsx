/*
Kilde:
https://react.dev/learn/sharing-state-between-components#reacting-to-input-with-state
*/

import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }
  return (
    <main className="dashboard">
      {isLoggedIn ? (
        <h2>Min side</h2>
      ) : (
        <form className="loginform">
          <h3>Logg inn</h3>
          <label htmlFor="username">Brukernavn:</label>
          <input id="username" type="text" placeholder="brukernavn" />
          <button type="button" className="loginknapp" onClick={handleLogin}>
            Logg inn
          </button>
        </form>
      )}
    </main>
  );
}
