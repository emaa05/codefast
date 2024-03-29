document.addEventListener('DOMContentLoaded', function() {
    const suscribirseBtn = document.getElementById('suscribirseBtn');
    const emailInput = document.getElementById('emailSub');
    
    suscribirseBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      Swal.fire({
        icon: 'success',
        title: 'Gracias por suscribirte!',
        text: 'Recibirás las últimas noticias y actualizaciones en tu correo electrónico.',
        showConfirmButton: true, 
      }).then(() => {
        emailInput.value = ''; 
      });
    });
  });
  