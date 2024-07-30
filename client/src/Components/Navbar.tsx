import React from "react";
interface NavbarProps {
  title?: string;
}
const Navbar: React.FC<NavbarProps> = ({ title = "Title" }) => {
  return (
    <div>
      <h1 className="text-[#303538]">{title}</h1>
    </div>
  );
};

export default Navbar;
