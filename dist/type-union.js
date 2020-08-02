"use strict";
//--------------Unión de Tipos-------------------
//10, '10'
Object.defineProperty(exports, "__esModule", { value: true });
let idUser; //De este modo, ya puede ser tanto number como string
idUser = 10;
idUser = "10";
//Buscar username dado un ID
const getUsernameById = (id) => {
    //Lógica de negociom find the user
    return "Jeff Espejo";
};
getUsernameById(20);
getUsernameById("20");
// let smallPicture: SquareSize = "200x200"; //--- > Error por tipo
let smallPicture = "100x100";
let mediumPicture = "500x500";
let bigPicture = "1000x1000";
