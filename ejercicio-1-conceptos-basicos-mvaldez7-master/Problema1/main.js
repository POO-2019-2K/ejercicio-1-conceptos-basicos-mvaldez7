import Contacto from "./Contacto.js";

let trabajador1 = new Contacto('Edgar', 'Programador', 3129987495, 'ezamora2@ucol.mx');
trabajador1.informacion();

trabajador1.nombre = 'Marcelino';
console.log(trabajador1.nombre);
trabajador1.puesto = 'Tester';
console.log(trabajador1.puesto);
trabajador1.telefono = 3121908873;
console.log(trabajador1.telefono);
trabajador1.email = 'edgar_39@gmail.com';
console.log(trabajador1.email);

trabajador1.informacion();