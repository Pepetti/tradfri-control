import React from "react";

import DrawerToggleBtn from "../Drawer/DrawerToggleBtn";

import "./header.css";

interface HeaderProps {
  logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ logout }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-drawer-toggle-button">
          <DrawerToggleBtn />
        </div>
        <div className="header-nav-brand">
          <span>Light Control Proto</span>
        </div>
        <div className="header-nav-spacer" />
        <div className="header-nav-items">
          <ul>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <button onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
