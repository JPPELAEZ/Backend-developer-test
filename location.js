const fs = require('fs');
const _ = require('lodash');
/*
 fs.readFile('personajes.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  const personajes = JSON.parse(data);

  // Paso 1: obtener los location
  const location = personajes.map(p => p.location);

  // Paso 2: eliminar duplicados por el campo 'url'
  const locationUnique = _.uniqBy(location, 'url');

  // Paso 3: mostrar resultado
  console.log("Unique Locations:", locationUnique);
  // los recorro con el of para que loc tome el valor de cada uno y no el indice 
  for (const loc of locationUnique) {
    console.log(`Nombre: ${loc.name}, URL: ${loc.url}`);
  
  }
});
*/
/*punto importante para leer json creados, y es que es readfile recibe el err y el data 
el err para un error que depronto lo encuete y pues el de data para los datos que necesitamos */
const companies = [];

async function readFile() {
    try {
    // Leer el archivo JSON
    const data = await fs.promises.readFile('personajes.json', 'utf8');
    const personajes =  JSON.parse(data);
    // Obtener los locations
    const location = personajes.map(p => p.location);
    // Eliminar duplicados por el campo 'url'
    const locationUnique = _.uniqBy(location, 'url');
    // Mostrar resultado
    //console.log("Unique Locations:",locationUnique);

    
    for (const loc of locationUnique) {
        if (!loc.url) {
          // Verificar si la URL es válida
           console.warn(`URL no válida: ${loc.url}`);
           continue; // Saltar a la siguiente iteración si la URL no es válida
          
          
        }
      //console.log(`Nombre: ${loc.name}, URL: ${loc.url}`);
      const response = await fetch(loc.url);
      const locationData = await response.json();
        console.log(`ID: ${locationData.id}, Nombre: ${locationData.name}, Tipo: ${locationData.type}, Dimensión: ${locationData.dimension}`);
      companies.push({
    location_id: locationData.id,
    name: locationData.name,
    location_type: locationData.type,
    dimension: locationData.dimension,
    creation_date: locationData.created,
  
});
    }
  } catch (err) {
    console.error('Error al procesar:', err);
  }
    console.log(companies)
    fs.writeFileSync('companias.json', JSON.stringify(companies, null, 2));
    console.log('Archivo companias.json guardado exitosamente.');
}


readFile()

