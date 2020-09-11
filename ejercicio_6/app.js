
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then((p) => {
    let persona = p.results[0];
    let nombre = persona.name;
    let localidad = persona.location;
    let user = persona.login;
    console.log(
    `
    Nombre: ${nombre.first} ${nombre.last}
    Género: ${persona.gender==="male"?"Masculino":"Femenino"}
    Pais: ${localidad.country}, Estado: ${localidad.state}, Ciudad: ${localidad.city}, Calle: ${localidad.street.name}, Nro: ${localidad.street.number}, CP: ${localidad.postcode}                
    Email: ${persona.email}
    Nombre de usuario: ${user.username}
    Password: ${user.password}
    `);
});
