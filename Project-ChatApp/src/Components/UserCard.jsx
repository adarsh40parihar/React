import React from 'react'
import { Link } from 'react-router-dom';

function UserCard({ userObject }) {
  return (
    <div key={userObject.id}>
      <Link to={`/${userObject.id}`}>
        <div className="flex gap-3 border-2">
          <img
            className="rounded-full h-10 w-10"
            src={userObject.userData.profile_pic}
            alt=""
          />
          <h2>{userObject.userData.name}</h2>
        </div>
      </Link>
    </div>
  );
}

export default UserCard
