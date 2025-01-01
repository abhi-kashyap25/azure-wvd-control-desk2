const { DefaultAzureCredential } = require('@azure/identity');
const { DesktopVirtualizationClient } = require('@azure/arm-desktopvirtualization');
const config = require('../config');

const credential = new DefaultAzureCredential();
const client = new DesktopVirtualizationClient(credential, config.subscriptionId);

async function getHostPools() {
  const result = await client.hostPools.list();
  return result;
}

async function getSessionHosts() {
  const result = await client.sessionHosts.list();
  return result;
}

async function createHostPool(parameters) {
  const result = await client.hostPools.createOrUpdate(parameters.resourceGroupName, parameters.hostPoolName, parameters.hostPoolParameters);
  return result;
}

async function deleteHostPool(resourceGroupName, hostPoolName) {
  const result = await client.hostPools.delete(resourceGroupName, hostPoolName);
  return result;
}

module.exports = { getHostPools, getSessionHosts, createHostPool, deleteHostPool };