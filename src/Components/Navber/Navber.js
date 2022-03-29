import React, { useState } from "react";
import "./Navber.css";

const Navber = () => {
  // const [data , setData] = useState()
  return (
    <nav className="bg-indigo-400 text-right px-4 py-4 ">
      <a href="">Home</a>
      <a href="">Food</a>
      <a href="">About</a>
      <a href="">Contact Us</a>
    </nav>
  );
};

export default Navber;
