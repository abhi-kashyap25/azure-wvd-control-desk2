import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="App-sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/hostpools">Host Pools</Link></li>
        <li><Link to="/sessionhosts">Session Hosts</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;