/* se utiliza una funcion asíncrona para obtener datos
de una API ya que una funcion flecha se tiene que hacer un proceso con .this de esperar el response 
y depues el data se me hace mucho mas como asi ya que es un poco parecido a la sintaxis de python  */

/**
 * async function obtenerDatos() {
 let num= 1;
const response = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
const data = await response.json();
console.log(data);
}
obtenerDatos()
*/ 
/* se crea una funcion en la cual va a validar los numeros primos
se me ocurrio la idea de revisar los residuos ya que si sale en cero es es tiene un divisor 
pero el debo recorre el divisor ya que tenia una idea la cual era hacer una condicional que me validara si 
n % 3 o cualquiera es =0 && n % n =0 es primo pero me hacia falta una condicion y es que solo puede tener dos
divisores entonces por ese caso se debe recorer el que se vaya a divir para sabaer si se divide mas de dos veces */
function nose(){
    let nummax= 100 ;
    /* entendiendo mas a profundidad pues ya se sabe que un numero se puede dividir entre el mismo 
    ya ahi una posibilidad encontrada o que no se tiene encuenta y vamos a empezar el for en 2 por lo que 
    solo se va a poder entre 1 y 2 esas dos posibilidades aun no se si hayan numero que se dividan dos 
    veces pero no necesario con 1 o 2  */
    for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }

    if (esPrimo) {
    console.log(`${num} es primo`);
    } else {
    console.log(`${num} no es primo`);
    }
}
}


async function obtenerDatos() {
let nummax= 100 ;
for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }
    if (esPrimo) {
const response = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
const data = await response.json();
console.log(data);
}
}

}

/*
lo que hice fue crear y probar una funcion de numeros primos la cual me funciono para traer pues numero primos 
y pues teniendo en cuenta que podemos concatener variables siemplemente puse a correr numero primos y a pasarlos 
a la api de rick and morty para que me traiga los datos de los personajes ahora hay que hacer una peticion antes
para que me taraiga la longitud de la data osea que si hay no se 1000000mil personajes pues que me traiga todos
pero solo los primos ese seria el siguiente paso 
*/
async function obtenerDatosV3() {
const primos = [];
const person=[];
for(let page =1 ; page <= 2; page++){
    let response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    let data = await response.json();
    count= data.info.count;
    console.log(`Page ${page}conunt ${count}`);
    //console.log(data.info.count);
    let nummax = count;
    //console.log(nummax);
    
    for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }
    if (esPrimo) {
        primos.push(num);
        
    }
}
for (let id of primos) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let data = await response.json();
    person.push(data);
    

}
}
console.log(person.map(p => p.name));
}

async function obtenerDatosV4() {
const primos = [];
const person=[];
for(let page =0 ; page <= 2; page++){
    let response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    let data = await response.json();
    count= data.info.count;
    console.log(`Page ${page}conunt ${count}`);
    //console.log(data.info.count);
    let nummax = count;
    //console.log(nummax);
    
    for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }
    if (esPrimo) {
        primos.push(num);
        
    }
    }
    const chunkSize = 50;
    for (let i = 0 ; i < primos.length ;i += chunkSize){
        const chunk = primos.slice(i, i + chunkSize);
        let response = await fetch(`https://rickandmortyapi.com/api/character/${chunk.join(',')}`);
        let data = await response.json();
        const arrayDePersonajes = Array.isArray(datos) ? datos : [datos];
        // con spread “aplanamos” el array en person:
        person.push(...arrayDePersonajes);

}
    console.log(`Total personajes primos encontrados: ${person.length}`);
    console.log(person.length);
}
}
/* --------------------------------se clara que el count es el total de todas las paginas
y solo es traer una pagina para count y hacer los numeros primos desde ahi porque si no se va a demorar mucho
---------------------------------*/
const fs = require('fs');
const primos = [];
const person=[];
async function obtenerDatosV5() {

    let response = await fetch(`https://rickandmortyapi.com/api/character`);
    let data = await response.json();
    let count= data.info.count;
   
    let nummax = count;
    //console.log(nummax);
    
    for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }
    if (esPrimo) {
        primos.push(num);
        console.log(`El numero ${num} es primo y se agrego a la lista`);
    }
    }
    primos.unshift(1);
    const chunkSize = 50;
    for (let i = 0 ; i < primos.length ;i += chunkSize){
        const chunk = primos.slice(i, i + chunkSize);
        let response = await fetch(`https://rickandmortyapi.com/api/character/${chunk.join(',')}`);
        let data = await response.json();
        if (Array.isArray(data)) {
        person.push(...data);
        } else {
        person.push(data);
        }


}

    console.log("Cantidad de primos en el array:", primos.length);
    console.log("Primer primo:", primos[0]);
    console.log("Último primo:", primos[primos.length - 1]);
    console.log("Cantidad de personaje en el array:", person.length);
    console.log("Primer personaje:",person[0]);
    console.log("Último personaje:", person[primos.length - 1]);
   
    // Guardar los datos en un archivo JSON
    const personJSON = JSON.stringify(person, null, 2);

fs.writeFile('personajes.json', personJSON, (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
  } else {
    console.log('Archivo personajes.json creado exitosamente');
  }
});

}
obtenerDatosV5()

