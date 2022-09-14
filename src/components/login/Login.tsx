import React, { useState, ChangeEvent, MouseEvent } from "react";

import "./Login.scss";

import Button from "../common/Button";
import Typography from "../common/Typography";
import Input from "../common/Input";

function isEmailValid(username: string): boolean {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username);
}

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setError] = useState(false);

  function handleUsername(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleLogin(e: MouseEvent<HTMLButtonElement>) {
    if (isEmailValid(username) && password !== "") {
      setError(false);
    } else setError(true);
  }

  return (
    <div className="login">
      <div className="login__body">
        <Typography weight="extra-bold" size={44}>
          Join our stock community!
        </Typography>
        <Typography>
          Download free photos and videos powered by the best photographers.
        </Typography>
        <div>
          <Input
            label="username"
            value={username}
            onChange={handleUsername}
            placeholder="Enter username here . . ."
            error={hasError}
          />
          <Input
            label="password"
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Enter password here . . ."
            error={hasError}
          />
          <Button label="log in" variant="contained-dark" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;
