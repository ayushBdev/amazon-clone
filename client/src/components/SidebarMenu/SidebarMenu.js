import React, { useState, useEffect, useRef } from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import "./SidebarMenu.css";

function OutsideAlerter(ref, handleCloseSidebarMenu) {

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseSidebarMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleCloseSidebarMenu);
    };
  }, [ref]);
}

const SidebarMenu = () => {

  const user = JSON.parse(localStorage.getItem("profile"));

  const [open, setOpen] = useState(null);

  const handleOpenSidebarMenu = () => {
    setOpen(true);
  };
  const handleCloseSidebarMenu = () => {
    setOpen(false);
  };

  const wrapperRef = useRef(null);
  OutsideAlerter(wrapperRef, handleCloseSidebarMenu);

  const checkMenuLink = (listItem, index) => {
    if (typeof listItem !== "string") {
      return (
        <li key={index} className="sidebarMenu__menu">
          <Link
            onClick={handleCloseSidebarMenu}
            to={listItem[1] === "" ? "#" : listItem[1]}
          >
            {listItem[0]}
          </Link>
        </li>
      );
    }
    return <li key={index} className={listItem} />;
  };

  return (
    <div className="sidebarMenu" ref={wrapperRef}>
      <div onClick={handleOpenSidebarMenu} className="sidebarMenu__openIcon">
        <MenuIcon edge="start" />
      </div>
      <Drawer
        className="sidebarMenu__drawer"
        variant="persistent"
        anchor="left"
        open={open}
      >
        <ul className="sidebarMenu__menuList">
          <li className="sidebarMenu__menu">
            {
              <Link onClick={handleCloseSidebarMenu} to="#" className="links">
                <MenuIcon />
              </Link>
            }
          </li>
          <li className="sidebarMenu__devider"/>
          <li className="sidebarMenu__menu sidebarMenu__signIn">
            <Link onClick={handleCloseSidebarMenu} to="/auth">
              <div className="sidebarMenu__userIcon">
                <AccountCircleIcon />
              </div>
                {user?.result ? (
                    <p> {user?.result.name} </p>
                ) : (
                    <p> Hello, Sign In </p>
                )}
            </Link>
          </li>
            {[
                "sidebarMenu__devider",
                ["Home", "/"],
                ["Returns & orders", "/order_history"],
                ["Basket", "/cart"],
            ].map((item, index) => {
                return checkMenuLink(item, index);
            })}
        </ul>
      </Drawer>
    </div>
  );
}
export default SidebarMenu;