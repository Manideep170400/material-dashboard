import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dashboard from "./dashboard";
import Tables from "./tables";
import Profile from "./profile";
import SignIn from "./signin";
import SignUp from "./signup";
import Billing from "./billing";
import RTL from "./rtl";
import Notification from "./notfications";

const pageComponents = {
  dashboard: <Dashboard />,
  tables: <Tables />,
  profile: <Profile />,
  signin: <SignIn />,
  signup: <SignUp />,
  billing: <Billing />,
  rtl: <RTL />,
  notifications: <Notification />,
};

function MaterialDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function handleNavigation(path) {
    setCurrentPage(path);
  }

  return (
    <div className="material-dashboard">
      <div className="left-menu">
        <div className="menu-wrapper">
          <Button variant="text" onClick={() => handleNavigation("dashboard")}>
            Dashboard
          </Button>
          <Button variant="text" onClick={() => handleNavigation("tables")}>
            Tables
          </Button>
          <Button variant="text" onClick={() => handleNavigation("billing")}>
            Billing
          </Button>
          <Button variant="text" onClick={() => handleNavigation("rtl")}>
            RTL
          </Button>
          <Button
            variant="text"
            onClick={() => handleNavigation("notifications")}
          >
            Notifications
          </Button>
          <Button variant="text" onClick={() => handleNavigation("profile")}>
            Profile
          </Button>
          <Button variant="text" onClick={() => handleNavigation("signin")}>
            Sign In
          </Button>
          <Button variant="text" onClick={() => handleNavigation("signup")}>
            Sign Up
          </Button>
        </div>
      </div>
      <div className="content-area">{pageComponents[currentPage]}</div>
    </div>
  );
}

export default MaterialDashboard;
