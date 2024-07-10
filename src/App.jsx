import React from 'react';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import"bootstrap-icons/font/bootstrap-icons.css"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="HOLA!" />
    </div>
  );
}

export default App;
