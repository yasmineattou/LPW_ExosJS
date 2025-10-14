//Operateurs arithmétiques
function calculate (number1,number2) {
    let sum= number1 + number2;
    let diff= number1 - number2;
    let product= number1 * number2;
    let quotient= number1/number2;
    let rest= number1 % number2;

    let result = {sum,diff,product,quotient,rest};
    return result;
}

console.log(calculate(2,3))


//Operateurs de comparaison
function compareNumbers (number1,number2) {
    let plusGrand= number1 > number2;
    let plusPetit= number1 < number2;
    let egaux= number1 == number2; //compare que la valeur
    let strictementEgaux= number1 === number2; //compare valeur + type !

    let result = {plusGrand,plusPetit,egaux,strictementEgaux};
    return result;
}

console.log(compareNumbers(2,3))

//Operateurs logiques
function checkAge(age) {
    let result;

    if (age >= 18 && age <= 65) {
        result= true;
    }
    else {
        result=false; 
    }

    return result;
}

console.log(checkAge(70));

//Opérateurs d'affectation
function updateCounter(initialNumber) {
    let result;
    result= initialNumber +=1;
    result *=2;
    return result;
}

console.log(updateCounter(2));

function calculateTotal ([prix1,prix2,prix3]) {
    let total= 0;
    total= prix1*1.2+prix2*1.2+prix3*1.2;
    return total
}

console.log(calculateTotal([2,3,4]))