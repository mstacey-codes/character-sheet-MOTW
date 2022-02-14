import React from "react";

const UserProfile = ({ user }) => {
  user = user;
  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome {user.email}</h1>
    </div>
  );
};

export default UserProfile;
