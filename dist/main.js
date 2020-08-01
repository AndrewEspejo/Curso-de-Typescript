// console.log("Web development is my new passion!");
//Tipos en TypeScript
//Type Number
//Explícito
let phone;
phone = 15;
phone = 2544;
//Inferido
let phoneNumber = 2547;
phoneNumber = 124;
// phoneNumber=true //Error por tipo
//Hexadecimal
let hex = 0xf00d;
//Binario
let binary = 0b1010;
//Octal
let octal = 0o744;
//Type Boolean
let isPro;
isPro = true;
// isPro = 1; //Error  por tipo
//Inferido
let IsUserPro = false;
IsUserPro = true;
// IsUserPro = "holi"; //Error por tipo
//Type String
//Explicito
let userName = "AndrewEspejo";
userName = "jeff";
// userName = false; //Error tipo de dato string
//Template String
//Uso de back-tick
let userInfo;
userInfo = `
	User Info:
	username: ${userName}
	firstName: ${userName + "Andres"}
	phone:${phone}
	isPro:${isPro}
`;
console.log("userInfo", userInfo);
