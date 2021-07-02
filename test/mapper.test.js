const { Mapper } = require('../src/models/mapper');

describe('Mapper tests', () => {
  let mapper = new Mapper();

  it('maps leftside with right side', () => {
    let leftside = 'refCotizacion.FondoDescripcion';
    let rightside = 'refVBAPICotizacion.fondoDesc';
    let sentence = mapper.mapLeftWithRight(leftside, rightside);
    expect(sentence).toBe(
      'SET refCotizacion.FondoDescripcion = refVBAPICotizacion.fondoDesc;'
    );
  });

  it('casts to integer', () => {
    let node = 'refAlgo.Nombre';
    let type = 'integer';
    let fullside = mapper.castDataType(node, type);
    expect(fullside).toBe('CAST(refAlgo.Nombre AS INTEGER DEFAULT NULL)');
  });

  it('gets leftside of mapping', () => {
    let node = 'Nombre';
    let leftside = mapper.getLeftSide(node);
    expect(leftside).toBe('refLeft.Nombre');
  });

  it('gets righside of mapping type string', () => {
    let node = 'Nombre';
    let leftside = mapper.getRightSide(node);
    expect(leftside).toBe('refRight.Nombre');
  });

  it('makes a simple statement', () => {
    let leftNode = 'Izquierda';
    let rigthNode = 'Derecha';
    let sentence = mapper.makeSentence(leftNode, rigthNode);
    expect(sentence).toBe('SET refLeft.Izquierda = refRight.Derecha;');
  });

  it('makes a casted statement', () => {
    let leftNode = 'Izquierda';
    let rigthNode = 'Derecha';
    let type = 'integer';
    let sentence = mapper.makeCastedSentence(leftNode, rigthNode, type);
    expect(sentence).toBe(
      'SET refLeft.Izquierda = CAST(refRight.Derecha AS INTEGER DEFAULT NULL);'
    );
  });

  it('maps!', () => {
    let data = {
      ESB: 'ESB',
      Backend: 'Backend',
      Type: 'integer',
    };
    let sentence = mapper.map(data);
    expect(sentence).toBe(
      'SET refLeft.ESB = CAST(refRight.Backend AS INTEGER DEFAULT NULL);'
    );
  });
});
