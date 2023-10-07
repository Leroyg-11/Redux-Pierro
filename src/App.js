import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import { isEmpty } from "./components/Utils";
import Post from "./components/Post";

const App = () => {
  const userProfile = useSelector((state) => state.userReducer); //permet de recuperer la data du store
  console.log(userProfile);
  return (
    <div>
      <Login />
      <h1>{}</h1>{" "}
      <div className="content">
        <div className="post-container">{userProfile.userName}</div> //geré la
        connexion avce le token auth avant de s'afficher
        <User />
      </div>
    </div>
  );
};

export default App;
