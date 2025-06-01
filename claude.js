/*no se pero el array se esta sobre escribiendo lo caul no seberia ser
voy a tratar de sacar esa lista y pues a ver que pasas lo que pasa tambien es que 
lo numeros primos estan muy pero muy locos y como hay muchos bucles no se si eso 
lo rompe*/
const personajes =[]
const paginas={}
async function page(){
    for (let page =0 ; page <= 10; page++) {
        const  response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json();
        const count = data.info.count;
        paginas[`pagina_${page}`] = count;

        
        
    }

}

async function esPrimo() {
    const datos = await page(); 
    let nummax = paginas.pagina_0;
    
    for (let num = 2; num <= nummax; num++) {
    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        esPrimo = false;
        break;
    }
    }
    if (esPrimo) {
        console.log(`El numero ${num} es primo`);
        
    }
    }
    
}

/*lo que tengo en mente es hacer una lista pero para poder despues ingresar solo al count y de cada pagina 
sacar los pares pero pues hacerlo en el la lista pero asi una por una
lo otro es que no se como guardalo para que podamos sacar el pagina y cuantos tiene y despues hacer el 
el caluculo de pagina 1 y hay tantos cuantos hay entre ese rango cuantos primos*/


