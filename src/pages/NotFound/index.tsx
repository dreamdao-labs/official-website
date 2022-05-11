import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import notFoundBackground from '../../assets/images/not-found-background.svg';

const NotFound = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
    >
      <Grid container>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              variant="h1"
              component={'h1'}
              align={isMd ? 'left' : 'center'}
              sx={{ fontWeight: 700 }}
            >
              404
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              align={isMd ? 'left' : 'center'}
            >
              Oops! Looks like you followed a bad link.
              <br />
              If you think this is a problem with us, please{' '}
              <Link href={''} underline="none">
                tell us
              </Link>
            </Typography>
            <Box
              marginTop={4}
              display={'flex'}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button
                component={Link}
                variant="contained"
                color="primary"
                size="large"
                href={'/'}
              >
                Back home
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={'img'}
              src={ notFoundBackground }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0.8)'
                    : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFound;
