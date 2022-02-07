import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <SignupFormModal />
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <input type="text" placeholder="Let's make..."  />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
