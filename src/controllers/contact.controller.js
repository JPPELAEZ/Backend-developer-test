const hubspotService = require('../services/hubspot.service');

exports.createContact = async (req, res, next) => {
  try {
    const contact = req.body;
    const response = await hubspotService.createHubspotContact(contact);
    console.log(`✅ Contacto creado:`, response);
    res.status(201).json({ message: 'Contacto creado', data: response });
  } catch (error) {
    console.error(`❌ Error al crear contacto: ${error.message}`);
    next(error);
  }
};
