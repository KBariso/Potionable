import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./NavBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {

  const isUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (isUser) {
    sessionLinks = (
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
            <LogoutButton />
          </li>
        </ul>
      </nav>
      <div className="nav-bottom-options">
        <ul className="nav-bottom-left">

        <li>
        <NavLink to="/" exact={true} activeClassName="active">
              Logo
        </NavLink>
        </li>
        <li className="site-name">
          Potionable
        </li>
        <li>
          Projects
        </li>
      </ul>
      <ul className="nav-bottom-right">

        <li>
          Publish
        </li>
        <li>
          <input type="text" placeholder="Let's make..." />
        </li>
      </ul>

      </div>
    </>
    )
  } else {
    sessionLinks = (
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
        </ul>
      </nav>
      <div className="nav-bottom-options">
        <ul className="nav-bottom-left">

        <li>
        <NavLink to="/" exact={true} activeClassName="active">
              Logo
        </NavLink>
        </li>
        <li className="site-name">
          Potionable
        </li>
        <li>
          Projects
        </li>
      </ul>
      <ul className="nav-bottom-right">

        <li>
          Publish
        </li>
        <li>
          <input type="text" placeholder="Let's make..." />
        </li>
      </ul>

      </div>
    </>
    )
  }

  return (
    <>{sessionLinks}</>
  );
};

export default NavBar;
