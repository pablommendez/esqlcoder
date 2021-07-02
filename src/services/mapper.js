let { Mapper } = require('../models/mapper');
let { getLastNode } = require('../auxfiles/nodeHelper');

const mapear = (req, res) => {
  const data = req.body.data;
  const mapper = new Mapper();
  const mappedData = data.map((data) =>
    mapper.map({
      ESB: getLastNode(data.ESB),
      Backend: getLastNode(data.Backend),
      Type: data.Type,
    })
  );
  res.send(mappedData);
};

// const get = (req, res) => {
//   let id = parseInt(req.params.id);

//   if (id) res.send(usuarios[util.getIndex(id, usuarios)]);
//   else res.send(usuarios);
// };

// const post = (req, res) => {
//   let usuario = req.body;

//   let val = validaciones.validar(usuario);
//   if (val.validacion) {
//     usuario.id = util.getNextId(usuarios);
//     usuario.fecha = util.getFecha();
//     usuarios.push(usuario);

//     res.send(usuario);
//   } else {
//     res.send(val);
//   }
// };

// /* put con actualizacion total */
// /* const put = (req,res) => {
//     let id = parseInt(req.params.id)
//     let usuario = req.body

//     let val = validaciones.validar(usuario)
//     if(val.validacion) {
//         usuario.id = id
//         usuario.fecha = util.getFecha()
//         let index = util.getIndex(id,usuarios)
//         //usuarios[index] = usuario
//         usuarios.splice(index,1,usuario)

//         res.send(usuario)
//     }
//     else {
//         res.send(val)
//     }
// } */

// /* put con actualizacion parcial */
// const put = (req, res) => {
//   let id = parseInt(req.params.id);
//   let usuarioNew = req.body;

//   let val = validaciones.validar(usuarioNew, false);
//   if (val.validacion) {
//     usuarioNew.id = id;
//     usuarioNew.fecha = util.getFecha();
//     let index = util.getIndex(id, usuarios);

//     let usuario = usuarios[index];

//     let usuarioUpdate = { ...usuario, ...usuarioNew };
//     usuarios.splice(index, 1, usuarioUpdate);

//     res.send(usuarioUpdate);
//   } else {
//     res.send(val);
//   }
// };

// const del = (req, res) => {
//   let id = parseInt(req.params.id);

//   let index = util.getIndex(id, usuarios);
//   let usuario = usuarios.splice(index, 1);

//   res.send(usuario);
// };

module.exports = {
  mapear,
};
