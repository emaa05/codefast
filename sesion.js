let datosUsuarios = [];
let usuarioLogueado = false;

function iniciarSesion(evento) {
  evento.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const usuarioEncontrado = datosUsuarios.find(user => user.email === email && user.password === password);
  
  if (usuarioEncontrado) {
    Swal.fire({
      icon: 'success',
      title: 'Inicio de Sesión Exitoso',
      text: '¡Bienvenido de nuevo!',
      confirmButtonText: 'Ok'
    }).then(() => {
      usuarioLogueado = true;
      window.location.href = 'index.html'; 
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: 'Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.',
      confirmButtonText: 'Ok'
    });
  }
}

function cargarDatos() {
  const datosAlmacenados = localStorage.getItem('datosUsuarios');
  if (datosAlmacenados) {
    datosUsuarios = JSON.parse(datosAlmacenados);
  }
}

function inicializarFormulario() {
  const formulario = document.getElementById('formularioLogin');
  if (formulario) {
    formulario.addEventListener('submit', iniciarSesion);
  }
}

function configurarEventos() {
  document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    inicializarFormulario();
  });
}

configurarEventos();


/*cargar info de carrito */

document.addEventListener('DOMContentLoaded', function() {
  actualizarIndicadorCarrito();
});

function actualizarIndicadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const indicadorCarrito = document.getElementById('carrito-indicador');
  if (indicadorCarrito) {
      indicadorCarrito.textContent = carrito.length.toString();
  }
}