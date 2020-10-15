import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <React.Fragment>
         <div className="header">
            <h1 className="header__title">Start Voting ????</h1>
            <Link to="/new" className="header__link">
               + Add new vote
            </Link>
         </div>
      </React.Fragment>
   );
}
