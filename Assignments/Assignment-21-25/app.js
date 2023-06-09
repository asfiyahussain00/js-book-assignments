//1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.
var fristName=prompt("Enter your frist name");
var secondName=prompt("Enter your second name");
var fullName =( fristName + secondName);
alert("hello!" +fullName );

//2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser
var favMob =prompt("Enter your favourite phone model");
var length =favMob.length;
alert("my favourit model is "+ favMob + "length of string " + length );

//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser
let word = "Pakistani";
let index = word.indexOf("n");
alert(`The index of "n" in the word "Pakistani" is ${index}.`);

//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser
var string = "Hello World";
var lastIndex = string.lastIndexOf("l");
alert(`The last index of "l" in the word "Hello World" is ${lastIndex}.`);

//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.
var city = "Pakistani";
var character = word.charAt(3);
alert(`The character at the 3rd index in the word "Pakistani" is ${character}.`);

//6. Repeat Q1 using string concat() method.
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var res = firstName.concat(" ", lastName);

alert("Hello,"+ res);

//7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser
var name = "Hyderabad";
var newWord = name.replace("Hyder", "Islam");
alert(`The new word is ${newWord}.`);

//8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace("&");
alert(`The new message is ${newMessage}.`);

//9. Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.
var stringNumber = "472";
var number = Number(stringNumber);

alert(`The string "${stringNumber}" is now a number: ${number}.`);
alert(`The type of ${number} is ${typeof number}.`);

//10. Write a program that takes user input. Convert and
//show the input in capital letters.
var userinput = prompt("enter your name");
var upper =userinput.toUpperCase ();
alert("upperCase"+ upper );

//11. Write a program that takes user input. Convert and
//show the input in title case.
var userInput = prompt("Please enter yor city name.");
var capitalizedStr = userInput.charAt(0).toUpperCase() + userInput.slice(1);
alert("title Case" + capitalizedStr );

//12. Write a program that converts the variable num to
//string.
var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.
var num = 35.36;
var str = num.toString().replace(".", "");
document.write(str);


//13. Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
var username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special symbols.");
} else {
    alert("Your username is: " + username);
}

//14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
       found = true;
   }
}
if (found) {
    alert(userInput + " is available in our bakery!");
} else {
    alert(userInput + " is not available in our bakery.");
}



//15. Write a program to take password as an input from
//user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.
var password = prompt("Enter a password:");

//Check if password contains only alphabets and numbers
var symbols = /^[a-zA-Z0-9]+$/;
if (!symbols.test(password)) {
   alert("Password should only contain alphabets and numbers.");
}

// Check if password starts with a number
if (!isNaN(password.charAt(0))) {
    alert("Password should not start with a number.")}

// Check if password is at least 6 characters long
if (password.length < 6) {
    alert("Password should be at least 6 characters long.");
}

//16. Write a program to convert the following string to an
//array using string split method.
//var university = University of Karachi”;
//Display the elements of array in your browser.

var university = "University of Karachi";
var arr = university.split(" ");

// Display the elements of the array in the browser
for(var i =0; i< arr.lenght; i++ ){
   document.write(arr[i]);
}

//17. Write a program to display the last character of a user
//input.
var input = prompt("Enter a string:");
var lastChar = input.charAt(input.length - 1);

alert("The last character is " + lastChar);

//18. You have a string “The quick brown fox jumps over the
//lazy dog”. Write a program to count number of
//occurrences of word “the” in given string


var string = "The quick brown fox jumps over the lazy dog";
var count = (string.match() || []).length;
console.log(count);
