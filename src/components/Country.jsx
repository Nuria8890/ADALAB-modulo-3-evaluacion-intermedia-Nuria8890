import PropTypes from "prop-types";
import "../styles/layout/Country.scss";

function Country({ countriesData }) {
  return (
    <li className="list">
      <p>{countriesData.flag}</p>
      <p>Nombre: {countriesData.name.common}</p>
      <p>Capital: {countriesData.capital[0]}</p>
      <p>Continente: {countriesData.continents[0]}</p>
    </li>
  );
}

export default Country;
Country.propTypes = {
  countriesData: PropTypes.object.isRequired,
};
