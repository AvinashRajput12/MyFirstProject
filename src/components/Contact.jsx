import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.bg}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Contact Me</h1>

          {/* Contact Info */}
          <div style={styles.info}>
            <p><strong>Email:</strong> rajputavinash889977@gmail.com</p>
            <p><strong>Phone:</strong> 7905282999</p>
            <p><strong>Location:</strong> Azamgarh, India</p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div style={styles.social}>
            <a href="#" style={styles.link}>GitHub</a>
            <a href="#" style={styles.link}>LinkedIn</a>
            <a href="#" style={styles.link}>Instagram</a>
          </div>

         
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    minHeight: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  container: {
    background: "rgba(255,255,255,0.95)",
    padding: "35px",
    borderRadius: "18px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    animation: "fadeIn 1.2s ease-in-out",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    fontFamily: "Arial",
  },

  heading: {
    marginBottom: "15px",
    fontSize: "28px",
  },

  info: {
    marginBottom: "20px",
    fontSize: "14px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },

  social: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around",
  },

  link: {
    textDecoration: "none",
    color: "#0d6efd",
    fontWeight: "bold",
  },

  map: {
    marginTop: "20px",
  },
};

export default Contact;

