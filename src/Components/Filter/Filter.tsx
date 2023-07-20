import {GoSearch} from 'react-icons/Go'
import './Filter.css'

const Filter = () => {
  return (
    <div className="filter-container">
        <div className="filter-wrapper">
            <div className="search">
                <GoSearch className="icon-search"/>
                <input type="search" placeholder="Search for a country..." className='main-search' />
            </div>

            <div className="region">
                <select >
                    {/* <option value="All" disabled>Filter By Region</option> */}
                    <option selected disabled>Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filter