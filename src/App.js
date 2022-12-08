import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals, actions} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals}  title='Netflix Originals'/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={actions} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
