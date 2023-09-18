import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TransactionsIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

export default function DeskTopNavbar() {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    switch (route) {
      case "transactions":
        navigate("/transactions");
        break;
      case "balance":
        navigate("/balance");
        break;
      case "settings":
        navigate("/settings");
        breake;

      default:
        navigate("/home");
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          flexDirection="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          onClick={() => handleButtonClick("home")}
          style={{ cursor: "pointer" }}
        >
          <IconButton edge="end" color="primary" aria-label="wallet">
            <WalletIcon size={100} />
          </IconButton>
          <Typography variant="h6" sx={{ color: "black" }}>
            Mobile Wallet
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1.5,
            marginLeft: 50,
            color: "black",
            display: "flex",
            gap: 5,
          }}
        >
          <Button
            startIcon={<TransactionsIcon fontSize="large" />}
            onClick={() => handleButtonClick("transactions")}
          >
            Transactions
          </Button>
          <Button
            startIcon={<WalletIcon fontSize="large" />}
            onClick={() => handleButtonClick("balance")}
          >
            Balance
          </Button>
          <Button
            startIcon={<SettingsIcon fontSize="large" />}
            component="a"
            onClick={() => handleButtonClick("settings")}
          >
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
