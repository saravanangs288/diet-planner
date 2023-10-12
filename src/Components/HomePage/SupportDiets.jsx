import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import sup from "../../Assests/sup.png";
import Footer from "../Footer/Footer";
const SupportDiets = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const divStyle = {
    backgroundImage: `url(${sup})`,
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
          }}
        >
          <h1>The Types of Diets We Support</h1>
        </div>
        <div
          style={{
            paddingLeft: "30px",
            marginTop: "0px",
            width: "50%",
            fontSize: "30px",
          }}
        >
          <p>
            <p>
              Diet Clinic supports almost any type of diet you can think of.
              <br></br>Our goal is to help you eat the way you want, and in the
              right amounts, NOT to tell you the "right" way to eat.<br></br>
              We support a <strong>handful of preset diet types</strong> to
              configure the settings for you and make it quicker to get started.
              Here, we <strong>break down some basics</strong> about each diet
              type, but don't let these limit your imagination.<br></br>
              <div>
                <br></br>Let's see how <strong>Diet Clinic</strong> makes it
                happen!
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
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SupportDiets;
