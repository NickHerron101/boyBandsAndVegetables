console.log("hello");

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

//Loop through the two arrays provided (bands and vegetables)
//and output each element in the arrays into their corresponding HTML <div> element.

var loopCount = 5;
// The number of loops to perform (what if the array changes?)

// Keep track of which band we're on in the loop


// Keep track of which veggie we're on in the loop

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
// Start looping
for (var i = 0; i < loopCount; i += 1) {
	var currentBand = bands[i];
	var currentVeggie = vegetables[i];
	bandElement.innerHTML += currentBand + " ";
	veggieElement.innerHTML += currentVeggie;
}

//Loop through the two arrays provided (bands and vegetables)
//and output each element in the arrays into their corresponding HTML <div> element.
//
//