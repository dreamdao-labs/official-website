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
      <DialogContent
        dividers
        sx={{
          maxWidth: { sm: 200, md: 400 },
        }}
      >
        {
          error
            ?
            <Alert severity="error">{error.message}</Alert>
            :
            <Typography sx={{ padding: 2, border: 1, borderColor: theme.palette.divider, borderRadius: 1.5 }}>
              By connecting a wallet, you agree to{' '}
              <Link>Terms of Service</Link>{' '}
              and acknowledge that you have read and understand the{' '}
              <Link>Disclaimer</Link>.
            </Typography>
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
                sx={{ width: 48, height: 48 }}
              />
            </Button>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletDialog;
