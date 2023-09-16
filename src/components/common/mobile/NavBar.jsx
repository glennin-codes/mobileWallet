import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function MobileNavbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
      <Box flexDirection='row' display='flex' justifyContent='center' alignItems='center' gap={10} >
      <IconButton edge="end" color="primary" aria-label="wallet" >
              <WalletIcon sx={{
                fontSize:40
              }}/>
            </IconButton>
      <Typography variant="h6" sx={{ color:"black"}}>
              Mobile Wallet
            </Typography>
           </Box>
      </Toolbar>
    </AppBar>
  );
}
