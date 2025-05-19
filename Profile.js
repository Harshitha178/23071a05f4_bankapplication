import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      {/* Additional profile details can be added here */}
    </div>
  );
}

export default Profile;
