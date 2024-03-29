let datosUsuarios = [];

function enviarFormulario(evento) {
    evento.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const usuario = { email, password };
    datosUsuarios.push(usuario);
    localStorage.setItem('datosUsuarios', JSON.stringify(datosUsuarios));
    
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Usuario registrado',
      confirmButtonText: 'Ok'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        document.getElementById('formularioRegistro').reset();
        cambiarEstiloSeccion();
      }
    });
  }
  

function cargarDatos() {
  const datosAlmacenados = localStorage.getItem('datosUsuarios');
  if (datosAlmacenados) {
    datosUsuarios = JSON.parse(datosAlmacenados);
  }
}

function inicializarFormulario() {
  const formulario = document.getElementById('formularioRegistro');
  formulario.addEventListener('submit', enviarFormulario);
}

function configurarEventos() {
  document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    inicializarFormulario();
  });
}

configurarEventos();



/* cargar info de carrito */

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