var ourRequest= new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload= function(){
//	if (ourRequest.status >= 100 && ourRequest.status >= 1000){  // THIS IS FOR ERROR HANDLING
		var data= JSON.parse(ourRequest.responseText);
	    createHTML(data) // this is to show display the information
// } else{
//	console.log( " we connected to the server bu it retured an error")
// }
	}

	

ourRequest.onerror = function(){    // this is done to handle for any errors that might happen
	console.log(" Connection error");
};
ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear){
    var age = new Date ().getFullYear() - birthYear;
    
    if(age>0){
        return age + " years old ";
    } else{
        return " Less than a year old"
    }

});

function createHTML(petsData){
   var rawTemplate = document.getElementById("pets-template").innerHTML;
   var compiledTemplate = Handlebars.compile(rawTemplate);
   var ourGeneratedHTML = compiledTemplate(petsData);

   var petsContainer = document.getElementById("pets-container");
   petsContainer.innerHTML = ourGeneratedHTML;
}
