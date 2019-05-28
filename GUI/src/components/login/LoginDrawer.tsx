import React from "react";

interface DrawerProps {
  show: boolean;
}

const LoginDrawer: React.FC<DrawerProps> = ({ show }) => {
  let drawerClasses = "login-drawer";
  if (show) {
    drawerClasses = "login-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Help</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
    </nav>
  );
};

export default LoginDrawer;
