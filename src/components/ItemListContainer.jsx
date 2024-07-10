import React from 'react';
import './css/navbar.css';

export const ItemListContainer = (props) => 
  <h1 className='container mt-4'>{props.greeting}</h1>;

export default ItemListContainer;
