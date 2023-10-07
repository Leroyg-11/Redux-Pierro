import React, { useState } from "react";
import { getToken } from "../_actions/postTokenAction";
import { getUserProfile } from "../_actions/userProfileAction";
import { connect } from "react-redux";

const Login = ({ getToken }) => {
  const [formData, setFormData] = useState({
    // recceuil les infos de form data envoyé a getToken
    email: "tony@stark.com",
    password: "password123",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken(formData);
      if (token) {
        getUserProfile(token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">tony@stark.com</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password123</label>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default connect(null, { getToken })(Login);
