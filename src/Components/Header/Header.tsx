import {FaRegMoon} from 'react-icons/fa'
import './Header.css'


interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <div className="header-container">
        <div className="header-wrapper">
            <h1>Where in the world?</h1>

            <div className="mode" onClick={toggleTheme}>
                <FaRegMoon className="moon"/>
                <span>Dark mode</span>
            </div>
        </div>
    </div>
  )
}



export default Header