import  { useState, useEffect} from 'react';
import './App.css'

import { fetchCountries } from './API'

//types
import { Countries1 } from './API';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import Countries from './Components/Countries/Countries';



function App() {
  const [countries, setCountries] = useState<Countries1[]>([])
  // const [names, setNames] = useState<Countries[]>([])


  useEffect(() => {
    const callCountries = async() => {
      const newCountries = await fetchCountries();
      setCountries(newCountries)
    };

    callCountries()
  }, []);

  useEffect(() => {
    console.log(countries); // Updated state value
  }, [countries]);

  

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
      <Countries 
        callbacks={countries}
      />

    </>
  )
}

export default App