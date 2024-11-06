const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1700,
});
ScrollReveal().reveal(".formulario-suscribete", {
  ...scrollRevealOption,
  delay: 1500,
});
document.getElementById("subscription-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
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
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
function showMessage(message) {
  Swal.fire({
      title: 'Información',
      text: message,
      icon: 'info',
      confirmButtonText: 'Cerrar'
  });
}
