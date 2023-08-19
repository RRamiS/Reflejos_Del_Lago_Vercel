document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("navbar-scrolled");
        
      } else {
        navbar.classList.remove("navbar-scrolled");
        
      }
    });
  });

  window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var navLinks = document.querySelectorAll('.nav-link');
    if (window.pageYOffset > 90) {
      nav.classList.add('colorDropdown', 'shadow');
      // Cambia el color de los enlaces del navbar a blanco
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = 'white';
      }
    } else {
      nav.classList.remove('colorDropdown', 'shadow');
      // Restaura el color original de los enlaces del navbar
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = ''; // Deja que se aplique el estilo del CSS
      }
    }
  });