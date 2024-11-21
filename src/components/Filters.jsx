import PropTypes from "prop-types";

function Filters({ changeSearch, continents, changeSelect }) {
  const handleChange = (event) => {
    changeSearch(event.target.value);
  };
  const handleSelect = (event) => {
    changeSelect(event.target.value);
  };

  const continentSelect = continents.map((continent, index) => {
    return (
      <option key={index} value={continent}>
        {continent}
      </option>
    );
  });

  return (
    <form>
      <label htmlFor="search">Busca un país </label>
      <input type="text" id="search" onChange={handleChange} />

      <label htmlFor="searchCountries">Selecciona un continente </label>
      <select
        onChange={handleSelect}
        id="searchCountries"
        name="searchCountries"
      >
        <option value="">Seleciona</option>
        {continentSelect}
      </select>
    </form>
  );
}

export default Filters;

Filters.prototype = {
  changeSearch: PropTypes.func.isRequired,
  continents: PropTypes.array.isRequired,
  changeSelect: PropTypes.func.isRequired,
};
