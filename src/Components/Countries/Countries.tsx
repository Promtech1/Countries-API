import React from 'react'
import './Countries.css'


type Props = {
    // cFlag: string;
    // cName: string;
    // cPopulation: number;
    // cRegion: string;
    callbacks: CountryData[];
    search: string;
}

type CountryData = {
    flags: { [key: string] :string};
    name: {[key: string]: string};
    population: number;
    region: string;
    capital: string[];
};

const Countries:React.FC<Props> = ({
    callbacks,
    search
}) => {

    const searchWords = search.toLowerCase().split(' ');
    console.log("love:", searchWords)

    const filterByWords = (data: CountryData[], words: string[]): CountryData[] => {
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
        return filteredData;
    };

    const filteredCallbacks = filterByWords(callbacks, searchWords);

  return (
    <div className="countries-container">
        
        <div className="country-wrapper">
            {filteredCallbacks.map((CountryData, index) => (
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
            ))}
        </div>
    </div>
  )
}

export default Countries