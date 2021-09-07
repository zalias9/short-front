import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";
import TopPage from "./pages/TopPage";
import reportWebVitals from "./reportWebVitals";
import SiteHeader from "./pages/SiteHeader";

ReactDOM.render(
  <React.StrictMode>
    <SiteHeader />
    <Router>
      <Switch>
        <Route exact path="/" children={<HomePage />} />
        <Route path="/top100" children={<TopPage num={100} />} />
        <Route path="/:shortUrl" children={<RedirectPage />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
