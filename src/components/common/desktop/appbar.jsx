import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TransactionsIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

export default function DeskTopNavbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
      <Box flexDirection='row' display='flex' justifyContent='center' alignItems='center' gap={2}>
      <IconButton edge="end" color="primary" aria-label="wallet" >
              <WalletIcon size={100}/>
            </IconButton>
      <Typography variant="h6" sx={{ color:"black"}}>
              Mobile Wallet
            </Typography>
          
        </Box>
        <Box sx={{ flexGrow: 1.5, marginLeft: 50, color: 'black', display: 'flex', gap: 5 }}>
          <Button startIcon={<TransactionsIcon fontSize="large" />} component="a" href="/transactions">
            Transactions
          </Button>
          <Button startIcon={<WalletIcon fontSize="large" />} component="a" href="/balance">
            Balance
          </Button>
          <Button startIcon={<SettingsIcon fontSize="large" />} component="a" href="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// </div>
//           <div sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
//             <IconButton color="inherit" aria-label="balance">
//               <WalletIcon />
//             </IconButton>