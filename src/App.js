import React from "react";
import "./App.css";
import MaterialDashboard from "./Material/materialdashboard";
import Dashboard from "./Material/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tables from "./Material/tables";
import RTL from "./Material/rtl";
import Notifications from "./Material/notfications";
import SignUp from "./Material/signup";
import SignIn from "./Material/signin";
import Billing from "./Material/billing";
import Profile from "./Material/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MaterialDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/rtl" element={<RTL />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
