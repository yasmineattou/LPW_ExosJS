//Création et manipulation

//Créez une fonction createUser qui prend un nom, un âge et un email et retourne un objet utilisateur avec ces propriétés
function createUser (name,age,email) { 
    const user = {name: name, age: age,email:email};

    return user;
}

console.log(createUser('yas',24,'yas@html.be'))


//Créez une fonction updateUser qui prend un objet utilisateur et des nouvelles valeurs et retourne l'objet mis à jour
function updateUser (user,newName, newAge, newEmail) {
    user.name = newName;
    user.age = newAge;
    user.email= newEmail;

    return user;
}

let user1 = createUser('yas',24,'yas@html.be');
console.log(user1);

userFinal= updateUser(user1,'lola',25,'lol@html.be')
console.log(userFinal);


//Créez une fonction getUserInfo qui prend un objet utilisateur et retourne une chaîne formatée avec ses informations
function getUserInfo (user) {
    result = user.name + ' a ' + user.age + ' ans et son email est ' + user.email;
    return result;
}

console.log(getUserInfo(userFinal));

//Méthodes d'objets
//Créez une fonction createBankAccount qui retourne un objet compte bancaire avec 
//Une propriété balance initialisée à 0
//Une méthode deposit pour ajouter de l'argent
//Une méthode withdraw pour retirer de l'argent
//Une méthode getBalance pour obtenir le solde


//méthode: ca reste fonction mais appliquée sur une classe 
function createBankAccount () {
    balance:0;
}