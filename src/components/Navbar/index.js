import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

export default function Navbar() {
   return (
      <nav className="navbar">
         <Link to="/" className="navbar__brand"></Link>
      </nav>
   );
}
