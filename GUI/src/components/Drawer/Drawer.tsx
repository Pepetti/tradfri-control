import React from "react";

interface DrawerProps {
  show: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ show }) => {
  let drawerClasses = "drawer";
  if (show) {
    drawerClasses = "drawer open";
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

export default Drawer;
