import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    fetch("http://localhost:3000/user-login").then((resp) =>
      resp.json().then((data) => console.log(data))
    );

    console.log(formData);

    history.push("/home");
  }

  return (
    <div>
      <h3>
        Please log in to your Film Fix account to begin exploring The Film Fix
        App.
      </h3>
      <h4>Log in to your Account:</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
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
