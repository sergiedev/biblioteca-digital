// Mensaje de verificación en la consola del navegador (F12)
console.log("Archivo script.js cargado correctamente");

// Declaración de variables: 'const' para valores fijos y 'let' para valores que cambiarán
const nombreBiblioteca = "Biblioteca Digital CUN";
let totalSolicitudes = 0;

// Uso de Template Literals (` `) para concatenar variables dentro de textos
console.log(`Bienvenido a ${nombreBiblioteca}`);

// Arreglo (Array) que almacena la lista inicial de recursos disponibles
const recursoDigitales = [
    "Gia de HTML5 Semantico", 
    "Guia de CSS3 Avanzado", 
    "Manual de JavaScript Moderno", 
    "Tutorial de React.js", 
    "Curso de Node.js"
];

// MANIPULACIÓN DEL DOM:
// 1. Seleccionamos la sección existente por su ID
const seccionRecursos = document.getElementById("recursos");
// 2. Creamos una nueva etiqueta <article> en memoria (aún no es visible en pantalla)
const cajaCatalogo = document.createElement("article");

// 3. Insertamos el nuevo <article> justo después del título <h2> de la sección recursos
seccionRecursos.querySelector("h2").after(cajaCatalogo);

// Función reutilizable para renderizar (dibujar) la lista actualizada en el HTML
function mostrarRecursosEnPantalla() {

    // Limpia el contenido anterior y agrega un subtítulo con la cantidad actual de elementos (.length)
    cajaCatalogo.innerHTML = "<h3>Recursos Digitales Disponibles: " + recursoDigitales.length + "</h3>";

    // Crea una lista desordenada <ul>
    const listaHtml = document.createElement("ul");

    // Recorre todo el arreglo elemento por elemento
    for (let i = 0; i < recursoDigitales.length; i++) {

        // Crea un elemento de lista <li> por cada recurso
        const item = document.createElement("li");
        // Asigna el texto del arreglo al <li>
        item.textContent = recursoDigitales[i];
        // Agrega el <li> dentro del <ul>
        listaHtml.appendChild(item);
    }

    // Finalmente, inserta la lista <ul> completa dentro del <article> visible en la página
    cajaCatalogo.appendChild(listaHtml);
}

// Ejecutamos la función por primera vez al cargar la página
mostrarRecursosEnPantalla();

// GESTIÓN DE EVENTOS DEL FORMULARIO:
// Seleccionamos la etiqueta <form> del documento
const formulario = document.querySelector("form");

// Escuchamos el evento 'submit' (cuando el usuario presiona "Enviar Solicitud")
formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue (comportamiento por defecto de los formularios HTML)
    event.preventDefault();

    // Capturamos lo que el usuario escribió en los campos usando .value
    const nombreUsuario = document.getElementById("nombre").value;
    const recursoPedido = document.getElementById("mensaje").value;

    // Incrementamos el contador de solicitudes en 1
    totalSolicitudes++;

    // Agregamos la nueva solicitud al final del arreglo usando .push()
    recursoDigitales.push(`Solicitud de ${nombreUsuario}: ${recursoPedido}`);

    // Volvemos a dibujar la lista en pantalla para que refleje el nuevo elemento agregado
    mostrarRecursosEnPantalla();

    // Mostramos una ventana emergente de confirmación al usuario
    alert(`Gracias ${nombreUsuario}, tu solicitud para "${recursoPedido}" ha sido registrada. Total de solicitudes: ${totalSolicitudes}`);

    // Limpiamos todos los campos del formulario para dejarlo listo para otra solicitud
    formulario.reset();
});