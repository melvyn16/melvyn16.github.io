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

