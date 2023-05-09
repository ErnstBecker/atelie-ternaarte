import React from "react";

interface DisplayBoxProps{
  children: React.ReactNode;
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default DisplayBox;
