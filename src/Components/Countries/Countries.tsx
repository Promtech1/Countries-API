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