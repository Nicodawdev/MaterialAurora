/*Información del navegador

En la página panel_navegador.html mostrar mediante js, en su lugar correspondiente:

    título del documento

    URL actual

    el idioma del documento y del navegador

    ancho y alto de la pantalla

    ancho y alto de la ventana del navegador

    el UserAgent del navegador

No se modifica el HTML.*/

// selección de campos de panel

const campos = document.querySelectorAll(
    "#informacionNavegador .info-item span"
);

// vamos con los puntos solicitado

//titulo del documento
campos[0].textContent = document.title;

// URL actual
campos[1].textContent = window.location.href;

// idioma del documento y navegador
campos[2].textContent = document.documentElement.lang + "/" +navigator.language;

//dimensiones de la ventana
campos[3].textContent = window.innerWidth + "x" + window.innerHeight;

//dimensiones de la pantalla
campos[4].textContent = screen.width + "x" + screen.height;

//userAgent
campos[5].textContent = navigator.userAgent;