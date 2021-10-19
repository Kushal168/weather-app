import './App.css';
import Weather from './components/Weather';
import Search from './components/Search';
import { useState } from 'react';

function App() {

  const [loc, setloc] = useState("London");

  const changeLoc = () => {
    let val = document.getElementById("search").value;
    document.getElementById("search").value = "";
    setloc(val);
  }

  const goodLoc = (val) => {
    setloc(val);
  }

  return (
    <>
      <Search changeLoc={changeLoc} loc={loc} />
      <Weather loc={loc} key={loc} changeLoc={goodLoc} />
    </>
  );
}

export default App;
