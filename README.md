## Práctica JS desde 0:

### Objetivo:
Crear un programa que actua en la consola de JS y permite elegir varias opciones para modificar o visualizar datos de una lista de estudiantes.

### Descripción/Explciación de los ficheros:

#### challenge.js
Tiene el código inicial facilitado para empezar la práctica.

#### main.js
Tiene las funciones que muestran el menu de opciones y piden input al usuario a través de la consola. Para esta parte he probado distintas formas de hacerlo, más allá de la que hay en este repositorio (pueden verse en este otro: https://github.com/rucev/promises-menu)

#### options-menu.js
En este archivo se crea el menu de opciones disponibles. Se trata de una lista de diccionarios(también podrían considerarse objetos) con los siguientes key: values para cada elemento:
id: número int de tecla/posición que le corresponde a esa opción.
description: mensaje que se muestra en la pantalla y describe en que consiste dicha opción.
function: función que realiza el programa una vez seleccionada la opción.

#### alumni-service.js
En este archivo se encuentran todas las funciones restantes necesarias y que se llaman a través del menú de opciones.
