import {useEffect, useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import './Country.css'

import { fetchCountries } from '../../API'
import { Countries1 } from '../../API';
import {Link, useParams } from 'react-router-dom';
import { NativeName } from '../../API';



const Country = () => {
    const [country, setCountry] = useState<Countries1[]>([])

    

    
    // console.log(nameSingle)

    

    useEffect(() => {
        const callCountries = async() => {
          const newCountry = await fetchCountries();
          setCountry(newCountry)
        };
    
        callCountries();
    }, []);

    const {countryName} = useParams()
    const nameSingle = country.find((countryOne) => countryOne.name.common === countryName)
    const {flags = {}, population , region , subregion , capital , tld, currencies: currencyData = {}, borders = {}, languages = {} } = nameSingle || {}


    // This part of the code is to extract the currency from the currencies object
    let currencyName = '';
    
    const currencyKeys = Object.keys(currencyData);
    if (currencyKeys.length > 0) {
      const firstCurrency = currencyData[currencyKeys[0]];
      if (firstCurrency) {
        currencyName = firstCurrency.name; // Assign the value here
      }
    }
    
    // This part of the code is to extract the nativeName property from the name
    const { name } = nameSingle || {};
    const nativeName: NativeName | undefined = name?.nativeName;

    const firstLanguageCode = nativeName ? Object.keys(nativeName)[0] : undefined;
    const firstLanguageCommon = firstLanguageCode ? nativeName?.[firstLanguageCode].common || '' : '';
    console.log(firstLanguageCommon);
    
    
    console.log("Borders:", borders);
    
   

    // useEffect(() => {
    //     console.log(country); 
    // }, [country]);

  return (
    <div className="country-container">
        <div className="container-wrapper">

          <Link to={'/'}><button className='back'><span><FaArrowLeft className="arrow-left"/></span>Back</button></Link>
            

            <div className="country-flex">
              <div className="country-flag">
                <img src={flags.png} alt="" />
              </div>

              <div className="country-discription">
                <h1 className="country-name">{name && name.common}</h1>

                <div className="discription-flex">
                  <div className="discription-left">
                    <p><span className="bold">Native Name: </span> {firstLanguageCommon}</p>
                    <p className="population"><span className="bold">Population: </span> {population}</p>
                    <p className="region"><span className="bold">Region:</span> {region}</p>
                    <p className="sub-region"><span className="bold">Sub Region: </span> {subregion}</p>
                    <p className="capital"><span className="bold">Capital:</span> {capital}</p>
                  </div>
                  <div className="discription-right">
                    <p className="tld"><span className="bold">Top Level Domain: </span> {tld}</p>
                    <p className="currencies"><span className="bold">Currencies: </span> {currencyName}</p>
                    <p className="languages"><span className="bold">Languages: </span>
                      {Object.values(languages).map((language, index) => (
                        <span key={index}>{String(language)} </span> 
                      ))}
                    </p>
                  </div>
                </div>
                <div className="borders-container">
                  
                    <p className="borders"><span className="bold">Border Countries: </span>
                      <span className="border-main">
                        {Object.values(borders).map((border, index) => (
                          <span key={index}>{String(border)}</span>
                        ))}
                      </span>
                    </p>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Country