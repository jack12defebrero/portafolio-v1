// Obtener el botón de cambio de tema por su selector de CSS
const toggleSwitch = document.querySelector('#switch');
// Obtener el tema actual de localStorage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  // Si hay un tema guardado en localStorage, establecer el tema del documento según el valor
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Si el tema actual es 'dark', marcar el botón de cambio de tema como activado
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark');
  }
}

// Función para cambiar el tema del documento al cambiar el estado del botón de cambio de tema
function switchTheme(e) {
  if (e.target.checked) {
    // Si el interruptor está activado, establecer el tema en 'dark'
    document.documentElement.setAttribute('data-theme', 'dark');
    // Agregar la clase 'dark' al cuerpo para aplicar estilos específicos del modo oscuro
    document.body.classList.add('dark');
    // Mostrar una alerta de éxito con fondo gris
    Swal.fire({
      title: 'Tema cambiado!',
      text: 'El tema se ha cambiado a oscuro.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Muy bien ahora estas en el modo dark!',
      background: '#000',
      color: '#fff'
    });
    // Guardar el tema actual en localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    // Si el interruptor está desactivado, establecer el tema en 'light'
    document.documentElement.setAttribute('data-theme', 'light');
    // Quitar la clase 'dark' del cuerpo para quitar estilos específicos del modo oscuro
    document.body.classList.remove('dark');
    // Mostrar una alerta de éxito con fondo blanco
    Swal.fire({
      title: 'Tema cambiado!',
      text: 'El tema se ha cambiado a claro.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Muy bien volvimos al modo light!',
      background: '#fff',
      color: '#000'
    });
    // Guardar el tema actual en localStorage
    localStorage.setItem('theme', 'light');
  }
}

// Manejar el cambio en el botón de cambio de tema
toggleSwitch.addEventListener('change', switchTheme);