import './App.css'
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';



function App() {
  //The below code sorts the countries from the later A-Z and the use effect is depended on the countries setState when it changes.
  

  return (
    <>
      {/* JESUS HELP ME
      <button onClick={callCountries}> fetch data</button> */}

      {/* {countries.map(country => (
        <div key={country.name}>
          <p>Name: {country.name.common}</p>
        </div>
      ))} */}

      <Header/>
      <Filter/>
    </>
  )
}

export default App