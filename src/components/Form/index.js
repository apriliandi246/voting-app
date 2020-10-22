import React from "react";
import axios from "axios";
import Navbar from "../Navbar";
import "./css/style.css";

export default function Form({ history }) {
   const [title, setTitle] = React.useState("");
   const [description, setDescription] = React.useState("");
   const [obj1, setObj1] = React.useState("");
   const [obj2, setObj2] = React.useState("");
   const [maximumVote, setMaximumVote] = React.useState(1);

   function createVote(e) {
      e.preventDefault();

      axios({
         url: "http://localhost:4000/api/votes",
         method: "POST",
         data: {
            title: title,
            description: description,
            maximumVote: maximumVote,
            object1: {
               totalVotes: 0,
               title: obj1,
            },
            object2: {
               totalVotes: 0,
               title: obj2,
            },
         },
      }).catch((err) => console.log(err));

      history.push("/");
   }

   return (
      <React.Fragment>
         <Navbar />

         <div className="form-container">
            <form spellCheck="false" autoComplete="off" onSubmit={createVote}>
               <div className="input-form">
                  <label htmlFor="title" className="input-form__label">
                     Title
                  </label>
                  <input
                     required
                     type="text"
                     id="title"
                     placeholder="title"
                     className="input-form__input"
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>

               <div className="input-form">
                  <label htmlFor="description" className="input-form__label">
                     Description
                  </label>
                  <textarea
                     required
                     cols="30"
                     rows="16"
                     id="description"
                     placeholder="description"
                     className="input-form__input"
                     onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
               </div>

               <div className="input-form">
                  <label htmlFor="obj1" className="input-form__label">
                     Title Object-1
                  </label>
                  <input
                     required
                     id="obj1"
                     type="text"
                     className="input-form__input"
                     placeholder="title for object-1"
                     onChange={(e) => setObj1(e.target.value)}
                  />
               </div>

               <div className="input-form">
                  <label htmlFor="obj1" className="input-form__label">
                     Title Object-2
                  </label>
                  <input
                     required
                     id="obj2"
                     type="text"
                     className="input-form__input"
                     placeholder="title for object-2"
                     onChange={(e) => setObj2(e.target.value)}
                  />
               </div>

               <div className="input-form">
                  <label htmlFor="vote" className="input-form__label">
                     Maximum Vote
                  </label>
                  <input
                     min="1"
                     required
                     id="vote"
                     type="number"
                     placeholder="1"
                     className="input-form__input"
                     onChange={(e) => setMaximumVote(e.target.value)}
                  />
               </div>

               <button type="submit" className="button-form">
                  Make New Vote
               </button>
            </form>
         </div>
      </React.Fragment>
   );
}
