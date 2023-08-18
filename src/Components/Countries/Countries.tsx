import React from 'react'
import './Countries.css'
import {Link} from 'react-router-dom';
import { NativeName } from '../../API';


type Props = {
    // cFlag: string;
    // cName: string;
    // cPopulation: number;
    // cRegion: string;
    callbacks: CountryData[];
    search: string;
    selectt: string
}

type CountryData = {
    flags: { [key: string] :string};
    name: {
        common: string;
        official: string;
        nativeName: NativeName;
    };
    population: number;
    region: string;
    capital: string[];
};


const Countries:React.FC<Props> = ({
    callbacks,
    search,
    selectt
}) => {

    const searchWords = search.toLowerCase().split(' ');

    const filterByWords = (data: CountryData[], words: string[], sel:string): CountryData[] => {
        let filteredData = [...data];

        for (const word of words) {
            filteredData = filteredData.filter((CountryData) => {
                const commonName = CountryData.name.common.toLowerCase();
                return commonName.startsWith(word);
            });

            if (filteredData.length === 0) {
                break;
            }
        }
        
        if(sel !== "" && sel !== "All"){
            console.log("hmm")
            filteredData = filteredData.filter((CountryData) => {
                const region = CountryData.region
                return sel.includes(region)
            })
        }
        
        return filteredData;
    };

    const filteredCallbacks = filterByWords(callbacks, searchWords, selectt);
    
  return (
    <div className="countries-container">
        
        <div className="country-wrapper">
            {filteredCallbacks.map((CountryData, index) => (
                <Link to={`/countries/${CountryData.name.common}`}>
                    <div className="callback-container" key={index}>
                        <div className="callback-wrapper">
                            <img src={CountryData.flags.png} alt="" className='flag'/>
                            <div className="detail">
                                <p className="name">{CountryData.name.common}</p>
                                <p className="population"><span className='title-bold'>Population:</span> {CountryData.population}</p>
                                <p className="region"><span className='title-bold'>Region:</span> {CountryData.region}</p>
                                <p className="capital"><span className='title-bold'>Capital:</span> {CountryData.capital}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                
            ))}
        </div>
    </div>
  )
}

export default Countries