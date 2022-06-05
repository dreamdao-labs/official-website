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
        paddingBottom: 2,
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
              marginBottom: 3,
              color: 'common.white',
            }}
          >
            Developed by the core technology team of Huobi, initiated by Creator, invested and incubated by the 7 o&apos;clock Fund, and co-founded with a group of like-minded people with dreams, a decentralized organization aiming at the development of blockchain ecology. and dream to become an important member of the future Metaverse world.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'common.white',
            }}
          >
            During the development of DreamDAO, Creator will provide us with the resources we need (funds, technology, talents, public chains, wallets, resources of various exchanges and large ecological communities).
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
