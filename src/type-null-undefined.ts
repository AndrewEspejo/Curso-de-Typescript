//Null
//Explicita
let multiVariable: null;
multiVariable = null;
// multiVariable = 45; //Error de tipo

//Inferido
let otherVariable = null;
// otherVariable = "test";

console.log("multivariable", multiVariable);
console.log("otheVariable", otherVariable);

//Undefined
//Explicito
let undefinedVariable: undefined;
// undefinedVariable = "test"; //Error por tipo

//Implicito
let otherUndefined = undefined;
// otherUndefined = 25;

console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);

//Null y Undefined como subtipos
/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName: string;
// albumName = null;
// albumName = undefined;
