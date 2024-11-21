import "../styles/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import Filters from "./Filters";
import { useState } from "react";

/*
1. Pintar el listado de países:
  - Por cada país de la lista,
    - pinto el país en el html
*/

/*
2. Filtrar por el nombre del país
  - Cuando la usuaria escriba en el input,
    - recojo el valor del input
    - filtro la lista de países (que lo que escribe la usuaria esté incluido en el nombre del país)
    - pintar la lista de países filtrados
*/

/*
2. Filtrar por el nombre del continente
  - Cuando la usuaria seleccione una opción,
    - recojo la opción selecionada
    - filtro la lista de países (que lo que la usuaria ha seleccionado sea igual al continente del país)
    - pintar la lista de países filtrados
*/

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("Seleciona");

  const changeSearch = (value) => {
    setSearchValue(value);
  };

  const changeSelect = (value) => {
    setSelectValue(value);
  };
  /*Otra forma de hacer el doble filtrado:

const countriesFiltered = countriesData
  .filter((country) => {
    return country.name.common.toLowerCase().includes(filterNAme.toLowerCase())
  })
  .filter((country)=> {
    return filterContinent === "Seleciona" ? true : country.continents[0] === filterContinent
  })
*/
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
      <header>
        <h1>Country Info App</h1>
      </header>
      <main>
        <Filters
          changeSearch={changeSearch}
          continents={continents5}
          changeSelect={changeSelect}
        />
        <ListCountries countriesData={countriesFiltered} />
      </main>
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
