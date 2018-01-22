/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

//Code Here
function isTyler(name){
return (name ==='Tyler');
}


////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

//Code Here
function getName(name){
return prompt("what's your name?");
}


////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

//Code Here
function welcome(getName) {
alert('welcome, + getName')
}


////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//Answer Here
//Arguments--what you actually pass into the function when called
//Parameters--the hypothetical inputs of a function that are noted and accounted for when declaring it


////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

//Answer Here
/*
The following values are always falsey
false
0 (zero)
"or" (empty string)
null
undefined 
NaN 
*/

////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

//Code Here
  function myName (){
    return "MJ";
  }


/*
  Now save the function definition of myName into a new variable called newMyName
*/

//Code Here
function myName (){
  let newMyname;
}


/*
  Now alert the result of invoking newMyName
*/

// Code Here



////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

//Code Here
function outerFn(){
  return function(){
    return "MJ"
  }
}


/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

//Code Here
let inneFn = "outerFn";


/* 
  Now invoke innerFn.
*/

// Code Here