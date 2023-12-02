import './App.css';
import Belajarhuk from './belajarHuk/Belajarhuk';
import KomponenPertama from './componentFirst/KomponenPertama';
import ReactPertama from './firstReactjs/ReactPertama';
import React from 'react';
import {Alert} from 'flowbite-react'



function App() {
  return (
    <>
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
      <ReactPertama/>
      <KomponenPertama name="ghifary" age="79" hobi="Coding"/>
      <Belajarhuk/>

      
    </>
   
  );
}

export default App;
