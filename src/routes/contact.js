// Se exporta Express para manejar el servidor
const express = require('express');
// Se importa Router para definir las rutas
const router = express.Router();
// Se importa fetch para hacer peticiones HTTP
const fetch = require('node-fetch');

// ========================
// 🚀 Rutas de la API
// ========================

/**
 * 📌 Ruta para crear un contacto
 * - Recibe un JSON con los datos del personaje
 * - Construye el objeto de forma clara y ordenada
 * - (Próximamente: Verifica si ya existe y hace un fetch a la cuenta espejo)
 */
router.post('/', async (req, res, next) => {
    try {
        // Se extraen los datos desde el cuerpo de la solicitud
        const {
            character_id,
            firstname,
            lastname,
            character_species,
            character_gender,
            status_character,
            company
        } = req.body;

        // Se organiza el objeto en el formato que se va a enviar
        const contact = {
            properties: {
                character_id,
                firstname,
                lastname,
                character_species,
                character_gender,
                status_character,
                company
            }
        };

        // Se muestra el objeto final en consola
        console.log('📦 Objeto preparado para enviar:', contact);

        // Aquí podrías agregar la lógica para verificar si ya existe (fetch con filters)

        // Aquí puedes preparar el fetch POST (cuando estés listo)
        // const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`
        //     },
        //     body: JSON.stringify(contact)
        // });

        // const data = await response.json();
        // console.log('✅ Respuesta de HubSpot:', data);

        // Se responde éxito provisionalmente
        res.status(200).json({ message: 'Objeto creado correctamente (simulado)', contact });

    } catch (error) {
        console.log(`Error al crear contacto: ${error.message}`);
        next(error);
    }
});

module.exports = router;
