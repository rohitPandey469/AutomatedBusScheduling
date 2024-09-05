import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../../public/assets/logo.svg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate()
  const [designation, setDesignation] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // designation,
          username,
          password
        }),
      });

      console.log("Res", response)
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      } else {
        const data = await response.json();
        // Handle successful login (store token, redirect, etc.)
        console.log('Login successful', data);
        navigate("/scheduler-dashboard")
        
      }
    } catch (error) {
      setError('An error occurred while logging in');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={styles.login}>
      <img className={styles.logo} src={Logo} alt="" />
      <h2>LOGIN</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          list="designations"
          placeholder="Select Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />
        <datalist id="designations" className={styles.designations}>
          <option value="Manager" />
          <option value="Scheduler" />
          <option value="Planner" />
        </datalist>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginBtn}>
          LOGIN
        </button>
        <Link className={styles.link}>Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
