"use strict";

let a="Lucas";
let b="Paul";
let result=checkName(a,b)//permet de mettre les valeurs associées dans checkName

function checkName(nom1, nom2){
    if(nom1===nom2){
        return true//si nom1 est égal au nom2, il sera afficher 'true'
    }else{
        return false//si nom1 n'est pas égal au nom2, il sera afficher 'false'
    }
}
console.log(result);//affiche le résultat 'true' ou 'false'