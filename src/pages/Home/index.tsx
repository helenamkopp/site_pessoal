import React from 'react';

import PageHeader from '../../components/Header';
import Footer from '../../components/Footer';
import Cards from '../../components/Cards';


import './styles.css';
import MainContent from '../../components/MainContent';


function HomePage() {
  return (
    <div>
      <PageHeader />
      <MainContent />
      <Cards />
      <Footer />
    </div>

  );


}

export default HomePage;

