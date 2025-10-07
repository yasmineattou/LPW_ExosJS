//Exercice n°2: Paramètres et valeurs par défaut

function createUser(name,age=18,isActive=true) {
    return {
        name:name,
        age:age,
        isActive:isActive
    };
}

console.log(createUser("Charlie", 30, false));


//Exercice n°4: Fonctions pures
function add(number1,number2) {
    return number1+number2;
}

console.log(add(2,4));


function multiply(number1,number2) {
    return number1*number2;
}

console.log(multiply(2,4));

function getFullName(firstName,lastName) {
    return firstName +" " + lastName;
}

console.log(getFullName("yas","attou"));