import {getSum41Alt1 as exo1 , getNumberOfEven42Alt1 as exo2, getMaxEven45Alt1 as exo5} from './array_utils.js';

console.log(exo1([8,1,2]));
console.log(exo2([8,1,2]));
console.log(exo5(8,1,2));

document.getElementById("valider").addEventListener("click", recupererNumber);
document.getElementById("ajout").addEventListener("click", ajouterElement);

function ajouterElement(){
    let dupliquerNumber = document.getElementById("number1");
    let dupliquerElement = document.getElementsByClassName("element1");
    console.log(dupliquerNumber);
    console.log(dupliquerElement);
    let cloneNumber = dupliquerNumber.cloneNode(true);
    let cloneElement = dupliquerElement.cloneNode(true);

    document.getElementsByClassName("SaisieElement").append(cloneNumber);
    document.getElementsByClassName("SaisieElement").append(cloneElement);
}
function recupererNumber(){
    let Lasomme = document.getElementById("number1");
    console.log(Lasomme);
    exo1([Lasomme]);
    console.log( exo1([Lasomme]));
    document.getElementById("somme").innerHTML = exo1([Lasomme]);
    
}

