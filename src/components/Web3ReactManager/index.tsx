import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Typography } from '@mui/material';
import useEagerConnect from '../../hooks/useEagerConnect';
import useInactiveListener from '../../hooks/useInactiveListener';

export const Web3ReactManager = ({ children }: { children: JSX.Element }) => {
  const { connector, active, error } = useWeb3React<Web3Provider>();

  const [activatingConnector, setActivatingConnector] = useState<any>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  if (triedEager && !active && error) {
    return (
      <Typography>
        Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device.
      </Typography>
    );
  }

  return children;
};

export default Web3ReactManager;
