import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


function MainContent(){
  return(
    <section className="home-page-main-content">
    <h1>Oi. Eu sou a Helena.</h1>
    <p>Idealizei e desenvolvi, com muita persistência e dedicação cada pedacinho de código, layout 
       e design desse site usando conhecimentos em programação, que adquiri nos últimos meses.</p>
    <p>Ele é a principal vitrine do meu trabalho como dev frontend e também, onde escrevo sobre minha 
    transição de carreira e outros assuntos que gosto de compartilhar e que cabem nesse espaço!</p>
    <p className="main-text">É sua primeira vez por aqui?!</p>
   
    < Link to="/" className="main-link">COMECE PELO COMEÇO</Link>
  </section>
  );
}

export default MainContent;