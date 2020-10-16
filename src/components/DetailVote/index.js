import React from "react";
import Navbar from "../Navbar";
import "./css/style.css";

export default function DetailVote() {
   return (
      <React.Fragment>
         <Navbar />

         <div className="vote-container">
            <h1 className="vote-title">Help Them</h1>

            <div className="vote-description">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
               necessitatibus quod veniam obcaecati voluptatum nobis beatae
               placeat at iure numquam consequuntur culpa aliquam, esse quasi
               laboriosam fugit laudantium ab consequatur! Dolore rerum sequi
               laudantium officiis labore quas quidem ipsum itaque, fugit
               provident iusto veritatis debitis unde, quam eveniet, odit dolor.
            </div>

            <div className="voting-area">
               <div className="object-1">
                  <h1 className="title-object">Help Them</h1>
                  <span className="total-votes">50 votes</span>
                  <progress value="50" max="100"></progress>
                  <button className="btn-vote">Voting</button>
               </div>

               <div className="object-2">
                  <h1 className="title-object">Don't Help Them</h1>
                  <span className="total-votes">10 votes</span>
                  <progress value="10" max="100"></progress>
                  <button className="btn-vote">Voting</button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}
