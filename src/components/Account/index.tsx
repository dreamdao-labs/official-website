import React from 'react';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

import { useTheme, Box, Stack, Button, Avatar } from '@mui/material';
import { AccountBalanceWallet, Logout } from '@mui/icons-material';

import { formatAddress } from '../../utils';

import metamask from '../../assets/images/wallets/metamask.svg';
import walletconnect from '../../assets/images/wallets/walletconnect.svg';

import ConnectWalletDialog from './ConnectWalletDialog';

interface Props {
  colorInvert?: boolean;
}

const Account = ({ colorInvert = false }: Props) => {
  const { data: account } = useAccount();

  const { activeConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const theme = useTheme();
  const [opened, setOpened] = React.useState(false);

  const openDialog = () => {
    setOpened(true);
  };

  const closeDialog = () => {
    setOpened(false);
  };

  if (account) {
    return (
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={ 1 }>
        <Button
          startIcon={
            <Avatar
              src={
                activeConnector?.name == 'WalletConnect' ? walletconnect : metamask
              }
              sx={{
                width: 22,
                height: 22,
              }}
            />
          }
          variant="outlined"
          color="inherit"
          sx={{
            paddingY: 1,
            color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
            borderColor: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
          }}
        >
          { formatAddress(account.address) }
        </Button>
        <Button
          onClick={ () => disconnect() }
          startIcon={<Logout />}
          variant="outlined"
          color="inherit"
          sx={{
            paddingY: 1,
            color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
            borderColor: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
          }}
        >
          Disconnect
        </Button>
      </Stack>
    );
  }

  return (
    <Box>
      <Button
        onClick={ openDialog }
        startIcon={<AccountBalanceWallet />}
        variant="outlined"
        color="inherit"
        sx={{
          paddingY: 1,
          color: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
          borderColor: theme.palette.mode === 'light' && colorInvert ? theme.palette.text.primary : 'inherit',
        }}
      >
        Connect Wallet
      </Button>
      <ConnectWalletDialog opened={ opened } handleClose={ closeDialog } />
    </Box>
  );
};

export default Account;
