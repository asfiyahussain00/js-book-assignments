// 1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

// Take input from user
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
// Add the two numbers
var sum = num1 + num2;
alert ("The sum of given numbers is : " + sum  );

//2. Repeat task1 for subtraction, multiplication, division  & modulus.
//for subtration
//Take input from user
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
//subtrated the numbers
var sub = num1 - num2;
alert("The sub of given numbers is : " + sub );

//for multiply
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
//multiply the numbers
var multiply = num1 *num2;
alert("The multiplication of given numbers is : " + multiply );

//for Divsion
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
//divded the numbers
var division = num1 / num2;
alert("The division of given numbers is : " + division );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// a. Declare a variable.
var number ;
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number.
number = 9;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + number );

// e. Increment the variable.
number++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + number + "<br>" );

// g. Add 7 to the variable.
number += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + number + "<br>" );

// i. Decrement the variable.
number--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + number + "<br>" );

// k. Show the remainder after dividing the variable’s value by 3.
var rem = number % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is: " + rem + "<br>"  );

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
//ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
//we take user input 
var input = +prompt("How many tickets do you want ?");
//each ticket price is 600 
var total = 600 * input;
alert("Total cost of by ticket to a movie is: " + total +"PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. E.g
//input from user
var input = +prompt("Enter a number for  its  table:");
document.write("<h2>  Table of " + input+ "</h2>");
//loop fot table
for (var i = 1; i <= 10; i++) {
  document.write(input + " x " + i + " = " + input * i + "<br>");}


 // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

// a. Store a Celsius temperature into a variable.
var celsius = 36;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheit = celsius * (9 / 5) + 32;
alert(celsius + "°C is " + fahrenheit + "°F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheit2 = 42;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsius2 = (fahrenheit2 - 32) * (5 / 9);
alert(fahrenheit2 + "°F is " + celsius2 + "°C");


//7. Write a program to implement checkout process of ashopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//define the folowing variables for items

//a. Price of item 1
var item1 = 700;
//b. Price of item 2
var item2 = 900
// c. Ordered quantity of item 1
var quantity1 =  6 ;
 //d. Ordered Quantity of item 2
var quantity2 = 8;
//e. Shipping charges
var shipping =  200 ;
//calculate tthe total amount
var total = item1 * quantity1 + item2 *quantity2 +shipping;
//now display shopping card
document.write("<h2> Shopping Cart </h2>");
document.write("<p>Price of item 1 is " + item1 + "</p>");
document.write("<p>Quantity of item 1 is " + quantity1 + "</p>");
document.write("<p>Price of item 2 is " + item2 + "</p>");
document.write("<p>Quantity of item 2 is " + quantity2 + "</p>");
document.write("<p>Shipping Charges is " + shipping + "</p>");
document.write("<p><b>Total Cost: " + total + "</b></p>");


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
//your browser
//total marks
var totalmarks = 750 ;
var obtmarks = 450; 
// now calculate its parcentage
var percentage =( obtmarks / totalmarks) * 100;
//display result
document.write ( "<h1> Marks sheet </h1>");
document.write ( "Totalmarks : " +  totalmarks + "<br>" );
document.write ("Obtain marks : " + obtmarks + "<br>" );
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var dollars = 10;
var riyals = 25;
var PKR = dollars * 104.80 + riyals * 28;
//result
document.write (" <h1> Currency in PKR </h1>");
document.write("Total currency in PKR =  " + PKR);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var number = 7;
var result = ((number + 5) * 10) / 2;
console.log(result);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// a. Store the current year in a variable.
var currentYear = new Date().getFullYear();

// b. Store their birth year in a variable.
var birthYear = 2006;

// c. Calculate their 2 possible ages based on the stored values.
var year1 = currentYear - birthYear;
var year2 = year1 - 1;

//result
document.write( "<h1> Age calulator </h2>" +  "<br>" )
document.write( "Current year : 2023"  + "<br>"  ) 
document.write( "Birthyear :"+  birthYear + "<br>" )
document.write("Your age : " + year2 )


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Step 1: Store the radius of the circle in a variable
var radius = 8;

// Step 2: Calculate the circumference using the formula C = 2 * pi * r
var circumference = 2 * 3.142 * radius;

// Step 3: Calculate the area using the formula A = pi * r^2
var area = 3.142 * radius ** 2;

// Step 4: Output the results to the console
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

//13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.

//a. Store your favorite snack into a variable
var snake = "lays"; 

//b. Store your current age into a variable.
var currentAge = 16 ; 

//c. Store a maximum age into a variable.
var maxAge =  60;

//d. Store an estimated amount per day (as a number).
var amount = 1;

//e. Calculate how many would you eat total for the rest of
//your life.
var total = ( maxAge - currentAge)* 365 * amount;



//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.
document.write ("<h1> Life time supply calculator </h1>");
document.write ( "Favorite snack: "  + snack + "<br>" );
document.write ( "Current age: " + currentAge + "<br>");
document.write ("maximum  age :" + maxAge + "<br>" );
document.write ("Total amount of snakes :"+ total + "<br>" );
document.write("You will need " + total +" " + Snack +" to last you until the ripe old age of " +maxAge + ".")