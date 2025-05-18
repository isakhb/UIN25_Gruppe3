export default function Dashboard() {
    return (
      <main className="dashboard">
        <h1>Dashboard</h1>
        <form className="loginform">
          <h3>Logg inn</h3>
  
          <label htmlFor="username">Brukernavn:</label>
          <input id="username" type="text" placeholder="brukernavn" />
  
          <input type="submit" value="Logg inn" />
        </form>
      </main>
    );
  }
  
