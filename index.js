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