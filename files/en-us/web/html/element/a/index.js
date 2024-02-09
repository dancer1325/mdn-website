function createBlobURL() {
  // Create some sample text data
  const textData = "Hello, world! This is some text data stored in a Blob.";

// Create a Blob object containing the text data
  const blob = new Blob([textData], {type: 'text/plain'});

// Generate a Blob URL
  return URL.createObjectURL(blob);
}

const blobAnchorHTMLElement = document.getElementById('blobSchema');
blobAnchorHTMLElement.setAttribute('href', createBlobURL());

function createDataURL() {
  // Create some sample text data
  const textData = "Hello, world! This is some text data stored in a Data URL.";

// Encode the text data in base64
  const base64Data = btoa(textData);

// Generate the Data URL
  return 'data:text/plain;base64,' + base64Data;
}

const dataAnchorHTMLElement = document.getElementById('dataSchema');
dataAnchorHTMLElement.setAttribute('href', createDataURL());
