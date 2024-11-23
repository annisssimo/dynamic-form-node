import express from 'express';
import ContactController from '../controllers/contactController.js';

const contactRouter = express.Router();

contactRouter.get('/contacts', ContactController.getAllContacts);

contactRouter.post('/contacts', ContactController.createContact);

contactRouter.put('/contacts/:id', ContactController.updateContact);

contactRouter.delete('/contacts/:id', ContactController.deleteContact);

contactRouter.get('/contacts/:id', ContactController.getContactById);

export default contactRouter;
