import React from "react";
import { Link } from "react-router-dom";

export default function Vote() {
   return (
      <div className="vote cf">
         <Link to="/vote/246" className="vote__title">
            Send the picture, Dude... Send the picture, Dude...
         </Link>

         <div className="vote__description">
            This voting was made so that Ahlon would send photos of his boobs to
            Ibnu....
         </div>

         <div className="vote__footer">2 days ago</div>
      </div>
   );
}
