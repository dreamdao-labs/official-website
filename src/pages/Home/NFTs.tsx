import React from 'react';
import { Container, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const mock = [
  {
    media: '/tokens/1.png',
    title: 'Star',
    description: '1,000 Limited Editions, 500 USDT/NFT.',
  },
  {
    media: '/tokens/2.png',
    title: 'Moon',
    description: '5 Star combined into 1 Moon.',
  },
  {
    media: '/tokens/3.png',
    title: 'Sun',
    description: '5 Moon combined into 1 Sun.',
  },
];

const NFTs = (): JSX.Element => {
  return (
    <Container sx={{ my: 5 }}>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Dream DAO&apos;s{' '}
          <Typography color="primary" variant="inherit" component="span">
            NFTs
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          There are 3 types of NFTs: &quot;Star, Moon and Sun&quot;, which are Dream DAO&apos;s equity and governance credentials.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 350, sm: 450, md: 400 },
                    overflow: 'hidden',
                  }}
                />
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                      Purchase
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NFTs;
