import PropTypes from "prop-types";
import Country from "./Country";

function ListCountries({ countriesData }) {
  const countriesItems = countriesData.map((countryItem, index) => {
    {
      return <Country countriesData={countryItem} key={index} />;
    }
  });

  return (
    <div>
      <ul>{countriesItems}</ul>
    </div>
  );
}

export default ListCountries;

ListCountries.prototype = {
  countriesData: PropTypes.array.isRequired,
};
