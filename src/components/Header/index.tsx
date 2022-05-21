import React, { useState } from 'react';
import { useTheme, useScrollTrigger, Container, Box, AppBar, Toolbar, Divider, Drawer, Button } from '@mui/material';
import { Menu } from '@mui/icons-material';

import Logo from '../Logo';
import Account from '../Account';
import TogglePaletteMode from './TogglePaletteMode';

const Menus = [
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Ecosystem',
    href: '#ecosystem',
  },
  {
    title: 'Tokenomics',
    href: '#tokenomics',
  },
  {
    title: 'NFTs',
    href: '#nft',
  },
  {
    title: 'Partners',
    href: '#partners',
  },
];

const Header = () => {
  const theme = useTheme();

  const [opened, setOpened] = useState(false);

  const toggleDrawer = (open: boolean): void => {
    setOpened(open);
  };

  const scroolTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

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
    <AppBar
      position={'sticky'}
      sx={{
        top: 0,
        backgroundColor: scroolTriggered ? theme.palette.background.paper : 'transparent',
      }}
      elevation={scroolTriggered ? 1 : 0}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo colorInvert={ scroolTriggered } />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Menus.map((p, i) => (
              <Button
                key={ i }
                component={ 'a' }
                onClick={ () => scrollToAnchor(p.href) }
                fullWidth
                sx={{
                  color: theme.palette.mode === 'light' && scroolTriggered ? theme.palette.text.primary : 'inherit',
                }}
              >
                {p.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TogglePaletteMode colorInvert={ scroolTriggered } />
            <Account colorInvert={ scroolTriggered }  />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
            <Button
              onClick={ () => toggleDrawer(true) }
              variant="outlined"
              color="inherit"
              sx={{
                minWidth: 'auto',
                padding: 0.5,
                color: theme.palette.mode === 'light' && scroolTriggered ? theme.palette.text.primary : 'inherit',
                borderColor: theme.palette.mode === 'light' && scroolTriggered ? theme.palette.text.primary : 'inherit',
              }}
            >
              <Menu />
            </Button>
          </Box>
        </Toolbar>
      </Container>
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
            <Logo colorInvert={ scroolTriggered } />
          </Box>
          <TogglePaletteMode colorInvert={ scroolTriggered } />
        </Box>
        <Divider />
        <Box sx={{ padding: [1, 2] }}>
          {Menus.map((p, i) => (
            <Box key={i}>
              <Button
                component={ 'a' }
                onClick={ () => scrollToAnchor(p.href) }
                size="large"
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: theme.palette.mode === 'light' && scroolTriggered ? theme.palette.text.primary : 'inherit',
                }}
              >
                {p.title}
              </Button>
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingX: 2 }}>
          <Account colorInvert={ scroolTriggered }  />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
