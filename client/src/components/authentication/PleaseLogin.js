import React from "react";
import { Link } from "react-router-dom";

const PleaseLogin = (props) => {
  return (
    <div className="clean-box">
      <div className="clean-box">
        <h3 className="flavor">
          It's dangerous out there! We can't let you through unless you're a hunter.
        </h3>
        <h3 className="center">
          If you already have a hunter, please <Link to="/user-sessions/new">Sign In</Link>. <br />
          If you haven't created a hunter, you'd better <Link to="/users/new">Sign Up</Link>.
        </h3>
      </div>
    </div>
  );
};

export default PleaseLogin;
