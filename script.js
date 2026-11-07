// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"
var currentDate = new Date();
var currentMonth = String(currentDate.getMonth() + 1); // we used plus one because Javascript counts the month starting at 0
var currentDay = String(currentDate.getDate());
var currentYear = currentDate.getFullYear();

var dateMessage = "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var firstValue = "25";
var secondValue = "8.5";
var thirdValue = "apples";
var fourthValue = "120";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
var firstNumber = Number(firstValue);
var secondNumber = Number(secondValue);
var thirdNumber = Number(thirdValue);
var fourthNumber = Number(fourthValue);

var firstIsNaN = Number.isNaN(firstNumber);
var firstIsInteger = Number.isInteger(firstNumber);
var secondIsNaN = Number.isNaN(secondNumber);
var secondIsInteger = Number.isInteger(secondNumber);
var thirdIsNaN = Number.isNaN(thirdNumber);
var thirdIsInteger = Number.isInteger(thirdNumber);
var fourthIsNaN = Number.isNaN(fourthNumber);
var fourthIsInteger = Number.isInteger(fourthNumber);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var resultOne = "<p>Original: &quot;" + firstValue + "&quot; &rarr; Converted: " + firstNumber + " &rarr; isNaN: " + firstIsNaN + " &rarr; isInteger: " + firstIsInteger + "</p>";
var resultTwo = "<p>Original: &quot;" + secondValue + "&quot; &rarr; Converted: " + secondNumber + " &rarr; isNaN: " + secondIsNaN + " &rarr; isInteger: " + secondIsInteger + "</p>";
var resultThree = "<p>Original: &quot;" + thirdValue + "&quot; &rarr; Converted: " + thirdNumber + " &rarr; isNaN: " + thirdIsNaN + " &rarr; isInteger: " + thirdIsInteger + "</p>";
var resultFour = "<p>Original: &quot;" + fourthValue + "&quot; &rarr; Converted: " + fourthNumber + " &rarr; isNaN: " + fourthIsNaN + " &rarr; isInteger: " + fourthIsInteger + "</p>";

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

var conversionResults = resultOne + resultTwo + resultThree + resultFour;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = conversionResults

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

var firstGrade = 84;
var secondGrade = 91;
var thirdGrade = 78;

//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)

var totalScore = firstGrade + secondGrade + thirdGrade;
var averageScore = totalScore / 3;

//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//

var formattedAverage = averageScore.toFixed(2);

// 4. Build a string showing your results
//

var mathResults =
  "<p>Grades: " + firstGrade + ", " + secondGrade + ", " + thirdGrade + "</p>" +
  "<p>Total: " + firstGrade + " + " + secondGrade + " + " + thirdGrade + " = " + totalScore + "</p>" +
  "<p>Average: " + totalScore + " / 3 = <strong>" + formattedAverage + "</strong></p>";

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResults;


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//

// First if/else: explain whether the third value converts successfully.

let validationMessage;

if (Number.isNaN(thirdNumber)) {
    validationMessage = "The value &quot;" + thirdValue + "&quot; is not a valid number.";
}
else {
    validationMessage = "The value &quot;" + thirdValue + "&quot; is a valid number.";
}

// Second if/else: use the numeric average to determine passing status.
let grade;

if (averageScore >= 70) {
  grade = "Passing: the average is 70 or higher.";
} else {
  grade = "Not passing: the average is below 70.";
}


// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
// += is used so that we can add a message without replacing the whole p
document.getElementById("numberConversionOutput").innerHTML +="<p class=\"message\">" + validationMessage + "</p>";
document.getElementById("mathOutput").innerHTML += "<p class=\"message\">" + grade + "</p>";