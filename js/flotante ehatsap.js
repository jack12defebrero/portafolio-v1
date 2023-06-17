 // Seleccionar el botón de WhatsApp
 var whatsappBtn = document.getElementById("whatsapp-btn");
  
 // Crear la función para agregar el mensaje
 function addMessage() {
   // Verificar si se ha hecho scroll durante al menos 3 segundos
   if (window.pageYOffset > window.innerHeight * 0.5) {
     // Crear un elemento para el mensaje
     var message = document.createElement("div");
     // Establecer estilos para el mensaje
     message.textContent = "Contactate conmigo";
     // Agregar la clase "float-message" para la animación
     message.classList.add("float-message");

     // Agregar el mensaje al lado del botón de WhatsApp
     whatsappBtn.parentNode.insertBefore(message, whatsappBtn.nextSibling);

     // Detener la función después de agregar el mensaje
     window.removeEventListener("scroll", addMessage);
   }
 }

 // Agregar un evento para llamar la función después de 3 segundos de hacer scroll
 setTimeout(function() {
   window.addEventListener("scroll", addMessage);
 }, 500);


 // boton flotante de whatsapp
document.querySelector('#whatsapp-btn').addEventListener('click', function (event) {
  event.preventDefault();
  Swal.fire({
    title: '¡Hola! Gracias por contactarnos. Para brindarte una mejor atención, te vamos a redirigir a WhatsApp para que puedas comunicarte  con mi persona Jack!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, con mucho gusto',
    cancelButtonText: 'Cancelar',
    backdrop: 'rgba(0,0,0,0.8)',
    preConfirm: () => {
      return new Promise((resolve) => {
        Swal.showLoading();
        setTimeout(() => {
          window.open('https://wa.link/57y492');
          resolve();
        }, 2000);
      });
    },
    showClass: {
      popup: 'animate__animated animate__lightSpeedInLeft'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__jackInTheBox'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutRight'
        },
        title: 'Operación cancelada',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        backdrop: 'rgba(234, 28, 28, 0.32)',
        allowOutsideClick: false,
      });
    }

  });
});