// Create a function that returns the sum of 2 numbers
function sum(a, b){
  return a + b;
}
let result =  sum(5,10);
console.log(result);
// Create a function that returns the product of 2 numbers
function product(a,b){
  return a * b;
}
var myProduct = product(5,10)
console.log( myProduct)
//  Create a function that returns the difference of 2 numbers
function substract(a, b){
  return a - b
}
const myDiffent =substract(10,5)
console.log(myDiffent)
//    Create a function that returns the division of 2 numbers. 
function divide(a,b){
  return a /b
}
const mydivision =divide(10,5)
console.log(mydivision)
//Create a function that receives an array and returns the sum of all the elements inside that array.
// function sumArray(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum +=arr[i];
//     }
//    return sum;
// }
// var numbers=[1, 2, 3, 4, 5];
// var answer= sumArray(numbers);
// console.log(sumArray(numbers))
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArray(numbers1));
//    Create a function that receives an array and returns the greatest value inside that array
function greatNumber(arr){
  let max = arr[0];
  for (let i = 1; i>i.length; i++){
      if(arr[i] > max){
          max +=arr[i];
      }
     
  }
  return max
}
var number = [10, 4, 7, 2, 9];
var answer = greatNumber(number);
console.log(answer); 
//  Create a function that receives an array and returns the smallest number from that array
function findMinValue(arr){
  let min = arr[0];
  for (let i =0; i < i.length; i++){
        if(arr[i] > min){
          min +=arr[i]
        }
  }
  return min
} 
let ArrayNumbers= [1 , 6, 2, 3, 4, 5]
console.log(findMinValue(ArrayNumbers))
//  Create a function that receives an array of numbers and returns the average of the numbers
function findAverageValue(arr){
  let sum =0;
  for (let i = 0; i <arr.length; i++){
      sum += arr[i];
  }
  return sum / arr.length;
}
//second way
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return average;
}
//Create a function that combines two arrays into one single array. 
function combineArrays(arr1, arr2){
  return arr.concat(arr2);
}
let arr1 =[1,2,3,4,5,6];
let arr2 =[7,8,9,11];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);
//other way
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const arrange = ["a", "b", "c", "d"];
const arrayTo = ["e", "f", "g"];
const combinedArray = combineArrays(arrange, arrayTo);
console.log(combinedArray);
//10.    Create a function that displays a pattern like this:
function displayPattern1() {
  for (let i = o; i<4; i++){
      let row = '';
      for (let j = 0; j <5; j++){
          row +='* ';
      }
      console.log(row)
  }
}
// other way
function displayPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows; j++) {
      pattern += "* ";
    }

    console.log(pattern);
  }
}
const rows = 4;
displayPattern(rows);
//   Create a function that displays a pattern
function displayPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
      pattern += "1 ";
    }

    console.log(pattern);
  }
}
const row = 4;
displayPattern(row);
//12.    Create a function that displays a pattern like this:
function displayPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows; j++) {
      if (j <= rows - i + 1) {
        pattern += "1 ";
      } else {
        pattern += "0 ";
      }
    }

    console.log(pattern);
  }
}
const row3 = 4;
displayPattern(row3);
  
  // 12. Create a function that displays a pattern like this:
  function displayPattern3() {
    for (let i = 4; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= 4; j++) {
        if (j <= i) {
          row += "1 ";
        } else {
          row += "0 ";
        }
      }
      console.log(row);
    }
  }
  
  // 13. Create a function that displays a pattern like this:
  function displayPattern4() {
    for (let i = 1; i <= 5; i++) {
      let row = "";
      for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 5) {
          row += "1 ";
        } else {
          row += "0 ";
        }
      }
      console.log(row);
    }
  }
  
  // 14. Create a function that displays a pattern like this:
  function displayPattern5() {
    for (let i = 1; i <= 4; i++) {
      let row = "";
      for (let j = 1; j <= 4; j++) {
        if (j === i) {
          row += "1 ";
        } else {
          row += "  ";
        }
      }
      console.log(row);
    }
  }
  
  // 15. Create a function to reverse the order of the elements inside the given array.
  function reverseArray(array) {
    return array.reverse();
  }
  
  // 16. Given an array like this:
  var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
  // a. Create a function to sort and arrange these elements of the array in ascending order.
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
// 17. Create a function that determines the age classification of people
function getAgeClassification(age) {
    if (age >= 0 && age <= 12) {
      return 'MIMICRY';
    } else if (age >= 13 && age <= 19) {
      return 'SELF-DISCOVERY';
    } else if (age >= 20 && age <= 45) {
      return 'COMMITMENT';
    } else if (age >= 46) {
      return 'LEGACY';
    } else {
      return 'Invalid age';
    }
  }
  
  // 18. Create a function that calculates the BMI of a person and returns the specific classification
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
  // 19. Create a function that counts the number of characters in a string
  function countCharacters(str) {
    return str.replace(/\s/g, '').length;
  }
  
  // 20. Create a function that displays even numbers between 1 and 100
  function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
  }
  
  // 21. Create a function that calculates the square of a number
  function calculateSquare(number) {
    return number * number;
  }
  
  // 22. Create a function that checks if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // 23. Create a function that checks if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // 24. Create a function that returns the maximum of two numbers
  function getMax(a, b) {
    return Math.max(a, b);
  }
  
  // 25. Create a function that returns the minimum of two numbers
  function getMin(a, b) {
    return Math.min(a, b);
  }
  
  // 26. Create a function that calculates the factorial of a number
  function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  // 27. Create a function that reverses a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 28. Create a function that checks if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
  }
  
  // 29. Create a function that displays odd numbers between 1 and 100
  function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
      console.log(i);
    }
  }
  
  // 30. Create a function that displays multiples of 5
  function displayMultiplesOfFive() {
    for (let i = 5; i <= 100; i += 5) {
      console.log(i);
    }
  }
  
  // 31. Create a function that returns the square root of a given number
  function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  // 32. Create a function that receives two numbers and returns the bigger number
  function getBiggerNumber(a, b) {
    return Math.max(a, b);
  }
  
  // 33. Create a function that receives a string and changes it into capital letters
  function convertToUpperCase(str) {
    return str.toUpperCase();
  }
  
  // 34. Create a function called "stringModifier" that modifies a string at a specific position
  function stringModifier(str, position, character) {
    if (position >= 0 && position < str.length) {
      return str.substring(0, position) + character + str.substring(position + 1);
    }
    return str;
  }
  
  // 35. Create a function that counts the number of vowels in a string
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  // 36. Create a function that counts the number of consonants in a string
  function countConsonants(str){
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-z]/i)) {
        count++;
      }
    }
    return count;
  }
  
  // 37. Create a function that finds the index of a given character in a string
  function findCharacterIndex(str, character) {
    return str.indexOf(character);
  }
  
  // 38. Create a function that removes duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // 39. Create a function that checks if a given value is present in an array
  function isValuePresent(arr, value) {
    return arr.includes(value);
  }
  
  // 40. Create a function that squares each element of an array
  function squareElements(arr) {
    return arr.map((num) => num * num);
  }
  
  // 41. Create a function that returns the first n elements of an array
  function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // 42. Create a function that removes the last element from an array
  function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  // 43. Create a function that sorts an array of numbers in ascending order
  function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 44. Create a function that checks if all elements in an array are positive
  function areAllElementsPositive(arr) {
    return arr.every((num) => num > 0);
  }
  
  // 45. Create a function that calculates the sum of the even numbers in an array
  function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  }
  
  // 46. Create a function that converts an array of strings to uppercase
  function convertToUppercaseArray(arr) {
    return arr.map((str) => str.toUpperCase());
  }
  
  // 47. Create a function that generates a random number between a given range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 48. Create a function that returns the reverse of an array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 49. Create a function that calculates the Fibonacci sequence up to n numbers
  function calculateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // 50. Create a function that checks if an array is sorted in ascending order
  function isSortedAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  // 51. Create a function that filters out negative numbers from an array
  function filterNegativeNumbers(arr) {
    return arr.filter((num) => num >= 0);
  }
//   52.    Write a function that calculates the square root of a number.
function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
// 53.    Write a function that finds the median of an array of numbers.
function findMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(numbers.length / 2);
    
    if (numbers.length % 2 === 0) {
      const median1 = numbers[middleIndex];
      const median2 = numbers[middleIndex - 1];
      return (median1 + median2) / 2;
    } else {
      return numbers[middleIndex];
    }
  }
// 54.    Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    
    return capitalizedWords.join(' ');
  }
// 55.    Write a function that checks if a given year is a leap year.
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
// 56.    Write a function that finds the intersection of two arrays.
function findIntersection(array1, array2) {
    return array1.filter(element => array2.includes(element));
  }
// 57.    Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
// 58.    Write a function that returns the power of a number (base, exponent).
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
  }
// 59.    Write a function that calculates the area of a rectangle.
function calculateRectangleArea(width, height) {
    return width * height;
  }
// 60.    Write a function that calculates the perimeter of a rectangle.
function calculateRectanglePerimeter(width, height) {
    return 2 * (width + height);
  }
// 61.    Write a function that checks if a given string contains only digits.
function containsOnlyDigits(string) {
    return /^\d+$/.test(string);
  }
// 62.    Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
  }
// 63.    Write a function that converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
// 64.    Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= height - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
// 65.    Switch Case:
// a.    Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
function calculate(a, operator, b) {
    let result;
    
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
    
    console.log('Result:', result);
  }

// b.    Day of Week:
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function getDayName(dayNumber) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  if (dayNumber >= 1 && dayNumber <= 7) {
    return daysOfWeek[dayNumber - 1];
  } else {
    return 'Invalid day number';
  }
}

// Example usage
const dayNumber = 3;
const dayName = getDayName(dayNumber);
console.log(`The day is: ${dayName}`);se:

// c.    Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
function getGrade(score) {
    let grade;
    
    switch (Math.floor(score / 10)) {
      case 10:
      case 9:
        grade = 'A';
        break;
      case 8:
        grade = 'B';
        break;
      case 7:
        grade = 'C';
        break;
      case 6:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
    
    return grade;
  }

// d.    Traffic Light:
// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
function getTrafficLightColor(code) {
    let color;
    
    switch (code) {
      case 1:
        color = 'Red';
        break;
      case 2:
        color = 'Yellow';
        break;
      case 3:
        color = 'Green';
        break;
      default:
        color = 'Invalid code';
    }
    
    return color;
  }

// e.    Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
function getMonthName(monthNumber) {
    let monthName;
    
    switch (monthNumber) {
      case 1:
        monthName = 'January';
        break;
      case 2:
        monthName = 'February';
        break;
      case 3:
        monthName = 'March';
        break;
      case 4:
        monthName = 'April';
        break;
      case 5:
        monthName = 'May';
        break;
      case 6:
        monthName = 'June';
        break;
      case 7:
        monthName = 'July';
        break;
      case 8:
        monthName = 'August';
        break;
      case 9:
        monthName = 'September';
        break;
      case 10:
        monthName = 'October';
        break;
      case 11:
        monthName = 'November';
        break;
      case 12:
        monthName = 'December';
        break;
      default:
        monthName = 'Invalid month number';
    }
    
    return monthName;
  }

// f.    Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.
function executeOperation(operation) {
    switch (operation) {
      case 'add':
        console.log('Performing addition');
        // Perform addition operation
        break;
      case 'subtract':
        console.log('Performing subtraction');
        // Perform subtraction operation
        break;
      case 'multiply':
        console.log('Performing multiplication');
        // Perform multiplication operation
        break;
      case 'divide':
        console.log('Performing division');
        // Perform division operation
        break;
      default:
        console.log('Invalid operation');
    }
  }

// g.    Currency Converter:
// Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.
function convertCurrency(amount, sourceCurrency, targetCurrency) {
    let convertedAmount;
    
    switch (sourceCurrency) {
      case 'USD':
        switch (targetCurrency) {
          case 'EUR':
            convertedAmount = amount * 0.85;
            break;
          case 'GBP':
            convertedAmount = amount * 0.72;
            break;
          case 'JPY':
            convertedAmount = amount * 109.67;
            break;
          default:
            console.log('Invalid target currency');
            return;
        }
        break;
      case 'EUR':
        switch (targetCurrency) {
          case 'USD':
            convertedAmount = amount * 1.18;
            break;
          case 'GBP':
            convertedAmount = amount * 0.85;
            break;
          case 'JPY':
            convertedAmount = amount * 128.02;
            break;
          default:
            console.log('Invalid target currency');
            return;
        }
        break;
      case 'GBP':
        switch (targetCurrency) {
          case 'USD':
            convertedAmount = amount * 1.39;
            break;
          case 'EUR':
            convertedAmount = amount * 1.17;
            break;
          case 'JPY':
            convertedAmount = amount * 150.97;
            break;
          default:
            console.log('Invalid target currency');
            return;
        }
        break;
      case 'JPY':
        switch (targetCurrency) {
          case 'USD':
            convertedAmount = amount * 0.0091;
            break;
          case 'EUR':
            convertedAmount = amount * 0.0078;
            break;
          case 'GBP':
            convertedAmount = amount * 0.0066;
            break;
          default:
            console.log('Invalid target currency');
            return;
        }
        break;
      default:
        console.log('Invalid source currency');
        return;
    }
    
    console.log('Converted amount:', convertedAmount);
  }

// h.    Shape Area:
// Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.
function calculateShapeArea(shape, params) {
    let area;
    
    switch (shape) {
      case 'circle':
        const radius = params.radius;
        area =radius * width;
    }
  }
  //other way
  function calculateArea(shape, params) {
    switch (shape) {
      case 'circle':
        const radius = parseFloat(params);
        if (isNaN(radius)) {
          return 'Invalid radius';
        }
        return Math.PI * radius * radius;
  
      case 'square':
        const side = parseFloat(params);
        if (isNaN(side)) {
          return 'Invalid side length';
        }
        return side * side;
  
      case 'triangle':
        const [base, height] = params.split(' ').map(parseFloat);
        if (isNaN(base) || isNaN(height)) {
          return 'Invalid base or height';
        }
        return 0.5 * base * height;
  
      default:
        return 'Invalid shape';
    }
  }
  
  // Example usage
  const shape = 'circle';
  const params = '5';
  const area = calculateArea(shape, params);
  console.log(`The area of the ${shape} is: ${area}`);
  
// i.    Season Detector:
// Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.
function getSeason(month) {
    switch (month) {
      case 1:
      case 2:
      case 12:
        return "Winter";
      case 3:
      case 4:
      case 5:
        return "Spring";
      case 6:
      case 7:
      case 8:
        return "Summer";
      case 9:
      case 10:
      case 11:
        return "Fall";
      default:
        return "Invalid month";
    }
  }
  
  console.log(getSeason(3)); // Output: Spring

// 66.    Loops on Arrays:
// a.    Array Sum:
// Write a function that calculates the sum of all elements in an array.
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const numbers2 = [1, 2, 3, 4, 5];
  console.log(arraySum(numbers2)); // Output: 15

// b.    Even Numbers:
// Create a program that prints all even numbers from an array.
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
      }
    }
  }
  
  const numbers3 = [1, 2, 3, 4, 5];
  printEvenNumbers(numbers3); // Output: 2 4

// c.    Array Reverse:
// Implement a function to reverse the elements of an array.
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  const numbers4 = [1, 2, 3, 4, 5];
  console.log(reverseArray(numbers4)); // Output: [5, 4, 3, 2, 1]

// d.    Array Filter:
// Write a program that filters out all elements less than 10 from an array.
function filterArray(arr) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 10) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  }
  
  const number5 = [5, 12, 8, 15, 3, 20];
  console.log(filterArray(number5)); // Output: [12, 15, 20]

// e.    Array Average:
// Calculate and print the average of elements in an array.
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  const number6 = [1, 2, 3, 4, 5];
  console.log(calculateAverage(number6)); // Output: 3

// f.    Array Search:
// Implement a function that searches for a specific element in an array and returns its index.
function searchElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1; // Element not found
  }
  
  const number7 = [1, 2, 3, 4, 5];
  console.log(searchElement(number7, 3)); // Output: 2

// g.    Duplicate Elements:
// Write a program to find and print duplicate elements in an array.
function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== i && duplicates.indexOf(arr[i]) === -1) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  }
  
  const number8 = [1, 2, 3, 2, 4, 3, 5];
  console.log(findDuplicates(number8)); // Output: [2, 3]

// h.    Array Sorting:
// Sort an array of numbers in ascending order using any sorting algorithm.
function sortArray(arr) {
    return arr.sort(function (a, b) {
      return a - b;
    });
  }
  
  const number9 = [5, 2, 8, 1, 4];
  console.log(sortArray(number9)); // Output: [1, 2, 4, 5, 8]

// 67.    Loops on Objects:
// a.    Object Properties:
// Write a program to print all the properties of an object.
function printObjectProperties(obj) {
    for (let prop in obj) {
      console.log(prop);
    }
  }
  
  const person1 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  printObjectProperties(person1);
  // Output:
  // name
  // age
  // occupation

// b.    Object Values:
// Create a function that prints all the values of an object.
function printObjectValues(obj) {
    for (let prop in obj) {
      console.log(obj[prop]);
    }
  }
  
  const person2 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  printObjectValues(person2);
  // Output:
  // John
  // 30
  // Engineer

// c.    Object Key Search:
// Implement a function that searches for a specific key in an object.
function searchObjectKey(obj, key) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
    return false;
  }
  
  const person3 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  console.log(searchObjectKey(person3, "age")); // Output: true
  console.log(searchObjectKey(person3, "address")); // Output: false

// d.    Object Manipulation:
// Write a program that modifies the values of an object based on certain conditions.
function manipulateObject(obj) {
    if (obj.age > 18) {
      obj.canVote = true;
    } else {
      obj.canVote = false;
    }
  }
  
  const person4 = {
    name: "John",
    age: 25,
  };
  
  manipulateObject(person4);
  console.log(person4);
  // Output:
  // { name: 'John', age: 25, canVote: true }

// e.    Object Filtering:
// Create a function that filters out key-value pairs from an object based on a condition.
function filterObject(obj, condition) {
    const filteredObj = {};
    for (let prop in obj) {
      if (condition(obj[prop])) {
        filteredObj[prop] = obj[prop];
      }
    }
    return filteredObj;
  }
  
  const person5 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  const filteredPerson = filterObject(person, (value) => value === "Engineer");
  console.log(filteredPerson);
  // Output:
  // { occupation: 'Engineer' }

// f.    Object Merging:
// Combine two objects into a single object.
function mergeObjects(obj1, obj2) {
    const merged = { ...obj1, ...obj2 };
    return merged;
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj);
  // Output:
  // { a: 1, b: 2, c: 3, d: 4 }

// g.    Object Size:
// Write a program that calculates and prints the number of key-value pairs in an object.
function getObjectSize(obj) {
    return Object.keys(obj).length;
  }
  
  const person7 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  console.log(getObjectSize(person7)); // Output: 3

// h.    Nested Object:
// Access and print values from a nested object.
const person8 = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };
  
  console.log(person.address.city); // Output: New York

// i.    Object Sorting:
// Sort the keys of an object in alphabetical order.
function sortObjectKeys(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (let key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return sortedObj;
  }
  
  const person9 = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  console.log(sortObjectKeys(person9));
  // Output:
  // { age: 30, name: 'John', occupation: 'Engineer' }

// j.    Object Transformation:
// Create a function that transforms the values of an object (e.g., convert all values to uppercase).
function transformObjectValues(obj, transformation) {
    const transformedObj = {};
    for (let prop in obj) {
      transformedObj[prop] = transformation(obj[prop]);
    }
    return transformedObj;
  }
  
  const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  const transformedPerson = transformObjectValues(person, (value) =>
    value.toUpperCase()
  );
  console.log(transformedPerson);
  // Output:
  // { name: 'JOHN', age: '30', occupation: 'ENGINEER' }

// 68.    Functions Programming:
// a.    Power Function:
// Implement a function to calculate the power of a number.
function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  console.log(power(2, 3)); // Output: 8

// b.    Array Max and Min:
// Write a function that finds the maximum and minimum values in an array.
function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }
  
  const numbers7 = [5, 2, 8, "Array Max and Min" ]

  function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }
  
  const numbers = [5, 2, 8, 1, 4];
  console.log(findMaxAndMin(numbers));
  // Output:
  // { max: 8, min: 1 }

// c.    The sum of Digits:
// Calculate the sum of digits of a given number using a function.
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  
  console.log(sumOfDigits(12345)); // Output: 15

// d.    GCD (Greatest Common Divisor):
// Write a function to find the greatest common divisor of two numbers.
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  
  console.log(gcd(24, 36)); // Output: 12

// e.    Random Number Generator:
// Create a function that generates a random number within a specified range.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(generateRandomNumber(1, 10));  