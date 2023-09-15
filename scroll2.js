document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var imagen = document.getElementById("miImagen"); // Asegúrate de que el ID coincida con tu imagen
    var imagen2 = document.getElementById("miImagen2");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("navbar-scrolled");
        
        imagen.src = "img/LOGO CAMILA REFLEJO DEL LAGO CABAÑAS NEGRO PNG.png"; // Cambia la imagen por la segunda imagen
    
      } else {
        navbar.classList.remove("navbar-scrolled");
        
        imagen.src = "./img/LOGO CAMILA REFLEJO DEL LAGO CABAÑAS DORADO PNG.png"; // Vuelve a la primera imagen si el usuario se desplaza hacia arriba
       
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