import React, { Component } from "react";
import Portada from "./components/Portada";
import Guitarras from "./components/Guitarras";
import Footer from "./components/Footer";
/* import "./css/invie.css";  */
import './css/animations.css'
import './css/animations.css'
import logoPortada from './images/invie.png';
import acustica from "./images/invie-acustica.png";
import classic from "./images/invie-classic.png";
import cheeet from 'cheet.js';


/* const data={
  menu: [
    {
        href: 'index.html',
        title: 'Home',
    },
    {
        href: '#guitarras',
        title: 'Guitarras',
    },
    { 
        href: 'precios.html',
        title: ' Precios',
    }   
  ],
  logoPortada: logoPortada,
  guitarras:[
    {
      image: acustica,
      alt: "Guitarra Invie Acustica",
      name: "Invie Acustica",
      features: [
        "Estilo vintage",
        "Madera pura",
        "Incluye estuche invisible de aluminio",
      ]
    },
    {
      image: classic ,
      alt: "Guitarra Invie Classic",
      name: "Invie Classic",
      features: [
        "Estilo vintage",
        "Liviana",
        "Empieza tu camino como rockstar",
      ]
    }      
  ]
}
 */

class Invie extends Component {

  render() {
    return (
      <section className="Invie">   
        {/* <Portada menu={data.menu} logo={data.logoPortada}/> */}
        <Portada />
        {/*Portada */}
        {/* <Guitarras  guitarras={data.guitarras} /> */}
        <Guitarras/>

        {/*Guitarras */}
        <Footer />
        {/*Footer */}
      </section>
    );
  }
}
export default Invie;
