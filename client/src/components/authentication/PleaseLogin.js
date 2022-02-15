import React from "react";
import { Link } from "react-router-dom";

const PleaseLogin = (props) => {
  return (
    <div>
      It's dangerous out there! We can't let you through unless you're a hunter. If you already have
      a hunter, please <Link to="/user-sessions/new">Sign In</Link>. If you haven't created a
      hunter, you'd better <Link to="/users/new">Sign Up</Link>.
    </div>
  );
};

export default PleaseLogin;
