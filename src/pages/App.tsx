import React from 'react';

import AOS from 'aos';

import { Routes, Route } from 'react-router-dom';

import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from '../utils/getLibrary';

import { PaletteModeProvider } from '../contexts/PaletteModeContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import NotFound from './NotFound';

import './App.css';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      once: false,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <PaletteModeProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </PaletteModeProvider>
    </Web3ReactProvider>
  );
};

export default App;
