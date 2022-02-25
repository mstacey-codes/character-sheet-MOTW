import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import PleaseLogin from "./authentication/PleaseLogin";
import getCurrentUser from "../services/getCurrentUser";

import HomePage from "./HomePage";
import CharacterSheet from "./characterSheet/CharacterSheet";
import UserProfile from "./UserProfile";
import CharacterCreationForm from "./forms/CharacterCreationForm";

import SecondaryInfoForm from "./forms/SecondaryInfoForm";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage user={currentUser} />
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/please-login" component={PleaseLogin} />
        <AuthenticatedRoute exact path="/profile" component={UserProfile} user={currentUser} />
        <AuthenticatedRoute
          exact
          path="/character-sheet/:charId"
          component={CharacterSheet}
          user={currentUser}
        />
        <AuthenticatedRoute
          exact
          path="/new-character"
          component={CharacterCreationForm}
          user={currentUser}
        />
        <Route exact path="/new-character/:charId" component={SecondaryInfoForm} />
      </Switch>

      <div className="footer-wrapper">
        <footer className="center">
          <strong>Monster of the Week</strong> is copyrighted by Evil Hat Productions, LLC and
          Generic Games. Special thanks to the{" "}
          <a href="https://motwapi.com/" target="_blank">
            Monster of the Week API
          </a>
          !
        </footer>
      </div>
    </Router>
  );
};

export default hot(App);
