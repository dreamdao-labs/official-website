import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Container, Box, Toolbar, Divider, Drawer, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';

import Logo from './Logo';
import Account from '../Account';
import TogglePaletteMode from './TogglePaletteMode';

const Menus = [
  {
    title: 'About Us',
    href: '/',
  },
  {
    title: 'Tokenomic',
    href: '/tokenomic',
  },
  {
    title: 'NFTs',
    href: '/nfts',
  },
  {
    title: 'Dream LP',
    href: '/lp',
  }
];

interface Props {
  colorInvert?: boolean;
}

const Topbar = ({ colorInvert = false }: Props) => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = (open: boolean): void => {
    setOpened(open);
  };

  const theme = useTheme();

  const scrollToAnchor = (anchorName: string) => {
    if (anchorName) {
      const anchorElement = document.querySelector(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Container>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <Logo colorInvert={ colorInvert } />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {Menus.map((p, i) => (
            <Button
              key={ i }
              component={ Link }
              to={p.href}
              fullWidth
              sx={{
                color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
              }}
            >
              {p.title}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <TogglePaletteMode colorInvert={ colorInvert } />
          <Account colorInvert={ colorInvert }  />
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
          <Button
            onClick={ () => toggleDrawer(true) }
            variant="outlined"
            color="inherit"
            sx={{
              minWidth: 'auto',
              padding: 0.5,
              color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
              borderColor: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
            }}
          >
            <Menu />
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={ opened }
        onClose={ () => toggleDrawer(false) }
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 260,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Logo colorInvert={ colorInvert } />
          </Box>
          <TogglePaletteMode colorInvert={ colorInvert } />
        </Box>
        <Divider />
        <Box sx={{ padding: [1, 2] }}>
          {Menus.map((p, i) => (
            <Box key={i}>
              <Button
                component={ Link }
                to={p.href}
                fullWidth
                size="large"
                sx={{
                  justifyContent: 'flex-start',
                  color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
                }}
              >
                {p.title}
              </Button>
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Account colorInvert={ colorInvert }  />
        </Box>
      </Drawer>
    </Container>
  );
};

export default Topbar;
