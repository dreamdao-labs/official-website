import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import section2background from '../../assets/images/section-2-background.png';

const mock = [
  {
    title: 'Colorful Platform',
    subtitle:
      'Colorful platform is a diversified digital game platform based on blockchain technology with rich gameplay and strong entertainment.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'GameFi',
    subtitle:
      'We are developing a blockchain game that can provide players with economic incentives to play and earn. Stay tuned.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Blockchain Infrastructure',
    subtitle:
      'All infrastructures that can optimize the entire ecosystem, such as Swap, NFT exchange, and DiFi toolkits, will be gradually implemented according to the development plan.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const Ecosystem = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Box
            maxWidth={500}
            width={1}
            sx={{
              paddingY: 3
            }}
          >
            <Box
              component={'img'}
              src={ section2background }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
        >
          <Box>
            <Box marginBottom={1}>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} data-aos={isMd ? 'fade-left' : 'fade-up'}>
                <Typography color="primary" variant="inherit" component="span">
                Ecosystem
                </Typography>{' '}
                is being built
              </Typography>
              <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                The overall planning is divided into early, middle and late stages.
              </Typography>
              <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                Early stage: focus on building a basic ecosystem (including: NFT governance, Ecological circulation token, and Colorful platform infrastructure).
              </Typography>
              <Typography component={'p'} sx={{ paddingBottom: 1 }} data-aos="fade-up">
                Mid-term: develop in the direction of colorful platform with rich and colorful, multi-playing methods, and build it together with other DAO organizations and foundations.
              </Typography>
              <Typography component={'p'} data-aos="fade-up">
                Later stage: the GameFi and Metaverse Game is developed, further developing and expanding DAO funds, community and ecology, and participating in the investment strategy plan in the blockchain world!
              </Typography>
            </Box>
            <List disablePadding>
              {mock.map((item, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <ListItemAvatar>
                    <Box
                      component={Avatar}
                      variant={'rounded'}
                      color="inherit"
                      bgcolor={`${theme.palette.primary.light}22`}
                    >
                      {item.icon}
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.subtitle}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Ecosystem;
