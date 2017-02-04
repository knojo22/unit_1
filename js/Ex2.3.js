/* Javascript code */


function initialize(){
    cities();
};
// Define the function of cities.
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];
// Creation of html table element
    var table = document.createElement("table"); //<table>
// Creation of html row element
    var headerRow = document.createElement("tr"); //<tr> (Table Row)
// Creation of heml cell elemtn and assigns value, adds to row
    var cityHeader = document.createElement("th"); //<th> (Table Cell Header)
    cityHeader.innerHTML = "City"; //<th>City</th>
    headerRow.appendChild(cityHeader); //<tr><th><City</th></tr>
// Creates another cell and adds to header row.
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
// Addition of headerRow
    table.appendChild(headerRow);

// Creation of new row for each city with city name population values.
// Syntax: for(Count Variable, Stop Variable, )
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };
// Get mydiv element and append table
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};

// Run the script once the page is loaded
window.onload = initialize();
