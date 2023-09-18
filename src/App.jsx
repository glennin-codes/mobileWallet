import { useEffect, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";
import DeskTopNavbar from "./components/common/desktop/appbar";
import MobileNavbar from "./components/common/mobile/NavBar";
import MobileFooter from "./components/common/mobile/footer";
import Login from "./components/common/Auth/Login/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TransactionPage from "./pages/Transaction";
import WalletPage from "./pages/Home";
import BalancePage from "./pages/Balance";
import HomePage from "./pages/landingPage";
import SignUp from "./components/common/Auth/Signup/Sinup";
import Page404 from "./pages/404";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import PrivateRoute from "./components/common/Auth/PrivateRoute";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};

function App() {
  return (
    <>
      <div>
        {/* Desktop Version */}

        <Provider store={store}>
          <BrowserRouter>
            <Box display={{ xs: "none", md: "block" }}>
              <DeskTopNavbar />
              <Container maxWidth="lg">
                <ScrollToTop>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                      path="/home"
                      element={
                        <PrivateRoute>
                          <WalletPage />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/balance"
                      element={
                        <PrivateRoute>
                          <BalancePage />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/transactions"
                      element={
                        <PrivateRoute>
                          <TransactionPage />
                        </PrivateRoute>
                      }
                    />
                    <Route path="/landingPage" element={<HomePage />} />

                    <Route path="*" element={<Page404 />} />
                  </Routes>
                </ScrollToTop>

                {/* Content for desktop */}
              </Container>
            </Box>
          </BrowserRouter>

          {/* Mobile Version */}
          <Box display={{ xs: "block", md: "none", maxHeight: "100vh" }}>
          <BrowserRouter>
           <MobileNavbar />
            <Container maxWidth="lg">
             
                <ScrollToTop>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                      path="/home"
                      element={
                        <PrivateRoute>
                          <WalletPage />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/balance"
                      element={
                        <PrivateRoute>
                          <BalancePage />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/transactions"
                      element={
                        <PrivateRoute>
                          <TransactionPage />
                        </PrivateRoute>
                      }
                    />
                    <Route path="/landingPage" element={<HomePage />} />

                    <Route path="*" element={<Page404 />} />
                  </Routes>
                </ScrollToTop>
                <MobileFooter />
            
            </Container>
            </BrowserRouter>
          </Box>
        </Provider>
      </div>
    </>
  );
}

export default App;
