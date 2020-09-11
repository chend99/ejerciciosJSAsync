
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function datos(p){
    let persona = p.results[0];
    let nombre = persona.name;
    let localidad = persona.location;
    let user = persona.login;
    console.log(
    `
    Nombre: ${nombre.first} ${nombre.last}
    Genero: ${persona.gender==="male"?"Masculino":"Femenino"}
    Pais: ${localidad.country}, Estado: ${localidad.state}, Ciudad: ${localidad.city}, Calle: ${localidad.street.name}, Nro: ${localidad.street.number}, CP: ${localidad.postcode}                
    Email: ${persona.email}
    Nombre de usuario: ${user.username}
    Password: ${user.password}
    `);
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(datos);
