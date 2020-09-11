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

		
               

window.addEventListener("load", function() {
         let form = document.querySelector("form");
         form.addEventListener("submit", function() {
		let pname = document.querySelector("input[name=pilotName]");
                let cname = document.querySelector("input[name=copilotName]");
                let flevel = document.querySelector("input[name=fuelLevel]");
                let cmass = document.querySelector("input[name=cargoMass]");		
		
		flevel.value = Number(flevel.value);
                cmass.value = Number(cmass.value);

		if (pname.value === "" || cname.value === "" || flevel.value === "" || cmass.value === "") {
                        alert("All fields are required!");
                } else if ((typeof(pname.value) !== 'string') || (typeof(cname.value) !== 'string')){
                        alert("Pilot and Copilot names must be strings!");
                } else if (isNaN(flevel.value) || isNaN(cmass.value)){
                        alert("Fuel level  and cargo mass values  must be numbers!");
                } else {
				
		let pstatus = document.getElementById("pilotStatus");
                let copstatus = document.getElementById("copilotStatus");
                let fstatus = document.getElementById("fuelStatus");
                let cstatus = document.getElementById("cargoStatus");
                let fItems = document.getElementById("faultyItems");
                let lStatus = document.getElementById("launchStatus");
	
		 pstatus.innerHTML += ": ";
                 pstatus.innerHTML += pname;
                 pstatus.innerHTML += " is ready for launch!";

                 copstatus.innerHTML += ": ";
                 copstatus.innerHTML += cname;
                 copstatus.innerHTML += " is ready for launch!";

                 if (flevel.value < 10000){
                         fItems.style.visibility = "visible";
                         lStatus.innerHTML = "Shuttle not ready for launch";
                         lStatus.style.color = "red";
                 }
	
		}
		return false;
      });
});
