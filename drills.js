/*
-------------------
Sum Two Numbers
--------------------
*/

var num1 = 15;
var num2 = 20;

var sumTwoNumbers = function(num1, num2){
    // return (Number(num1) + Number(num2));
    return "Sum Two Numbers (" + num1 + ", " + num2 + "): " + (num1 + num2);
}
console.log(sumTwoNumbers(num1, num2));


/*
-------------------
Sum An Array
--------------------
*/

var array1 = [1,2,3,4,5,6];

var sumArray = function ( inArray ) {
    var sum = 0;
    inArray.forEach(function( arrVal ){
        sum += arrVal;
    })
    console.log("Sum of the Array = " + sum);
}
sumArray(array1);

/*
-------------------
Farenheit to Celsius
--------------------
*/
var fTemp = 45;
var temperatureFtoC = function(fTemp){
    return (fTemp - 32) * 0.56;
}

console.log("Farenheit to Celsius: " + fTemp + "F = " + temperatureFtoC(fTemp).toFixed(2) + "C");

/*
-------------------
Return Number of Vowels in String
--------------------
*/

var vowelsArray = ['a','e','i','o','u'];
var myInputString = "I am learning a lot at DevPoint Labs";

var countVowelsInString = function(vowels, myString) {
    var stringSplit = myString.toLowerCase().split('');
    var vowelFilterArray = stringSplit.filter( function(l){
        if (vowels.includes(l)) {
            return l;
        }
    });
    return vowelFilterArray.length;
}
console.log("Vowel Count in String is: " + countVowelsInString(vowelsArray, myInputString));


/*
-------------------
Roll Dice
--------------------
*/

var rollTwoDice = function() {
    var randomDice1 = Math.floor(Math.random() * 6 + 1);
    var randomDice2 = Math.floor(Math.random() * 6 + 1);
    return [randomDice1, randomDice2];
}
console.log("Two Dice Roll: " + rollTwoDice());

/*
-------------------
Array Average
--------------------
*/

var baseArray = [2, 4, 8, 25, 40];

var calculateArrayAverage = function(inputArray) {
    var sum = 0;
    inputArray.forEach(function (val) {
        sum += val;
    })
    console.log("Array Average = " + sum / inputArray.length);
}
calculateArrayAverage(baseArray);


/*
-------------------
FizBuzz
--------------------
*/

var fizzBuzzPrint = function() {
    var caseVal = '';
    for (var n = 1; n <= 100; n++) {
        //chain ternary operators
        n % 3 === 0 && n & 5 === 0 ? console.log("Fizz Buzz"):
        n % 3 === 0 ? console.log("Fizz"):
        n % 5 === 0 ? console.log("Buzz"):
        console.log(n);
    }
}
// fizzBuzzPrint();

/*
-------------------
Factorial
--------------------
*/
// product of all positive integers less than or equal to n

var calcFactorial = function(num) {
    if (num <= 0){
        console.log("number must be greater than 0");
        return
    }
    var product = 1;
    for (var n = num; n > 0; n--) {
        product *= n;
    }
    console.log(product);
}
calcFactorial(6);

/*
-------------------
Fibinacci
--------------------
*/
//every number after the first two is the sum of the two preceding ones
var calcFibinacci = function(fibIndex) {
    var fibArray = [1, 1]

    for (var n = 2; n <= fibIndex; n++) {
        fibArray[n] = fibArray[n - 2] + fibArray[n - 1];
        //console.log("curr Fib: " + fibArray[n]);
    }

    console.log("Fibinacci value = " + fibArray[fibIndex]);    
}
calcFibinacci(11);

