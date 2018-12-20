import React from "react";

function Header () {
  const h1Style = {
    fontFamily: "sans-serif",
    color: "#10825f",
    textDecoration: "underline"
  }

  const h3Style = {
    fontFamily: "sans-serif",
    color: "#60c682"
  }
    return (
      <div className="header">
        <h1 style={h1Style}>Christmas Tree Clicky Game</h1>
        <h3 style={h3Style}>Click on an image to earn points, but don't click on any more than once!</h3>
      </div>
    );
  }


export default Header;