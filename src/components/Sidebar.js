import React, { useState } from 'react';
import { FaHome, FaUser, FaChartLine } from 'react-icons/fa'; // Use react-icons for icons
import '../Sidebar.css';  // Correct path for Sidebar.css


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li>
          <FaHome /> <span className="link-text">Home</span>
        </li>
        <li>
          <FaUser /> <span className="link-text">Profile</span>
        </li>
        <li>
          <FaChartLine /> <span className="link-text">Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
