document.addEventListener('DOMContentLoaded', function() {
  fetch('carreras.json')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });

  function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    carrito.forEach(curso => {
      total += curso.precio;
    });
    return total;
  }

  function eliminarProducto(index) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la carrera de tu carrito de compras',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        Swal.fire(
          'Eliminado!',
          'La carerra ha sido eliminado del carrito.',
          'success'
        );
        actualizarIndicadorCarrito();
        renderizarCarrito();
      }
    });
  }

  function pagar() {
    Swal.fire({
      title: '¿Quieres comprar?',
      text: `El total a pagar es: $${calcularTotalCarrito()}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, comprar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra exitosa!',
          `Se ha realizado una compra por un total de: $${calcularTotalCarrito()}`,
          'success'
        );
        localStorage.removeItem('carrito');
        actualizarIndicadorCarrito();
        renderizarCarrito();
      } else {
        Swal.fire(
          'Compra cancelada',
          'Tu compra ha sido cancelada',
          'info'
        );
      }
    });
  }

  const pagarBtn = document.getElementById('pagarBtn');
  if (pagarBtn) {
    pagarBtn.addEventListener('click', () => {
      pagar();
    });
  }

  function actualizarIndicadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const indicadorCarrito = document.getElementById('carrito-indicador');
    if (indicadorCarrito) {
      indicadorCarrito.textContent = carrito.length.toString();
    }
  }

  function renderizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    if (!carritoContainer) return;

    carritoContainer.innerHTML = '';

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productosContainer = document.createElement('div');
    productosContainer.classList.add('flex', 'flex-row', 'flex-wrap');

    carrito.forEach((producto, index) => {
      const productoHTML = `
        <div class="bg-yellow-200 border-2 border-orange-300 p-4 m-4 max-w-md">
          <h3 class="text-lg font-bold">${producto.nombre}</h3>
          <p>Duración: ${producto.duracion}</p>
          <p>Precio: $${producto.precio}</p>
          <button class="bg-red-500 text-white font-bold py-2 px-4 rounded eliminar-btn">Eliminar</button>
        </div>
      `;
      productosContainer.innerHTML += productoHTML;
    });

    carritoContainer.appendChild(productosContainer);

    const botonesEliminar = document.querySelectorAll('.eliminar-btn');
    botonesEliminar.forEach((boton, index) => {
      boton.addEventListener('click', () => {
        eliminarProducto(index);
      });
    });

    const totalCarrito = calcularTotalCarrito();
    const totalContainer = document.createElement('div');
    totalContainer.classList.add('text-lg', 'font-bold', 'mt-4', 'border', 'border-gray-300', 'rounded-lg', 'p-4', 'bg-yellow-100');
    totalContainer.textContent = `Total a pagar: $${totalCarrito}`;
    carritoContainer.appendChild(totalContainer);
  }

  renderizarCarrito();
  actualizarIndicadorCarrito();
});
