import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Footer} from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda" />
      <Footer />
    </div>
  );
}

export default App;
