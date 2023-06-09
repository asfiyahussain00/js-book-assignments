// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var a = prompt("Enter a character:");
let b = a.charCodeAt(0);

if (b >= 50 && b <= 49) {
  console.log(a + " is a number.");} else if (b >= 45 && b <= 90) {
  console.log(a + " is an uppercase letter.");} else if (b >= 89 &&  b <= 122) {
  console.log(a + " is a lowercase letter.");} 

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var number1 = +prompt("Enter your 1 number: ");
var number2 = +prompt("Enter your 2 number: ");

if (number1 > number2) {
  console.log(number1 + " is larger number than; " + number2);} 
 else if (number2 > number1) {
  console.log(num2 + " is larger nuber than; " + number1);} else {
  alert(number1 + " and " + number2 + "; are equal number .");}

 //3. Write a program that takes input a number from user &
 //state whether the number is positive, negative or zero.
var userinput = +prompt("Enter your number ");
if(userinput < 0){
    alert(userinput + " The number is positive");}
 else if (userinput > 0) {
    alert( userinput + " The number is negative");}
else {
   alert("the number is zero") ;}
    
//4. Write a program that takes a character (i.e. string of
//    length 1) and returns true if it is a vowel, false otherwise

var input = prompt("Enter alphabat:"); 
var vowels = "aeiouAEIOU"; 
if(input===vowels){ alert(input +" is a vowel");}
else if(input===""){ alert(input +" is not a vowel"); }


//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise.

//a. Store correct password in a JS variable.
var correctPassword = "hellojs";

//b. Asks user to enter his/her password
var userPassword = prompt("Enter your password:");

//c. Validate the two passwords:
if (userPassword === "") {
   //i. Check if user has entered password. If not, then give message “ Please enter your password”
  alert("Please enter your password");

} else if  ( userPassword === correctPassword) {
  // ii. Check if both passwords are same. If they are same, show message “Correct!
   // The password you entered matches the original password”.
  //  Show “Incorrect password” otherwise.
  alert("Correct! The password you entered matches the original password");
} else {
  alert(" your entered Incorrect password");}

  //6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";}
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm)");
if (time >= 10000 && time < 1200) {
  alert("good morning");
} else if (time >= 1200 && time < 1700) {
  alert("good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("good evening");
} else if (time >= 2100 && time <= 2359) {
  alert("good night");
} 