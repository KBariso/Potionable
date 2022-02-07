import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-top-options">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <img src="https://res.cloudinary.com/dd9qejhag/image/upload/v1644269348/Potionable/potion-svgrepo-com_1_va7rug.svg" />
            </NavLink>
          </li>
          <li>PLACE HOLDER1</li>
          <li>PLACE HOLDER2</li>
        </ul>
        <ul className="nav-login-options">
          <li>
            <LoginFormModal />
          </li>
          <li>
            <SignupFormModal />
          </li>
          {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
      <ul className="nav-bottom-options">
        <li>
        <NavLink to="/" exact={true} activeClassName="active">
              Logo
        </NavLink>
        </li>
        <li>
          Potionable
        </li>
        <li>
          Projects
        </li>
        <li>
          Publish
        </li>
        <li>
          <input type="text" placeholder="Let's make..." />
        </li>

      </ul>
    </>
  );
};

export default NavBar;
