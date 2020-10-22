import React from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import Navbar from "../Navbar";
import Spinner from "../Spinner";
import "./css/style.css";

const socket = socketIOClient("http://localhost:4000/");

export default function DetailVote({ match, history }) {
   const [vote, isLoading, setVote] = useFetchVote(
      `http://localhost:4000/api/votes/${match.params.id}`,
      history
   );

   socket.on("voting", (data) => {
      if (data._id !== match.params.id) {
         return;
      }

      setVote(data);
   });

   function objVoted(object) {
      const copy = { ...vote };

      if (object === "obj1") {
         copy.object1.totalVotes = copy.object1.totalVotes + 1;
      } else {
         copy.object2.totalVotes = copy.object2.totalVotes + 1;
      }

      socket.emit("voting", [copy, match.params.id]);

      socket.on("voting", (data) => {
         if (data._id !== match.params.id) {
            return;
         }

         setVote(data);
      });
   }

   if (isLoading === true || vote === "") {
      return <Spinner />;
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
                  <button
                     style={{
                        display:
                           vote.object1.totalVotes === vote.maximumVote
                              ? "none"
                              : null,
                     }}
                     onClick={() => objVoted("obj1")}
                     className="btn-vote"
                  >
                     Voting
                  </button>
               </div>

               <div className="object-2">
                  <h1 className="title-object">{vote.object2.title}</h1>
                  <span className="total-votes">{vote.object2.totalVotes}</span>
                  <progress
                     value={vote.object2.totalVotes}
                     max={vote.maximumVote}
                  ></progress>
                  <button
                     style={{
                        display:
                           vote.object2.totalVotes === vote.maximumVote
                              ? "none"
                              : null,
                     }}
                     onClick={() => objVoted("obj2")}
                     className="btn-vote"
                  >
                     Voting
                  </button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

function useFetchVote(endPoint, history) {
   const CancelToken = axios.CancelToken;
   const [isLoading, setLoading] = React.useState(false);
   const [vote, setVote] = React.useState("");

   React.useEffect(() => {
      let cancel;

      async function fetchData() {
         setLoading(true);

         try {
            const result = await axios(endPoint, {
               method: "GET",
               cancelToken: new CancelToken((c) => {
                  cancel = c;
               }),
            });

            setVote(result.data);
         } catch (ex) {
            if (ex.response && ex.response.status === 404) {
               history.push("/");
            }
         }

         setLoading(false);
      }

      fetchData();

      return () => {
         setVote();
         cancel();
      };
   }, [endPoint, CancelToken, history]);

   return [vote, isLoading, setVote];
}
