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


// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarLetras = (cadena = '') => {
    if (!cadena) return console.warn('No ingresaste una cadena de texto.');
    if (typeof cadena !== 'string') return console.error(`El valor ${cadena} ingresado No es del tipo texto.`);
    // Crear dos variables contadoras. una para vocales y otra para consonantes.
    let vocales = 0,
        consonantes = 0;
    // convervir todo a minusculas para hacer más sencilla la validación con expresiones regulares.
    cadena = cadena.toLowerCase();
    // for of --> permite iterar sobre un elemento iterable (cadenas de texto y arreglos.).
    for (const letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) vocales ++; 
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes ++; 

    }
    // retornar un objeto.
    return console.info({
        cadena: cadena,
        vocales: vocales,
        consonantes: consonantes
    })
}

contarLetras();
contarLetras(3);
contarLetras('Hola Mundo');
contarLetras('Ñoño');

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// En esta función se espera recibir caracteres, caracteres especiales y espaciós vacíos.
// la expresión regular tendrá que validar letras y espacios en blanco.
// ^ --> 'No puede haber nada antes de esta expresión'.
// $ -->  'No puede haber nada después de esta expresión'.
// [] --> Agrupadores.
// + --> Evalúa cada caracter de la cadena de texto.
// Dentro de los corchetes se ponen: Alfabeto mayús y minús, vocales acentuadas mayús y minús. eñes y u con diéresis, espacios en blanco (\s).
const validarNombre = (nombre = '') => {
    if (!nombre) return console.warn('No ingresaste un nombre.');
    if (typeof nombre !== 'string') return console.error(`El valor ${nombre} ingresado NO es de tipo texto.`);
    
    let expReg = /^[A-Za-zÑnÁáÉéÍíÓóÚúÜú\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`'${nombre}', es un nombre válido`)
        : console.info(`'${nombre}', NO es un nombre válido`);
}

validarNombre();
validarNombre(3);
validarNombre('Santiago Torres Carvajal');

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
    if (!email) return console.warn('No ingresaste un E-mail.');
    if (typeof email !== 'string') return console.error(`El valor ${email} ingresado NO es de tipo texto.`);
    // expresión regular para validar un e-mail
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`'${email}', es un E-mail válido`)
        : console.info(`'${email}', NO es un E-mail válido`);
}

validarEmail();
validarEmail(34);
validarEmail('jon,mir,cha@gmail');
validarEmail('jonmircha@gmail.com');

// 20.1) Validación de nombre y correo en una sola función.

const validarPatron = (cadena = '', patron= undefined) => {
    if (!cadena) return console.warn('No ingresaste la información a evaluar.');
    if (typeof cadena !== 'string') return console.error(`El valor ${cadena} ingresado NO es de tipo texto.`);
    if (patron === undefined) return console.warn('No ingresaste el patron a identificar.');
    if (!(patron instanceof RegExp)) return console.error(`El valor ${patron} ingresado NO es una expresión regular.`);
    // expresión regular para validar un e-mail
    let expReg = patron.test(cadena);

    return (expReg)
        ? console.info(`'${cadena}' SI cumple con el patrón de ingresado.`)
        : console.info(`'${cadena}' NO cumple con el patrón ingresado`);
}


validarPatron();
validarPatron({});
validarPatron('Hola');
validarPatron('Hola', 'esto no es un patrón');
validarPatron('Hola', [1, 2, 3]);
validarPatron('Santiago Torres19', /^[A-Za-zÑnÁáÉéÍíÓóÚúÜú\s]+$/g);
validarPatron('Santiago Torres', /^[A-Za-zÑnÁáÉéÍíÓóÚúÜú\s]+$/g);
validarPatron('santiago.torres@correounivalle.edu.co', /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// Uso de Array.map()
const devolverCuadrados = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arreglo está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // Validación de que cada elemento del arreglo es un número: uso de for of
    for (let num of arr) {
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número.`);
    }

    // el: 'elemento'
    const newArr = arr.map(el => el * el);

    return console.info(`Arreglo original: ${arr}.\nArreglo elevado al cuadrado: ${newArr}.`);
}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, '3', 4, {}]);
devolverCuadrados([1, 3, {}]);
devolverCuadrados([1, 4, 8]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

// Mismas validaciones de errores

// Uso de los métodos min y max del objeto Math. max() y min() reciben como parámetros arreglos con spread operator.
const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // Validación de que cada elemento del arreglo es un número: uso de for of
    for (let num of arr) {
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número.`);
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`);
}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2, 3, true]);
arrayMinMax([1, 2, 5, 99, -60]);


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// Mismas validaciones de errores. uso de Array.filter()
// Los datos se retornaran en un objeto para simplificar.
const separarParesImpares = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // Validación de que cada elemento del arreglo es un número: uso de for of
    for (let num of arr) {
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número.`);
    }

    return console.info({
        Pares: arr.filter(num => num % 2 === 0),
        Impares: arr.filter(num => num % 2 === 1)
    })
}

separarParesImpares();
separarParesImpares('hola');
separarParesImpares([]);
separarParesImpares([2, 4, 'j']);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // Validación de que cada elemento del arreglo es un número: uso de for of
    for (let num of arr) {
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número.`);
    }
    // Nos piden retornar un objeto.
    // asc --> ordenamiento Ascendente. desc --> ordenamiento Descendiente.
    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    });
}

ordenarArreglo();
ordenarArreglo('HOla');
ordenarArreglo([]);
ordenarArreglo([1, 2,'t']);
ordenarArreglo([7, 5, 7, 8, 6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//Solución 1: con filter.
const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // El arreglod debe tener dos o más elementos para que se presenten elementos duplicados.
    if (arr.length === 1) return console.error('El arreglo debe tener al menos 2 elementos.');
// NOs piden retornar un objeto.
    return console.info({
        original: arr,
        sinDuplicaros: arr.filter((value, index, self) => self.indexOf(value) === index)
    })
}

quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(['x', 10, 'x', 2, '10', 10, true, true]);

// Solución 2: con set --> genera un objeto en el cual no se permitan elementos duplicados.
const quitarDuplicados2 = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // El arreglod debe tener dos o más elementos para que se presenten elementos duplicados.
    if (arr.length === 1) return console.error('El arreglo debe tener al menos 2 elementos.');
// NOs piden retornar un objeto.
console.info({
    original: arr,
    // Crear una nueva instancia del objeto Set. Set recibe como parámetro un elemento iterable.
    sinDuplicados: [...new Set(arr)]
})    
}

quitarDuplicados2(['x', 10, 'x', 2, '10', 10, true, true])

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//Uso de .reduce()
const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es del tipo Arreglo');
    // Manejo de error si arregloe está vacío:
    if (arr.length === 0) return console.error('El arreglo está vacío.');
    // Validación de que cada elemento del arreglo es un número: uso de for of
    for (let num of arr) {
        if(typeof num !== 'number') return console.error(`El valor ${num} ingresado NO es un número.`);
    }
    // .reduce() recibe una función que recibe tres parámetros: acumulador, elemento actual, posición del elemento y por ultimo el arreglo como tal.
    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            // Hay que validar cuando se va a acabar. El valor del indice del elemento de iteración actual debe ser igual al valor del último elemento en el arreglo:
            if (index ===arr.length - 1) {
                return `El promedio de ${arr.join(' + ')} es ${total / arr.length}`;
            } {
                return total;
            }
        })
    );
}

promedio();
promedio({});
promedio([]);
promedio([2, true]);
promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

