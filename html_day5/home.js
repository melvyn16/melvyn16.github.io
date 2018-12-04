var my_name;  /* a temporary box for data storing, string, number, array, object, nullvalue */
var my_age;
var my_birthady;

my_name = "Stackup"; /* this will be a string */
my_age = 23; /* this will become a number, "" is not needed for number */
my_birthady = "20/03/1998" /* string value */ 

console.log(my_name); /**for testing only on broswer console*/
console.log(my_age);
console.log(my_birthady);

var my_address = "JTC LaunchPad"; /**this is another method of declaring variable */

var my_test; /** this var is not define */

console.log (typeof(my_test)); /** a test of what type of variable is this */
console.log (typeof(my_name)); /** a test of type of var */
console.log (typeof(my_age)); /** a test of type of var */

/** rule to name a variable (ie, camelCase or -separate"___") */
/**camelCase = , "myName" ; or "my_name" */

var firstName;
var lastName;

firstName = "Pika";
lastName = "Chu";
space = " ";
/** to combine the two above into one see below */

var fullName = firstName + space + lastName;  /** to add + to combine var */
console.log (fullName); /** test in console */

var fullName1 = firstName + " " + lastName; /** the space is added but not define using var */
console.log (fullName1);

/** string + string = string */
/** string + number = string */
/** number + number = number */

var qty = 2;
var total = 200;
var qtyTotal = qty * total; /** qty x total */
console.log (qtyTotal); 



var firstNumber;
var secondNumber;
var totalNumber;

firstNumber = 10;
secondNumber = "10";
totalNumber = firstNumber * secondNumber; /** firstNumber x secondNumber */
console.log (totalNumber); /** check in browser */

console.log (fullName+firstNumber); /** the number will become a string = "Pika Chu10" */


/** boolean = only have 2 value. True or False */

/** firstNumber = true; 
firstNumber = false; */

/**compare two variables */
/** "==" (the same value) or "!=" (not the same value)  or "====" or "!=="s (compare value and type) */

var compareResult;
compareResult = (firstNumber == secondNumber); /* (will not compare value and type) */
console.log (compareResult);

compareResult = (firstNumber === secondNumber); /* (compare value and type) */
console.log (compareResult);

var testA = "Singapore";
var testB = "Singapore";
var compareTest = (testA!=testB);
console.log (compareTest); /** the resule is "false" */

var myHtmlValue;

myHtmlValue = document.getElementById("my_name").value; /** get the value from the html */
console.log(myHtmlValue);

/** function is a statement that perform tasks ie 'calculate" or "save" or "update" */
/** function "name of function" ( camelCase ) {}" to return a value or not or procedure*/
