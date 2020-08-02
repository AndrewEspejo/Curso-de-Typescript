//-------------Funciones en TS---------------
export {};
//Crear una fotografia
// const createPicture=(title:,date,size)=> {
// 	//title
// }

type SquareSize = "100x100" | "500x500" | "1000x1000";
//Usamos TS, definimos tipos para parámetros
// const createPicture = (title: string, date: string, size: SquareSize) => {
//     //Se crea la Fotografía
//     console.log("Create Picture using", title, date, size);
// };

// createPicture("My boy", "16-11-2020", "500x500");

//Parámetros opcionales en funciones
const createPicture = (title?: string, date?: string, size?: SquareSize) => {
    //Se crea la Fotografía
    console.log("Create Picture using", title, date, size);
};

createPicture("My boy", "16-11-2020", "500x500");
createPicture("Dad", "Agosto");

//Flat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size,
    // };
    return { title, date, size };
};

const picture = createPic("Platzi Session", "Marzo", "100x100");
console.log("picture", picture);

//Tipo de retorno con TypeScript

const handleError = (code: number, message: string): never | string => {
    //Procesamiento del código, mensaje
    if (message === "error") {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return "An error has occurred";
    }
};

try {
    let result = handleError(200, "OK"); //String
    console.log("result", result);
    result = handleError(404, "error"); //Never
    console.log("result", result);
} catch (error) {}
