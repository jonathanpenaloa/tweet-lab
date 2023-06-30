import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userCredentials.password !== userCredentials.confirmPassword) {
      setError(true);
      setUserCredentials({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError(false);
    }

    axios({
      method: "POST",
      url: "/user",
      data: userCredentials,
    }).then((result) => {
      console.log(result);
      setUserCredentials({
        email: "",
        password: "",
        confirmPassword: "",
      });
    });
  };

  const handleInputChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="user-signup">Sign Up</label>
        <input
          value={userCredentials.email}
          type="email"
          name="email"
          required
          placeholder="Enter email"
          onChange={handleInputChange}
        />
        <input
          value={userCredentials.password}
          type="password"
          name="password"
          required
          placeholder="Enter password"
          onChange={handleInputChange}
        />
        <input
          value={userCredentials.confirmPassword}
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm password"
          onChange={handleInputChange}
        />
        <button>SignUp</button>
      </form>
      <p>{error ? "Passwords do not match" : <></>}</p>
    </div>
  );
};

export default Signup;