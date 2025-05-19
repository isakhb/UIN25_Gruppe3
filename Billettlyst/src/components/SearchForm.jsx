export default function SearchForm({ setSearch, handleClick }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="søkeknapp">
      <label htmlFor="search">Søk etter arrangement</label>
      <input type="search" id="search" onChange={handleChange} placeholder="f.eks. musikk, teater..." />
      <button type="button" onClick={handleClick} className="søkeformknapp">
        Søk
      </button>
    </form>
  );
}
