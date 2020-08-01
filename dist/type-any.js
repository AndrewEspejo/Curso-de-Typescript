"use strict";
//Tipo explicito
let idUser;
idUser = 1; //type number
idUser = "1"; //type string
console.log("idUser", idUser);
//Tipo inferido
let otherId;
otherId = 2;
otherId = "2";
console.log("otherid", otherId);
let surprise = "Hello TypeScript";
//surprise.sayHello(); //Error
const res = surprise.substring(6);
console.log("res", res);
