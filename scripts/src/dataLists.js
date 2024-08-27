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


let carsContainerElement = document.getElementById("carsContainer");

carsContainerElement.appendChild(document.createElement("ul"));

let carsContainerList = 


dataArray.forEach((car) => {
	console.log(car);

	carsContainerElement.getElementsByTagName("ul")[0].innerText += (car + "\n");
});



