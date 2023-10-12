import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import logo from "../../Assests/logo.png";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { toast } from "react-toastify";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Header(props) {
  const navigate = useNavigate();
  const [isCardOpen, setIsCardOpen] = React.useState(false);

  const [userData, setUserData] = useState({
    username: `${props.props.name}`,
    email:  `${props.props.email}`,
    age:  `${props.props.age}`,
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleClick = () =>
{
    setIsCardOpen(!isCardOpen)
}
const handleLogout = () => {
  toast.success("Logged out successfully");
  navigate("/");
};
  // Handle form submission (in a real app, this would be an API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));//localstorage 
    setIsEditing(false);
    setIsCardOpen(!isCardOpen)
    if (!isCardOpen) {
        // Card is closed
        toast.success("Updated successfully");
      }
  };
  return (
    <Box
      sx={{ flexGrow: 1, display: "flex", flexDirection: "row", width: "100%" }}
    >
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "100px",
          backgroundColor: "rgba(255,255,255,0.8)",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
          <Link to="/">
            <img src={logo} style={{ width: "250px" }} alt="Logo" />
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              color: "green",
            }}
          >
            <Link
              to="/works"
              style={{ textDecoration: "none", color: "#F68712" }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ marginRight: "40px" }}
              >
                How it Works?
              </Typography>
            </Link>
            <Link
              to="/browse"
              style={{ textDecoration: "none", color: "#F68712" }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ marginRight: "40px" }}
              >
                Browse Foods
              </Typography>
            </Link>
            <Link
              to="/supporteddiet"
              style={{ textDecoration: "none", color: "#F68712" }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ marginRight: "40px" }}
              >
                Supported diets
              </Typography>
            </Link>
          </div>
          <Button
            color="inherit"
            style={{
              marginLeft: "auto",
              color: "white",
              backgroundColor: "#F68712",
            }}
            onClick={handleClick}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            style={{
              marginLeft: "auto",
              color: "white",
              backgroundColor: "#F68712",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {isCardOpen && (
        <BootstrapDialog
          onClose={handleClick}
          aria-labelledby="customized-dialog-title"
          open={handleClick}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Your Profile
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClick}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      name="username"
                      variant="outlined"
                      fullWidth
                      value={userData.username}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      fullWidth

                      value={userData.email}
                      onChange={handleInputChange}
                      disabled="true"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Age"
                      name="age"
                      variant="outlined"
                      fullWidth
                      value={userData.age}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {isEditing ? (
                      <></>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )}
    </Box>
  );
}
