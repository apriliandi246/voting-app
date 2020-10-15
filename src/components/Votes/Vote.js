import React from "react";
import { Link } from "react-router-dom";

export default function Vote() {
   return (
      <div className="vote cf">
         <Link to="/vote/246" className="vote__title">
            sophie
         </Link>

         <div className="vote__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quo quod eum, at et sit modi in eaque, officiis consequatur vel
            voluptatibus.
         </div>

         <div className="vote__footer">2 days ago</div>
      </div>
   );
}
