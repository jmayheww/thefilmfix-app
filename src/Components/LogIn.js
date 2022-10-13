import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const initialUser = {
  username: "",
  password: "",
};
const userRecords = "http://localhost:3000/user-login";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [user, setUser] = useState(initialUser);

  console.log(user);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(userRecords, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => console.log(resp.json()))
      .then((data) => console.log(data));

    setIsLoggedIn(true);
    history.push("/home");
  }

  return (
    <div>
      <h3>
        Please log in to your Film Fix account to begin exploring The Film Fix
        App.
      </h3>
      <h4>Log in to your Account</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
