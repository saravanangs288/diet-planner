import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import Header from "../Header/HeaderLogin";

const ProfilePage = () => {
  // Simulated user data
  const [userData, setUserData] = useState({
    username: "john_doe",
    email: "john@example.com",
    bio: "Frontend Developer",
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(true);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (in a real app, this would be an API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data (simulated)
    // Here, you would typically make an API request to update the user's data on the server
    setIsEditing(false); // Disable editing mode after submission
  };

  return (
    <>
    
    <Container>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
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
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Bio"
                name="bio"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={userData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={12}>
              {isEditing ? (
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
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
    </Container>
    </>
  );
};

export default ProfilePage;
