"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, edad, correo) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre, this.edad = edad, this.correo = correo;
  }

  _createClass(Usuario, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo(mensaje) {
      return mensaje;
    }
  }, {
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n        <b>Nombre:</b> ".concat(this.nombre, " <br />\n        <b>Edad:</b> ").concat(this.edad, " <br />\n        <b>Correo:</b> ").concat(this.correo, " <br />\n        <hr />\n       ");
    }
  }]);

  return Usuario;
}();

var diego = new Usuario('Diego Arturo', 23, 'recondita@coreo.com');
document.write(diego.mostrarInfo());

var Estudiante = /*#__PURE__*/function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  var _super = _createSuper(Estudiante);

  function Estudiante(nombre, edad, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    _this = _super.call(this, nombre, edad, correo);
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n        <b>Nombre:</b> ".concat(this.nombre, " <br />\n        <b>Edad:</b> ").concat(this.edad, " <br />\n        <b>Correo:</b> ").concat(this.correo, " <br />\n        <b>Carrera:</b> ").concat(this.carrera, " <br />\n        <hr />\n        \n        ");
    }
  }]);

  return Estudiante;
}(Usuario);

var roberto = new Estudiante('Roberto Carlos', 20, 'example@coreo.com', 'Estudiante');
document.write(roberto.mostrarInfo());