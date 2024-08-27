let dataArray = [
	"warthog",
	"interceptor",
	"herbie",
	"lightning mcqueen",
	"batmobile",
	"bat tumbler",
	"cybertruck",
	"delorean",
	"elanore",
	"magic school bus",
	"toyota corolla"
];

// Find elements on the page for us to use the logic 
let carsContainerElement = document.getElementById("carsContainer");

// Create elements to add to the page via the logic 
let carsContainerList = document.createElement("ul");

function renderData() {
// Do logic for each individual item in the array 
dataArray.forEach((car) => {

	// Verify what we are working with, just log it to see the data's value 
	console.log(car);

	// Create a new HTML element to help us format the data's value 
	let newCarEntry = document.createElement("li");

	// Add the data to the new element 
	newCarEntry.innerText += car;

	// Add a button to each entry 
	// click on the button to reomove the entry from the list 
	let removeButton = document.createElement("button");
	// removeButton.innerButton to the car entry 
	removeButton.innerText = 'Remove ${car}'; 
	// Add the nicely-formatted element into the list container 
	carsContainerElement.appendChild(newCarEntry);
	removeButton. 
	removeButton.onclick = (() => removeCarFromDataList(car));
});
	
	carsContainerElement.appendChild(carsContainerElement);



}






function removeCarFromDataList (targetItemToRemove) {
	dataArray. data.Array.filter((car) => car != targetItemToRemove);

	renderData();
}