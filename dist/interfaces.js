"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
//Función para mostrar una Fotografía
const showPicture = (picture) => {
    console.log(`[title: ${picture.title},date: ${picture.date},orientation:${picture.orientation}]`);
};
let myPic = {
    title: "Test title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
