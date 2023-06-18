//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

//bloqueo de teclas 
//  Bloqueo de teclas Ctrl + S
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 's') { // Verifica si se presionó la combinación de teclas Ctrl + S
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
      Swal.fire({
        title: 'No se puede guardar esta página',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      });
    }
  
  
    // Bloqueo de teclas Ctrl + U
    if (event.ctrlKey && event.key === 'u') { // Verifica si se presionó la combinación de teclas Ctrl + U
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
      Swal.fire({
        title: 'No se puede ver el código fuente de esta página',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  
  // Bloqueo de teclas Ctrl+Shift+P
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'P') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+P
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
      Swal.fire({
        title: 'No se permite imprimir ni exportar a PDF',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  
  // Bloqueo de teclas Ctrl+Shift+c
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+P
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
      Swal.fire({
        title: 'No se permite ingresar al inspector de codigó xd ',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  // Bloqueo de teclas Ctrl + P
  window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'p') { // Verifica si se presionó la combinación de teclas Ctrl + P
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
      Swal.fire({
        title: 'No se permite imprimir ni exportar a PDF',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  
  // Bloqueo de teclas Ctrl + Shift + J
  window.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'J') { // Verifica si se presionó la combinación de teclas Ctrl + Shift + J
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (abrir la consola del navegador)
      Swal.fire({
        title: 'No se permite acceder a la consola',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  
  
  // Bloqueo de teclas Ctrl + Shift + I
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+I
      event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
      Swal.fire({
        title: 'No se puede acceder a la consola',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonColor: '#d33',
      });
    }
  });
  
  
  
  
  //Bloqueo del anticlick del raton o touchpad
  //document.addEventListener("contextmenu", function (event) {
   // event.preventDefault();
  //  Swal.fire({
  //    icon: 'warning',
   //   title: 'Oops...',
   //   text: 'El botón derecho del ratón está deshabilitado.',
  //    confirmButtonColor: '#d33',
  //    confirmButtonText: 'Está bien',
  //    allowOutsideClick: false,
  //  });
  //});
  
  
  // Bloquear las teclas "Ctrl + R"
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "r") {
      event.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La combinación de teclas "Ctrl + R" está deshabilitada.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Está bien',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      });
    }
  });
  
  
  //Bloqueo del ctrl + c 
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "c") {
      event.preventDefault();
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'No se permite copiar informacion en este sitio web.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Está bien'
      });
    }
  });

  