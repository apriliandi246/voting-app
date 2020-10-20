import React from "react";
import { useQuery } from "react-query";
import Navbar from "../Navbar";
import "./css/style.css";

async function getDetailVote(key, id) {
   const result = await fetch(`http://localhost:4000/api/votes/${id}`);
   return result.json();
}

export default function DetailVote({ match }) {
   const { data: vote, status } = useQuery(
      ["vote", match.params.id],
      getDetailVote
   );

   if (status === "error") {
      return <h1>Something error</h1>;
   }

   if (status === "loading") {
      return <h1>Loading</h1>;
   }

   return (
      <React.Fragment>
         <Navbar />

         <div className="vote-container">
            <h1 className="vote-title">{vote.title}</h1>

            <div className="vote-description">{vote.description}</div>

            <div className="voting-area">
               <div className="object-1">
                  <h1 className="title-object">{vote.object1.title}</h1>
                  <span className="total-votes">{vote.object1.totalVotes}</span>
                  <progress
                     value={vote.object1.totalVotes}
                     max={vote.maximumVote}
                  ></progress>
                  <button className="btn-vote">Voting</button>
               </div>

               <div className="object-2">
                  <h1 className="title-object">{vote.object2.title}</h1>
                  <span className="total-votes">{vote.object2.totalVotes}</span>
                  <progress
                     value={vote.object2.totalVotes}
                     max={vote.maximumVote}
                  ></progress>
                  <button className="btn-vote">Voting</button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}
