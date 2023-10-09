import React from "react";

const Login = () => {
  return (
    <section>
      logging page
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
