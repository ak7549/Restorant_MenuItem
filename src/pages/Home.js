import React from "react";
import "../style/Home.css";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import Button from '@mui/material/Button';
// import Back from "../asssests/back.jpg"
import Back1 from "../assests/backCoffee.jpg";

function Home() {
  return (
    <div className="homeMain" style={{ backgroundImage: `url(${Back1})` }}>
      <div className="homeContent">
        <h1>
          {" "}
         Eat Healthy and Natural Food
        </h1>
        <p>
         Al-Abban is a restorant, bar and coffee roastery located on New Ashokh Nagar, Sec-14 We have awesome recipes.
        </p>
      </div>
    </div>
  );
}

export default Home;
