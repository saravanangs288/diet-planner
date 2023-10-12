import React from "react";
import Header from "../Header/Header";
import { Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import home from "../../Assests/home.png";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const divStyle = {
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set the height to at least the viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Header />

      <div style={divStyle}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "rgba(0,0,0,0.8)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1>Put your diet on autopilot</h1>
          <div style={{ fontSize: "20px" }}>
            <p>
              Diet Clinic creates personalized meal plans based on your food
              preferences, budget, and schedule. Reach your diet and nutritional
              goals with our calorie calculator, weekly meal plans, grocery
              lists, and more. Create your meal plan right here in seconds.
              Ready to give it a shot? Let us know your diet.
            </p>
          </div>

          <Button
            style={{
              backgroundColor: "#F68712",
              width: "350px",
              height: "50px",
              marginTop: "30px",
              fontWeight: "bold",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Get Started with Free Account
          </Button>

          <div>
            <h2>Eating smart has never been easier</h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
