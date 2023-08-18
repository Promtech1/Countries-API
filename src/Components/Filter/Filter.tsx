import {GoSearch} from 'react-icons/Go'
import {useState, useEffect} from 'react'

import './Filter.css'

import { fetchCountries } from '../../API'

import Countries from '../Countries/Countries';
import { Countries1 } from '../../API';



const Filter = () => {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('');


    const [countries, setCountries] = useState<Countries1[]>([])
    const [sortData, setSortData] = useState<Countries1[]>([])

    useEffect(() => {
        const callCountries = async() => {
          const newCountries = await fetchCountries();
          setCountries(newCountries)
        };
    
        callCountries()
    }, []);


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
    <div className="filter-container">
        <div className="filter-wrapper">
            <div className="search">
                <GoSearch className="icon-search"/>
                <input type="search" placeholder="Search for a country..." className='main-search' onChange={(e) => setSearch(e.target.value)}/>
            </div> 

            <div className="region">
                <select onChange={(e) => setSelect((e.target as HTMLSelectElement).value)}>
                    {/* <option value="All" disabled>Filter By Region</option> */}
                    <option value="All">Filter By Region / All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>

        <Countries 
            callbacks={sortData}
            search={search}
            selectt={select}
        />
    </div>
  )
}

export default Filter