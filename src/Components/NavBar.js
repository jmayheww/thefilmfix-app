import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let links = [
    { name: "Home", url: "/home" },
    { name: "My Account", url: "/myaccount" },
    { name: "Criterion Collection", url: "/filmpage" },
    { name: "My Criterion Films", url: "/myfilmslist" },
  ];

  const navLinkFactory = () => {
    return links.map((link) => {
      return (
        <div key={link.url} className="nav">
          <NavLink to={link.url} exact>
            {link.name}
          </NavLink>
        </div>
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
