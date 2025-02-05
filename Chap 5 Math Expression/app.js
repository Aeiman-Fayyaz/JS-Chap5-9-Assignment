// QUESTION 1
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// ANSWER

/*let num1 = 10

let num2 = 6

let num3 = 16

document.write ("sum of " + num1 + " and " + num2 + " is " + num3  )*/

// QUESTION 2
// Repeat task1 for subtraction, multiplication, division &
// modulus.

// ANSWER

// console.log (num1 - num2)
// console.log (num1 / num2)
// console.log (num1 % num2)
// console.log (num1 * num2)



// QUESTION 3
// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// ANSWER

// a. Declare a variable
// let number;

// b. Decleration
// number = 16

// document.write ("Value after variable declaration is " + number)

// c. Initialization
// number = 20

// d.
// document.write ("Value after variable initialization is " + number)


// e. Increment

// number++ 

// console.log(number);

// f.
// document.write ("Value after increment is " + number)

// g. Addition

// let number1 = 21

// let number2 = 7

// console.log(number1 + number2);

// h.

// document.write ("Value after addition is " + (number1 + number2))

// i. Decrement
// console.log(number1 - number2);

// j.

// document.write ("Value after decrement is " + (number1 - number2)) 


// k. division
// console.log(number1 / number2);

// l.

// document.write ("Value after division is " + (number1 / number2))


// QUESTION 4
// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// ANSWER

// let costOfMovie = 600

// console.log(costOfMovie * 5);


// QUESTION 5
// Write a script to display multiplication table of any
// number in your browser. E.g

// ANSWER

// let counter = 1

// document.write ("<h1>Table of 6 </h1>")

// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++
// document.write ("7 x " + counter + " = " + 7 * counter + "<br/>")
// counter++


// QUESTION 6
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:

// ANSWER

// a. Store a Celsius temperature into a variable.

// let celcius = 30

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

// let fahrenheit = (celcius * 9 / 5) + 32

// console.log(fahrenheit);

// c. Now store a Fahrenheit temperature into a variable.

// let fahrenheitConvert = 86

// d. Convert it to Celsius & output “NNoF is NNoC”.

// let celciusValue = (86-32)* 5/9

// console.log(celciusValue);



// QUESTION 7
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// ANSWER

// Price of item 1

// let price1 = 300 

// Price of item 2

// let price2 = 600

// Quantity of item1

// let Qtyitem1 = 3

// Quantity of item2

// let Qtyitem2 = 4

// Shipping charges

// let dc = 150

// document.write ("<h1>Checkout of your Order</h1> <br/>")

// Total amount

// let total = (price1 + Qtyitem1) + (price2 + Qtyitem2) + dc

// console.log(total);

// document.write ("Total Price <br/>" + (price1 + price2) + "<br/>")
// document.write ("Total Quantity <br/> " + (Qtyitem1 + Qtyitem2) + "<br/>")
// document.write ("Total amount <br/> " + total)

// QUESTION 8
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// ANSWER

// Total Marks

// let stdTotalMarks = 1250

// Obtained Marks

// let stdObtainedMarks = 987

// let percentage = (stdObtainedMarks / stdTotalMarks) * 100 ;

// console.log(percentage);

// document.write ("<h1>Student Marksheet</h1> <br/>")
// document.write ("Obtained Marks<br/>" + stdObtainedMarks + "<br/>")
// document.write ("Total Marks <br/>" + stdTotalMarks + "<br/>")
// document.write ("Percentage <br/>" + percentage)


// QUESTION 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// ANSWER

// let convertCurrency = (10 * 104.80) + (25 * 28)

// document.write ("<h1>Total Curreny in PKR</h1> <br/>") 

// document.write (convertCurrency + " PKR")

// console.log(convertCurrency);


// QUESTION 10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// ANSWER

// let arithmetic = 17 

// let calculation = (arithmetic + 5) + (arithmetic * 10) + (arithmetic / 2)

// console.log(calculation);



// QUESTION 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// ANSWER

// a. Store the current year in a variable.

// let currentYear = 2025

// b. Store their birth year in a variable.

// let birthYear = 2002 

// c. Calculate their 2 possible ages based on the stored
// values.

// let age = (currentYear - birthYear)

// Output them to the screen like so: “They are either NN or NN
// years old”.

// document.write ("<h1>Age Calculator</h1>")

// document.write ("Current Year " + currentYear + "<br/>")

// document.write ("Birth Year " + birthYear + "<br/>")

// document.write ("Your Age " + age)  
// console.log(age);


// QUESTION 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// ANSWER

// document.write ("<h1>The Geometrizer: Calculate properties of a circle.</h1>")

// a. Store a radius into a variable.

// let radius = 13

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.

// let circumference = 2 * 3.142 * radius

// document.write ("The circumference is " + circumference + "<br/>")

// console.log(circumference);

// Calculate the area based on the radius, and output “The
// area is NN”.

// let areaOfCircle = 3.142 * radius * radius

// console.log(areaOfCircle);

// document.write ("The area is " + areaOfCircle )

// QUESTION 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// ANSWER

// a. Store your favorite snack into a variable

// let favSnack = "chocolate"

// b. Store your current age into a variable.

// let currentAge = 23 

// c. Store a maximum age into a variable.

// let maxAge = 50 

// d. Store an estimated amount per day (as a number).

// let amountPerDay = 6

// e. Calculate how many would you eat total for the rest of
// your life.

// let totalSnack = (currentAge - maxAge) * (365 * amountPerDay)

// console.log(totalSnack); 

// document.write ("<h1>“lifetime supply” of your favorite snack is?</h1>")

// document.write ("Your favourite snack " + favSnack + "<br/>")

// document.write ("Your current age " + currentAge + "<br/>") 

// document.write ("Your maximum age " + maxAge + "<br/>") 

// document.write ("Snack amount per day " + amountPerDay + "<br/>")

// document.write ("You will need " + totalSnack + "rs" +" to last you until the ripe old age of " + maxAge)