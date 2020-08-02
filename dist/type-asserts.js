"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = "JeffEspejo";
//Tenemos una cadena, TS confía en mi!
let message = username.length > 5
    ? `Welcome ${username}`
    : `Username is too short`;
console.log("message", message);
let usernameWithId = "AndrewEspejo 25";
//¿Cómo obtener el username?
username = usernameWithId.substring(0, 12);
console.log("Username only", username);
//---------------Syntaxis "as"-------------
message =
    username.length > 5
        ? `Welcome ${username}`
        : `Username is too short`;
let helloUser;
helloUser = "Hello Paparazzi";
username = helloUser.substring(6);
console.log("username", username);
