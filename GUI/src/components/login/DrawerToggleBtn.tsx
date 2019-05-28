import React from "react";

import "./login.css";

interface DrawerButtonProps {
  click: () => void;
}

const DrawerToggleBtn: React.FC<DrawerButtonProps> = ({ click }) => {
  return (
    <button className="drawer-toggle-btn" onClick={click}>
      <div className="drawer-toggle-btn-line" />
      <div className="drawer-toggle-btn-line" />
      <div className="drawer-toggle-btn-line" />
    </button>
  );
};

export default DrawerToggleBtn;
