## How to run locally?
* [viaXMLStyleSheet] Open data.xml in your web browser
* [viaXSLT] 
  * Follow the Solution to the Problem1 indicated here
  * Open the generated output.html in your web browser

## Problems
* Problem1: [viaXSLT]Not transformed automatically by the web browser
  * Attempt1: Run a local web server in this path `python -m http.server`
  * Solution: Run the python script `python transform.py > output.html`, getting the result in a file
