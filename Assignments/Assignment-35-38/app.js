  //  1. Write a function that displays current date & time in your
//browser.

function displayDateTime() {
    var currentDate = new Date();
    document.write("Current Date and Time: " + currentDate);
  }
  displayDateTime();
  
  //2. Write a function that takes first & last name and then it
  //greets the user using his full name.
  
  function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "!");
  }
  greetUser( "John", "Doe");
  
  
  //3. Write a function that adds two numbers (input by user)
  //and returns the sum of two numbers.
  
  function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    return sum;
  }
  var result = addNumbers();
  document.write("The sum of two numbers is " + result);
  
  //4. Calculator:
  //Write a function that takes three arguments num1, num2
  //& operator & compute the desired operation. Return and
  //show the desired result in your browser.
  
  function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }
  
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");
  
  var result = calculator(num1, num2, operator);
  document.write("The result of " + num1 + " " + operator + " " + num2 + " is " + result);
  
  
  
  //5. Write a function that squares its argument.
  function square(num) {
    return num * num;
  }
  
  var result = square(5);
  document.write("The square of 5 is " + result);
  
  //6. Write a function that computes factorial of a number.
  
  function factorial(num) {
    var result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  var result = factorial(5);
  document.write("The factorial of 5 is " + result);
  
  //7. Write a function that take start and end number as inputs
  //& display counting in your browser.
  
  function count(start, end) {
    for (let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  count(1, 10);
  
  //8. Write a nested function that computes hypotenuse of a
  //right angle triangle.
  //Hypotenuse2 = Base2 + Perpendicular2
  
  function hypotenuse(base, perpendicular) {
    function square(num) {
      return num * num;
    }
    return Math.sqrt(square(base) + square(perpendicular));
  }
  var result = hypotenuse(3, 4);
  document.write("The hypotenuse of a right angle triangle with base 3 and perpendicular 4 is " + result);
  
  //9. Write a function that calculates the area of a rectangle.
  // A = width * height
   //Pass width and height in following manner:
  //i. Arguments as value
  //ii. Arguments as variables
  
  // Using arguments as value
  function area(width, height) {
    return width * height;
  }
  
  var result1 = area(5, 10);
  document.write("The area of a rectangle with width 5 and height 10 is " + result1);
  
  // Using arguments as variables
  var w = 5;
  var h = 10;
  
  var result2 = area(w, h);
  document.write("<br>The area of a rectangle with width " + w + " and height " + h + " is " + result2);
  
  //10. Write a JavaScript function that checks whether a passed
  //string is palindrome or not?
  //A palindrome is word, phrase, or sequence that reads the same backward as
  //forward, e.g., madam
  
  function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  var result1 = isPalindrome("madam");
  document.write("Is 'madam' a palindrome? " + result1);
  
  var result2 = isPalindrome("hello");
  document.write("<br>Is 'hello' a palindrome? " + result2);
  
  
  //11. Write a JavaScript function that accepts a string as a
  //parameter and converts the first letter of each word of the
  //string in upper case.
  //EXAMPLE STRING : 'the quick brown fox'
  //EXPECTED OUTPUT : 'The Quick Brown Fox'
  
  function capitalize(str) {
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      let firstLetter = words[i].charAt(0);
      words[i] = firstLetter.toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
  }
  var result = capitalize("the quick brown fox");
  document.write("Original string: 'the quick brown fox'<br>Converted string: '" + result + "'");
  
  //12. Write a JavaScript function that accepts a string as a
  //parameter and find the longest word within the string.
  //EXAMPLE STRING : 'Web Development Tutorial'
  //EXPECTED OUTPUT : 'Development'
  
  function findLongestWord(str) {
    var words = str.split(" ");
     var longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  var result = findLongestWord("Web Development Tutorial");
  document.write("Original string: 'Web Development Tutorial'<br>Longest word: '" + result + "'");
  
  //13. Write a JavaScript function that accepts two arguments, a
  //string and a letter and the function will count the number of
  //occurrences of the specified letter within the string.
  //Sample arguments : 'JSResourceS.com', 'o'
  
  function countOccurrences(str, letter) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
        count++;
      }
    }
    return count;
  }
  var result = countOccurrences("JSResourceS.com", "o");
  document.write("String: 'JSResourceS.com'<br>Letter: 'o'<br>Occurrences: " + result);
  
  //14. The Geometrizer
  //Create 2 functions that calculate properties of a circle, using
  //the definitions here.
  //Create a function called calcCircumference:
  //• Pass the radius to the function.
  //• Calculate the circumference based on the radius, and output
  //"The circumference is NN".
  //Create a function called calcArea:
  ////• Pass the radius to the function.
  //• Calculate the area based on the radius, and output "The area
  //is NN".
  //Circumference of circle = 2πr
  //Area of circle = πr2
  
  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference;
  }
  
  function calcArea(radius) {
    var area = Math.PI * radius * radius;
    return "The area is " + area;
  }
  
  var circumferenceResult = calcCircumference(5);
   var areaResult = calcArea(5);
  
  document.write(circumferenceResult + " <br> " + areaResult);
  