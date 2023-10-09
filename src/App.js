import React from "react";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Editor from "./components/Editor";
import Error from "./components/Error";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          //Public Routes
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          //Private Routes
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="editor" element={<Editor />} />
          </Route>
          //Catch All
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
