import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../Redux/Reducer/userSlice';
import { Link } from 'react-router-dom';

export default function BalancePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user data only if it's not available in the Redux state
    if (!user?.user?._id) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user]);

  const balance = user?.user?.amount || 0;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: '60vh', sm: '80vh', }, // Adjust minHeight for mobile (xs) and small screens (sm)
        backgroundColor: '#f0f0f0',
        mt: 2,
      }}
    >
      <Card sx={{ width: '80%', maxWidth: 400 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
            {user?.user?.name}'s Wallet
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your balance:
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, color: balance >= 0 ? 'green' : 'red' }}>
            ${balance.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Link to='/home'>
          <Button variant="contained" color="primary">
            Add Funds
          </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
