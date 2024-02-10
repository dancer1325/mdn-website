const styleSheets = document.styleSheets;
const firstStyleSheet = styleSheets[0];
console.log("styleSheets ", styleSheets);

function isCSSStyleSheetInstance() {
  if (firstStyleSheet instanceof CSSStyleSheet) {
    console.log("firstStyleSheet is instance of CSSStyleSheet");
  } else {
    console.log("firstStyleSheet is NOT instance of CSSStyleSheet");
  }
}
isCSSStyleSheetInstance();

//                Modifying the list of rules
firstStyleSheet.deleteRule(1);

function isStyleSheetInstance(instance) {
  if (instance instanceof StyleSheet) {
    console.log(instance," is instance of StyleSheet: true ");
    return;
  }
  console.log(instance," is instance of StyleSheet: false ");
}
isStyleSheetInstance(firstStyleSheet);

function cssRulesPerCSSStyleSheet() {
  const cssRules = firstStyleSheet.cssRules;
  if (cssRules instanceof CSSRuleList) {
    console.log(cssRules, " is instance of CSSRuleList");
    return;
  }
  console.log(cssRules, " is NOT instance of CSSRuleList");
}
cssRulesPerCSSStyleSheet();

function eachCSSStyleSheetIsAssociatedWithOneUniqueDocument() {
  const styleElement = document.getElementById('my-styles');

  // Get the associated CSSStyleSheet instance
  const styleSheet = styleElement.sheet;

  // Log the associated document of the CSSStyleSheet
  console.log('Document associated with the CSSStyleSheet:', styleSheet.ownerNode.ownerDocument);

  // Create a new document
  const newDocument = document.implementation.createHTMLDocument('New Document');

  // Append the style element to the new document
  newDocument.head.appendChild(styleElement);
  // .cloneNode     do NOT unassign to the previous document
  //newDocument.head.appendChild(styleElement.cloneNode(false));
  //newDocument.head.appendChild(styleElement.cloneNode(true));

  // TODO: Why is not reflected as stylesheet in none of the documents
  // Log the associated document of the CSSStyleSheet after setting to another document
  console.log('Document associated with the CSSStyleSheet after setting:', styleSheet.ownerNode);
  console.log('document.styleSheets.length ', document.styleSheets.length, " with just 1 -- Unassign the other one");
  console.log('newDocument.styleSheets.length ', newDocument.styleSheets.length, " with no stylesheet");
}
eachCSSStyleSheetIsAssociatedWithOneUniqueDocument();

function associatedViaImport() {
  // Imported styles are NOT added as another CSSStyleSheet object    == NOT find 'toBeImported.css'
  console.log("styleSheets ", styleSheets);

  // You can find them as CSSRule entry
  const cssRules = firstStyleSheet.cssRules;
  console.log("cssRules ", cssRules);

  const importedCSSRule = cssRules[0];
  if (importedCSSRule instanceof CSSImportRule) {
    console.log("importedCSSRule is instance of CSSImportRule");
  } else {
    console.log("importedCSSRule is NOT instance of CSSImportRule");
  }
  //importedCSSRule.ownerRule is null // TODO: Why?
}
associatedViaImport();
