let carrito = [];

function agregarAlCarrito(curso) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
  carrito.push(curso);

  localStorage.setItem('carrito', JSON.stringify(carrito));

  Swal.fire({
    icon: 'success',
    title: 'Carrera agregado al carrito!',
    text: 'La carrera se ha añadido correctamente a tu carrito de compras.',
    confirmButtonText: 'Entendido'
  });


  actualizarIndicadorCarrito();
}

  

const botonesAgregar = document.querySelectorAll('.agregar-al-carrito');

botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.getAttribute('data-nombre');
    const descripcion = boton.getAttribute('data-descripcion');
    const duracion = boton.getAttribute('data-duracion');
    const precio = parseInt(boton.getAttribute('data-precio'));
    const descuento = parseInt(boton.getAttribute('data-descuento'));
    const cuota = parseInt(boton.getAttribute('data-cuota'));

    const curso = {
      nombre,
      descripcion,
      duracion,
      precio,
      descuento,
      cuota
    };

    agregarAlCarrito(curso);
  });
});


