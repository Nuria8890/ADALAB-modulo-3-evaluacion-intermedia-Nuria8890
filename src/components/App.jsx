import "../styles/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("Seleciona");

  const changeSearch = (value) => {
    setSearchValue(value);
  };

  const changeSelect = (value) => {
    setSelectValue(value);
  };

  const countriesFiltered = countriesData.filter((countryData) => {
    if (selectValue === "Seleciona" && searchValue == "") {
      return true;
    } else if (selectValue === "Seleciona" && searchValue !== "") {
      return countryData.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    } else if (selectValue !== "Seleciona" && searchValue == "") {
      return countryData.continents.includes(selectValue);
    } else if (selectValue !== "Seleciona" && searchValue !== "") {
      return (
        countryData.name.common
          .toLowerCase()
          .includes(searchValue.toLowerCase()) &&
        countryData.continents.includes(selectValue)
      );
    }
  });

  const continents = countriesData.map((countryData) => {
    // console.log("countryData", countryData);
    // console.log("countryData.continents", countryData.continents);
    return countryData.continents[0];
  });

  const continents5 = continents.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });

  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Country Info App</h1>
      </header>
      <Filters
        changeSearch={changeSearch}
        continents={continents5}
        changeSelect={changeSelect}
      />
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
