import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  let links = [
    { name: "Home", url: "/" },
    { name: "Films Page", url: "/filmspage" },
    { name: "Login", url: "/login" },
  ];

  const navLinkFactory = () => {
    return links.map((link) => {
      return (
        <li key={link.url}>
          <NavLink to={link.url}>{link.name}</NavLink>
        </li>
      );
    });
  };

  return (
    <div className="navbar">
      <ul>{navLinkFactory()}</ul>
    </div>
  );
}

export default NavBar;
