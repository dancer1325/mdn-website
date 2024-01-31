// Create a new Document
let newDocument = new Document();

// Create a body element and append it to the document
const newBody = newDocument.createElement('body');
newDocument.appendChild(newBody);

// Create elements and add them to the document
const newDiv = newDocument.createElement('div');
newDiv.textContent = 'Hello, world!';
newBody.appendChild(newDiv);

// Serialize the document to a string
const serializedDocument = new XMLSerializer().serializeToString(newDocument);

console.log(serializedDocument);








// Pass the new document's content to the existing document
let newDocumentToPassContent = document.implementation.createHTMLDocument('New Document');

// Create elements and add them to the new document
const newDivToPass = newDocumentToPassContent.createElement('div');
newDivToPass.textContent = 'Hello, world!';
newDocumentToPassContent.body.appendChild(newDivToPass);

// Serialize the new document to a string
let serializedDocumentToPass = new XMLSerializer().serializeToString(newDocumentToPassContent);

console.log(serializedDocumentToPass);

// Manipulate the existing document in the browser
document.body.innerHTML = serializedDocumentToPass;
