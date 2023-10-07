import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const userPro = useSelector((state) => state.userReducer);
  console.log(userPro);
  return (
    <div className="user-container">
      <div className="user">
        <h3>{userPro.lastName}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>{userPro.email}</p>
        <p>Like(s) : 0</p>
      </div>
    </div>
  );
};

export default User;
