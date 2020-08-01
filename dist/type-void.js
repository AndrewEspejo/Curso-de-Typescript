//Void
//Tipo explicito
const showInfo = (user) => {
    console.log("User info", user.id, user.userName, user.firstName);
    // return "Hola";
};
showInfo({ id: 1, userName: "JeffEspejo", firstName: "Andres" });
//Tipo inferido
const showFormattedInfo = (user) => {
    console.log("User info", `
	id:${user.id}
	username:${user.userName}
	firstname:${user.firstname}`);
};
showFormattedInfo({ id: 1, userName: "JeffEspejo", firstName: "Andres" });
//tipo void, como tipo de dato en variable
let unusable;
unusable = null; //Es necesario deshabilitar el modo estricto para que esto funcione
unusable = undefined;
//Never
const handleError = (code, message) => {
    //Process your code  here
    //Generate a message
    throw new Error(`${message},code:${code}`);
};
try {
    handleError(404, "not found");
}
catch (error) { }
const sumNumbers = (limit) => {
    let sum = 0;
    while (true) {
        sum++;
    }
    //return sum
};
sumNumbers(10);
//Ciclo infinit, el programa nunca termina
