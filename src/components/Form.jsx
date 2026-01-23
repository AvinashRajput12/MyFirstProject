import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("❌ Please fill all fields before submitting");
      return;
    }

    navigate("/services");
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Fill Your Details</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" className="btn btn-primary" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "35px",
    width: "360px",
    borderRadius: "15px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "26px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  button: {
    marginTop: "10px",
    width: "100%",
    fontSize: "16px",
  },
};

export default Form;

