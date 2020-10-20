import React from "react";
import { Time } from "../../util/time";
import { Link } from "react-router-dom";

export default function Vote({ vote }) {
   return (
      <div className="vote cf">
         <Link to={`/vote/${vote._id}`} className="vote__title">
            {vote.title}
         </Link>

         <div className="vote__description">{vote.description}</div>

         <div className="vote__footer">
            {new Time(vote.createdAt).format("medium")}
         </div>
      </div>
   );
}
