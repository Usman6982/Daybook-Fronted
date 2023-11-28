import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });


      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Logged in successfully", "success");
        navigate("/");
      } else {
        console.error("Login failed:", json.errors || "Unknown error");
        console.log(json); // Log the entire response for more details
        props.showAlert(json.errors || "Login failed", "danger");
      }
    } catch (error) {
      console.error("Error during login:", error);
      props.showAlert("An error occurred during login", "danger");
    }
  };

  return (
    <div className='mt-3'>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            id="password"
            name="password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
