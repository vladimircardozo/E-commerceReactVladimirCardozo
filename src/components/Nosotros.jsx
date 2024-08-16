import React from 'react';
import GoogleMap from './GoogleMap';

export const Nosotros = () => {
  return (
    <div className="container">
      <h1 className='my-3'>¡Bienvenidos a Gorilla Suplementos!</h1>
      <div className=' border border-1 shadow'>
        <p className='p-3'>
          Nos complace presentarles <b>Gorilla Suplementos</b>, tu nuevo punto de
          referencia en Paraná para todo lo relacionado con la nutrición
          deportiva. En <b>Gorilla Suplementos</b>, entendemos que el camino hacia tus
          objetivos de salud y rendimiento físico comienza con la nutrición
          adecuada, y estamos aquí para ofrecerte los mejores productos del
          mercado. Ubicados en el corazón de Paraná, nuestro local es más que
          una tienda; es un espacio pensado para deportistas, entrenadores y
          entusiastas del fitness que buscan llevar su rendimiento al siguiente
          nivel. Contamos con una amplia variedad de suplementos, desde
          proteínas de alta calidad, aminoácidos, creatinas, hasta productos de
          recuperación y energizantes. Nos enorgullece ofrecer asesoramiento
          personalizado para ayudarte a encontrar los productos que mejor se
          adapten a tus necesidades y objetivos. Ya sea que estés comenzando tu
          viaje en el mundo del fitness o que seas un atleta experimentado, en
          <b>Gorilla Suplementos</b> estamos comprometidos con tu éxito. ¡Ven a
          visitarnos y descubre por qué <b>Gorilla Suplementos</b> es la elección de
          los campeones en Paraná!
        </p>
      </div>
      <div className='d-flex flex-column align-items-center my-3'>
        <h2>Podes encontrarnos en Corrientes 124 Piso 10</h2>
        <GoogleMap />
      </div>
    </div>
  );
};
