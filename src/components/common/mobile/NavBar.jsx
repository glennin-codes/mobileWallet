import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useNavigate } from 'react-router-dom';

export default function MobileNavbar() {
  const navigate = useNavigate(); 

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
      <Box flexDirection='row' display='flex' justifyContent='center' alignItems='center' gap={10} >
      <IconButton edge="end" color="primary" aria-label="wallet" 
      onClick={
        ()=>{
          navigate('/home');
        }
      }
      >
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
