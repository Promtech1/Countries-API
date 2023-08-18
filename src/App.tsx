import './App.css'
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Country from './Components/Country/Country';
import { useState } from 'react';



function App() {
  //The below code sorts the countries from the later A-Z and the use effect is depended on the countries setState when it changes.

  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme: () => void = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  

  return (
    <div className={`App ${theme}`}>
     
      <Router>
        <Header toggleTheme={toggleTheme}/>
        <Routes>
          <Route path='/' element={<Filter />}></Route>
          {/* <Route path='countries' element={<Countries callbacks={[]} search="" selectt=""/>}/> */}
          <Route path='countries/:countryName' element={<Country/>}/>
          {/* <Route path='countries' element={<Country/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}


export default App