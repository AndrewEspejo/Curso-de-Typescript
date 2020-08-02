//----------------Interfaces-------------
export {};
enum PhotoOrientation {
    Landscape, // podemos darle valor de manera explicita
    Portrait, // 1
    Square, // 2
    Panorama, // 3
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

//Función para mostrar una Fotografía
const showPicture = (picture: Picture) => {
    console.log(
        `[title: ${picture.title},date: ${picture.date},orientation:${picture.orientation}]`
    );
};

let myPic = {
    title: "Test title",
    date: "2020-03",
    orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);
