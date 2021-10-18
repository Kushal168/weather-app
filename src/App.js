import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import {useState} from 'react';

function App() {
  const [loc, setloc] = useState("London");

  const changeLoc = (loc) => {
    setloc(loc);
  }
  return (
    <>
    <Search changeLoc={changeLoc} loc={loc}/>
    <Weather />
    </>
  );
}

export default App;
