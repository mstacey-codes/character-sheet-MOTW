import React from "react";
import { Redirect, Route } from "react-router";

const AuthenticationCheck = ({ component: Component, user }) => {
  if (user !== null) {
    return <Component user={user} />;
  }
  return <Redirect to="/please-login" />;
};

const AuthenticatedRoute = ({ component, user, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <AuthenticationCheck user={user} component={component} />
    </Route>
  );
};

export default AuthenticatedRoute;
