import React from 'react';
import Nohaytodos from "../EmptyTodos/assets/notodos.jpg";
import './Empytodos.css';

function EmptyTodos() {
  return (
    <p>
      <div className='container '>
        <img className='Nohaytodos' src={Nohaytodos} alt="No hay TODOs" />
        <label htmlFor="imagen" className='Createtodo'>No hay TODOs, crea uno</label>
      </div>
      
    </p>
  );
}

export { EmptyTodos };
