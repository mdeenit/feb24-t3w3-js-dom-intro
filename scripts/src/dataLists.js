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

carsContainerElement.innerHTML = "<ul> </ul>";

dataArray.forEach((car) => {
	console.log(car);

	carsContainerElement.innerText += (car + "\n");
});



