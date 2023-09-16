import React, { useState } from 'react';
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';

export default function TransactionsPage() {
  // sample transactions data
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-04-15', type: 'Deposit', amount: 500 },
    { id: 2, date: '2023-04-16', type: 'Withdraw', amount: 200 },
    { id: 3, date: '2023-04-17', type: 'Borrow', amount: 300 },
    { id: 4, date: '2023-04-18', type: 'Repay', amount: 100 },
    { id: 5, date: '2023-04-19', type: 'Deposit', amount: 400 },
  ]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '24px', sm: '34px' } }}>
        Mobile Wallet
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, fontSize: { xs: '18px', sm: '26px' } }}>
        Your Transactions
      </Typography>
      <TableContainer component={Paper} sx={{ width: { xs: '100%', sm: '80%' }, maxWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}