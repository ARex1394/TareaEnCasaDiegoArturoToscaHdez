"use strict";

var usuario = {
  nombre: 'Diego',
  correo: 'recondita@correo',
  edad: '22',
  pais: 'Mexico' //profesion : 'Desarrollador Web'

};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'Estudiante' : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario); //console.log(nombre);