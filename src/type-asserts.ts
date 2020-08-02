// ---------<tipo>// Angle Bracket Syntax-----------
export {}; //-->variable duplicada
let username: any;
username = "JeffEspejo";

//Tenemos una cadena, TS confía en mi!
let message: string =
    (<string>username).length > 5
        ? `Welcome ${username}`
        : `Username is too short`;

console.log("message", message);

let usernameWithId: any = "AndrewEspejo 25";
//¿Cómo obtener el username?
username = (<string>usernameWithId).substring(0, 12);
console.log("Username only", username);

//---------------Syntaxis "as"-------------
message =
    (username as string).length > 5
        ? `Welcome ${username}`
        : `Username is too short`;

let helloUser: any;
helloUser = "Hello Paparazzi";
username = (helloUser as string).substring(6);
console.log("username", username);
