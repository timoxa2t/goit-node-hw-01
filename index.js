const contacts = require("./contacts")
const argv = require('yargs').argv


function log(data){
    console.log(data)
}

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
        contacts.listContacts()
        .then(log)
        break;
  
      case "get":
        contacts.getContactById(id)
        .then(log)
        break;
  
      case "add":
        contacts.addContact(name, email, phone)
        .then(log)
        break;
  
      case "remove":
        contacts.removeContact(id)
        .then(log)
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  
  invokeAction(argv);