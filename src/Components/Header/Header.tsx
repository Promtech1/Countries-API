import {FaRegMoon} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-wrapper">
            <h1>Where in the world?</h1>

            <div className="mode">
                <FaRegMoon className="moon"/>
                <span>Dark mode</span>
            </div>
        </div>
    </div>
  )
}

export default Header