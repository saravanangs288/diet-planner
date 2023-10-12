import React from "react";
import Header from "../Header/Header";
import how from "../../Assests/how.png";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ProfilePage from "./Profilepage";
// import ProfilePage from './Profilepage';

const Working = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const divStyle = {
    backgroundImage: `url(${how})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set the height to at least the viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "left",
  };
  return (
    <>
      <Header />
      <div style={divStyle}>
        <div
          style={{
            paddingLeft: "30px",
            marginTop: "30px",
            marginleft: "1000px",
            fontSize: "25px",
          }}
        >
          <h1>How We Automate Your Meal Planning</h1>
          <h4>(And put you in control of your diet!)</h4>
        </div>
        <div
          style={{
            paddingLeft: "30px",
            marginTop: "0px",
            fontSize: "20px",
            width: "50%",
          }}
        >
          <p>
            Diet Clinic helps you with the two most important things to make
            your healthy diet a success:<br></br>
            <h3>
              1.Turn meal planning into an effortless and magical experience ✨
              <br></br>
              2.Provide an endless supply of delicious recipes specific to your
              needs 🍲<br></br>
              <div>
                <br></br>Let's see how Diet Clinic makes it happen!
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
            </h3>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Working;
