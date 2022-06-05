import React from 'react';
import AOS from 'aos';
import { Routes, Route } from 'react-router-dom';
import { PaletteModeProvider } from '../contexts/PaletteModeContext';
import Web3ReactManager from '../components/Web3ReactManager';
import Home from './Home';
import Tokenomic from './Tokenomic';
import NFTs from './NFTs';
import Donate from './Donate';
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
    <Web3ReactManager>
      <PaletteModeProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/tokenomic' element={ <Tokenomic /> } />
          <Route path='/nfts' element={ <NFTs /> } />
          <Route path='/donate' element={ <Donate /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </PaletteModeProvider>
    </Web3ReactManager>
  );
};

export default App;
