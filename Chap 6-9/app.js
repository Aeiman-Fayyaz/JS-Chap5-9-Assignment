// QUESTION 1
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// ANSWER

// let x = 23

// document.write ("The value of x is " + x + "<br/>")

// Pre increment

// ++x

// console.log(x);

// document.write ("The value of x after pre increment is " + 24 + "<br/>")

// Post increment

// x++

// console.log(x);

// document.write ("The value of x after post increment is " + 25 + "<br/>")

// Pre decrement

// --x

// console.log(x);

// document.write ("The value of x after post decrement is " + 22 + "<br/>")

// Post decrement

// x--

// console.log(x);

// document.write ("The value of x after pre decrement is " + 21 + "<br/>")


// QUESTION 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// ANSWER

// let a = 2

// let b = 1

// document.write ("The value of this equation is " + "a = 2 " + "b = 1" + "<br/>")

// Explain the output at each stage:

// Decrement of --a;

// let decrement = --a

// console.log(a);

// document.write ("<h4>Explanation</h4> <br/>")

// document.write("a value 2" + "<br/>")
// document.write("Result --1 <br/>")

// document.write ("<h4>Output</h4> <br/>")

// document.write ("The value of --a is " + decrement + "<br/>")

// Decrement of --a - --b;

// let preDecrement

// preDecrement = --a - --b 

// console.log(preDecrement);

// document.write ("The value of --a - --b is " + preDecrement + "<br/>" )

// document.write ("<h4>Explanation</h4> <br/>")

// document.write("--2 - --1" + "<br/>")

// document.write("--1 - --0" + "<br/>")

// document.write("Result 1 <br/>")

// document.write ("<h4>Output</h4> <br/>")

// document.write ("The value of --a - --b is " + preDecrement + "<br/>")

// --a - --b + ++b;

// let _3values

// _3values = --a - --b + ++b

// console.log(_3values);

// document.write ("The value of --a - --b + ++b is " + _3values + "<br/>")

// document.write ("<h4>Explanation</h4> <br/>")

// document.write("--a - --b + ++b" + "<br/>")

// document.write("--1 - --0 + ++1" + "<br/>")

// document.write("Result 2 <br/>")

// document.write ("<h4>Output</h4> <br/>")

// document.write ("The value of --a - --b + ++b is " +_3values + "<br/>")

// --a - --b + ++b + b--;

// let finalEquation = --a - --b + ++b + b--

// console.log(finalEquation);

// document.write ("The value of --a - --b + ++b + b-- is " + finalEquation + "<br/>")

// document.write ("<h4>Explanation</h4> <br/>")

// document.write("--a - --b + ++b + b--" + "<br/>")

// document.write("--1 - --0 + ++1 + 0" + "<br/>")

// document.write("Result 3 <br/>")

// document.write ("<h4>Output</h4> <br/>")

// document.write ("The value of --a - --b + ++b + b-- is " + finalEquation + "<br/>")

// QUESTION 3
// Write a program that takes input a name from user &
// greet the user.

// ANSWER

// let userName = prompt ("Enter your name")

// alert("Hello " + userName)


// QUESTION 4
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// ANSWER

// QUESTION 5
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// ANSWER

// a) Take three subjects name from user and store them in 3
// different variables.

let subject1 = console.log(prompt ("Enter your first subejct name"));

let subject2 = console.log(prompt ("Enter your second subejct name"));

let subject3 = console.log(prompt ("Enter your third subejct name"));

// b) Total marks for each subject is 100, store it in another
// variable.

let totalMarks = 300

// c) Take obtained marks for first subject from user and
// stored it in different variable.

let obtainedMarksSubject1 = console.log(prompt ("Enter your first subject Marks"));

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.

let obtainedMarksSubject2 = console.log(prompt ("Enter your second subject Marks"));

let obtainedMarksSubject3 = console.log(prompt ("Enter your third subject Marks"));

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let obtainedMarks =  obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3

console.log(obtainedMarks);
