import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';

import mainBackground from '../../assets/images/main-background.jpg';

const AboutUs = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await require('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      sx={{
        minHeight: { xs: 400, sm: 500, md: 600 },
        marginTop: -13,
        paddingTop: 13,
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        className={'jarallax-img'}
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: 'url(' + mainBackground + ')',
        }}
      />
      <Container>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'common.white',
            }}
          >
            Dream DAO is a goal-oriented decentralized organization established by a group of like-minded people with dreams, dedicated to the ecological development of blockchain.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
