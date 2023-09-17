
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import Alert from '@mui/material/Alert';


export default function WalletPage() {
  const [balance, setBalance] = useState(1000); // initial balance
  const [amount, setAmount] = useState(''); // amount to deposit or withdraw
  const [open, setOpen] = useState(false); // snackbar open state
    const [message, setMessage] = useState(''); // snackbar message
    const [severity, setSeverity] = useState('success'); // snackbar severity
  
  const handleDeposit = () => {
    // validate the amount
    if (amount <= 0) {
      setMessage('Invalid amount');
            setSeverity('error');
            setOpen(true);
            return;
    }
 // show a success message
 setBalance(balance + Number(amount));
 setMessage(`Deposited ${amount} successfully`);
 setSeverity('success');
 setOpen(true);

  };

  const handleWithdraw = () => {
    // validate the amount
    if (amount <= 0) {
          setMessage('Invalid amount');
      setSeverity('error');
      setOpen(true);
      return;
    }
    // check if the balance is sufficient
    if (balance < amount) {
      setMessage('Insufficient balance');
      setSeverity('error');
      setOpen(true);
      return;
    }
    // update the balance
    setBalance(balance - amount);
      // show a success message
    setMessage(`Withdrawn ${amount} successfully`);
    setSeverity('success');
    setOpen(true);
  };
    const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, fontSize: { xs: "24px", sm: "34px" } }}
      >
        Mobile Wallet
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontSize: { xs: "18px", sm: "26px" } }}
      >
        Your balance is {balance}
      </Typography>
      <Card sx={{ width: { xs: "90%", sm: "50%" }, m: 1 }}>
        <CardContent>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount((e.target.value))}
            sx={{ mb: 2 }}
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleDeposit}>
            Deposit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleWithdraw}
          >
            Withdraw
          </Button>
        </CardActions>

      </Card>
      <Snackbar open={open} autoHideDuration={3000} 
        anchorOrigin={{
          vertical: 'top',    // Position vertically at the top
          horizontal: 'right' // Position horizontally at the right
        }}
      onClose={handleClose}>
       <Alert onClose={handleClose}  position='' severity={severity} sx={{ width: '100%' }}>         {message}
         </Alert>
      </Snackbar>
    </Box>
  );
}
