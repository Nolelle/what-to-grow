import React from "react";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function Nav() {
  const [email, setEmail] = useState(localStorage?.getItem("email"));

  useEffect(() => {
    setEmail(email);
  }, [email]);

  return (
    <div className="nav-layout">
      <div className="nav-logo">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          What to Grow?
        </NavLink>
      </div>
      <div className="nav-links">
        {email ? (
          <>
            <Button variant="text">
              <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                My Gardens
              </NavLink>
            </Button>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Logout />
            </NavLink>
          </>
        ) : (
          <Button variant="text">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Login
            </NavLink>
          </Button>
        )}
      </div>
    </div>
  );
}
