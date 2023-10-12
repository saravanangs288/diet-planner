import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeaderVariant from "../Header/HeaderVariant";
import { Card } from "@mui/material";
import loginbg from "../../Assests/loginbg.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./authSlice";
import { toast } from "react-toastify";

const defaultTheme = createTheme();
 
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate user data creation (replace this with your actual registration logic)
    const simulatedUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      age: formData.age,
    };

    // Simulate saving the user data (replace this with your actual data storage logic)
    dispatch(setUser(simulatedUser));

    // Retrieve existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("userDetails")) || [];

    // Add the new user data to the array
    existingData.push(simulatedUser);

    // Store the updated array back in local storage
    localStorage.setItem("userDetails", JSON.stringify(existingData));

    toast.success("Sign-up successful!");
    navigate("/login");
  };

  return (
    <>
      <HeaderVariant />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "100px 16px",
          backgroundImage: `url(${loginbg})`,
          backgroundSize: "cover",
        }}
      >
        <Card
          style={{
            width: "100%",
            height: "100%",
            marginLeft: "200px",
            maxWidth: "400px",
            padding: "24px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
            borderRadius: "15px",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "#F68712", color: "white" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="uname"
                    label="Username"
                    name="username"
                    onChange={handleInputChange}
                    autoComplete="user name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleInputChange}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleInputChange}
                    autoComplete="current-password"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    id="age"
                    autoComplete="age"
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#80CC28" }}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link
                        component={RouterLink}
                        to="/login"
                        style={{ color: "#F68712" }}
                      >
                        {"Already have an account? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Card>
      </Box>
    </>
  );
};

export default Signup;
