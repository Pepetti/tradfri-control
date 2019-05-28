import React from "react";

import DrawerToggleBtn from "./DrawerToggleBtn";

import "./login.css";

interface barProps {
  click: () => void;
}

const LoginBar: React.FC<barProps> = ({ click }) => {
  return (
    <header className="loginbar">
      <nav className="loginbar-nav">
        <div>
          <DrawerToggleBtn click={click} />
        </div>
        <div className="loginbar-brand">
          <span>Light Control Proto</span>
        </div>
        <div className="loginbar-spacer" />
        <div className="loginbar-navigation-items">
          <ul>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Other</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default LoginBar;
