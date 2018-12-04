/**create a function and recall the function. this is a procedure*/

//parameter is assigned "myLocation"
function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2;
    console.log(myName);
}

calculate("One North", "JTC Launchpad");
calculate( "test", "test");


/* 2nd type of function. call of value  */

function getMyFullName() {
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;

    return fullName;
}

var myFullName = getMyFullName();

console.log (myFullName);
// the above are example of functions

//the below is just and execise. Give a meaningful "function" and "variable name".
function greet (firstName1, lastName1) {
    var myGreeting = "Welcome " + firstName1 + ", " + lastName1;
    console.log(myGreeting);
}

greet ("Michael", "Jodan"); // the name "Michael" is the variable to "firstName1".
greet ("Mauro", "Icardi"); 
greet ("Lionel", "Messi"); 

//another execise
function greet2 (firstName2, lastName2, bornYear2) {
    var age2 = 2018 - bornYear2;
    var myGreeting2 = "Welcome " + firstName2 + ", " + lastName2 + ", " + age2;
    console.log(myGreeting2);
}

greet2 ("Michael", "Jodan ", 1988); // the name "Michael" is the variable to "firstName1".

// another example
function testMe () {
    alert ("Hi you hit the button");
}




