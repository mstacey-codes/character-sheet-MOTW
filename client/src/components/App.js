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
<<<<<<< HEAD
import CharacterSheet from "./CharacterSheet";
=======
import UserProfile from "./UserProfile";
import CharacterCreationForm from "./forms/CharacterCreationForm";
import AddCharacterInfoForm from "./forms/AddCharacterInfoForm";

import flakeInfoForm from "./forms/classSpecificForms/flakeInfoForm";
>>>>>>> 73f63bacefde71eb14519ce63dc3824e8ed49308

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
<<<<<<< HEAD
        <Route exact path="/character-sheet" component={CharacterSheet} />
=======
        <AuthenticatedRoute
          exact
          path="/new-character"
          component={CharacterCreationForm}
          user={currentUser}
        />
        <Route exact path="/new-character/:charId/chosen" />
        <Route exact path="/new-character/:charId/flake" component={flakeInfoForm} />
        {/* <AddCharacterInfoForm user={currentUser} /> */}
        <Route exact path="/new-character/:charId/flake" />
>>>>>>> 73f63bacefde71eb14519ce63dc3824e8ed49308
      </Switch>
    </Router>
  );
};

export default hot(App);
