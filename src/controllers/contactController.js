import ContactManager from '../models/contactManager.js';
import { HTTP_STATUS_CODES } from '../constants/httpStatusCode.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import { HttpError } from '../middleware/httpError.js';

const contactManager = new ContactManager();

class ContactController {
  static getAllContacts(req, res) {
    const contacts = contactManager.getAll();
    res.status(HTTP_STATUS_CODES.OK).json(contacts);
  }

  static createContact(req, res) {
    const newContact = contactManager.addContact(req.body);

    if (!newContact.firstName || !newContact.phone || !newContact.email) {
      throw new HttpError(
        ERROR_MESSAGES.VALIDATION.MISSING_REQUIRED_FIELDS,
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    res.status(HTTP_STATUS_CODES.CREATED).json(newContact);
  }

  static updateContact(req, res) {
    const id = parseInt(req.params.id, 10);

    const updatedContact = contactManager.updateContactById(id, req.body);

    if (!updatedContact) {
      throw new HttpError(
        ERROR_MESSAGES.CONTACT.NOT_FOUND,
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    res.status(HTTP_STATUS_CODES.OK).json(updatedContact);
  }

  static deleteContact(req, res) {
    const id = parseInt(req.params.id, 10);

    contactManager.deleteContactById(id);

    res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
  }
}

export default ContactController;
