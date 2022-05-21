import React from 'react';
import { Box } from '@mui/material';

import AboutUs from './AboutUs';
import WhatIsDAO from './WhatIsDAO';
import Ecosystem from './Ecosystem';
import Tokenomics from './Tokenomics';
import NFTs from './NFTs';
import Partners from './Partners';

const Home = (): JSX.Element => {
  return (
    <Box>
      <Box id="about">
        <AboutUs />
        <WhatIsDAO />
      </Box>
      <Box id="ecosystem" bgcolor={ 'alternate.main' }>
        <Ecosystem />
      </Box>
      <Box id="tokenomics" bgcolor={ 'alternate.main' }>
        <Tokenomics />
      </Box>
      <Box id="nft">
        <NFTs />
      </Box>
      <Box id="partners">
        <Partners />
      </Box>
    </Box>
  );
};

export default Home;
