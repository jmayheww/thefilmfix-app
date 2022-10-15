import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialUser = {
  username: "",
  password: "",
};

function Login({ setLoggedUser, userData }) {
  const history = useHistory();
  const [newUser, setNewUser] = useState(initialUser);

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(userData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((data) =>
        setLoggedUser((currentUserState) => [data, ...currentUserState])
      );

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
            value={newUser.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={newUser.password}
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
