import PropTypes from "prop-types";

function Country({ countriesData }) {
  return (
    <li>
      <p>{countriesData.flag}</p>
      <p>Nombre: {countriesData.name.common}</p>
      <p>Capital: {countriesData.capital}</p>
      <p>Continente: {countriesData.continents}</p>
    </li>
  );
}

export default Country;
Country.prototype = {
  countriesData: PropTypes.object.isRequired,
};
