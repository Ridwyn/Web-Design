var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var ourRequest= new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
ourRequest.onload= function(){
//	if (ourRequest.status >= 100 && ourRequest.status >= 1000){  // THIS IS FOR ERROR HANDLING
		var ourData= JSON.parse(ourRequest.responseText);
	renderHTML(ourData); // this is to show display the information
// } else{
//	console.log( " we connected to the server bu it retured an error")
// }
	}

	

ourRequest.onerror = function(){    // this is done to handle for any errors that might happen
	consoloe.log(" Connection error");
};
ourRequest.send();
pageCounter++
if(pageCounter>3){
	btn.classList.add("hide-me");
}
})


function renderHTML(data){
	var htmlString = "";
	
	for(i = 0; i<data.length; i++){
		htmlString += "<p>" + data [i].name + " is a " + data[i].species + "that likes to eat "
		
		for(j = 0; j < data[i].foods.likes.length; j++ ){  // used to loop throught the liked food of each animal
			if(j==0){                     // this is used to make space for multiple foods
				htmlString += data[i].foods.likes[j];
				} else{
					htmlString += " and " +data[i].foods.likes[j];
			}
		}

			htmlString += " and dislikes ";	

				for(j = 0; j < data[i].foods.dislikes.length; j++ ){  // used to loop throught the disliked food of each animal
			if(j==0){                     // this is used to make space for multiple foods
				htmlString += data[i].foods.dislikes[j];
				} else{
					htmlString += " and " +data[i].foods.dislikes[j];
			}
		}

			htmlString += "</p>";
	}
	
	
	
	animalContainer.insertAdjacentHTML('beforeend', htmlString );
}
