import React from "react";
import { useQuery } from "react-query";
import Vote from "./Vote";

async function getAllVotes() {
   const result = await fetch("http://localhost:4000/api/votes");
   return result.json();
}

export default function Votes() {
   const { data: votes, status } = useQuery("votes", getAllVotes);

   if (status === "loading") {
      return <h1>Loading</h1>;
   }

   return (
      <div className="votes">
         {votes.map((vote) => (
            <Vote key={vote._id} vote={vote} />
         ))}
      </div>
   );
}
