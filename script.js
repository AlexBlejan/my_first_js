let age = 33;
console.log(age);

const piNumber = 3.14;
console.log(piNumber);

let name = `Alex`;
console.log(name);

name = `Alex Blejan`;
console.log(name);
console.log(`Alex `);

// operatori date numerice

let sum = 5 + 7;
console.log(sum);

let firstNumber = 12;
firstNumber = 13;
let secondNumber = 7;
let sumNumber = firstNumber + secondNumber;
console.log(sumNumber);
firstNumber = 50;
sumNumber = firstNumber + secondNumber;
console.log(sumNumber);
console.log(`Suma dintre ${firstNumber} si ${secondNumber} este ${sumNumber}`);

// scadere

let years = 5;
let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);

// inmultire

let numberA = 5;
let numberB = 9;
let multipyResult = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} rezulta ${multipyResult}`);

// impartire

let numberC = 45;
let numberD = 9;
let divisionResult = numberC / numberD;
console.log(`${numberC} impratit la ${numberD} rezulta ${divisionResult}`);

// Restul impartirii

let numberE = 15;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(
	`Restul impartirii lui ${numberE} la ${numberF} este ${moduloResult}`
);

// cum aflam cel mai mare numar de tip NUMBER
console.log(Number.MAX_SAFE_INTEGER);

// cum aflam cel mai mic numar tip NUMBER

console.log(Number.MIN_SAFE_INTEGER);

// numere de tip BIGINT

let bigIntNumber =
	589732680172634059873614508917023498670981374098720398476098234760982374698273094678961n;
console.log(`BigInt value is ${bigIntNumber}`);

// String operations

const myName = `Alex Blejan`;

// afisarea unui caracter de la o pozitie
// primul caracter
const firstCharInName = myName[0];
console.log(`Primul caracter din sir este ${firstCharInName}`);

// lungimea sirului
const myNameLength = myName.length;
console.log(`Lungimea sirului '${myName}' este ${myNameLength}`);

// ultimul caracter
const lastCharInName = myName[10];
console.log(`Ultimul caracter este '${lastCharInName}'`);
