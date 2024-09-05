import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../public/assets/logo.svg";
import styles from "./Register.module.css";

const Register = () => {
  const [designation, setDesignation] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      role : designation,
      mobile,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! You can now log in.");
        setError("");
      } else {
        setError(data.message || "Something went wrong during registration.");
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className={styles.register}>
      <img className={styles.logo} src={Logo} alt="" />
      <h2>REGISTRATION</h2>
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
          <option value="manager"></option>
          <option value="scheduler"></option>
          <option value="planner"></option>
        </datalist>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
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

        <button className={styles.registerBtn} type="submit">
          Register
        </button>
      </form>
      
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
};

export default Register;
