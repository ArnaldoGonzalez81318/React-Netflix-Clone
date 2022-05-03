import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
