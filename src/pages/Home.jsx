
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
import {  fetchUserData, withdraw } from "../../Redux/Reducer/userSlice";

import { deposit } from "../../Redux/Reducer/depositSlice";
import PaymentModal from "../components/common/Modal";
import axios from "axios";
import { decodeToken } from "../../utils/DecodeToken/decodeToken";


export default function WalletPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const depositActions=useSelector((state) => state.deposit)
  const [amount, setAmount] = useState(''); // amount to deposit or withdraw
  const [open, setOpen] = useState(false); // snackbar open state
    const [message, setMessage] = useState(''); // snackbar message
    const [severity, setSeverity] = useState('success'); // snackbar severity
    const [modalOpen, setModalOpen] = useState(false); // State to control the modal
    const [modalMessage, setModalMessage] = useState(''); // Message to display in the modal
    const [modalSuccess, setModalSuccess] = useState(false); // Whether the modal shows success or error
    const [modalError, setModalError] = useState(false); // Whether the modal shows success or error
    const [modalLoading, setModalLoading] = useState(false); // Loading state for the modal
  
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
    
      try {
        // Dispatch deposit action and wait for it to complete
        await dispatch(deposit({ userId: user.id, amount }));
    
        // Show a message indicating that the deposit is in progress
        setMessage('Deposit in progress. Please check your phone for an STK notification.');
        setSeverity('info');
        setOpen(true);
        setModalSuccess(false);
        setModalLoading(false);
        setModalMessage("Deposit in progress. Please check your phone for an STK notification.After succesful payment verify here");
setModalError(false)
        setModalOpen(true);
        setAmount('');    
      } catch (error) {
        setMessage('Failed to make a deposit');
        setSeverity('error');
      } finally {
        setOpen(true);
      }
    };
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    
    const handleVerify = () => {
      // Set loading state and update the message based on verification request
      setModalLoading(true);
      setModalMessage('Verifying payment...');
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }
  
    
      setTimeout(() => {
        axios
          .post('http://localhost:3500/api/deposit/check', {
            phoneNumber: user?.user?.phone,
            amount: amount
          })
          .then((response) => {
            // Handle the response from the server
            if (response.status === 200 && response.data.success) {
              // Payment verification is successful
              setModalMessage('Payment verified.');
              setModalSuccess(true);
              dispatch(fetchUserData());
            }
          })
          .catch((error) => {
            // Handle any errors from the request
            console.error('Error verifying payment:', error);
            if (error?.response?.status === 404) {
              setModalMessage('Payment not found.Kindly deposit');
              setModalSuccess(false);
              setModalError(true);
            } else {
              setModalMessage('Error verifying payment.');
              setModalSuccess(false);
              setModalError(true);
            }
          })
          .finally(() => {
            // Hide the loading state and close the modal after a delay
            setModalLoading(false);
            setTimeout(() => {
              setModalOpen(false);
            }, 3000);
          });
      }, 8000); // 8 seconds delay
      
    }  
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
  disabled={Boolean(depositActions.depositLoading)} // Disable the button while deposit is loading
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
  disabled={Boolean(user.withdrawalLoading)} // Disable the button while withdrawal is loading
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
<PaymentModal
        open={modalOpen}
        onClose={handleCloseModal}
        onVerify={handleVerify}
        onCancel={handleCloseModal}
        message={modalMessage}
        success={modalSuccess}
        loading={modalLoading}
        error={modalError}
      />
      <Snackbar open={open} autoHideDuration={3000} 
        anchorOrigin={{
          vertical: 'top',    // Position vertically at the top
          horizontal: 'right' // Position horizontally at the right
        }}
      onClose={handleClose}>
       <Alert onClose={handleClose}   severity={
    depositActions.depositSuccess
      ? 'success'
      : user?.withdrawalSuccess
      ? 'success'
      : user?.error
      ? 'error'
      :depositActions.depositError
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
