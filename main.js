/* RETO 1 */
/* EJERCICIO 1 */
function obtenerUltimoElemento(arreglo) {
  if (arreglo.length > 0) {
      return arreglo[arreglo.length - 1];
  } else {
      return 'No cuenta con elementos';
  }
}

let entrada = [4, 8, 5, 3];
let resultado = obtenerUltimoElemento(entrada);
console.log("resultado:", resultado);

/* EJERCICIO 2 */
function agregarElemento(arreglo, numero) {
  return [...arreglo, numero];
}

let arregloOriginal = [2, 7, 5, 11];
let numero = 9;
let nuevoArreglo = agregarElemento(arregloOriginal, numero);
console.log("Nuevo Arreglo:", nuevoArreglo);

/* EJERCICIO 3 */
function calcularPromedio(arreglo) {
  if (arreglo.length === 0) {
      return 'No cuenta con elementos';
  }

  let suma = arreglo.reduce((total, numero) => total + numero, 0);
  let promedio = suma / arreglo.length;

  return promedio;
}

let entradaArreglo = [2, 6, 1, 8];
let promedioResultado = calcularPromedio(entradaArreglo);

console.log("Promedio:", promedioResultado);

/* EJERCICIO 4 */
function sumaNumerosPares(arreglo) {
  return arreglo.filter(numero => numero % 2 === 0).reduce((suma, numero) => suma + numero, 0);
}

let entradaArr = [1, 2, 5, 8, 9, 12, 2, 3];
let result = sumaNumerosPares(entradaArr);

console.log('salida:', result);

/* EJERCICIO 5 */
function booleanoArray(arreglo1, arreglo2) {
  const nuevoArreglo = arreglo1.concat(arreglo2);
  return nuevoArreglo.length >= 10;
}

let arreglo1 = [2, 5, 2, 3, 7, 2];
let arreglo2 = [1, 5, 3, 3];
let resulta = booleanoArray(arreglo1, arreglo2);

console.log(resulta);

/* EJERCICIO 6 */
function funcionArray(arreglo1, arreglo2) {
  const arregloMultiplicado = [...arreglo1, ...arreglo2].map(numero => numero * 2);
  return arregloMultiplicado;
}

let arr1 = [2, 5, 2];
let arr2 = [1, 5, 3];
let arregloNuevo = funcionArray(arr1, arr2);

console.log(arregloNuevo);

/* EJERCICIO 7 */
const passGuardada = "password";

const passUsuario = prompt("Introduce la contraseña: ");

if (passUsuario.toLowerCase() === passGuardada.toLowerCase()) {
    console.log("La contraseña es correcta.");
} else {
    console.log("La contraseña es incorrecta.");
}

/* EJERCICIO 8 */
const edadCliente = Number(prompt("Introduce tu edad:"));

let precioEntrada;

if (edadCliente < 4) {
    precioEntrada = 0;
} else if (edadCliente >= 4 && edadCliente <= 18) {
    precioEntrada = 5;
} else {
    precioEntrada = 10;
}

console.log("El costo de la entrada es " + precioEntrada + "€");

/* EJERCICIO 9 */
const edadUsuario = Number(prompt("Introduce tu edad:"));
const ingresosMensuales = Number(prompt("¿Cuáles son tus ingresos mensuales?: "));

if (edadUsuario > 18 && ingresosMensuales >= 1000) {
    console.log("Sí tienes que tributar.");
} else {
    console.log("No tienes que tributar.");
}

/* EJERCICIO 10 */
const diametroRueda = Number(prompt("Ingrese el diámetro de una rueda (en metros): "));
const grosorRueda = Number(prompt("Ingrese el grosor de la rueda (en metros): "));

if (diametroRueda > 1.4) {
    console.log("La rueda es para un vehículo grande.");
} else if (diametroRueda <= 1.4 && diametroRueda > 0.8) {
    console.log("La rueda es para un vehículo mediano.");
} else {
    console.log("La rueda es para un vehículo pequeño.");
}

if ((diametroRueda > 1.4 && grosorRueda < 0.4) || (diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25)) {
    console.log("Su grosor es inferior al recomendado.");
}

/* EJERCICIO 11 */
let personas = [
  { nombre: 'boris', hobby: 'correr', salario: 2000 },
  { nombre: 'luis', hobby: 'cantar', salario: 1500 },
  { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
  { nombre: 'percy', hobby: 'cantar', salario: 1100 },
  { nombre: 'rosa', hobby: 'leer', salario: 3000 },
];

function personasSalarioMayor(personas) {
  return personas.filter(persona => persona.salario > 1200);
}

function primerCantante(personas) {
  return personas.find(persona => persona.hobby === 'cantar');
}

function algunoLeGustaLeer(personas) {
  return personas.some(persona => persona.hobby === 'leer');
}

console.log('Personas con salario mayor a 1200:', personasSalarioMayor(personas));
console.log('Primer persona que le gusta cantar:', primerCantante(personas));
console.log('Al menos uno le gusta leer:', algunoLeGustaLeer(personas));

/* EJERCICIO 12 */
function obtenerEncargadoServicio(dia) {
  const servicioAtencionCliente = [
      { dia: 'lunes', encargado: 'María' },
      { dia: 'martes', encargado: 'Luis' },
      { dia: 'miércoles', encargado: 'Antonia' },
      { dia: 'jueves', encargado: 'Pedro' },
      { dia: 'viernes', encargado: 'Marisa' }
  ];

  const diaLowerCase = dia.toLowerCase();
  const personaEncargada = servicioAtencionCliente.find(servicio => servicio.dia === diaLowerCase);

  if (personaEncargada) {
      return `Este día se encarga ${personaEncargada.encargado}.`;
  } else {
      return 'No hay servicio este día.';
  }
}

const diaConsulta = prompt("Ingrese el día para consultar el servicio:");

const encargado = obtenerEncargadoServicio(diaConsulta);
console.log(encargado);

/* EJERCICIO 13 */
function precioProducto(nombreProducto) {
  const precios = [
      { producto: 'monitor', precio: 200 },
      { producto: 'teclado', precio: 20 },
      { producto: 'ratón', precio: 10 }
  ];

  const productoEncontrado = precios.find(item => item.producto.toLowerCase() === nombreProducto.toLowerCase());

  if (productoEncontrado) {
      return productoEncontrado.precio;
  } else {
      return 'Producto no encontrado';
  }
}

const productoConsulta = prompt("Ingrese el nombre del producto para consultar el precio:");

const precio = precioProducto(productoConsulta);
console.log(precio);
