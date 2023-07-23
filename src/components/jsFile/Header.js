import React from 'react'
import classes from "../cssFile/Header.module.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation()

  return (
    <>
      <header className={classes.header}>
        <h1>Aakash Metal Works</h1>
        <nav>
          <ul>
             {/* {
        location.pathname==='/' ?  <h2>
        Home</h2>  : location.pathname==='/product' ?  <h2>
        Product</h2>  : location.pathname==='/faq' ?  <h2>
        FAQ</h2>  : location.pathname==='/about' ?  <h2>
        About Us</h2>  : location.pathname==='/sales' ?  <h2>
        Sales</h2>  : location.pathname==='/contact' ?  <h2>
        Contact</h2> : ""
      }
      */}
            <li >
              <NavLink className={location.pathname==='/' ? classes.activeClass : ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/product' ? classes.activeClass : ""} to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/about' ? classes.activeClass : ""} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/contact' ? classes.activeClass : ""} to="/contact">Contact</NavLink>
            </li>

            <li>
              <NavLink className={location.pathname==='/faq' ? classes.activeClass : ""} to="/faq">Knowledge Centre</NavLink>
            </li>

            {
              props.isLoggedIn ? 

            <li>
              <NavLink className={location.pathname==='/adminDashboard' ? classes.activeClass : ""} to="/adminDashboard">AdminDashboard</NavLink>
            </li>
            : ""
             }


            {
              props.isLoggedIn ? 
              <NavLink to='/'>
              <button onClick={ () => props.onLogIn()}>Log Out</button>
              </NavLink>
            :
            <NavLink to='/auth'>
              <button>Log In</button>
              </NavLink>
           
            }
            
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

// activeClassName={classes.activeClass}
