import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function PaymentModal({
  open,
  onClose,
  onVerify,
  onCancel,
  message,
  success,
  loading,
  error,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {loading ? 'Processing...' : success ? 'Success' : error ? 'Error': " checkings"}
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress color="primary" />
        ) : success ? (
          <CheckCircleOutlineIcon color="primary" fontSize="large" />
        ) :error? (
          <CancelOutlinedIcon color="error" fontSize="large" />
        ): ""}
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCancel}
          disabled={loading}
          color="secondary"
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          onClick={onVerify}
          disabled={loading || success}
          color="primary"
          variant="contained"
        >
          Verify
        </Button>
      </DialogActions>
    </Dialog>
  );
}
