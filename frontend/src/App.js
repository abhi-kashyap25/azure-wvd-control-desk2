import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import HostPools from './pages/HostPools';
import SessionHosts from './pages/SessionHosts';
import './App.css';

const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID',
    authority: `https://login.microsoftonline.com/YOUR_TENANT_ID`,
    redirectUri: window.location.origin
  }
};

const pca = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={pca}>
      <Router>
        <div className="App">
          <Header />
          <div className="App-body">
            <Sidebar />
            <div className="App-content">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/hostpools" component={HostPools} />
                <Route path="/sessionhosts" component={SessionHosts} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </MsalProvider>
  );
}

export default App;