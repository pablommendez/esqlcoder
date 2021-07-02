const getNodeNamespace = (node) =>
  node.includes(':') ? node.split(':')[0] : '';
const getNodeName = (node) => node.split(':')[1] || node;
const getLastNode = (fullPath) => fullPath.split('/').pop() || fullPath;

module.exports = {
  getNodeNamespace,
  getNodeName,
  getLastNode,
};
