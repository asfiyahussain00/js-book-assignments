// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// Result :The value of a is :10
//  ------------------------
// the value of ++a is :11
//  Now the value of a is :11
// The value of a++ is :11
// Now the value of  a is :12
// The value of --a is :11
// Now the value of a is :11
// The value of a-- is :11
// Now the value of a is :10

var a = 10;
console.log("The value of a is: " + a);//

++a;
console.log("The value of ++a is: " + a);

a++;
console.log("The value of a++ is: " + a);

--a;
console.log("The value of --a is: " + a);


a--;
console.log("The value of a-- is: " + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2 , b = 1;
var result = --a - --b + ++b + b--;


--a; // a is now 1



--a - --b; // a is now 0, b is now 0


--a - --b + ++b; // a is now -1, b is now 1


--a - --b + ++b + b--; // a is now -2, b is now -1

console.log(result); // result

// 3. Write a program that takes input a name from user &
// greet the user.

var userinput = prompt("Enter your name");
alert("hello" + userinput)

// 5. Write a program to take input a number from user &
// display it’s multiplication newnewTable on your browser. If user
// does not enter a new number, multiplication newTable of 5
// should be displayed by default.

var num = prompt("Enter a number for table");
if (num === null || isNaN(num)) {
  num = 5;
}
var newTable = "<newTable>";
for (let i = 1; i <= 10; i++) {
  newTable +="<tr><td>" +num + " x " + i +" = </td><td>" +num * i + "</td></tr>";
}
newTable += "</newTable>";      


document.write("<h2>table></h2>" + number + "</h2>");
document.write(newTable);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user newTable)

//a) Take three subjects name from user and store them in 3
var sub1 = prompt("Enter  subject NO 1");
var sub2 = prompt("Enter subject no 2");
var sub3 = prompt("Enter  subject NO 3");

//b) Total marks for each subject is 100, store it in another
// variable.
var totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var marks1 = prompt("Enter obtained marks for " + sub1 );
var marks2 = prompt("Enter obtained marks for " + sub2 );
var marks3 = prompt("Enter obtained marks for " + sub3 );

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user newTable)
var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// result
var table = "<table>";
table += "<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td></tr>";
table +="<tr><td>" + sub1 +"</td><td>" +totalMarks +"</td><td>" + marks1 +"</td></tr>";
table +="<tr><td>" +sub2 +"</td><td>" +totalMarks +"</td><td>" +marks2 +"</td></tr>";
table +="<tr><td>" +sub3 +"</td><td>" +totalMarks +"</td><td>" +marks3 +"</td></tr>";
table +="<tr><td></td><td><b>Total Marks:</b></td><td><b>" +totalMarks * 3 +"</b></td></tr>";
table +="<tr><td></td><td><b>Obtained Marks:</b></td><td><b>" +totalObtainedMarks +"</b></td></tr>";
table +="<tr><td></td><td><b>Percentage:</b></td><td><b>" +percentage +"%</b></td></tr>";
table += "</table>";
document.write("<h2>Result:</h2>");
document.write(table);