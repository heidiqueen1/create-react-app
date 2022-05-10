import './App.css';
import Contador from './Componente/Contador';
import React, {useState} from 'react';




function App() {
  return (
    <div className="App">
      <div className='app-contenedor'>
      <div className='logo-calculadora-contenedor'>
        <img className= 'logo-calculadora' 
        src= {"https://th.bing.com/th/id/OIP.QH-Ovb04TZFrHXnZ2BuDEwAAAA?pid=ImgDet&w=272&h=176&rs=1"}
        alt='logo de contador tipo calculadora'/>
      </div>
      <div className='contenedor-principal'>
      <Contador/>
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
