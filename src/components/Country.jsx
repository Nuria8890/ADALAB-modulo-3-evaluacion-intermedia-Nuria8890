import PropTypes from "prop-types";

function Country({ countriesData }) {
  return (
    <li>
      <p>{countriesData.flag}</p>
      <p>Nombre: {countriesData.name.common}</p>
      <p>Capital: {countriesData.capital[0]}</p>
      <p>Continente: {countriesData.continents[0]}</p>
    </li>
  );
}

export default Country;
Country.prototype = {
  countriesData: PropTypes.object.isRequired,
};
