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