// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

Sin interacción usuario
const characterCounter = (str) => {
    if (typeof str === 'string') {
                console.log(str.length)
    } else {
        console.log('Error: Los datos introducidos no son una cadena de texto.')
    }
}
characterCounter('Hola')

characterCounter('Hola soy Santiago torres')

const input = String(prompt('Por favor introduzca su nombre:'))

Con interacción usuario
const strCounter = () => {
    let input = prompt('Por favor introduzca un texto:');
    alert(`El número de caracteres de su texto es: ${input.length}`)

}

strCounter('Hello);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (cadena = '', longitud = undefined) =>
    (!cadena)
        ? console.warn('no ingresaste el texto.')
        : (longitud === undefined)
            ? console.warn('No ingresaste la longitud para recortar.')
            : console.info(cadena.slice(0, longitud));

recortarTexto('Hola Mundo', 4)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (texto = '', veces = undefined) => {
    if (!texto) return console.warn('No ingresaste un texto.');
    if (veces === undefined) return console.warn('No ingresaste el número de veces a repetir el texto');
    if (veces === 0) return console.error('El número de veces no puede ser 0');
    if (Math.sign(veces) === -1) return console.error('El número de veces no puede ser negativo.')

    for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
    
    
}

repetirTexto('Hola Mundo', 3)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// Solución usando loop for:

let newStr = ''

const reverserLoop = (str = '') => {
    if (!str) console.warn('No escribiste nada.');
    if (typeof str === "number") console.error('Debes escribir un texto.');
    // crear el loop foor: Valor inicial de i será el último caracter del string.
    for (let i = str.length - 1; i >= 0; i--) newStr += str[i];

    console.log(newStr);
}

reverserLoop('Hola Mundo');

// Solución usando funciones built-in en js

const reverseStr = (str = '') => {
    if (!str) console.warn('No escribiste nada.');
    if (typeof str === "number") console.error('Debes escribir un texto.');

    let array = str.split('');
    let reverseArray = array.reverse();

    console.log(reverseArray.join(''))
    
}

reverseStr('Hola Mundo');

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let counter = 0

const letterCounter = (str = '', letra = '') => {
    if (!str) if (!str) console.warn('No escribiste nada.');
    if (typeof str === "number") console.error('Debes escribir un texto.');
    if (!letra) console.warn('No escribiste la letra para contar');
    if (typeof letra === 'number') console.log('La letra para contar debe ser una cadena de texto.');

    let array = str.split('')
    console.log(array)
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === letra) counter += 1;
    }
    console.log(counter)
}

letterCounter('ubuntu', 'u')

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// Solución usando loop for:

let palin = ''

const Palindrumus = (str = '') => {
    if (!str) console.warn('No escribiste la palabra.');
    if (typeof str === 'number') str = String(str);
    str = str.toLowerCase()
    for (let i = str.length - 1; i >= 0; i--) palin += str[i];
    
    str === palin
        ? console.log('La palabra es un palíndromo.')
        : console.log('La palabra no es un palíndromo.')

}

Palindrumus('Ana')

// Solución usando funciones built-in en js:

const palindromo = (palabra = '') => {
    if (!palabra) return console.warn('No ingresaste una palabra o frase.');
    palabra = palabra.toLowerCase();
    let alReves = palabra.split('').reverse().join('')

    return (palabra === alReves)
        ? console.info(`Sí es palíndromo. Palabra original ${palabra}, palabra al revés ${alReves}`)
        : console.info(`No es palíndromo. Palabra original ${palabra}, palabra al revés ${alReves}`)

}

palindromo();
palindromo('Hola mundo');
palindromo('Salas')

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = '', patron = '') => 
    (!texto)
        ? console.warn('No ingresaste el texto.')
        : (!patron)
            ? console.warn('No ingresaste un patron de caracteres')
            : console.info(texto.replace(new RegExp(patron, 'ig'), ''));


eliminarCaracteres();
eliminarCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// Después de definir el código de número aleatorio entre 0 y 100, agrupamos y sumamos 500
// Math.round((Math.random() * 100) + 500)

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));

aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = undefined) => {
    if (!numero) return console.warn('No escribiste un número');

    numero = String(numero);
    let reverso = numero.split('').reverse().join('');
    (numero === reverso)
        ? console.info(`El número Sí es capicúa. Número original: ${numero}. Numero al revés: ${reverso}.`)
        : console.info(`El número No es capicúa. Número original: ${numero}. Numero al revés: ${reverso}.`)
}

capicua(123321);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
// Uso de loop for y método .reduce()
const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn('No introduciste un número.')
    if (typeof numero != 'number') return console.error(`El valor '${numero}' ingresado NO es un número`);
    if (numero === 0) return console.error('El número no puede ser cero.');
    if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo.');

    
    let arreglo = [];
    for (let i = numero; i >= 1; i--) {
        arreglo.push(i)
    }
    console.log(arreglo)
    arreglo = arreglo.reduce((acc, el) => acc * el, 1)

    console.log(arreglo);
}

factorial(4);


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un número.');
    if (typeof numero !== 'number') return console.error('El valor ingresado NO es del tipo número.');
    if (numero === 0) return console.error('El número no puede ser 0.');
    if (numero === 1) return console.error('El número no puede ser 1.')
    if (Math.sign(numero) === -1) return console.error('el número no puede ser negativo.');

    //Usamos for. antes creamos una variable validadora inicializada en false.
    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if ((numero%i) === 0) {
            divisible = true;
            // Usamos break para dejar detener el ciclo.
            break;
        }
    }

    return (divisible)
        ? console.log(`El número ${numero} NO es primo.`)
        : console.log(`El número ${numero} SÍ es primo.`);
}

numeroPrimo();
numeroPrimo('320');
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numeroParImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un número.');
    if (typeof numero !== 'number') return console.error('El valor ingresado NO es del tipo número.');

    return ((numero%2) === 0)
        ? console.info(`El número ${numero} es Par.`)
        : console.info(`El número ${numero} es Impar.`)
}

numeroParImpar();
numeroParImpar('23');
numeroParImpar(-398);
numeroParImpar(19);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const temperatura = (temp = undefined, grado = '') => {
    if (!temp) return console.warn('No introduciste la temperatura a convertir.');
    if (!grado) return console.warn('No introduciste la escala de grados.');
    if (typeof temp !== 'number') return console.error('La temperatura debe ser un número.');
    if (grado !== 'c' && grado !== 'f') return console.error('Solo puedes convertir a grados Celcius (c) o grados Fahrenheit (f)')

    return (grado === 'c')
        ? console.info(`La temperatura es de ${temp + 32}° Fahrenheit.`)
        : console.info(`La temperatura es de ${temp - 32}° Celcius`)
}

temperatura(12, '')
temperatura(26, 'c')
temperatura(79, 'f');

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// Uso de parseInt(). Primer parámetro: número o número en string.
//                    Segundo parámetro: base a convertir.
// Uso de .toString(). El parámetro que recibe es la base a convertir.
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste el número a convertir');
    if (typeof numero !== 'number') return console.error(`El valor ${numero} ingresado no es del tipo número`);
    if (base === undefined) return console.warn('No ingresaste la base a convertir.');
    if (typeof base !== 'number') return console.error(`El valor ${base} ingresado no es del tipo número.`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    } else {
        return console.error('El tipo de base a convertir NO es válido.')
    }
}
convertirBinarioDecimal();
convertirBinarioDecimal('2');
convertirBinarioDecimal(100, );
convertirBinarioDecimal(100, '2');
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn('no ingresaste el monto');
    if (typeof monto !== 'number') return console.warn(`El valor ${monto} ingresado No es del tipo número`);
    if (monto === 0) return console.error('El monto no puede ser 0');
    if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo');
    if (typeof descuento !== 'number') return console.error(`El valor ${descuento} ingresado No es del tipo número.`)
    if (Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo.')

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`);
}


aplicarDescuento();
aplicarDescuento('200');
aplicarDescuento(0);
aplicarDescuento(-1000)
aplicarDescuento(1000, '20');
aplicarDescuento(1000, -20);
aplicarDescuento(1000);
aplicarDescuento(1000, 25);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// En el formato time stamp, que es los milisegundos desde el primero d enero de 1970 hasta hoy. 
// Se deben convertir ambas fechas a formato time stamp, se hacen las operaciones necesarias del caso y se convierte el resultado a la unidad de tiempo necesario, considerando que JavaScript toma el tiempo basado en milisegundos.

// como los meses se guardan en un arreglo, los meses están indexados desde cero. Si mayo es el mes cinco, se queda guardado en la posición 4. 

// para JavaScript {}, [], new Date(), y muchas cosas son tipo objeto.
// para validar el tipo de objeto usaremos el operador 'instance of'
// ejemplo ---> [] instanceof Array // output: true
// en este caso ---> if (!fecha instanceof Date) quiere decir 'Si fecha NO es instancia del prototipo Date'

// Para obtener la fecha actual, sacamos una nueva instancia de Date(). Esto devuelve la fecha actual.
// El método para convertir ese tiempo en stamp es newDate().getTime.(). A ese valor le restamos los milisegundos de la fecha dada.
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste la fecha.');
    if (!(fecha instanceof Date)) return console.error('El valor que ingreasaste NO es una fecha valida.')

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    // milisegundos que transcurren en un año.
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365 ;
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

calcularAnios();
calcularAnios({});
calcularAnios(new Date());
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(1884, 4, 23));
calcularAnios(new Date(2084, 4, 23));
calcularAnios(new Date(1993, 7, 3));




