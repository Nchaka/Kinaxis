# Kinaxis
Dynamic Chart Demo

You now need Node.js to run the application

You can also serve the JSON file using the getJSON callback. For instance do:
http://localhost:8080/getJSON

Combine graphs using the dataPointsTitles array

The graph now allows you to combine graphs based on the titles. For instance, a title such as "Sales & Operations" would tell the application to look for the "Operations" chart and combine it with the user supplied (via JSON) graph. There are two requirements when editing this variable:
- dataPointsTitles length must always be the same as the dataPointsSum (the JSON). That's because dataPointsTitles adds meaning and is used as an identifier
- The 2nd section of the title after the ampersand symbol must be already defined in dataPointsTitles as a single graph, otherwise it is assumed to be the same as the 1st section of the title

Note: The 2nd graph stacking on the 1st one is not provided by the user. It is calculated dynamically based on existing data. For instance, on the "Demand & Sales" combined graph, a new "Demand" was detected on the JSON, and the "Sales" was found by the application. 
