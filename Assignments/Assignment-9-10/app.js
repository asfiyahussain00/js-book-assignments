// 1. Write a program to take “city” name as input from user. If
//user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

var city = prompt( "Enter your city name");

if(city==="karachi"){
    alert("welcome to city of light! ");}

//2. Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the
//user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if(gender==="male"){
   alert("Good Morning sir !");}

else if(gender==="female"){
   alert("Good Morning ma'am ! ");}

 //3. Write a program to take input color of road traffic signal
//from the user & show the message according to this table:

var color = prompt( "Enter the traffic signals  color : \n red green or yellow ")
if(color==="red"){document.write(  "Red light :Must stop");}

if(color==="green"){document.write("Green light: Ready to move");}

if(color=== "yellow"){document.write(" yellow light: now move");}

//4. Write a program to take input remaining fuel in car (in
//litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

var remfuel = prompt("Enter the remaining fuel in your car :");

if (remfuel < 0.25) {
 alert("Please refill the fuel in your car.");}


//5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)// {alert("The cost equals");}

if (true)
 {alert("True");}
if
 (false)
  {alert("False");}
if ("car" < "cat")
 {alert("car is smaller than cat");}


 // 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var subject1 = +prompt("Enter marks obtained in subject 1:");
var subject2 = +prompt("Enter marks obtained in subject 2:");
var subject3 = +prompt("Enter marks obtained in subject 3:");
var totalmarks = +prompt("Enter total marks:");

var obtainedmarks = subject1+ subject2 + subject3;
var percentage = (obtainedmarks / totalmarks) * 100;
var grade = "";
var remarks = "";

if (percentage >= 80) {
  grade = "A-1";
 remarks = "Excellent";} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";} else if (percentage >= 60) {
 grade = "B";
 remarks = "You need to improve";} else {
 grade = "Fail";
 remarks = "Sorry";}

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalmarks + " <br>" );
document.write("Obtained Marks: " + obtainedmarks + "<br>" );
document.write("Percentage: " +percentage  + "%"+ " <br>" );
document.write("Grade: " + grade + "<br>" );
document.write("Remarks: " + remarks +"<br>" );

//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

// Store a secret number (ranging from 1 to 10) in a variable.
var secretNumber = 7

//input from user
var userinput = +prompt("Guess the secret number between 1 and 10:");


if (userinput === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (
  userinput === secretNumber + 1 ||userinput === secretNumber - 1) {
  alert("Close enough to the correct answer.");}
else {
 alert("Sorry, try again.");}

 
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = +prompt("Enter a number:");

if (num % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("The number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.


var input = +prompt("Enter a number:");

if (input % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temperature = +prompt("Enter the temperature:");

//a. T > 40 then “It is too hot outside.”
if (temperature > 40) {
  alert("It is too hot outside");
  // b. T > 30 then “The Weather today is Normal.”
} else if (temperature > 30) {
 alert("The Weather today is Normal");
  // c. T > 20 then “Today’s Weather is cool.”
} else if (temperature > 20) {
  alert("Today’s Weather is cool");
  // d. T > 10 then “OMG! Today’s weather is so Cool.”
}else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool");
} 

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// a. First number
var firstno = +prompt("Enter first number:");
// b. Second number
var secondno = +prompt("Enter second number:");
//c. Operation (+, -, *, /, %)
var operation = prompt("Enter operation (+, -, *, /, %):");
// Compute & show the calculated result to user.
var result;

if (operation === "+") {
  result = firstno + secondno;
} else if (operation === "-") {
  result = firstno - secondno;
} else if (operation === "*") {
  result = firstno * secondno;
} else if (operation === "/") {
  result = firstno / secondno;
} else if (operation === "%") {
  result = firstno % secondno;
} 
document.write(result);