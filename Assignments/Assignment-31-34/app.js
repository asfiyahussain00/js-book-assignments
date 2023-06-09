 // 1. Write a program that displays current date and time in
// your browser.
var today = new Date();
var date = today.toLocaleDateString();
var time = today.toLocaleTimeString();
document.write("Current date is " + date + " and the time is " + time);

// 2. Write a program that alerts the current month in words.
//For example December.
var today = new Date();
var month = today.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert(monthNames[month]);


//3. Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show

//var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var current = new Date();
//var currentDay = days[currentDate.getDay()];
//var  day = currentDay.substring(0, 3);
//alert( "Today is "+  day)

//4. Write a program that displays a message “Its Fun day” if
//its Saturday or Sunday today.
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var currentDate = new Date();
var currentDay = days[currentDate.getDay()];
if (currentDay === 'Sat' || currentDay === 'Sun') {
alert("It's Fun day");
} else {
alert("It's not Fun day");
}

//5. Write a program that shows the message “First fifteen
//days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.

var currentDate = new Date();
var currentDay = currentDate.getDate();

if (currentDay < 16) {
alert("First fifteen days of the month");
} else {
alert("Last days of the month");
}

//6. Write a program that determines the minutes since
//midnight, Jan. 1, 1970 and assigns it to a variable that
//hasn't been declared beforehand. Use any variable you like
//to represent the Date object.
var currentDate = new Date();
var minutesSinceEpoch = (currentDate.getTime() / 1000) / 60;
console.log(minutesSinceEpoch);



//7. Write a program that tests whether it's before noon and
//alert “Its AM” else “its PM”.

var currentDate = new Date();
var currentHour = currentDate.getHours();

if (currentHour < 12) {
alert("It's AM");
} else {
alert("It's PM");
}


//8. Write a program that creates a Date object for the last day
//of the last month of 2020 and assigns it to variable named
//laterDate.

var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

//9. Create a date object of the starting date of this Ramadan
//and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015

var ramadanStartDate = new Date(2015,5,18);
var currentDate = new Date();
var timeDiff = Math.abs(currentDate.getTime() - ramadanStartDate.getTime());
var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
alert(daysDiff + "Days past since 1st Ramadan: " );

//10. Write a program that displays in your browser the
//seconds that elapsed between the reference date and the
//beginning of 2015.


var referenceDate = new Date("Jan 1, 1970 00:00:00");
var beginningOf2015 = new Date("Jan 1, 2015 00:00:00");
var timeDiff = Math.abs(beginningOf2015.getTime() - referenceDate.getTime());
var secondsDiff = Math.ceil(timeDiff / 1000);
alert("Seconds elapsed between the reference date and the beginning of 2015: " + secondsDiff);



//11. Create a Date object for the current date and time.
//Extract the hours, reset the date object an hour ahead and
//finally display the date object in your browser.

var currentDate = new Date();
var currentHour = currentDate.getHours();
currentDate.setHours(currentHour + 1);
document.write("Date object after resetting an hour ahead: " + currentDate);

//12. Write a program that creates a date object and show the
//date in an alert box that is reset to 100 years back?

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date object reset to 100 years back: " + currentDate);

//13. Write a program to ask the user about his age. Calculate
//and show his birth year in your browser.

var age = prompt("What is your age?");
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);


//14. Write a program to generate your K-Electric bill in your
//browser. All the amounts should be rounded off to 2
//decimal places. Display the following fields:
//a. Customer Name
//b. Current Month


var customerName = prompt("What is your name?");
var currentDate = new Date();
var currentMonth = currentDate.toLocaleString('default', { month: 'long' });
var unitsConsumed = prompt("How many units have you consumed this month?");
var chargesPerUnit = 16;
var netAmountPayable = unitsConsumed * chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>Units Consumed: " + unitsConsumed + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit + "</p>");
document.write("<br>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>")