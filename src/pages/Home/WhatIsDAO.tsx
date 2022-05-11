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
              DAO is an effective and safe way to work with like-minded folks around the globe.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }} data-aos={'fade-up'}>
              Think of them like an internet-native business that's collectively owned and managed by its members. They have built-in treasuries that no one has the authority to access without the approval of the group. Decisions are governed by proposals and voting to ensure everyone in the organization has a voice.
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }} data-aos={'fade-up'}>
              There's no CEO who can authorize spending based on their own whims and no chance of a dodgy CFO manipulating the books. Everything is out in the open and the rules around spending are baked into the DAO via its code.
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
