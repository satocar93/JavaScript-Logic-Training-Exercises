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

// PENDIENTE PENDIENTE PENDIENTE PENDIENTE PENDIENTE 

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
    if (!numero) return console.warn('No introduciste un número.')
    let arreglo = [];
    for (let i = numero; i >= 1; i--) {
        arreglo.push(i)
    }
    console.log(arreglo)
    arreglo = arreglo.reduce((acc, el) => acc * el, 1)

    console.log(arreglo);
}

factorial(4);
