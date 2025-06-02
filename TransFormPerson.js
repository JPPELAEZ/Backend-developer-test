const fs = require('fs');

async function transformarPersonajes() {
  try {
    const data = await fs.promises.readFile('personajes.json', 'utf8');
    const personajes = JSON.parse(data);

    const personajesTransformados = personajes.map(p => {
      const [firstname, ...rest] = p.name.split(' ');
      const lastname = rest.join(' ');

      return {
        properties: {
          character_id: p.id.toString(),
          firstname: firstname,
          lastname: lastname,
          status_character: p.status,
          character_species: p.species,
          character_gender: p.gender
        }
      };
    });

    await fs.promises.writeFile(
      'contacts.json',
      JSON.stringify(personajesTransformados, null, 2)
    );

    console.log('Archivo transformado y guardado como contacts.json');
    console.log(`Se generaron ${personajesTransformados.length} contactos.`);

  } catch (err) {
    console.error('Error al transformar los personajes:', err);
  }
}

transformarPersonajes();
