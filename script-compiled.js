'use strict';

// zadanie pierwsze
var string1 = 'Hello';
var string2 = 'World';
var addedStrings = string1 + ' ' + string2;
console.log(addedStrings);

//drugi sposób
var addedStrings2 = function addedStrings2() {
    var string1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var string2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
    return console.log(string1 + ' ' + string2);
};
addedStrings2();

// zadanie drugie
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log(a * b);
};
multiply(4, 5);
multiply(3);

// zadanie trzecie 
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        sum += arg;
    });
    console.log('Average: ' + sum / args.length);
};
average(1);
average(1, 3);
average(1, 3, 6, 6);

// zadanie czwarte
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

// zadanie piąte
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];

console.log(firstname, lastname);
console.log('First name is ' + firstname);
console.log('Last name is ' + lastname);
