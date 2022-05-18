import React from 'react';

import AOS from 'aos';

import { Routes, Route } from 'react-router-dom';

import { WagmiProvider, Chain, createClient } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { PaletteModeProvider } from '../contexts/PaletteModeContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from './Home';
import NotFound from './NotFound';

import './App.css';

const App = () => {
  const bsc: Chain = {
    id: 56,
    name: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: {
      default: 'https://bsc-dataseed1.binance.org',
    },
    blockExplorers: {
      default: {
        name: 'BscScan',
        url: 'https://bscscan.com',
      },
      etherscan: {
        name: 'BscScan',
        url: 'https://bscscan.com',
      },
    },
  };

  const client = createClient({
    autoConnect: true,
    connectors() {
      return [
        new MetaMaskConnector({ chains: [bsc] }),
        new WalletConnectConnector({
          chains: [bsc],
          options: {
            qrcode: true,
            rpc: { [bsc.id]: bsc.rpcUrls.default },
          },
        }),
      ];
    },
  });

  React.useEffect(() => {
    AOS.init({
      once: false,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <WagmiProvider client={ client }>
      <PaletteModeProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </PaletteModeProvider>
    </WagmiProvider>
  );
};

export default App;
