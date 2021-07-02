const helper = require('../src/auxfiles/nodeHelper');
describe('node helper tests', () => {
  let fullPath;
  beforeEach(() => {
    fullPath = 'ns:Nombre_Random';
  });
  it('gets the namespace', () => {
    let namespace = helper.getNodeNamespace(fullPath);
    expect(namespace).toBe('ns');
  });

  it('gets the namespace as empty string if there is none', () => {
    fullPath = 'Nombre';
    let namespace = helper.getNodeNamespace(fullPath);
    expect(namespace).toBe('');
  });

  it('gets the node name', () => {
    let name = helper.getNodeName(fullPath);
    expect(name).toBe('Nombre_Random');
  });

  it('gets node name with no namespace', () => {
    fullPath = 'Nombre';
    let name = helper.getNodeName(fullPath);
    expect(name).toBe('Nombre');
  });

  it('gets the last node', () => {
    fullPath = 'Nombre/UnNodo';
    let node = helper.getLastNode(fullPath);
    expect(node).toBe('UnNodo');
  });

  it('gets the correct node', () => {
    fullPath = 'Nombre';
    let node = helper.getLastNode(fullPath);
    expect(node).toBe('Nombre');
  });
});
