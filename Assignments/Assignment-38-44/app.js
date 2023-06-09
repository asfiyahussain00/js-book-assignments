           // 1. Write a custom function power ( a, b ), to calculate the value of
//a raised to b.

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  console.log(power(2, 3)); // Output 8
  console.log(power(5, 2)); // Output: 25
  
  
  
  //2. Any year is entered through the keyboard. Write a function to
  //determine whether the year is a leap year or not.
  //Leap years ..., 2012, 2016, 2020, …
  
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(2012)); // Output: true
  console.log(isLeapYear(2016)); // Output: true
  console.log(isLeapYear(2020)); // Output: true
  console.log(isLeapYear(2000)); // Output: true
  console.log(isLeapYear(1900)); // Output: false
  console.log(isLeapYear(2022)); // Output: false
  
  //3. If the lengths of the sides of a triangle are denoted by a, b, and
  //c, then area of triangle is given by
  //area = S(S − a)(S − b)(S − c)
  //where, S = ( a + b + c ) / 2
  //Calculate area of triangle using 2 functions
  
  function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateArea(a, b, c) {
    var s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  
  console.log(calculateS(3, 4, 5)); // Output: 6
  console.log(calculateArea(3, 4, 5)); // Output: 6
  
  
  
  //4. Write a function that receives marks received by a student in 3
  //subjects and returns the average and percentage of these
  //marks. there should be 3 functions one is the mainFunction
  //and other are for average and percentage. Call those functions
  //from mainFunction and display result in mainFunction.
  
  
  function mainFunction(marks1, marks2, marks3) {
    var avg = calculateAverage(marks1, marks2, marks3);
    var percent = calculatePercentage(marks1, marks2, marks3);
    console.log(`Average: ${avg}, Percentage: ${percent}%`);
  }
  
  function calculateAverage(marks1, marks2, marks3) {
    var sum = marks1 + marks2 + marks3;
    return sum / 3;
  }
  
  function calculatePercentage(marks1, marks2, marks3) {
    var totalMarks = 300;
    var obtainedMarks = marks1 + marks2 + marks3;
    return (obtainedMarks / totalMarks) * 100;
  }
  
  //5. You have learned the function indexOf. Code your own custom
  //function that will perform the same functionality. You can code
  //for single character as of now.
  
  function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  let str = "Hello, world!";
  let char = "o";
  let a = customIndexOf(str, char);
  console.log(a); // Output: 4
  
  //6. Write a function to delete all vowels from a sentence. Assume
  //that the sentence is not more than 25 characters long.
  
  function deleteVowels(sentence) {
    let vowels = "aeiouAEIOU";
    let newSentence = "";
  
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.indexOf(sentence[i]) === -1) {
        newSentence += sentence[i];
      }
    }
  
    return newSentence;
  }
  let sentence = "This is a sentence without vowels.";
  let newSentence = deleteVowels(sentence);
  console.log(newSentence); // Output: "Ths s  sntnc wtht vwls."
  
  //7. Write a function with switch statement to count the number of
  //occurrences of any two vowels in succession in a line of text.
  //For example, in the sentence
  
  
  function countVowelPairs(text) {
    var count = 0;
    var vowels = "aeiouAEIOU";
  
    for (let i = 0; i < text.length - 1; i++) {
      let pair = text[i] + text[i + 1];
      switch (pair) {
        case "ai":
        case "ei":
        case "oi":
        case "au":
        case "eu":
        case "ou":
        case "ia":
        case "ie":
        case "io":
        case "iu":
        case "ua":
        case "ue":
        case "ui":
        case "uo":
          count++;
          break;
      }
    }
  
    return count;
  }
  var text = "This is a sentence with some vowel pairs.";
  var count = countVowelPairs(text);
  console.log(count); // Output: 4
  
  
  //8. The distance between two cities (in km.) is input through the
  //keyboard. Write four functions to convert and print this
  //distance in meters, feet, inches and centimeters.
   // Distance in kilometers
  // Convert kilometers to meters
  
  function kmToMeters(km) {
    return km * 1000;
  }
  
  // Convert kilometers to feet
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  // Convert kilometers to inches
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  // Convert kilometers to centimeters
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  var distance = 100
  var meters = kmToMeters(distance);
  var feet = kmToFeet(distance);
  var inches = kmToInches(distance);
  var centimeters = kmToCentimeters(distance);
  
  console.log(`${distance} km = ${meters} meters`);
  console.log(`${distance} km = ${feet} feet`);
  console.log(`${distance} km = ${inches} inches`);
  console.log(`${distance} km = ${centimeters} centimeters`);
  
  //9. Write a program to calculate overtime pay of employees.
  //Overtime is paid at the rate of Rs. 12.00 per hour for every hour
  //worked above 40 hours. Assume that employees do not work
  //for fractional part of an hour.
  
  
  // Define the overtime rate
  var overtimeRate = 12.0;
  
  // Define the regular hours worked
  var  regularHours = 40;
  
  // Define the hours worked by the employee
  var hoursWorked = 50;
  
  // Calculate the overtime hours worked
  var overtimeHours = hoursWorked - regularHours;
  
  // Calculate the overtime pay
  var overtimePay = overtimeHours * overtimeRate;
  
  // Print the overtime pay
  console.log(`The employee worked ${overtimeHours} hours of overtime and earned Rs. ${overtimePay.toFixed(2)} in overtime` )
  
  //10. A cashier has currency notes of denominations 10, 50 and
  //100. If the amount to be withdrawn is input through the
  //keyboard in hundreds, find the total number of currency notes
  //of each denomination the cashier will have to give to the
  //withdrawer.
  
  // Define the denominations
  var hundredDenomination = 100;
  var fiftyDenomination = 50;
  var tenDenomination = 10;
  
  // Define the amount to be withdrawn
  var amountToWithdrawInHundreds = 5;
  
  // Calculate the total amount to be withdrawn
  var totalAmountToWithdraw = amountToWithdrawInHundreds * hundredDenomination;
  
  // Calculate the number of hundred denomination notes
  var numberOfHundredDenominationNotes = Math.floor(totalAmountToWithdraw / hundredDenomination);
  
  // Calculate the remaining amount after the hundred denomination notes are given
  var remainingAmount = totalAmountToWithdraw % hundredDenomination;
  
  // Calculate the number of fifty denomination notes
  var numberOfFiftyDenominationNotes = Math.floor(remainingAmount / fiftyDenomination);
  
  // Calculate the remaining amount after the fifty denomination notes are given
  var remainingAmountAfterFiftyDenominationNotes = remainingAmount % fiftyDenomination;
  
  // Calculate the number of ten denomination notes
  var numberOfTenDenominationNotes = Math.floor(remainingAmountAfterFiftyDenominationNotes / tenDenomination);
  
  // Print the results
  console.log(`The cashier will give ${numberOfHundredDenominationNotes} hundred denomination notes, ${numberOfFiftyDenominationNotes} fifty denomination notes, and ${numberOfTenDenominationNotes} ten denomination notes to the withdrawer.`);
  
  