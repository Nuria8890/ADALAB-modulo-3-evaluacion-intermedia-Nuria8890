import "../styles/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (value) => {
    setSearchValue(value);
  };

  const countriesFiltered = countriesData.filter((countryData) => {
    return countryData.name.common
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Country Info App</h1>
      </header>
      <Filters changeSearch={changeSearch} />
      <ListCountries countriesData={countriesFiltered} />
    </>
  );
}

export default App;

/*
EXAMEN INTERMEDIO REACT
nombre del país, capital y continente

FILTRO
input de texto el de la izq
input select para filtrar por continente

*/
