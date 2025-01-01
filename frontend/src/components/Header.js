import React from 'react';
import { useMsal } from '@azure/msal-react';

const Header = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <header className="App-header">
      <h1>Azure WVD Control Desk</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;