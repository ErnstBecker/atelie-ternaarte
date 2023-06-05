import React from "react";

interface DisplayBoxProps{
  children: React.ReactNode;
  className?: string;
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ children, className }) => {
  const parentClassName = `bg-[#fdf4f2] fixed top-1/4 rounded-3xl
  items-center justify-center align-m'iddle
  left-1/4 right-1/4 w-6/12
  terna-arte-gradient
  ${className}`

  return (
    <div className={parentClassName}>
      <div className="pt-10 pb-10 pr-10 pl-10 left-20 top-">{children}</div>
    </div>
  );
};

export default DisplayBox;
