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

const ScrollToTop=({children})=>{
  const location=useLocation()
  useEffect(()=>{
window.scrollTo(0,0)
  },[location])
return <>
{children}
</>
}

function App() {
  return (
    <>
      <div>
        {/* Desktop Version */}
        <Box display={{ xs: "none", md: "block" }}>
          <DeskTopNavbar />
          <Container maxWidth="lg">
         
          <BrowserRouter>
          <ScrollToTop>
              <Routes>
              <Route path='/' element={<WalletPage/>}/>
              <Route path='/balance' element={<BalancePage/>}/>
                <Route path="/transactions" element={<TransactionPage />} />
                <Route path="/landingPage" element={<HomePage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Page404/>} />
              </Routes>
              </ScrollToTop>
            </BrowserRouter>
           
            {/* Content for desktop */}
          </Container>
        </Box>

        {/* Mobile Version */}
        <Box display={{ xs: "block", md: "none", maxHeight: "80vh" }}>
          <MobileNavbar />
          <Container maxWidth="lg">
       
          <BrowserRouter>
          <ScrollToTop>
              <Routes>
                <Route path='/' element={<WalletPage/>}/>

                <Route path="/signup" element={<SignUp />} />
                <Route path="/transactions" element={<TransactionPage />} />
                 <Route path="/landingPage" element={<HomePage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404/>} />
                
              </Routes>
              </ScrollToTop>
            </BrowserRouter>
          
            </Container>
          <MobileFooter />
        </Box>
      </div>
    </>
  );
}

export default App;
