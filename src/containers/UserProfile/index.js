import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserProfileComp = () => {
  const path = useLocation();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div>
      <h3>User Profile</h3>
    </div>
  );
};

export default UserProfileComp;
