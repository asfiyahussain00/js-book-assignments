//1. Declare and initialize an empty multidimensional array.
    //(Array of arrays)
    var multidimensionalArray =[[]];
    
    //2. Declare and initialize a multidimensional array
    //representing the following matrix:
    var matrix = [
        
        [ 0,1,2,3 ],
        [ 2,0,1,2 ], 
        [ 2,1,0,1 ]  
    ];
    for(var a = 0; a < 4 ; a++ );
    { for(var b= 0; b < 4; b++){
        document.write(matrix[a][b] + "" );
    }
     document.write("<br>");  
    }
    
    //3. Write a program to print numeric counting from 1 to 10.
    for(let i = 1 ; i <= 10; i++){
        document.write([i]+ "</br>" );
    }
    
    //4. Write a program to print multiplication table of any
    //number using for loop. Table number & length should be
    //taken as an input from user.
    var  multiplicationTable = prompt("Enter number for table");
     var tableLength  = prompt(" Enter length for table ");
        for(let i = 1 ; i <= tableLength   ; i++){
          console.log(  multiplicationTable + 'x' +'='+ i *multiplicationTable) }
    
     //5. Write a program to print items of the following array
    //using for loop:
    //fruits = [“apple”, “banana”, “mango”, “orange”,
    //“strawberry”]
    var fruits = [
        ["apple" ],
        ["banana"],
        ["mango"],
        ["orange"]
    ];
    for(var a =0 ; a < 4 ; a++  ){
        document.write(fruits[a] +" <br>" );
    }
    
    //6. Generate the following series in your browser. See
    //example output.
    //a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
    document.write("<h2>Counting:</h2>"+ "<br>" +" 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ");
    document.write("<h2>Reverse counting:</h2>"+ "<br>" +  "10, 9, 8, 7, 6, 5, 4, 3, 2, 1");
    document.write("<h2>Even:</h2>"+ "<br>" +"0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20");
    document.write("<h2>Odd:</h2>"+ "<br>" +"1, 3, 5, 7, 9, 11, 13, 15, 17, 19");
    document.write("<h2> Series::</h2>"+ "<br>" +" 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k");
    
    //7. You have an array
   // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
    //Write a program to enable “search by user input” in an
    //array.
    //After searching, prompt the user whether the given item is
    //found in the list or not. Example:
 const products = ["cake", "apple", "cookie", "chips", "patties"];
const userInput = prompt("What item are you looking for?");
let res = -1;

for (let i = 0; i < products.length; i++) {
  if (products[i] === userInput) {
  index = i;
  
 }
}
if (index !== -1) {
  alert(`The item is found at index ${index} in the list!`);
} else {
  alert("The item is not found in the list!");
}

//8. Write a program to identify the largest number in the
//given array.
//A = [24, 53, 78, 91, 12].
var numbers = [24, 53, 78, 91, 12] ;
var largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
alert(`The largest number is ${largestNumber}.`);
    
//9. Write a program to identify the smallest number in the
//given array.
//A = [24, 53, 78, 91, 12]
var number =[24, 53, 78, 91, 12];
var smallestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}
alert(`The smallest number is ${smallestNumber}.`);

//10. Write a program to print multiples of 5 ranging 1 to
//100.
for(let i = 1 ;i<=100;i++ )
{
  if(i % 5==0) {console.log(i);
} 
}