const express = require('express');
const { getHostPools, getSessionHosts, createHostPool, deleteHostPool } = require('../services/azureWVD');
const router = express.Router();

router.get('/hostpools', async (req, res) => {
  try {
    const hostPools = await getHostPools();
    res.json(hostPools);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/sessionhosts', async (req, res) => {
  try {
    const sessionHosts = await getSessionHosts();
    res.json(sessionHosts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/hostpools', async (req, res) => {
  try {
    const parameters = req.body;
    const result = await createHostPool(parameters);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/hostpools/:resourceGroupName/:hostPoolName', async (req, res) => {
  try {
    const { resourceGroupName, hostPoolName } = req.params;
    const result = await deleteHostPool(resourceGroupName, hostPoolName);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;