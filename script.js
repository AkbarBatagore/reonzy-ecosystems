
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu a').forEach(a => {
      a.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });