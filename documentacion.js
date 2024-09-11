document.querySelectorAll(".elementovisible").forEach(elemento => {
    elemento.style.display = "none";
  });

  document.querySelectorAll(".lista").forEach(elemento => {
    elemento.style.textAlign = "center";
  });

function elementosVisibles(idLenguaje) {
    // Ocultar todos los elementos con la clase "elementovisible"
    document.querySelectorAll(".elementovisible").forEach(elemento => {
      elemento.style.display = "none";
    });
  
    // Mostrar los elementos de la lista con la clase correspondiente
    document.querySelectorAll("." + idLenguaje).forEach(elementoPadre => {
        Array.from(elementoPadre.children).forEach(hijo => {
            hijo.style.display = "block";
            hijo.style.textAlign = "center";
            hijo.style.width = "100%";
        });
    });
    
    if (idLenguaje === 'html') {
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li a");
        listaItems.forEach(item => {
            item.style.color = "white";
          });
      } else if(idLenguaje === 'css'){
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.color = "white";
          }); 
      } else if(idLenguaje === 'bootstrap'){
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.color = "white";
          }); 
      } else if(idLenguaje === 'javascript'){
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.color = "white";
          }); 
      } else if(idLenguaje === 'enlaces'){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.borderColor = "white";
          }); 
      } else if(idLenguaje === 'extensiones'){
        document.body.style.backgroundColor = 'grey';
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.color = "white";
          }); 
      } else if(idLenguaje === 'funciones'){
        document.body.style.backgroundColor = 'orangered';        
        document.body.style.color = 'white';
        document.querySelector(".navbar-brand").style.color = 'white';
        // Cambiar el color de texto a blanco para cada elemento <li>
        var listaItems = document.querySelectorAll(".navbar-nav li");
        listaItems.forEach(item => {
            item.style.color = "white";
          });
      } 
        
  }

  function listaInfo(name) {
   
  // Mostrar los elementos de la lista con la clase correspondiente
  document.querySelectorAll("." + name).forEach(elemento => {
    mostrarElementoYDescendientes(elemento);
  });
}

function mostrarElementoYDescendientes(elemento) {
  // Mostrar el elemento
  elemento.style.display = "block";

  // Mostrar los descendientes del elemento recursivamente
  elemento.querySelectorAll("." + elemento.className).forEach(descendiente => {
    mostrarElementoYDescendientes(descendiente);
  });
}
  


