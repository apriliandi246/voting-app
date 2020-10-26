import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Voted from "./components/Voted";
import DetailVote from "./components/DetailVote";

export default function App() {
   return (
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/new" component={Form} />
         <Route path="/vote/:id" component={DetailVote} />
         <Route path="/voted" component={Voted} />
      </Switch>
   );
}
