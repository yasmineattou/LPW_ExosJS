//Exercice n°2: Paramètres et valeurs par défaut

function createUser(name,age=18,isActive=true) {
    return {
        name:name,
        age:age,
        isActive:isActive
    };
}

//Exercice n°4: Fonctions pures