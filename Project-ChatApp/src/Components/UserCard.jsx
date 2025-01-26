import React from "react";
import { Link, useParams } from "react-router-dom";

function UserCard(props) {
  const { userObject } = props;
  const params = useParams();
  const isActive = params?.chatID === userObject.id;
  return (
    <div key={userObject.id}>
      <Link
        className={`flex gap-4 items-center  hover:bg-background p-2 rounded cursor-pointer ${
          isActive && "bg-background"
        }`}
        to={`/${userObject.id}`}
      >
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={userObject.userData.profile_pic}
          alt=""
        />
        <h2>{userObject.userData.name}</h2>
      </Link>
    </div>
  );
}

export default UserCard;
