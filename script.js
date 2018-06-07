// zadanie pierwsze
const string1 = 'Hello';
const string2 = 'World';
const addedStrings = (`${string1} ${string2}`);
console.log(addedStrings);

//drugi sposób
const addedStrings2 = (string1 = 'Hello', string2 = 'world') => console.log(`${string1} ${string2}`);
addedStrings2();


// zadanie drugie
const multiply = (a = 1, b = 1) => console.log(a * b);
multiply(4, 5);
multiply(3);


// zadanie trzecie 
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
    });
    console.log(`Average: ${sum / args.length}`);
};
average(1);
average(1, 3);
average(1, 3, 6, 6);


// zadanie czwarte
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);


// zadanie piąte
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = array;
console.log(firstname, lastname);
console.log(`First name is ${firstname}`);
console.log(`Last name is ${lastname}`);