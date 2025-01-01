import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HostPools = () => {
  const [hostPools, setHostPools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/wvd/hostpools');
      setHostPools(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Host Pools</h2>
      <ul>
        {hostPools.map(pool => (
          <li key={pool.id}>{pool.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HostPools;