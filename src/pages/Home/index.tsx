import React from 'react';
import { Box } from '@mui/material';
import Layout from '../../components/Layout';
import AboutUs from './AboutUs';
import WhatIsDAO from './WhatIsDAO';
import Ecosystem from './Ecosystem';
import Partners from './Partners';

const Home = (): JSX.Element => {
  return (
    <Layout colorInvert={false}>
      <Box>
        <AboutUs />
        <WhatIsDAO />
      </Box>
      <Box bgcolor={ 'alternate.main' }>
        <Ecosystem />
      </Box>
      <Box>
        <Partners />
      </Box>
    </Layout>
  );
};

export default Home;
