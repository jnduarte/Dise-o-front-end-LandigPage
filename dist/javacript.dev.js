"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
};
ScrollReveal().reveal(".header__image img", _objectSpread({}, scrollRevealOption, {
  origin: "right"
}));
ScrollReveal().reveal(".header__content h1", _objectSpread({}, scrollRevealOption, {
  delay: 500
}));
ScrollReveal().reveal(".header__content p", _objectSpread({}, scrollRevealOption, {
  delay: 1000
}));
ScrollReveal().reveal(".header__content form", _objectSpread({}, scrollRevealOption, {
  delay: 1700
}));
ScrollReveal().reveal(".formulario-suscribete", _objectSpread({}, scrollRevealOption, {
  delay: 1500
}));
document.getElementById("subscription-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name && validateEmail(email)) {
    Swal.fire({
      title: '¡Gracias por suscribirte!',
      text: 'Pronto recibirás noticias de Caroline Sada.',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, completa todos los campos correctamente.',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    });
  }
});

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
//# sourceMappingURL=javacript.dev.js.map
