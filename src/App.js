import React from 'react';
import Navbar from "./components/Header/Navbar";
import Body from "./components/Body/Body";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Body/>
    </React.Fragment>
  );
}

export default App;
