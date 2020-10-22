import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../Spinner";
import Vote from "./Vote";

async function getAllVotes() {
   const result = await axios("http://localhost:4000/api/votes");
   return result.data;
}

export default function Votes() {
   const { data: votes, status } = useQuery("votes", getAllVotes);

   if (status === "loading") {
      return <Spinner />;
   }

   return (
      <div className="votes">
         {votes.map((vote) => (
            <Vote key={vote._id} vote={vote} />
         ))}
      </div>
   );
}
