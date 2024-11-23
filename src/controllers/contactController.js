import ContactManager from '../models/contactManager.js';
import { HTTP_STATUS_CODES } from '../constants/httpStatusCode.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import { HttpError } from '../middleware/httpError.js';

const contactManager = new ContactManager();

class ContactController {
  static async getAllContacts(req, res) {
    try {
      const contacts = contactManager.getAll();
      res.status(HTTP_STATUS_CODES.OK).json(contacts);
    } catch (error) {
      next(error);
    }
  }

  static async createContact(req, res, next) {
    try {
      const { firstName, phone, email } = req.body;

      if (!firstName || !phone || !email) {
        throw new HttpError(
          ERROR_MESSAGES.VALIDATION.MISSING_REQUIRED_FIELDS,
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      const newContact = contactManager.addContact(req.body);
      res.status(HTTP_STATUS_CODES.CREATED).json(newContact);
    } catch (error) {
      next(error);
    }
  }

  static async updateContact(req, res, next) {
    try {
      const id = ContactController.#parseId(req.params.id);

      const updatedContact = contactManager.updateContactById(id, req.body);

      if (!updatedContact) {
        throw new HttpError(
          ERROR_MESSAGES.CONTACT.NOT_FOUND,
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

      res.status(HTTP_STATUS_CODES.OK).json(updatedContact);
    } catch (error) {
      next(error);
    }
  }

  static async deleteContact(req, res, next) {
    try {
      const id = ContactController.#parseId(req.params.id);

      contactManager.deleteContactById(id);

      res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
    } catch (error) {
      if (error.message === ERROR_MESSAGES.CONTACT.NOT_FOUND) {
        return next(
          new HttpError(
            ERROR_MESSAGES.CONTACT.DELETE_FAILED,
            HTTP_STATUS_CODES.NOT_FOUND
          )
        );
      }
      next(error);
    }
  }

  static getContactById(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      const contact = contactManager.findContactById(id);

      if (!contact) {
        throw new HttpError(
          ERROR_MESSAGES.CONTACT.NOT_FOUND,
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

      res.status(HTTP_STATUS_CODES.OK).json(contact);
    } catch (error) {
      next(error);
    }
  }

  static #parseId(id) {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      throw new HttpError(
        ERROR_MESSAGES.VALIDATION.INVALID_ID,
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }
    return parsedId;
  }
}

export default ContactController;
