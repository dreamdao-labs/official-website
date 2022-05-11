import React from 'react';
import { useTheme, Box } from '@mui/material';

import AboutUs from './AboutUs';
import WhatIsDAO from './WhatIsDAO';
import Ecosystem from './Ecosystem';
import NFTs from './NFTs';
import Partners from './Partners';

const Home = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box id="about">
        <AboutUs />
        <WhatIsDAO />
      </Box>
      <Box id="ecosystem" bgcolor={ theme.palette.mode === 'light' ? '#f7faff' : '#1a2136' }>
        <Ecosystem />
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
