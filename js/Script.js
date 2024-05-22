/* Ajustar */
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
    }



// Ensenyar o ocultar el botó segons la posició de l'usuari
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
      document.getElementById('back-to-top').style.display = 'block';
  } else {
      document.getElementById('back-to-top').style.display = 'none';
  }
});



