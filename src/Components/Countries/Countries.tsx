import React from 'react'
import './Countries.css'

type Props = {
    // cFlag: string;
    // cName: string;
    // cPopulation: number;
    // cRegion: string;
    callbacks: CountryData[];
}

type CountryData = {
    flags: { [key: string] :string};
    name: {[key: string]: string};
    population: number;
    region: string;
    capital: string[];
};

const Countries:React.FC<Props> = ({
    callbacks
}) => {
  return (
    <div className="countries-container">
        <div className="country-wrapper">
            {callbacks.map((CountryData, index) => (
                <div className="callback-container" key={index}>
                    <div className="callback-wrapper">
                        <img src={CountryData.flags.png} alt="" className='flag'/>
                        <div className="detail">
                            <span className="name">{CountryData.name.common}</span>
                            <p className="population">{CountryData.population}</p>
                            <p className="region">{CountryData.region}</p>
                            <p className="capital">{CountryData.capital}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Countries