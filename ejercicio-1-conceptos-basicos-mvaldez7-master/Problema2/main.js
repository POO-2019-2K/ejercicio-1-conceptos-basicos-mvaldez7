import Reservacion from "./Reservacion.js";

let reservacion1 = new Reservacion("Edgar", "Normal", 1200, new Date(2019, 2, 10), 4);
reservacion1.informacionReservacion();

reservacion1.nombre = "Marcelino"
console.log(reservacion1.nombre);

reservacion1.tipoHabitacion = "Presidencial"
console.log(reservacion1.tipoHabitacion);

reservacion1.costoDia = 2500;
console.log(reservacion1.costoDia);

reservacion1.diaInicio = new Date(2019, 3, 17);
console.log(reservacion1.diaInicio);

reservacion1.cantidadDias = 2
console.log(reservacion1.cantidadDias);

reservacion1.informacionReservacion();
