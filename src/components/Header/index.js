import React from "react";

export default function Header() {
   return (
      <React.Fragment>
         <div className="header">
            <h1 className="header__title">Start Voting ????</h1>
            <a href="#" className="header__link">
               + Add new vote
            </a>
         </div>
      </React.Fragment>
   );
}
