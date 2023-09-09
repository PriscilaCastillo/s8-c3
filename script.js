// EJERCICIO 1 --------------------------------------------

// let number = prompt('Ingrese un número');

// number = parseFloat(number);

// if (isNaN(number)) {
//     console.log('No ingresaste un número válido');
// } else if (number>0){
//     console.log ('El número es positivo');
// } else if (number<0) {
//     console.log ('El número es negativo');
// } else {
//     console.log('El número es cero.');
// }

// EJERCICIO 2 --------------------------------------------

// let number = prompt('Ingrese un número');

// number = parseFloat(number);

// let respuesta = number % 2;

// if (isNaN(number)) {
//     console.log('No ingresaste un número válido');

// }else if (respuesta === 0){
//     console.log ('El número es divisible por dos');

// } else {
//     console.log('El número no es divisible por dos');
// }

// console.log(isNaN(number));

// EJERCICIO 3 --------------------------------------------

// let number1 =  prompt('Ingrese un número');
// let number2 = prompt('Ingrese otro número');

// number1 = parseFloat(number1);
// number2 = parseFloat(number2);

// if (number1>number2) {
//     console.log(number1 + ' es mayor que ' + number2);
// } else {
//     console.log(number2 + ' es mayor que ' + number1);
// }

// EJERCICIO 4 --------------------------------------------

// let number = prompt('Ingrese un número');

// number = parseInt(number);

// for (let i = 1; i <= number; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     } else {
//         console.log('No hay múltiplos de 5 menores al número ingresado')
//     }
// }

// EJERCICIO 5 --------------------------------------------

// let year = prompt('Ingrese el año en que nació');

// year = parseInt(year);

// let age = 2023 - year;

// console.log('Su edad es ' + age);

// EJERCICIO 6 --------------------------------------------

// let number1 = parseFloat(prompt('Ingrese un número'));
// let number2 = parseFloat(prompt('Ahora otro número'));
// let number3 = parseFloat(prompt('Ingrese otro número'));

// if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
//     if (number1 === number2 | number1 === number3) {
//         console.log('Se repiten los números');

//     } else if (number1 > number2 && number1 > number3) {
//         console.log(number1 + ' es el número mayor');

//     } else if (number2 > number1 && number2 > number3) {
//         console.log(number2 + ' es el número mayor');

//     } else {
//         console.log(number3 + ' es el número mayor');
//     }
// } else {
//     console.log('No ingresaste números válidos')
// }

//EJERCICIO 7 --------------------------------------------

// let day = prompt('Ingrese un día');

// day = day.toLowerCase();

// if (day === 'lunes') {
//     console.log('Hoy no es lunes');
// } else if (day === 'viernes') {
//     console.log('Ya casi');
// } else if (day === 'sabado' || day === 'sábado' || day === 'domingo') {
//     console.log('Es fin de semana');
// } else {
//     console.log('Nada que decir');
// }

//EJERCICIO 8 --------------------------------------------

// let number = prompt('Ingrese una calificación del 1 al 10');

// number = parseInt(number);

// if (number < 6 && number>0) {
//     console.log('Reprobado');
// }else if (number >= 6 && number<= 8) {
//     console.log('Regular');
// } else if (number === 9){
//     console.log('Bien');
// } else if(number === 10){
//     console.log('Excelente')
// } else {
//     console.log('No ingresaste una calificación válida')
// }

//EJERCICIO 9 --------------------------------------------

// let age = prompt('Ingresa tu edad para determinar si puedes votar en las proximas elecciones en 2024');

// age = parseInt(age);

// if (isNaN(age)){
//     console.log('Ingresa un valor válido');
// } else if (age>=17) {
//     console.log('Podrás votar en las próximas elecciones')
// } else {
//     console.log('No podrás votar en las próximas elecciones')
// }

// EJERCICIO 10 --------------------------------------------

// let number1 = parseInt(prompt('Ingrese un número entre 1 y 50'));

// let number2 = parseInt(prompt('Ingrese otro número entre 1 y 50'));

// for( let i=1; i<=50; i++){
//     if (i === number1 || i=== number2){
//         console.log(i + ' Lotería');
//     } else {
//         console.log(i);
//     }
//    }

// EJERCICIO 11 --------------------------------------------

// let number = prompt('Para calcular el bono, ingrese cuantos años lleva en la empresa');

// number = parseInt(number);

// if (number === 1){
//     console.log ('Su bono es $100');
// } else if (number === 2){
//     console.log ('Su bono es $200');
// } else if (number === 3){
//     console.log ('Su bono es $300');
// } else if (number === 4){
//     console.log ('Su bono es $400');
// } else if(number === 5){
//     console.log ('Su bono es $500');
// } else if (number >5) {
//     console.log('Su bono es $1000');
// } else {
//     console.log('Ingrese un número válido')
// }


// EJERCICIO 12 --------------------------------------------

// const salarioinicial = 1500;
// const incremento = 1.1;
// let salarioactual = salarioinicial;

// for (let i=1; i <= 6; i++) {
//     salarioactual = salarioactual*incremento;
//         console.log('El salario en el año ' + i + ' es ' + salarioactual.toFixed(2));
// }

// EJERCICIO 13 --------------------------------------------

// const heladosimple = 50;
// let pricetopping = 0;
// let topping = prompt('Ingrese el topping');

// if (topping === 'oreo') {
//     pricetopping = 10;
// } else if (topping === 'kitkat') {
//     pricetopping = 15;
// } else if (topping === 'brownie') {
//     pricetopping = 20;
// } else {
//     console.log('no tenemos este topping, lo sentimos');
//     pricetopping=0;
// }

// let costototal = heladosimple + pricetopping;

// console.log('El costo total será de ' + costototal)

// EJERCICIO 14 --------------------------------------------

// const costocourse = 4999;
// const costocarrera = 3999;
// const costomaster = 2999;

// const opcion = prompt('Elija una opción (Course, Carrera o Master):');
// const beca = prompt('¿Cuenta con alguna beca? (Facebook, Google, Jesua o Ninguna)');

// let descuento = 0;

// switch (beca.toLowerCase()) {
//     case 'facebook':
//         descuento = 0.2;
//         break;

//     case 'google':
//         descuento = 0.15;
//         break;

//     case 'jesua':
//         descuento = 0.5;
//         break;

//     case 'ninguna':
//         descuento = 0;
//         break;

//     default:
//         console.log('No es una beca válida')
//         break;
// }

// let costomensual = 0;

// switch (opcion.toLowerCase()) {
//     case 'course':
//         costomensual = costocourse;
//         break;

//     case 'carrera':
//         costomensual = costocarrera;
//         break;

//     case 'master':
//         costomensual = costomaster;
//         break;

//     default:
//         console.log('No es una opción válida.')
//         break;

// }

// costomensual = costomensual * (1 - descuento);

// let duracion = 0;

// switch (opcion.toLowerCase()) {
//     case 'course':
//         duracion = 2;
//         break;

//     case 'carrera':
//         duracion = 6;
//         break;

//     case 'master':
//         duracion = 12;
//         break;

// }

// let costototal = costomensual*duracion;

// console.log('El costo mensual de su programa ' + opcion + ' es de ' + costomensual + ' MXN');
// console.log('El total a pagar por su programa ' + opcion + ' es de ' + costototal + ' MXN');

// EJERCICIO 15 --------------------------------------------

// const precioKmCoche = 0.2;
// const precioKmMoto = 0.1;
// const precioKmAutobus = 0.5;

// let precioKM;

// let tipovechiculo = prompt('Ingrese el tipo de vehiculo (Coche, Moto o Autobus)')

// switch (tipovechiculo.toLowerCase()) {
//     case 'coche':
//         precioKM = precioKmCoche;
//         break;

//     case 'moto':
//         precioKM = precioKmMoto;
//         break;

//     case 'autobus':
//         precioKM = precioKmAutobus;
//         break;

//     default:
//         console.log('No es un tipo de vehiculo admitido.')
// }

// let Kmrecorridos = prompt('Ingrese los Km recorridos');
// let Ltconsumidos = prompt('Ingrese los Litros consumidos');

// let totalapagar;

// if (Ltconsumidos>=0 || Ltconsumidos<=100) {
//     totalapagar = (precioKM*Kmrecorridos)+5;
// } else {
//     totalapagar = (precioKM*Kmrecorridos)+10;
// }

// console.log('El total a pagar es ' + totalapagar);


//----------------------Otros ejercicios

//EJERCICIO 1

// const pasword = 'contraseña'

// let userpasword = prompt('Ingrese su contraseña');

// if(userpasword.toLowerCase() === pasword){
//     console.log(pasword);
// } else {
//     console.log('Contraseña incorrecta.')
// }

//EJERCICIO 2

// let age = parseInt(prompt('Ingresa tu edad'));
// let ingresos = parseFloat(prompt('Digite sus ingresos mensuales?'));

// if(age>=18 && ingresos>=1000){
//     console.log('Tienes que tributar');
// } else {
//     console.log('No tienes que tributar');
// }

// EJERCICIO 3

// let nombre = prompt('Esribe tu nombre').toLowerCase();
// let gender = prompt('Escribe "M" si eres mujer y "H" si eres hombre').toLowerCase();

// if(nombre<'m' && gender==='m' || nombre>'n' && gender==='h'){
//     console.log('Perteneces al grupo A.');
// } else {
//     console.log('Perteneces al grupo B.');
// }

// EJERCICIO 4

    let number1 =parseInt(prompt('Ingrese un numero entero'));
    let number2 = parseInt(prompt('Ingrese otro numero entero'));

    let mayor, menor;

if (number1 > number2) {
    mayor = number1;
    menor = number2;
} else {
    mayor = number2;
    menor = number2;
}

if (mayor % menor === 0) {
    console.log(mayor + ' es múltiplo de ' + menor);
} else {
    console.log(mayor + ' no es múltiplo de ' + menor);
}


// EJERCICIO 5

// EJERCICIO 6