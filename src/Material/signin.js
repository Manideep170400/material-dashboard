import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";

function SignIn() {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("password");
  return (
    <div className="right-content">
      <Card sx={{ maxWidth: 500 }} className="App">
        <div className="main_wrapper">
          <div></div>
          <div className="loginPage__wrapper">
            <div className="header__wrapper">
              <div>
                <TextField
                  id="outlined-error"
                  label="EMail"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  id="outlined-error"
                  label="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button variant="contained">login</Button>
            <Button
              variant="text"
              style={{ color: "white", borderBottom: "0.5px dotted black" }}
            >
              Forget password
            </Button>
            <Button variant="contained">Create An Account</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
