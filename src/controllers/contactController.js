import ContactManager from '../models/contactManager.js';

const contactManager = new ContactManager();

class ContactController {
  static getAllContacts(req, res) {
    res.json(contactManager.getAll());
  }

  static createContact(req, res) {
    try {
      const newContact = contactManager.addContact(req.body);
      res.status(201).json(newContact);
    } catch (err) {}
  }

  static updateContact(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedContact = contactManager.updateContactById(id, req.body);
      res.json(updatedContact);
    } catch (err) {
      res.status(404).send(err.message);
    }
  }

  static deleteContact(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedContact = contactManager.deleteContactById(id);
      res.json(deletedContact);
    } catch (err) {
      res.status(404).send(err.message);
    }
  }
}

export default ContactController;
