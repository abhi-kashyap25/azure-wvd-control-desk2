import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionHosts = () => {
  const [sessionHosts, setSessionHosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/wvd/sessionhosts');
      setSessionHosts(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Session Hosts</h2>
      <ul>
        {sessionHosts.map(host => (
          <li key={host.id}>{host.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SessionHosts;