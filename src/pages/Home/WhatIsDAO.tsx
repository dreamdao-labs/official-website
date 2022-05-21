/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box }  from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import section1background from '../../assets/images/section-1-background.png';

const WhatIsDAO = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography
              variant={'h4'}
              gutterBottom
              sx={{ marginBottom: 4, fontWeight: 700 }}
              data-aos={isMd ? 'fade-right' : 'fade-up'}
            >
              What is{' '}
              <Typography color="primary" variant="inherit" component="span">
                DAO?
              </Typography>
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }} data-aos={'fade-up'}>
              DAO is a decentralized autonomous organization, an organizational form based on blockchain technology that is run and managed by organizational members through a transparent decision-making process.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }} data-aos={'fade-up'}>
              DAO has the characteristics of full openness, autonomous interaction, decentralized control, complexity and diversity, and emergence.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }} data-aos={'fade-up'}>
              Unlike traditional organizational phenomena, DAOs are not spatially limited by the real physical world, and their evolutionary processes are driven by events or goals, rapidly forming, spreading, and highly interactive.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Box maxWidth={400} width={1}>
            <Box
              component={'img'}
              src={ section1background }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatIsDAO;
