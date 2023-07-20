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
  const [sortData, setSortData] = useState<Countries1[]>([])
  // const [names, setNames] = useState<Countries[]>([])


  useEffect(() => {
    const callCountries = async() => {
      const newCountries = await fetchCountries();
      setCountries(newCountries)
      
    };

    callCountries()
  }, []);

  // useEffect(() => {
  //   console.log(countries); // Updated state value
  // }, [countries]);


  
  //The below code sorts the countries from the later A-Z and the use effect is depended on the countries setState when it changes.
  useEffect(() => {
    const sortDataAlphabetically = async() => {
      const sortedData = [...countries].sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        return nameA.localeCompare(nameB);
      });

      setSortData(sortedData);
    };


    sortDataAlphabetically();
  }, [countries]);


  useEffect(() => {
    console.log(sortData); // Updated state value
  }, [sortData]);

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
        callbacks={sortData}
      />

    </>
  )
}

export default App