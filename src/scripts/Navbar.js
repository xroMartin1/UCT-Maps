const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const bars = mobileMenuButton.querySelectorAll('div');
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    
    if (isOpen) {
      mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
      mobileMenu.classList.add('translate-y-0', 'opacity-100');
      
      // Animar a X
      bars[0].style.transform = 'rotate(45deg) translate(0.25rem, 0.25rem)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(0.25rem, -0.25rem)';
    } else {
      mobileMenu.classList.add('-translate-y-full', 'opacity-0');
      mobileMenu.classList.remove('translate-y-0', 'opacity-100');
      
      // Restaurar hamburguesa
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  }

  mobileMenuButton.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer clic en los enlaces
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  // Cerrar menú al presionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggleMenu();
  });

  // Cerrar menú en pantallas grandes
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isOpen) toggleMenu();
  });