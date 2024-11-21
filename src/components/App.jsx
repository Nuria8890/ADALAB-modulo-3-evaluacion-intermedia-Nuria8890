import "../styles/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";

function App() {
  return (
    <>
      <header className="header" id="header">
        <h1 className="header__title">Country Info App</h1>
      </header>
      <ListCountries countriesData={countriesData} />
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
