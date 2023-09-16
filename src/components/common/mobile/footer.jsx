import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TransactionsIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MobileFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    console.log('handleChange called with newValue:', newValue);
    switch (newValue) {
      case '/balance':
        navigate('/balance');
        break;
      case '/transactions':
        navigate('/transactions');
        break;
      case '/settings':
        navigate('/settings');
        break;
      default:
      
    }
  };
  

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        background: 'transparent',
      }}
    >
      <BottomNavigation showLabels value={location.pathname} onChange={handleChange}>
        <BottomNavigationAction label="Balance" value="/balance" icon={<WalletIcon />} />
        <BottomNavigationAction label="Transactions" value="/transactions" icon={<TransactionsIcon />} />
        <BottomNavigationAction label="Settings" value="/settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}
