import React, { useContext, useEffect } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
  Button,
  FormHelperText,
  Grid,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { loginSucces } from "../../../../../Redux/Reducer/authSlice";
import { useDispatch } from "react-redux";
import { createUser } from "./createUser";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState("");
  const [loading, setIsLoading] = React.useState(false);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    showPassword: false,
    student: false,
    location: "",
    longitude: "",
    latitude: "",
  });
  const [checked, setChecked] = React.useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword, phone } = values;

    // Define error messages
    const errorMessages = {
      emailRequired: "Email is required",
      invalidEmail: "Enter a valid email",
      passwordMismatch: "Passwords do not match",
      invalidPhone: "Invalid mobile number format",
      invalidPassword:
        "Passwords should contain at least 8 characters, including numbers, letters, and a special character",
      nameRequired: "Name is required",
    };

    // Reset error state
    setError("");

    try {
      // Validate form fields
      if (!email) throw new Error(errorMessages.emailRequired);
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        throw new Error(errorMessages.invalidEmail);
      if (password !== confirmPassword)
        throw new Error(errorMessages.passwordMismatch);
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(
          password
        )
      )
        throw new Error(errorMessages.invalidPassword);
      if (!name) throw new Error(errorMessages.nameRequired);

      // API request to create a new user
      const response = await createUser(values);

      // Handle the response
      const { data, status } = response;

      if (status === 201) {
        // User registration successful
        localStorage.setItem("token", JSON.stringify(data.token));
        dispatch(loginSucces());
        setValues("");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signUp-container">
      <div className="form-container">
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Create an account")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Sign up")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </Typography>
        <form onSubmit={handleSubmit} style={{ margin: "20px 0 0" }}>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-name">Name</InputLabel>
            <Input
              id="signUp-name"
              type="text"
              defaultValue={values.name}
              required
              onChange={handleChange("name")}
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-email">Email</InputLabel>
            <Input
              id="signUp-email"
              type="email"
              defaultValue={values.email}
              required
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-passwordField">Password</InputLabel>
            <Input
              id="signUp-passwordField"
              type={values.showPassword ? "text" : "password"}
              defaultValue={values.password}
              required
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-passwordField">
              Confirm Password
            </InputLabel>
            <Input
              id="signUp-passwordField2"
              type={values.showPassword ? "text" : "password"}
              defaultValue={values.confirmPassword}
              required
              onChange={handleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            sx={{ m: 1 }}
            color="primary"
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="signUp-name">phone</InputLabel>
            <Input
              id="phone"
              type="text"
              defaultValue={values.phone}
              required
              onChange={handleChange("phone")}
              autoComplete="Enter your mobile number"
            />
          </FormControl>

          <Grid item xs={12}>
            Before you signup, confirm that you have read, understood and agreed
            with our <a href="/terms"> Terms and conditions </a>
            And our <a href="/privacy">Privacy policy</a>
            <Checkbox
              checked={checked}
              onChange={handleChecked}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </Grid>

          {error && (
            <FormHelperText
              sx={{
                color: "red",
                mx: 1,
                textTransform: "capitalize",
                height: "15px",
                marginBottom: "2rem",
              }}
            >
              {error}
            </FormHelperText>
          )}

          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            sx={{ width: "100%", mt: 1.5, mb: 4 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </form>

        <Box>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <NavLink to="/" style={{ color: "red" }}>
              Login
            </NavLink>
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
