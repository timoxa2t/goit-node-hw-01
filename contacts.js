const fs = require("fs").promises
const path = require("path")
var uuid = require('uuid');

const contactsPath = path.join(__dirname, "bd", "contacts.json")


function listContacts() {
    return fs.readFile(contactsPath)
    .then(data => {
        return JSON.parse(data.toString())
    })
  }
  
  async function getContactById(contactId) {
    const contacts = await listContacts()
    return contacts.find(item => item.id == contactId)
  }
  
  async function removeContact(contactId) {
    const contacts = await listContacts()
    const filteredContacts = contacts.filter(item => item.id !== contactId)
    await fs.writeFile(contactsPath, JSON.stringify(filteredContacts))
    return filteredContacts
  }

  
  async function addContact(name, email, phone) {
    const contacts = await listContacts()
    contacts.push({id: uuid.v1(), name, email, phone})
    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    return contacts
  }

module.exports = {listContacts, getContactById, removeContact, addContact}