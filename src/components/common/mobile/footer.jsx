import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TransactionsIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

export default function MobileFooter() {
  return (
  <Box 
 sx={{
position:'sticky'

 }}
  > 
      <BottomNavigation showLabels>
      <BottomNavigationAction label="Balance" icon={<WalletIcon />} />
      <BottomNavigationAction label="Transactions" icon={<TransactionsIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  </Box>
  );
}
