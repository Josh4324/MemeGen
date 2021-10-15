import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./App.css";
import Meme from "./pages/Meme";


function App() {
  return (
    <div className="back">
      <Switch>
        <Route exact path="/" component={Meme} />
      </Switch>
      <NotificationContainer />
    </div>
  );
}

export default App;
