import React from "react";

import "./DrawerBtn.css";

// interface BtnProps {
//   click: () => void;
// }

const DrawerToggleBtn: React.FC = () => {
  return (
    <button className="drawer-toggle-button">
      <div className="drawer-toggle-button-line" />
      <div className="drawer-toggle-button-line" />
      <div className="drawer-toggle-button-line" />
    </button>
  );
};

export default DrawerToggleBtn;
