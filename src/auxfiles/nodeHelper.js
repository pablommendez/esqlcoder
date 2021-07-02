const getNodeNamespace = (node) =>
  node.includes(':') ? node.split(':')[0] : '';
const getNodeName = (node) => node.split(':')[1] || node;

module.exports = {
  getNodeNamespace,
  getNodeName,
};
