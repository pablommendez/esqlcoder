const helper = require('../src/auxfiles/nodeHelper');
describe('node helper tests', () => {
  let node;
  beforeEach(() => {
    node = 'ns:Nombre_Random';
  });
  it('gets the namespace', () => {
    let namespace = helper.getNodeNamespace(node);
    expect(namespace).toBe('ns');
  });

  it('gets the namespace as empty string if there is none', () => {
    node = 'Nombre';
    let namespace = helper.getNodeNamespace(node);
    expect(namespace).toBe('');
  });

  it('gets the node name', () => {
    let name = helper.getNodeName(node);
    expect(name).toBe('Nombre_Random');
  });

  it('gets node name with no namespace', () => {
    node = 'Nombre';
    let name = helper.getNodeName(node);
    expect(name).toBe('Nombre');
  });
});
