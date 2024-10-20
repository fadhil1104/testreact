import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Use react-icons for the user icon
import '../Header.css';  // Correct path for Header.css

const Header = ({ onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="user-icon-container">
        <FaUserCircle className="user-icon" onClick={handleDropdownToggle} />
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Settings</li>
              <li>Help</li>
              <li onClick={onLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
