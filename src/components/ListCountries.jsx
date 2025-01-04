import PropTypes from "prop-types";
import Country from "./Country";
import "../styles/layout/ListCountries.scss";

function ListCountries({ countriesData }) {
  const countriesItems = countriesData.map((countryItem, index) => {
    {
      return <Country countriesData={countryItem} key={index} />;
    }
  });

  return (
    <>
      <ul className="containerList">{countriesItems}</ul>
    </>
  );
}

export default ListCountries;

ListCountries.propTypes = {
  countriesData: PropTypes.array.isRequired,
};
