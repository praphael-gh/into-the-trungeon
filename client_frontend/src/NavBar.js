import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({user, logout}) => {

    function handleLogout() {
        fetch("/api/logout", {
          method: "DELETE",
        }).then(() => logout(''));
      }

      const linkStyles = {
        flex: "1",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:"5%",
        padding: "12px",
        margin: "30px 20px",
        background: "grey",
        textDecoration: "none",
        color: "black",
        fontSize: 20,
    }

  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyles}>
        Character Select
      </NavLink>
      <NavLink to="/about" exact style={linkStyles}>
        About
      </NavLink>
      <NavLink to="/" exact onClick={() => handleLogout()} style={linkStyles}>
          Logout 
      </NavLink>
      <p>Current User: {user.username}</p>
      
    </div>
  );
};

export default NavBar;
