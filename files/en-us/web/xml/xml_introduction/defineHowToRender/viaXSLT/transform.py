import lxml.etree as ET

# Load the XML document and XSLT stylesheet
xml_doc = ET.parse("books.xml")
xslt_stylesheet = ET.parse("style.xsl")

# Create an XSLT transformer
transformer = ET.XSLT(xslt_stylesheet)

# Apply the transformation
result = transformer(xml_doc)

# Print the transformed result (HTML)
print(ET.tostring(result, pretty_print=True, encoding="utf-8").decode("utf-8"))
