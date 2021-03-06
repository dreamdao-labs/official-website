import React from 'react';
import { useTheme, useMediaQuery, Container, Box, Grid, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import tokenomic from '../../assets/images/tokenomic.png';

const Tokenomic = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Layout colorInvert={true}>
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={4}>
          <Grid
            item
            container
            alignItems={'center'}
            xs={12}
            md={6}
          >
            <Box>
              <Box marginBottom={1}>
                <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} data-aos={isMd ? 'fade-right' : 'fade-up'}>
                  DreamDAO&apos;s{' '}
                  <Typography component="span" color="primary" variant="inherit">
                    Tokenomic
                  </Typography>
                </Typography>
                <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                  In the blockchain network, Token is a crucial part.
                </Typography>
                <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                  A single blockchain network cannot transmit value, and the transmission of value is completed by the Token associated with each blockchain network.
                </Typography>
                <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                  Dream DAO&apos;s Token will be applied to all applications in the Dream ecological field.
                </Typography>
                <Typography component={'p'} data-aos="fade-up">
                  The circulation is 34 million, of which 30 million are used for market circulation and 4 million are used for NFT consensus incentives.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item container justifyContent={'center'} alignItems={'center'} xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box
              alignItems="center"
              maxWidth={300}
              width={1}
              sx={{
                paddingY: 3
              }}
            >
              <Box
                component={'img'}
                src={ tokenomic }
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
    </Layout>
  );
};

export default Tokenomic;
