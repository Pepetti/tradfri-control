import React from "react";

import './backdrop.css';

interface backDropProps{
  click: () => void;
}

const BackDrop: React.FC<backDropProps> = ({click}) => {
  return <div className="backdrop" onClick={click}/>;
};

export default BackDrop;
