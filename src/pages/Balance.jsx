import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

export default function BalancePage() {
  const [balance, setBalance] = useState(1000); // initial balance
  const [credit, setCredit] = useState(500); // initial credit
  const [loan, setLoan] = useState(0); // initial loan

  const handleRepay = () => {
    // check if the balance is sufficient
    if (balance < loan) {
      alert('Insufficient balance to repay the loan');
      return;
    }
    // update the balance and the loan
    setBalance(balance - loan);
    setLoan(0);
    // show a success message
    alert('Loan repaid successfully');
  };

  const handleBorrow = () => {
    // check if the credit is available
    if (credit <= 0) {
      alert('No credit available to borrow');
      return;
    }
    // update the balance, the credit and the loan
    setBalance(balance + credit);
    setLoan(loan + credit);
    setCredit(0);
    // show a success message
    alert('Credit borrowed successfully');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ width: '80%', maxWidth: 600 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Mobile Wallet
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your balance is {balance}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your credit limit is {credit}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your loan amount is {loan}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Button variant="contained" color="primary" onClick={handleRepay}>
            Repay Loan
          </Button>
          <Button variant="contained" color="secondary" onClick={handleBorrow}>
            Borrow Credit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}