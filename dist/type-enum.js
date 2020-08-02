// Enum: permiten definir un conjunto de constantes con nombre
// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log("landscape : ", landscape); // -> 0
console.log("Landscape : ", PhotoOrientation[0]); // -> Landscape
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log("porttrait : ", PictureOrientation.Portrait); // -> 11
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log("country : ", country); // --> col
//Cómo unir dos o más enumerados?
var FirstEnum;
(function (FirstEnum) {
    FirstEnum["value1"] = "value1";
    FirstEnum["value2"] = "value2";
})(FirstEnum || (FirstEnum = {}));
var SecondEnum;
(function (SecondEnum) {
    SecondEnum["value3"] = "value3";
    SecondEnum["value4"] = "value4";
})(SecondEnum || (SecondEnum = {}));
let testEnum = Object.assign({}, FirstEnum, SecondEnum);
console.log(testEnum); // value 4
