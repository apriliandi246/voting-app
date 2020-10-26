import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "../Spinner";
import NoVotes from "../NoVotes";
import Vote from "../Vote";
import Navbar from "../Navbar";

async function getAllVotes() {
   const result = await axios("http://localhost:4000/api/votes/voted");
   return result.data;
}

export default function Voted() {
   const { data: votes, status } = useQuery("voted", getAllVotes);

   if (status === "loading") {
      return <Spinner />;
   }

   return (
      <>
         <Navbar />

         {status === "success" && votes.length === 0 ? (
            <>
               <br />
               <br />
               <br />
               <NoVotes />
            </>
         ) : (
            <div className="voted" style={{ marginTop: "62px" }}>
               {votes.map((vote) => (
                  <Vote key={vote._id} vote={vote} />
               ))}
            </div>
         )}
      </>
   );
}
