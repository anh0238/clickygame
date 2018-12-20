import React from "react";

function NavBar() {
    const style = {
        color: "#94c854",
        fontFamily: "sans-serif",
        fontWeight: "bold"
    }
    return (
        <div className="navBar">
            <span style={style}>O'Christmas Tree --  </span>
            <span style={style}>  -- Click an Image to Begin! --  </span>
            <span style={style}>  -- Score: 0 | Top Score: 0</span>
        </div>
    )
}

export default NavBar;