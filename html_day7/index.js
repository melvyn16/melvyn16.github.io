
// to get value of HTML element.
//document.getElementById ("firstNumber").value;

//to display value:
//document.getElementById ("result").value = "";

// note that the var name is different with the element id
// condition within the function
function calculate () {
    var first_number; 
    var second_number;
    var operator;
    var total;

    first_number = document.getElementById ("firstNumber").value;
    second_number = document.getElementById ("secondNumber").value;
    operator = document.getElementById ("operator").value;

    if(operator== "+"){
        total = parseInt (first_number) + parseInt (second_number); 
    }
    else if (operator == "-"){
        total = parseInt (first_number) - parseInt (second_number); 
    }
    else if (operator == "/"){
        total = parseInt (first_number) / parseInt (second_number); 
    }
    else if (operator == "*"){
        total = parseInt (first_number) * parseInt (second_number); 
    }


    //total = parseInt(first_number) + parseInt (second_number); //parseInt is a function to convert the numbers as number.  (if the above condition is ready this can be deleted)
    document.getElementById("result").value = total;
}


//--------------- END ---------------//
//---------- Start -----------------//

//--Greetings-------------------//
//morning
//afternoon
//evening

var greet;

//greet = "afternoon"; //this is the declaration. hence the below condition is issued

if (greet == "morning") {
    console.log ("This is Morning");
}
else if (greet == "afternoon"){
    console.log ("This is Afternoon");
}
else if (greet == "evening"){
    console.log ("This is Evening");
}
else {
    console.log ("Night Time");  //this is the default condition! if the above condition is "false".
}
//--------------- END ---------------//
//---------- Start -----------------//
 
var greetings = ["Good_Morning", "Good_Afternoon", "Good_Evening"];  // remember to keep variable within " "//
console.log (greetings);  // this will list the total variables in the array..
console.log ( greetings.length); //that is a . not , this will return a count of the variable in an array. (result is 3 for this case)

// need to know the placement of the array. count or index will starts from 0,1,2,3,4 etc...
console.log (greetings [1]); // the result is "Good_Afternoon". Based on the array above.
console.log (greetings [2]); // the result is "Good_Evening". Based on the array above.
console.log (greetings [3]); // the result is "undefined". Based on the array above.

//--------------- END ---------------//
//---------- Start -----------------//
var primeNumber = [1, 3, 5, 7, 9, 12, 15];
console.log (primeNumber[primeNumber.length - 1]); // the result is 15. based on the array.


// loop in javascript
var step = 0;
while  ( step < primeNumber.length ){
   
    console.log (primeNumber[step]);
    step = step + 1;
}

//--------------- END ---------------//
//---------- Start -----------------//

var numbers = [1,2,3,4,5,6,7,8,9,10];
// condition >>> if even number --> "Even Number"
// -> "Not Even Number"

// while + if else
//var aa = 4 % 2; //any number / 2 = 0 is an even number??
//console.log (aa);

step = 0 ;
while ( step < numbers.length ){

    var isEven = numbers[step] % 2;

    if(isEven == 0){
        console.log (numbers[step] + "is even number");
    }else{
        console.log (numbers[step] + "is not even number");

    }
    step = step + 1; 
}

//--------------- END ---------------//
//---------- Start -----------------//

//the below is demostracting another type of looping style. "for loop"
var numbers_2 = [1,2,3,4,5,6,7,8,9,10];

for ( var a = 0 ; a < numbers_2.length ; a++ ) {
    console.log (numbers_2 [a]);
}


//--------------- END ---------------//
//---------- Start -----------------//
// .length can also be replace by .push( "string or numbers, etc... "). use with an empty array.

var collections = [];
console.log (collections);

collections.push("Test");
console.log (collections);  // push technic to the empty array

collections.push("Test 2");
console.log (collections);

//--------------- END ---------------//
//---------- Start -----------------//

var myCollections = []; // to define the var outside the function. if it inside the function the the function will overwrite result.
// loop is in the function // innerHTML can accept a HTML element. //.value is only for "input".
function addMe (){
    var myText = document.getElementById  ( "myText" ).value;
    myCollections.push(myText);  

    document.getElementById("myResult").innerHTML = "";
    for( var a = 0 ; a < myCollections.length ; a++ ){
        var currValue = myCollections[a] + "<br>"; //a is the current index. quote is need in JS if input of HTML elememt <br> is given in JS. <br> is break 
        var currResultValue = document.getElementById("myResult").innerHTML;
        document.getElementById("myResult").innerHTML = currResultValue + currValue;  // new value will be added when "add" is click
        
    }

    //document.getElementById("myResult").innerHTML = "This is Test Only";
}  

//var test = documemt.getElementById("myResult").innerHTML;
//console.log(test);

