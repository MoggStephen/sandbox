let booleanType = true;
let nullType = null; //Seems to return typeof obj
let undefinedType;
let numberType = 11111.111;
let bigIntType = BigInt(1);
let stringType = "stringr";
let symbolType = Symbol("symbol");
let objType = {value:"obj"};
let arrType = [0,1]; //is an object

//keyed collections
let setType = new Set(); //is object
let weakSetType = new WeakSet(); //is object
let mapType = new Map(); //is object
let weakMapType = new WeakMap(); //is object

//let jsonType = JSON.parse(stringType);

let typesArr = [booleanType,nullType,undefinedType,numberType,bigIntType,stringType,symbolType,objType,arrType,setType,weakSetType,mapType,weakMapType];
typesArr.forEach(type => {
    console.log(typeof(type));
});

console.log("####################################");
console.log("###Number Type methods!###");
console.log("Original Value -> " + numberType);
console.log(".toExponential() -> " + numberType.toExponential());
console.log(".toFixed(1) -> " + numberType.toFixed(1));
console.log(".toLocaleString() -> " + numberType.toLocaleString());
console.log(".toPrecision(2) -> " + numberType.toPrecision(2));
console.log(".toString() -> " + numberType.toString());
console.log(".valueOf() -> " + numberType.valueOf());
console.log(".length -> " + numberType.length);

console.log("####################################");
console.log("###String Type methods!###");
console.log("Original Value -> " + stringType);
console.log(".length -> " + stringType.length);
console.log(".charAt(0) -> " + stringType.charAt(0));
console.log(".charAt(stringType.length-1) -> " + stringType.charAt(stringType.length-1));
console.log("stringType[0] -> " + stringType[0]);
console.log(".at(0) -> " + stringType.at(0));
console.log(".at(-1) -> " + stringType.at(-1));
console.log(".concat(stringType) -> " + stringType.concat(stringType));
console.log(".includes(/string/) -> " + stringType.includes("string"));
console.log(".endsWith(/ng/) -> " + stringType.endsWith("r"));
console.log("First occurence! .indexOf(/r/) -> " + stringType.indexOf("r"));
console.log("Last occurence! .lastIndexOf(/r/) -> " + stringType.lastIndexOf("r"));
console.log(".normalize() -> " + stringType.normalize());
console.log(".padEnd(/w/) -> " + stringType.padEnd(10));
console.log(".padEnd(/w/) -> " + stringType.padEnd(10,"w"));
console.log(".padStart(/w/) -> " + stringType.padStart(10,"w"));
console.log(".repeat(3) -> " + stringType.repeat(3));
console.log("First occurence! .replace(/r/,/t/) -> " + stringType.replace('r','x'));
console.log("All occurences! .replaceAll(/r/,/t/) -> " + stringType.replaceAll('r','x'));
const regExp = /[0-9]/;
const regExpLetter = /[a-z]/;
console.log("Returns -1 as not found -> .search(/[0-9]/) -> " + stringType.search(regExp));
console.log("Returns index of first value found -> .search(/[a-z]/) -> " + stringType.search(regExpLetter));
//SLICE
console.log("SLICE");
console.log(".slice(-2) -> " + stringType.slice(-2));
console.log(".slice(2) -> " + stringType.slice(2));
console.log(".slice(0,2) -> " + stringType.slice(0,2));
console.log(".slice(0,-2) -> " + stringType.slice(0,-2));
console.log(".slice(3,2) -> " + stringType.slice(3,2));
//SUBSTRING
console.log("SUBSTRING");
console.log(".substring(-2) -> " + stringType.substring(-2));
console.log(".substring(2) -> " + stringType.substring(2));
console.log(".substring(0,2) -> " + stringType.substring(0,2));
console.log(".substring(0,-2) -> " + stringType.substring(0,-2));
console.log(".substring(3,2) -> " + stringType.substring(3,2));
//SPLIT
console.log(".split(//) -> " + stringType.split(''));
console.log(".split(/g/) -> " + stringType.split('g'));
console.log(".split(//,1) -> " + stringType.split('',2));
console.log(".split(//,1) -> " + stringType.split('',4));
console.log(".split(/r/) -> " + stringType.split('r'));

console.log(".startsWith(/s/) -> " + stringType.startsWith('s'));
console.log(".toLocaleLowerCase() -> " + stringType.toLocaleLowerCase());
console.log(".toLowerCase() -> " + stringType.toLowerCase());
console.log(".toLocaleUpperCase() -> " + stringType.toLocaleUpperCase());
console.log(".toUpperCase() -> " + stringType.toUpperCase());
console.log(".toString() -> " + stringType.toString());
console.log(".trim() -> " + stringType.trim());
console.log(".trimStart() -> " + stringType.trimStart());
console.log(".trimEnd() -> " + stringType.trimEnd());
console.log(".valueOf() -> " + stringType.valueOf());














