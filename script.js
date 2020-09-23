// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

function validation(pname, cname, flevel, cmass) {
                let pTest = Number(pname.value);
                let coTest = Number(cname.value);
		let fTest = Number(flevel.value);
                let mTest = Number(cmass.value);
		
                if (pname.value === "" || cname.value === "" || flevel.value === "" || cmass.value === "") {
                        alert("All fields are required!");
			return false;
                } else if ( !isNaN(pTest) || !isNaN(coTest) || isNaN(fTest) || isNaN(mTest)) {
                        alert("Make sure to enter valid information for each field!");
			return false;
                }
		return true;
}
		
function handleForm(event) {
		
                event.preventDefault();

		let pname = document.querySelector("input[name=pilotName]");
                let cname = document.querySelector("input[name=copilotName]");
                let flevel = document.querySelector("input[name=fuelLevel]");
                let cmass = document.querySelector("input[name=cargoMass]");
		         

		       
		if (validation(pname, cname, flevel, cmass)){

			let pstatus = document.getElementById("pilotStatus");
        	        let copstatus = document.getElementById("copilotStatus");
	                let fstatus = document.getElementById("fuelStatus");
                	let cstatus = document.getElementById("cargoStatus");
        	        let fItems = document.getElementById("faultyItems");
	                let lStatus = document.getElementById("launchStatus");

                	 pstatus.innerHTML = "Pilot Ready: ";
                	 pstatus.innerHTML += pname.value;
                	 pstatus.innerHTML += " is ready for launch!";

                	 copstatus.innerHTML = "Co-pilot Ready: ";
                	 copstatus.innerHTML += cname.value;
                	 copstatus.innerHTML += " is ready for launch!";
			  if (cmass.value < 10000 && flevel.value > 10000) {
                                 fItems.style.visibility = "visible";
                                 lStatus.innerHTML = "Shuttle is ready for launch!";
                                 lStatus.style.color = "green";
                        }     else{
                		 if (flevel.value < 10000){
                        		 fItems.style.visibility = "visible";
					 fstatus.innerHTML = "There is not enough fuel for the journey!";
                        		 lStatus.innerHTML = "Shuttle not ready for launch";
                        		 lStatus.style.color = "red";
                 		} else {
					 fstatus.innerHTML = "Fuel level high enough for launch";
				 }
				 if (cmass.value > 10000){
					 fItems.style.visibility = "visible";
					 cstatus.innerHTML = "There is too much mass for the shuttle to take off!";
                                	 lStatus.innerHTML = "Shuttle not ready for launch";
                                	 lStatus.style.color = "red";
				} else { 
                                	 cstatus.innerHTML = "Cargo mass low enough for launch";
                        	 }
				 if (cmass.value < 10000 && flevel.value > 10000) {
					 fItems.style.visibility = "visible";
                                	 lStatus.innerHTML = "Shuttle is ready for launch!";
                                	 lStatus.style.color = "green";
				}
			}
				
                }
}
 

          
window.addEventListener("load", function() {

	 fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
                   response.json().then(function(json) {
                      const destination = document.getElementById("missionTarget"); 	 
		      destination.innerHTML = `
					<h2>Mission Destination</h2>
					<ol>
					   <li>Name: ${json[2].name}</li>
					   <li>Diameter: ${json[2].diameter}</li>
					   <li>Star: ${json[2].star}</li>
					   <li>Distance from Earth: ${json[2].distance}</li>
					   <li>Number of Moons: ${json[2].moons}</li>
					</ol>
					<img src="${json[2].image}">
					`;
			});
		});
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event){
		handleForm(event);
	});
});
