import './App.css';
import Belajarhuk from './belajarHuk/Belajarhuk';
import KomponenPertama from './componentFirst/KomponenPertama';
import ReactPertama from './firstReactjs/ReactPertama';
import React from 'react';



function App() {
  return (
    <>
      <ReactPertama/>
      <KomponenPertama name="ghifary" age="79" hobi="Coding"/>
      <Belajarhuk/>
    </>
   
  );
}

export default App;
