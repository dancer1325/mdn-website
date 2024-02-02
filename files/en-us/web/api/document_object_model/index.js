if (document) {
  console.log("DOM is in memory");
} else {
  console.log("DOM is NOT in memory");
}



// Nodes
// 1. each branch of the tree — ends in a — node
function checkBranchesEndInLeaf(node) {
  // Base case: if the node is a leaf node (no children), return true
  if (node.childNodes.length === 0) {
    return true;
  }

  // Recursively check each child node
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    if (!checkBranchesEndInLeaf(childNode)) {
      return false; // If any child node doesn't end in a leaf node, return false
    }
  }

  // If all child nodes end in a leaf node, return true
  return true;
}

// Call the function with the root node of the DOM tree
const root = document.documentElement; // Get the root HTMLElement of the document
const branchesEndInLeaf = checkBranchesEndInLeaf(root);

// Output the result
if (branchesEndInLeaf) {
  console.log("Each branch ends in a leaf node.");
} else {
  console.log("Not every branch ends in a leaf node.");
}


// 2. objects / node
function checkObjectsPerNode(node) {
  // Check if the node itself is an object
  if (typeof node === 'object' && node !== null) {
    console.log("Node: ", node, " is an object");
  }

  // Check if the node has any properties (excluding functions)
  for (const prop in node) {
    if (typeof node[prop] === 'object' && node[prop] !== null) {
      console.log("Object associated with node:", node[prop]);
    }
  }

  // Recursively check child nodes
  for (let i = 0; i < node.childNodes.length; i++) {
    checkObjectsPerNode(node.childNodes[i]);
  }
}

checkObjectsPerNode(root);


// 3. event handlers / node
// Add a click event handler to each node
function addClickHandlersPerNode(node) {
  // Add a click event handler to the node
  node.addEventListener('click', function() {
    console.log('Clicked on node:', node);
  });

  // Recursively add event handlers to child nodes
  for (let i = 0; i < node.childNodes.length; i++) {
    addClickHandlersPerNode(node.childNodes[i]);
  }
}

addClickHandlersPerNode(root);


// Methods allowed
// 1. Change document's structure
const newDiv = document.createElement('div');
newDiv.textContent = 'New div added!';
document.body.appendChild(newDiv);

// 2. Change document's style
const h1Element = document.getElementById("h1Element");
h1Element.classList.add("newStyle");

// 3. Change document's content
h1Element.textContent = "New textContent changed";


// HTML DOM -- described by -- Document + HTML-specific features
console.log("document.firstChild ", document.firstChild);
