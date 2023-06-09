///1. Declare an empty array using JS literal notation to store
//student names in future.
var studentname =[];

//2. Declare an empty array using JS object notation to store
//student names in future.
var array =[];

// 3. Declare and initialize a strings array.
var names = ["asfiya", "sana", "sadia"];

//4. Declare and initialize a numbers array.
var number = [1 , 2 , 3 , 4 , 5];

//5. Declare and initialize a boolean array.
var boolen = [true, false ,true , false]

//6. Declare and initialize a mixed array.
var mixedarray =  ["ali", 35 , "mango", 12 ,"pizza", true, false ];

//7. Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD). Show the listed
//qualifications in your browser like:
var eduction = [
  "1.SSC",
  "2.HSC",
  "3.BCS",
  "4.BS",
  "5.BCOM",
  "6.MS",
  "7.M. Phil.",
  "8.PhD",
];
document.write( "<h2> Qualification </h2>")
for (var i = 0; i < eduction.length; i++) {
  document.write( eduction [i] + "<br>");
}

  // 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// declare and initialize arrays
var studentnames =["sara" , "ali", "sana" ];
var studentscore = [ 300,400,250];
document.write("<h2> StudentS Result </h2>")
// calculate percentage and display result
for (var i = 0; i < studentnames.length; i++) {
  var percentage = (studentscore[i] / 500) * 100;
  document.write("Score of " + studentnames[i]  + " is " + studentscore[i] +". Percentage: " + percentage + "<br>" );
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors=["red " ,"blue ","green ","yellow " ];
document.write("<h2>initial array</h2> <br>" + colors + "<br>");

//a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
var addingcolor = prompt("Enter a color to add at the beginning of the array:");
colors.unshift(addingcolor);
document.write("<h2> Array after adding a color at the beginning: </h2> </b>" + colors + "<br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var endcolor = prompt("Enter a color to add at the end of the array:");
colors.push(endcolor);
document.write("<h2> Array after adding a color at the end: </h2>" + colors + "<br>");


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift("Black", "white");
document.write("<h1> Array after adding two more colors at the beginning: </h2>" + colors +"<br>");

// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
document.write("<h2> Array after deleting the first color: </h2>" + colors + "<br>");

// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
document.write("<h2> Array after deleting the last color: </h2>" + colors + "<br>");

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired

var positionToaddColor = prompt("Enter the position where you want to add the color ");
var colorToaddAtPosition = prompt("Enter a color to add at position " + positionToaddColor );
colors.splice(positionToaddColor - 1, 0, colorToaddAtPosition);
document.write("<h2> Array after adding a color at position </h2> " + positionToaddColor  + colors );


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser
var DeleteColor = prompt("Enter the position from where you want to delete the color");
var numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(DeleteColor - 1, numberOfColorsToDelete);
document.write("<h2> Array after deleting " + numberOfColorsToDelete +"  position " + DeleteColor +": </h2>" +colors +"<br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var Studentscore = [40, 100, 1, 5, 25, 10];
Studentscore.sort(function(a, b){return a-b});
console.log(Studentscore);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 3);
console.log(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
alert(str); 

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var value = [];
value.push("First");
value.push("Second");
value.push("Third");
var first = value.shift();
console.log(first); 

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var values = []; // initialize an empty array
values.push("value 1"); 
values.push("value 2"); 
values.push("value 3");
var reversedvalues = []; 
while (values.length > 0) {
  reversedvalues.push(values.pop()); 
}
alert("Reversed array " + reversedvalues);

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");