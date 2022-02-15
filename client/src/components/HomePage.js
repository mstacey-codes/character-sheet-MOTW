import React from "react";
import { Link, withRouter } from "react-router-dom";

const HomePage = ({ user }) => {
  let message = "";
  if (!user) {
    message = (
      <h2>
        <Link to="/users/new">Sign Up</Link> or <Link to="/user-sessions/new">Sign In</Link> to
        start the hunt
      </h2>
    );
  } else {
    message = (
      <h2>
        <Link to="/profile">Let's begin the hunt!</Link>
      </h2>
    );
  }

  return (
    <>
      <h1>There are monsters in the world... and some people want to do something about it.</h1>
      {message}
    </>
  );
};

export default withRouter(HomePage);
