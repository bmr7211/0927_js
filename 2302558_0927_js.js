console.log('집에' + '가고싶다');
console.log('12' + 34);
console.log(`string literals : 1 + 2 = ${1 + 2}`);
console.log("jiyoon's \n\tbook");

console.log(1 + 1);
console.log(8 - 1);
console.log(20 / 5);
console.log(9 * 6);
console.log(100 % 6);
console.log(2 ** 5);

let counter = 5;

const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

let x = 3;
let y = 5;
x += y;
x -= y;
x *= y;
x /= y;

console.log(35 < 23);
console.log(35 <= 23);
console.log(35 > 23);
console.log(35 >= 27);

const value1 = false;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);

console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('웩');
    }
    return true;
}

console.log(!value1);

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const jiyoon1 = { name: 'jiyoon' };
const jiyoon2 = { name: 'jiyoon' };
const jiyoon3 = jiyoon1;
console.log(jiyoon1 == jiyoon2);
console.log(jiyoon1 === jiyoon2);
console.log(jiyoon1 === jiyoon3);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
