import { defaultContacts } from '../data/defaultContacts.js';

class ContactManager {
  constructor() {
    this.contacts = defaultContacts;
    this.id = defaultContacts.length;
  }

  getAll() {
    return this.contacts;
  }

  addContact(contact) {
    const newContact = { id: this.id++, ...contact };
    this.contacts.push(newContact);
    return newContact;
  }

  findContactById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContactById(id, updatedData) {
    const contactIndex = this.#findIndexById(id);

    if (contactIndex === -1) {
      throw new Error('Contact not found');
    }

    this.contacts[contactIndex] = {
      ...this.contacts[contactIndex],
      ...updatedData,
    };

    return this.contacts[contactIndex];
  }

  deleteContactById(id) {
    const contactIndex = this.#findIndexById(id);

    if (contactIndex === -1) {
      throw new Error(ERROR_MESSAGES.CONTACT.NOT_FOUND);
    }

    const deletedContact = this.contacts.splice(contactIndex, 1);
    return deletedContact[0];
  }

  #findIndexById(id) {
    return this.contacts.findIndex((contact) => contact.id === id);
  }
}

export default ContactManager;
