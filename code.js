// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}



const sayHello = function (input) {
    if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    }else if(input === undefined){
        return "Hello, World!"
    }else{
        return "Hello, " + input + "!";
    }
}

function isFive(num) {
    return parseFloat(num) === 5;
}

// function isEven (number){
//     if (number % 2 === 0) {
//         return true; return false}


function isEven(num) {
    var returnMessage = parseFloat(num) % 2 === 0;
    return returnMessage
}

function isVowel(input) {
    var lowercase = toString().toLowerCase();
    var returnMessage = lowercase === "a" || lowercase === "e" || lowercase === "i" || lowercase === "o" || lowercase === "u";
    return returnMessage;
}

function foo() {
    return 2;
}