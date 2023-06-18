window.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.querySelector('#switch');
  const currentTheme = localStorage.getItem('theme');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      toggleSwitch.checked = true;
      document.body.classList.add('dark');
    } else {
      toggleSwitch.checked = false;
      document.body.classList.remove('dark');
    }
  }

  if (currentTheme) {
    setTheme(currentTheme);
  } else {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }

  function switchTheme(e) {
    if (e.target.checked) {
      setTheme('dark');
      Swal.fire({
        title: 'Tema cambiado!',
        text: 'El tema se ha cambiado a oscuro.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: '¡Muy bien, ahora estás en el modo oscuro!',
        background: '#000',
        color: '#fff'
      });
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      Swal.fire({
        title: 'Tema cambiado!',
        text: 'El tema se ha cambiado a claro.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: '¡Muy bien, volvimos al modo claro!',
        background: '#fff',
        color: '#000'
      });
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);
});
