
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Snackbar,
  TextField,
  CircularProgress,
} from "@mui/material";
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { deposit, fetchUserData, withdraw } from "../../Redux/Reducer/userSlice";


export default function WalletPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [amount, setAmount] = useState(''); // amount to deposit or withdraw
  const [open, setOpen] = useState(false); // snackbar open state
    const [message, setMessage] = useState(''); // snackbar message
    const [severity, setSeverity] = useState('success'); // snackbar severity
  
    useEffect(() => {
      // Fetch user data only if it's not available in the Redux state
      if (!user?.user?._id) {
        dispatch(fetchUserData());
      }
    }, [dispatch, user]);



 
    const handleDeposit = async () => {
      if (amount <= 0) {
        setMessage('Invalid amount');
        setSeverity('error');
        setOpen(true);
        return;
      }
    
      // Dispatch deposit action and wait for it to complete
      await dispatch(deposit({ userId: user.id, amount }));
    
      // You can now fetch the user data again to get the updated balance
      await dispatch(fetchUserData());
    
      // Show a success message
      setMessage(`Deposited ksh ${amount} successfully`);
      setSeverity('success');
      setOpen(true);
    };
    
    const handleWithdraw = async () => {
      if (amount <= 0) {
        setMessage('Invalid amount');
        setSeverity('error');
        setOpen(true);
        return;
      }
    
      if (user.balance < amount) {
        setMessage('Insufficient balance');
        setSeverity('error');
        setOpen(true);
        return;
      }
    
      // Dispatch withdrawal action and wait for it to complete
      await dispatch(withdraw({ userId: user.id, amount }));
    
      // You can now fetch the user data again to get the updated balance
      await dispatch(fetchUserData());
    
      // Show a success message
      setMessage(`Withdrawal of ksh ${amount} was  successfully credited to ${user?.user?.phone}`);
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
      {user?.user &&
      (
        <>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontSize: { xs: "18px", sm: "24px" } }}
      >
        {user?.user?.name} Mobile Wallet
      </Typography>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontSize: { xs: "18px", sm: "26px" } }}
      >
        Your balance is {user?.user?.amount}
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
         <Button
  variant="contained"
  color="primary"
  onClick={handleDeposit}
  disabled={user?.depositLoading} // Disable the button while deposit is loading
>
  {user.depositLoading ? (
    <CircularProgress size={24} color="inherit" /> // Show a circular progress indicator while loading
  ) : (
    'Deposit'
  )}
</Button>

<Button
  variant="contained"
  color="secondary"
  onClick={handleWithdraw}
  disabled={user.withdrawalLoading} // Disable the button while withdrawal is loading
>
  {user?.withdrawalLoading ? (
    <CircularProgress size={24} color="inherit" /> // Show a circular progress indicator while loading
  ) : (
    'Withdraw'
  )}
</Button>
        </CardActions>

      </Card>
      </>
  )
}
      <Snackbar open={open} autoHideDuration={3000} 
        anchorOrigin={{
          vertical: 'top',    // Position vertically at the top
          horizontal: 'right' // Position horizontally at the right
        }}
      onClose={handleClose}>
       <Alert onClose={handleClose}  s  severity={
    user?.depositSuccess
      ? 'success'
      : user?.withdrawalSuccess
      ? 'success'
      : user?.error
      ? 'error'
      : severity 
  } sx={{ width: '100%' }}>      
     {message}

    {user?.error && 'something went wrong,try again later' }

         </Alert>
      </Snackbar>
    </Box>
  );
}
