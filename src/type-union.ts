//--------------Unión de Tipos-------------------
//10, '10'

export {}; // -->idUser ya está siendo usada en otro archivo
// let idUser: number | string; //De este modo, ya puede ser tanto number como string
// idUser = 10;
// idUser = "10";

// //Buscar username dado un ID
// const getUsernameById = (id: number | string) => {
//     //Lógica de negociom find the user
//     return "Jeff Espejo";
// };

// getUsernameById(20);
// getUsernameById("20");

//-------------Alías de tipos en TypeScript------------
type IdUser = number | string;
type Username = string;
let idUser: IdUser; //De este modo, ya puede ser tanto number como string
idUser = 10;
idUser = "10";

//Buscar username dado un ID
const getUsernameById = (id: IdUser): Username => {
    //Lógica de negociom find the user
    return "Jeff Espejo";
};

getUsernameById(20);
getUsernameById("20");

//------------------Tipos literales en TS-----------------
//100*100, 500*500, 1000*1000

type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200"; //--- > Error por tipo
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";
let bigPicture: SquareSize = "1000x1000";
