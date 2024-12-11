import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can implement search logic here, such as navigating to a search results page
    // For example:
    // navigate(`/search?query=${e.target.value}`);
  };

  return (
    <nav className="navbar">
      <h1>Hotel Booking</h1>
      <input
        type="text"
        placeholder="Search Rooms"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="all-rooms">All Rooms</Link>
        </li>
        {user == null ? null : (
          <li>
            <Link to="my-bookings">My Bookings</Link>
          </li>
        )}
        {user == null ? (
          <li>
            <Link to="auth">Login</Link>
          </li>
        ) : (
          <li className="logout" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;