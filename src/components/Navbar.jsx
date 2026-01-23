import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.toLowerCase().includes("service")) {
      alert("Services found ✅");
      // yaha tum services page pe redirect bhi kara sakte ho
      // navigate("/services")
    } else {
      alert("No result found ❌");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My First Project
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* 🔍 Search Bar */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


