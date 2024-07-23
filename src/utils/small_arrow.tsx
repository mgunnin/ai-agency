import React from "react";

interface SmallArrowProps {
  angle?: string;
  className?: string;
}

const SmallArrow: React.FC<SmallArrowProps> = ({ angle = "up", className }) => {
  return (
    <div className={`arrow-custom-${angle} ${className || ''}`}></div>
  );
}

export default SmallArrow;