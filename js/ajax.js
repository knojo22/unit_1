function initialize (){
  jsAjax();
  // jqueryAjax();
};

function jsAjax(){
//Creates a request object
  var ajaxRequest = new XMLHttpRequest();
  var data;
  console.log(ajaxRequest);

// Creates an Event Handler for the request
  ajaxRequest.onreadystatechange = function(){
    console.log(ajaxRequest.readyState);
    if (ajaxRequest.readyState == 4){
      data = ajaxRequest.response;
      // Calls the callback
      jsCallback(data);
    }
  };

  // Opens the ajax request
  ajaxRequest.open('GET', 'data/MegaCities.geojson', true);

  // Sets the response type of the data
  ajaxRequest.responseType = "json"

  // Sends the request to the server
  ajaxRequest.send();
};

function jsCallback(data){
  //Adds response to the page as plain text
  var htmlString = "<h3>JavaScript AJAX Response Text:</h3>";
  htmlString += JSON.stringify(data);
  // Makes a paragraph to hold the data
  var p = document.createElement("p");
  p.innerHTML = htmlString;
  document.getElementById("mydiv").appendChild(p);
};

// Using Ajax with jquery
// function jqueryAjax(){
//   $.ajax("data/MegaCities.geojson", {
//     'dataType': "json",
//     'success': jQueryCallback
//   });
// }

function jQueryCallback(data){
  console.log(data);
  var htmlString = "<h3>jQuery AJAX Response Text:</h3>";
  htmlString += JSON.stringify(data);
  $("mydiv").append("<p>"+htmlString+"</p>");
};


$.getJSON("data/MegaCities.geojson", jQueryCallback);
window.onload = initialize()
