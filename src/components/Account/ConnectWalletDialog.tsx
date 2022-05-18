import React from 'react';

import { useConnect } from 'wagmi';

import { useTheme, Box, Button, Typography, Link, Avatar, Alert, Dialog, DialogTitle, DialogContent } from '@mui/material';

import metamask from '../../assets/images/wallets/metamask.svg';
import walletconnect from '../../assets/images/wallets/walletconnect.svg';

interface Props {
  opened?: boolean;
  handleClose: () => void;
}

const ConnectWalletDialog = ({ opened = false, handleClose }: Props) => {
  const { connect, connectors, error, isConnecting, pendingConnector } = useConnect();
  const theme = useTheme();

  return (
    <Dialog
      open={ opened }
      onClose={ handleClose }
    >
      <DialogTitle>
        Connect a wallet
      </DialogTitle>
      <DialogContent dividers>
        {
          error
            ?
            <Alert severity="error">{error.message}</Alert>
            :
            <Alert severity="info">Choose a wallet</Alert>
        }
        {connectors.map((connector) => (
          <Box
            key={ connector.id }
            sx={{ marginTop: 2 }}
          >
            <Button
              variant="outlined"
              size="large"
              fullWidth
              color="inherit"
              disabled={ !connector.ready }
              onClick={ () => connect(connector) }
            >
              <Typography sx={{ flexGrow: 1, paddingX: 2, textAlign: 'left' }}>
                { connector.name }
                { !connector.ready && ' (unsupported)' }
                { isConnecting && connector.id === pendingConnector?.id && ' (connecting)' }
              </Typography>
              <Avatar
                src={ connector.name == 'MetaMask' ? metamask : walletconnect }
                sx={{ width: 34, height: 34 }}
              />
            </Button>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletDialog;
