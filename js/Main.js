// #4 Create an array of 5 numbers each with 2 decimal places.

var numbers = [ 100.23, 101.20, 124.12, 151.11, 120.99, 121.01]

// #5 Loop through that number array
var newNumbers = []
for (var i = 0; i < numbers.length; i++) {
  // round all numbers to the nearest whole integer
  var x = Math.round(numbers[i]);
  // add each to a new array
  newNumbers.push(x);
}
console.log(newNumbers);


//

//

// #6 Create a function that produces 10 random numbers between 1 and 100, and add each number to another array of numbers.

var randomNumber = []
function random() {
	var x= Math.ceil(Math.random()*100)
	// random number between 0-1 mult 100, then using the lower interger) 
	randomNumber.push(x);
	// need to create a loop to activate it
};
	for (var i=0; i<10; i++) {
		random();
	//loop to pull the numbers and the log it
	};
console.log(randomNumber); 



// #7 Create a function that creates a few variables to store the whole date, the current hour, the current minute and the current second.
function newDate(){
var now = new Date();
var hours  = checkTime(now.getHours());
var minutes = checkTime(now.getMinutes());
var seconds = checkTime(now.getSeconds());

 // #8 Inside the function, create a variable using concatination to produce the current time ex. 12:30:45.

var currentTime = hours + ":" + minutes + ":" + seconds;
console.log(currentTime)


// In JS: Inside the function, create a few more variables to store the current month, day, and year.
var day = checkTime(now.getDate());
var month = checkTime(now.getMonth() +1);
// remember for month you wouild need to add one for the index
var year = now.getFullYear() - 2000;
// if you want to show two digit year, you would need to subtract 



//this snip would 0 out any digit less than two digits
function checkTime(i) {
  	if (i < 10) {
		i = "0" + i;
	  }
  	return i;
    }


// #10 In JS: Inside the function, create a variable that will display the current date in the dd/mm/yy format. Don't forget to account for single-digit numbers!

var currentDate = day + "/" + month + "/" + year;
console.log(currentDate)


// #11 Change your function to print this time and date onto your document.

	document.body.innerHTML = currentTime + " " + currentDate;

//In JS: Now write some code that will run this time/date function every second. To do this, your function will need to use setTimeout to invoke itself after a delay.

setTimeout(function() {
	newDate();}, 1000)
}
newDate();

