import React from "react";
import { INavbar } from "./types";

const Navbar: React.FC<INavbar> = ({ title = "Title" }) => {
  return <h1 className="text-[#303538] text-3xl font-bold py-6">{title}</h1>;
};

export default Navbar;
