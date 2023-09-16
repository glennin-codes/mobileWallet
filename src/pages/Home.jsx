// import React, { useState } from 'react';
// import { Box, Typography, Button, TextField, Snackbar } from '@mui/material';
// import Alert from '@mui/material/Alert';

// export default function WalletPage() {
//   const [balance, setBalance] = useState(1000); // initial balance
//   const [amount, setAmount] = useState(0); // amount to deposit or withdraw
//   const [open, setOpen] = useState(false); // snackbar open state
//   const [message, setMessage] = useState(''); // snackbar message
//   const [severity, setSeverity] = useState('success'); // snackbar severity

//   const handleDeposit = () => {
//     // validate the amount
//     if (amount <= 0) {
//       setMessage('Invalid amount');
//       setSeverity('error');
//       setOpen(true);
//       return;
//     }
//     // update the balance
//     setBalance(balance + amount);
//     // show a success message
//     setMessage(`Deposited ${amount} successfully`);
//     setSeverity('success');
//     setOpen(true);
//   };

//   const handleWithdraw = () => {
//     // validate the amount
//     if (amount <= 0) {
//       setMessage('Invalid amount');
//       setSeverity('error');
//       setOpen(true);
//       return;
//     }
//     // check if the balance is sufficient
//     if (balance < amount) {
//       setMessage('Insufficient balance');
//       setSeverity('error');
//       setOpen(true);
//       return;
//     }
//     // update the balance
//     setBalance(balance - amount);
//     // show a success message
//     setMessage(`Withdrawn ${amount} successfully`);
//     setSeverity('success');
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         p: 2,
//         '@media (max-width: 600px)': {
//           '& > :nth-child(1)': {
//             fontSize: '24px',
//           },
//           '& > :nth-child(2)': {
//             fontSize: '18px',
//           },
//           '& > :nth-child(3)': {
//             width: '80%',
//           },
//           '& > :nth-child(4)': {
//             flexDirection: 'column',
//           },
//           '& > :nth-child(4) > :nth-child(1), & > :nth-child(4) > :nth-child(2)': {
//             width: '80%',
//             marginBottom: '10px',
//           },
//         },
//       }}
//     >
//       <Typography variant="h4" sx={{ mb: 2 }}>
//         Mobile Wallet
//       </Typography>
//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Your balance is {balance}
//       </Typography>
//       <TextField
//         label="Amount"
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//         sx={{ mb: 2 }}
//       />
//       <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
//         <Button variant="contained" color="primary" onClick={handleDeposit}>
//           Deposit
//         </Button>
//         <Button variant="contained" color="secondary" onClick={handleWithdraw}>
//           Withdraw
//         </Button>
//       </Box>
//       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
//           {message}
//         </Alert>
//         </Snackbar>
//     </Box>
//   )
//     }
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

export default function WalletPage() {
  const [balance, setBalance] = useState(1000); // initial balance
  const [amount, setAmount] = useState(0); // amount to deposit or withdraw

  const handleDeposit = () => {
    // validate the amount
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }
    // update the balance
    setBalance(balance + amount);
    // show a success message
    alert(`Deposited ${amount} successfully`);
  };

  const handleWithdraw = () => {
    // validate the amount
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }
    // check if the balance is sufficient
    if (balance < amount) {
      alert("Insufficient balance");
      return;
    }
    // update the balance
    setBalance(balance - amount);
    // show a success message
    alert(`Withdrawn ${amount} successfully`);
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
            onChange={(e) => setAmount(Number(e.target.value))}
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
    </Box>
  );
}
