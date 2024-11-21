import PropTypes from "prop-types";

function Filters({ changeSearch }) {
  const handleChange = (event) => {
    changeSearch(event.target.value);
  };

  return (
    <form>
      <label htmlFor="search">Busca un país </label>
      <input type="text" id="search" onChange={handleChange} />
    </form>
  );
}

export default Filters;

Filters.prototype = {
  changeSearch: PropTypes.func.isRequired,
};
