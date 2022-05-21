import React, { useState } from "react";
import './Login.css';

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", emial: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group custom_form_group">
        <input
          type="text"
          className="form-control custon_form_control"
          name="name"
          placeholder="UserName"
          onChange={handleInputs}
          value={details.name}
          required
        />
        </div>
        <div className="form-group custom_form_group">
        <input
          type="email"
          className="form-control custon_form_control"
          placeholder="Email"
          name="email"
          onChange={handleInputs}
          value={details.email}
          required
        />
        </div>
        <div className="form-group custom_form_group">
        <input
          type="password"
          className="form-control custon_form_control"
          placeholder="Password"
          name="password"
          onChange={handleInputs}
          value={details.password}
          required
        />
        <input className="btn btn-outline-dark " type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
