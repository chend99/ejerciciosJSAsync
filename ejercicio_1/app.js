
const obtenerChiste = require("./library");

// Codigo funcion callback
function chisteExtraido(chiste){
    console.log(chiste[0].setup + "\n" + chiste[0].punchline);
}
// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(chisteExtraido);
