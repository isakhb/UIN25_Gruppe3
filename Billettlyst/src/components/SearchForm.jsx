export default function SearchForm({ setSearch, handleClick }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <label htmlFor="search">Søk etter arrangement</label>
      <input type="search" id="search" onChange={handleChange} placeholder="f.eks. musikk, teater..." />
      <button type="button" onClick={handleClick} className="login-knapp">
        Søk
      </button>
    </form>
  );
}
