import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/signin">
        <SigninPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/browse">
        <BrowsePage />
      </Route>
    </Router>
  );
}

export default App;
