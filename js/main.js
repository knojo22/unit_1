//Initializing the function called when the script loads
function initialize(){
	cities();
};

//Defining a function to create a table with cities and their populations
function cities(){
	//Defining one array: City and Population
	var cityPop = [
	   {
			city: 'Madison',
			population: 233209
	   },
	    {
			city: 'Seattle',
			population: 652405
	   },
	    {
			city: 'Portland',
			population: 609456
	   },
	    {
			city: 'San Francisco',
			population: 837442
	   }
	];

	//Appending the table element to the div
	$("#mydiv").append("<table>");

	//Appending a header row to the table
	$("table").append("<tr>");

	//Adding the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");


	//loop to add a new row for each city
  for (var i = 0; i < cityPop.length; i++){
      //assign longer html strings to a variable
      var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
      //add the row's html string to the table
      $("table").append(rowHtml);
  };

  addColumns(cityPop);
  addEvents();
};

// Creating a column for the city size and fills the cell based on the population.
 function addColumns(cityPop){
// Running the function for each row in the HTML table
    $('tr').each(function(i){
// The "if" statement
    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {
/* Creating the variable "citySize" which will fill in the cells depending on
the "if/else" statement for population size. */
    		var citySize = document.createElement("td");

    		if (cityPop[i-1].population < 100000){
    			citySize.innerHTML = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize.innerHTML = 'Medium';

    		} else {
    			citySize.innerHTML = 'Large';
    		};
// Appends the values for each city in jquery notation.
    		$(this).append(citySize);
    	};
    });
};
// Defining the event occurrences for the website.
function addEvents(){
/* Defining what happens when the user brings the mouse over the table.
(i.e. .mouseover()) */
	$('table').mouseover(function() {
/* Creating a variable "color" to randomly pick three numbers for the R, G and
B values and concatenates them */
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ","

			} else {
				color += ")"
		};
	$(this).css("color",color);
	};
});

	function clickme(){
// Creating a popup when the text is clicked on by the user.
		alert('Hey, you clicked me!');
	};
// Adding the event listener to the script so the alert task can occur.
	$('table').on("click", clickme);
};
//Calling the initialize function when the document has loaded
$(document).ready(initialize);
