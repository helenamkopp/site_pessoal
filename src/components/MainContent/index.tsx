import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/testeback.jpg';


import './styles.css';


function MainContent() {
  return (
    <div className="page-main">
    <section className="home-page-main-content">
      <h1>Oi. Eu sou a Helena.</h1>
      <p>Idealizei e desenvolvi, com muita persistência e dedicação cada pedacinho de código, layout
       e design desse site usando conhecimentos em programação, que adquiri nos últimos meses.</p>
      <p>Ele é o primeiro projeto pessoal e principal vitrine do meu trabalho como dev frontend!</p>
      <p>Por aqui escrevo sobre minha transição de carreira, o que funcionou comigo em questão de
        começar algo totalmente novo e lógico, o caminho que percorri para me encontrar no front.</p>

      <p className="main-text">É sua primeira vez na pagina?!</p>

      < Link to="/" className="main-link">COMECE POR AQUI!</Link>

    </section>
    </div>
  );
}

export default MainContent;