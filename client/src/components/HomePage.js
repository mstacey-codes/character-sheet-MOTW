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
      <div className="basic-margins center">
        <div className="clean-box">
          <div className="clean-box">
            <h2>Welcome to the...</h2>
            <h1> Monster of the Week Interactive Character Sheet</h1>
            <h2>There are monsters in the world...</h2>{" "}
            <h2> and some people want to do something about it.</h2>
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(HomePage);
