import React from "react";
import Votes from "../Votes";
import Header from "../Header";
import Navbar from "../Navbar";
import "./style.css";

export default function Home() {
   return (
      <React.Fragment>
         <Navbar />
         <div className="container">
            <Header />
            <Votes />
         </div>
      </React.Fragment>
   );
}
