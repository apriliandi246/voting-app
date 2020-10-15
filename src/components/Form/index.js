import React from "react";
import Navbar from "../Navbar";
import "./css/style.css";

export default function Form() {
   return (
      <React.Fragment>
         <Navbar />

         <div className="form-container">
            <form spellCheck="false" autoComplete="off">
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
