import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home</h1>

      <p>You are logged in! :D</p>
      <Link to="/login">Go to the Login page</Link>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
    </section>
  );
};

export default Home;
