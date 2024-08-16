import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Footer } from './components/Footer';
import { Nosotros } from "./components/Nosotros";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Provider } from './contexts/ItemsContext';
import Carrito from './components/Carrito';

function App() {
  return (
    <div>
      <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='*' element={404} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div> 
  );
}

export default App;