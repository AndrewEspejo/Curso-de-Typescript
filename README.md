---
description: TypeScript course by Platzi
---

# Curso de TypeScript

## ¿Qué es TypeScript?

Es un Lenguaje de Programación de código abierto, basado en JavaScript. TypeScript contiene un superconjunto de métodos, funciones y otras características de JavaScript, tales como las clases, closures, entre otras.

TypeScript tiene soporte y una sintaxis similar de JavaScript, esto quiere decir que en el código de TypeScript se puede usar código JavaScript sin problemas.

Al estar creado sobre JavaScript, se puede considerar a TypeScript como un lenguaje de programación de alto nivel, cabe mencionar que dicha denominación es esencial de _JavaScript._ Asimismo,TypeScript también se le define como Superset, esta definición se le aplica a los Lenguajes de Programación que han sido escritos sobre otro Lenguaje de Programación.

Actualmente TypeScript es mantenido y soportado por una de las empresas más importantes del ámbito tecnológico, siendo esta Microsoft.

## ¿Por qué TypeScript?

TypeScript mejora la experiencia y la productividad de los desarrolladores. Nos permite utilizar técnicas como el tipado estático opcional y/o la encapsulación para generar un código mucho más mantenible y escalable que con JavaScript tradicional.

## ¿Qué podemos hacer con TypeScript?

Gracias a que TypeScript está elaborado apartir de fases fijas y estructurales provenientes de JavaScript, nos permite interactuar, dinamizar y establecer procesos complementarios dentro del desarrollo de proyectos y tecnologías innovadoras, gracias al alcance y potencial de JavaScript, tales como:

* Aplicaciones Móviles \(Ionic, React Native, etc.\)
* Páginas Web
* Sistemas Webs
* Librerías que podemos alojarlas en el repositorio [NPM](https://www.npmjs.org/)
* Crear aplicaciones de lado del servidor en Node JS
* Crear aplicaciones Desktop en Electron JS
* Crear interfaces y funcionalidades en React JS
* Crear interfaces y funcionalidades en Vue JS
* Crear interfaces y funcionalidades en Angular
* Crear componentes y módulos.
* Consumir REST APIs
* Entre muchas otras cosas más.

En suma a lo anterior, es de amplia relevancia señalar que muchos proyectos que han sido creados con JavaScript pueden usar tranquilamente TypeScript y funcionar de maravilla.

## Instalación de herramientas

Para este curso vamos a necesitar tener instalado Node JS en nuestro computador y adicional a esto Visual Studio Code que será nuestro editor de código, este último se lleva de maravillas ya que fue desarrollado por Microsoft y gran parte de su desarrollo está realizado en TypeScript. Para tener más información de TypeScript en VS code puedes visitar el siguiene [link](https://code.visualstudio.com/docs/typescript/typescript-tutorial) .

Para instalar Node JS puedes dirigirte a su [página oficial ](https://nodejs.org/es/)-

### Typescript en Visual Studio Code

El editor Visual Studio Code viene configurado para aprovechar al máximo TypeScript.  
Entre las features se encuentran:

* IntelliSense
* Snippets
* JSDocs
* Formateo
* Refactorización
* Arreglos rápidos.

## El compilador de TypeScript

Es la herramienta estrella para trabajar con TypeScript. Sus siglas son tsc: _TypeScript Compiler_ . Esto nos permite compilar nuestro código _TypeScript_ a _JavaScript_ funcional en cualquier browser.

Para instalar TypeScript en nuestro equipo, ejecutamos el comando

```text
npm install -g typescript
```

> Nota:
>
> El -g indica que lo instalaremos de manera global para poder ejecutarlo en cualquiera de nuestros proyectos.

Ahora, procedemos a consultar la versión del compilador de TS

```text
tsc -v
```

### ¿Cómo usamos el compilador tsc?

Todos nuestros archivos de TypeScript tienen la extensión .TS, estos archivos serán la entrada para nuestro compilador tsc y su salida serán archivos .JS que serán utilizando en los distintos navegadores o en nuestros entornos de ejecución.

Supongamos que tenermos un archivo `Hello.ts` , para compilador a .JS utilizamos el siguiente comando

```text
tsc Hello.ts
```

Como resultado de ejecutar el anterior comando, se generará un archivo con su mismo nombre pero con extensión .JS.

En este punto, es necesario un motor que pueda correr nuestro código JavaScript, en este caso puede ser el motor V8 \(desarrollado por Google\) que viene con Node JS.

Ahora, pasaremos a realizar lo anterior pero en nuestro IDE.

```text
mkdir typescriptcourse
code .
```

Dentro de nuestro IDE, procedemos a crear el archivo `Hello.ts`

![](.gitbook/assets/selection_038.png)

Ahora, vamos a aprovechar que VS Code tiene una integración directa con la terminal y en ella ejecutaremos el siguiente comando

```text
tsc Hello.ts
```

![](.gitbook/assets/selection_039.png)

Al ejecutar dicho comando, vemos que se genera nuestro archivo Hello.JS, el cuál vamos a ejecutar con el siguiente comando

```text
node Hello.js
```

> Nota:
>
> Los archivos TypeScript nunca se van a compilar directamente desde nuestros navegadores o desde Node JS. Por eso es importante usar el compilador de TypeScript

Al ejecutar dicho comando, obtenemos lo que esperabamos:

![](.gitbook/assets/selection_040.png)

El compilador de TypeScript nos permite ejecutar una opción llamada watch, esta opción nos permite ejecutar un servicio que observará constantemente los cambios en nuestro archivo Typescript para compilarlos en su respectivo archivo JavaScript.

```text
tsc --watch Hello.ts
```

## El archivo de configuración de TypeScript

El archivo `tsconfig.json` permite especificar la raiz de un proyecto TypeScript, además de permitir configurar opciones del compilador tsc.

Para genera dicho archivo, ejecutamos el comando

```text
tsc --init
```

El resultado después de ejecutar dicho comando es el siguiente:

![](.gitbook/assets/selection_041.png)

Como podemos observar, tenemos un "message" único para nuestro archivo de configuraciónd de TypeScript. El contenido de dicho archivo se ve como este

```javascript
{
    "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */

        /* Basic Options */
        // "incremental": true,                   /* Enable incremental compilation */
        "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
        "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
        // "lib": [],                             /* Specify library files to be included in the compilation. */
        // "allowJs": true,                       /* Allow javascript files to be compiled. */
        // "checkJs": true,                       /* Report errors in .js files. */
        // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
        // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
        // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
        // "sourceMap": true,                     /* Generates corresponding '.map' file. */
        // "outFile": "./",                       /* Concatenate and emit output to single file. */
        // "outDir": "./",                        /* Redirect output structure to the directory. */
        // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        // "composite": true,                     /* Enable project compilation */
        // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
        // "removeComments": true,                /* Do not emit comments to output. */
        // "noEmit": true,                        /* Do not emit outputs. */
        // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
        // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
        // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

        /* Strict Type-Checking Options */
        "strict": true /* Enable all strict type-checking options. */,
        // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
        // "strictNullChecks": true,              /* Enable strict null checks. */
        // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
        // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
        // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
        // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
        // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

        /* Additional Checks */
        // "noUnusedLocals": true,                /* Report errors on unused locals. */
        // "noUnusedParameters": true,            /* Report errors on unused parameters. */
        // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
        // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

        /* Module Resolution Options */
        // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
        // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
        // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
        // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
        // "typeRoots": [],                       /* List of folders to include type definitions from. */
        // "types": [],                           /* Type declaration files to be included in compilation. */
        // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
        "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
        // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
        // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

        /* Source Map Options */
        // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
        // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
        // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

        /* Experimental Options */
        // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
        // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

        /* Advanced Options */
        "skipLibCheck": true /* Skip type checking of declaration files. */,
        "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
    }
}
```

Una vez creado y configurado nuestro archivo `tsconfig.json,` con la ayuda de tsc podemos definir diferentes usos para tsconfig

![](.gitbook/assets/selection_042.png)

Ahora, procedemos a crear una carpeta denominada src \(sources\) en nuestro proyecto, movemos nuestro archivo Hello.ts a dicha carpeta y borramos Hello.js. Ahora, ejecutamos el comando tsc por si solo y este empieza a buscar la configuración, de modo que por si solo crea nuestro archivo Hello.js en el directorio src

![](.gitbook/assets/selection_043.png)

## Mi primer proyecto TypeScript

En esta sección trabajaremos en nuestro primer proyecto con Typescript.

Lo primero que haremos será dirigirnos a nuestro archivo `tsconfig.json`, en este buscaremos el parámetro outDir y vamos a personalizar la salida de los diferentes archivos JS para nuestro proyecto

```javascript
"outDir":"./dist",
```

Al guardar los cambios en nuestro .JSON, nos dirigimos a la terminar y ejecutamos

```javascript
tsc
```

Esto lo que hará es buscar la configuración de nuestro archivo .**JSON**, por lo que creará el directorio dist y dentro de este nuestro archivos compilados **.JS**

![](.gitbook/assets/selection_044.png)

El siguiente paso consiste en dirigirnos a nuestra terminal y acceder al directorio dist , y ejecutar node para comprobar que nuestro archivo **.JS** genera lo que esperabamos

![](.gitbook/assets/selection_045.png)

Muy bien, ahora crearemos un archivo `main.ts` con el cuál trabajaremos de aquí en adelante. En este agregaremos un código bastante simple:

```typescript
console.log('Hola Platzi')
```

Ahora, en nuestra terminal ejecutamos el comando

```typescript
tsc --watch
```

De modo que compile automaticamente los cambios que hagamos en nuestro archivo `main.ts`

## Tipos en TypeScript

### Tipado en TypeScript

Ahora veremos cuáles son los tipos de datos que existen en TypeScript y las oportunidades que nos ofrecen:

![Tipado en TS](.gitbook/assets/selection_046.png)

![](.gitbook/assets/selection_047.png)

![](.gitbook/assets/selection_048.png)

En TypeScript se encuentran definidos ciertos tipos básicos, conocidos también como tipos primitivos con los cuáles es fundamental trabajar en nuestros desarrollos. Entre estos se encuentran:

![](.gitbook/assets/selection_049.png)

### Number, Boolean and String

![](.gitbook/assets/selection_050.png)

Ahora, veremos en código como podemos definir variables con este tipo de dato:

```typescript
//Number
//Explícito
let phone: number;
phone = 15;
phone = 2544;

//Inferido
let phoneNumber = 2547;
phoneNumber = 124;
// phoneNumber=true //Error por tipo

//Hexadecimal
let hex: number = 0xf00d;
//Binario
let binary: number = 0b1010;
//Octal
let octal: number = 0o744;
```

![Tipo Boolean](.gitbook/assets/selection_051.png)

Veamos ahora en código como podemos defnir variables utilizando este tipo de dato:

```typescript
//Type Boolean
let isPro: boolean;
isPro = true;
// isPro = 1; //Error  por tipo

//Inferido
let IsUserPro = false;
IsUserPro = true;
// IsUserPro = "holi"; //Error por tipo
```

![](.gitbook/assets/selection_053.png)

Veamos ahora en código como podemos defnir variables utilizando este tipo de dato:

```typescript
//Type String
//Explicito
let userName: string = "AndrewEspejo";
userName = "jeff";
// userName = false; //Error tipo de dato string
```

![](.gitbook/assets/selection_054.png)

Veamos ahora en código como podemos defnir variables utilizando este tipo de dato:

```typescript
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
```

### Any

![](.gitbook/assets/selection_055.png)

Básicamente, **Any** se utiliza en casos muy especificos cuando nuestras variables pueden cambiar de un tipo a otro. Ya vimos que TypeScript es un lenguaje fuertemente tipado, por lo que ante cambios abruptos en el tipo de variables nos saltará un error.

Para dejarlo más claro, veremos ejemplos de **Any** en código:

```typescript
//Tipo explicito
let idUser: any;
idUser = 1; //type number
idUser = "1"; //type string
console.log("idUser", idUser);

//Tipo inferido
let otherId;
otherId = 2;
otherId = "2";
console.log("otherid", otherId);

let surprise: any = "Hello TypeScript";
//surprise.sayHello(); //Error
const res = surprise.substring(6);
console.log("res", res);
```

### Void and never

![](.gitbook/assets/selection_056%20%281%29.png)

```typescript
//Void

//Tipo explicito
const showInfo = (user: any) => {
    console.log("User info", user.id, user.userName, user.firstName);
    // return "Hola";
};

showInfo({ id: 1, userName: "JeffEspejo", firstName: "Andres" });

//Tipo inferido
const showFormattedInfo = (user: any) => {
    console.log(
        "User info",
        `
    id:${user.id}
    username:${user.userName}
    firstname:${user.firstname}`
    );
};
showFormattedInfo({ id: 1, userName: "JeffEspejo", firstName: "Andres" });

//tipo void, como tipo de dato en variable
let unusable: void;
unusable = null; //Es necesario deshabilitar el modo estricto para que esto funcione
unusable = undefined;
```

![](.gitbook/assets/selection_082%20%281%29.png)

```typescript
//Never
const handleError = (code: number, message: string): never => {
    //Process your code  here
    //Generate a message
    throw new Error(`${message},code:${code}`);
};
try {
    handleError(404, "not found");
} catch (error) {}

const sumNumbers = (limit: number): never => {
    let sum = 0;
    while (true) {
        sum++;
    }
    //return sum
};

sumNumbers(10);
//Ciclo infinit, el programa nunca termina
```

### Null & undefined

![](.gitbook/assets/selection_083.png)

```typescript
//Null
//Explicita
let multiVariable: null;
multiVariable = null;
// multiVariable = 45; //Error de tipo

//Inferido
let otherVariable = null;
otherVariable = "test";

console.log("multivariable", multiVariable);
console.log("otheVariable", otherVariable);

//Undefined
//Explicito
let undefinedVariable: undefined;
// undefinedVariable = "test"; //Error por tipo

//Implicito
let otherUndefined = undefined;
otherUndefined = 25;

console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
```

![](.gitbook/assets/selection_084.png)

```typescript
//Null y Undefined como subtipos

let albumName: string;
albumName = null;
albumName = undefined;
```

![](.gitbook/assets/selection_085.png)

```typescript
//Null y Undefined como subtipos
/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName: string;
// albumName = null;
// albumName = undefined;
```

### Object

![](.gitbook/assets/selection_086.png)

```typescript
// ------ Tipo: object ------
// explicito
let user: object;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};
console.log('user', user);
// console.log('user.username', user.username); // --> no se puede acceder al dato username
```

Aquí encontramos un conflicto, en la siguiente imagen se explica el por qué:

![](.gitbook/assets/selection_087.png)

```typescript
/*
 * Object: instancia de la clase Object de JavaScript
 * object: tipo para valores no primitivos
 */

// ---- Object vs object (Clase JS vs tipo TS) ----
// considera como tipo instancia Object de JavaScript
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // true o false
console.log('isInstance : ', isInstance); // clase Object JavaScript
console.log('myObj.username : ', myObj.username); // --> se puede acceder al dato username
```

### Array

![](.gitbook/assets/selection_088.png)

```typescript
// ------- Tipo: Array -------

// Explicito
let users: string[];
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // --> Error

// Inferido
let otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];
// otherUsers = [1, true, 'test']; // --> Error

// Array<tipoDato>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user : ', users[0]); // --> users[indice]: luixaviles
console.log('first title : ', pictureTitles[0]);

// Propiedades en Array
console.log('users.length : ', users.length); // -> Tamaño del Array

// Uso de funciones en Arrays
users.push('aPlatziUser');  // -> agrega dato a la cola del Array
users.sort();   // --> ordena el Array de menor a mayor (alfabetica)
console.log('users', users);
```

### Tuple

![](.gitbook/assets/selection_091.png)

```typescript
// Tipo tuple
// Tuplas: permiten expresar un arreglo con un numero fijo de elementos

export {}; // -> user ya fue declarado en otro archivo

// [1, 'user']
let user: [number, string]; // -> user ya fue declarado en otro archivo
user = [1, "luixaviles"];

console.log("user : ", user);
console.log("username : ", user[1]);
console.log("username.length : ", user[1].length);
console.log("id : ", user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, "paparazzi", true];
console.log("userInfo : ", userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, "luixaviles"]);
array.push([2, "paparazzi"]);
array.push([3, "lensQueen"]); // indice: 2
console.log("array : ", array);

// Uso de funciones array
// lensQueen --> lensQueen001
array[2][1] = array[2][1].concat("001"); // --> concatena
console.log("array : ", array);
```

### Enum

![](.gitbook/assets/selection_092.png)

```typescript
// Enum: permiten definir un conjunto de constantes con nombre

// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // podemos darle valor de manera explicita
    Portrait, // 1
    Square, // 2
    Panorama, // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log("landscape : ", landscape); // -> 0
console.log("Landscape : ", PhotoOrientation[0]); // -> Landscape

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama, // 13
}
console.log("porttrait : ", PictureOrientation.Portrait); // -> 11

enum Country {
    Bolivia = "bol",
    Colombia = "col",
    Mexico = "mex",
    EEUU = "usa",
    España = "esp",
}
const country: Country = Country.Colombia;
console.log("country : ", country); // --> col

//Cómo unir dos o más enumerados?
enum FirstEnum {
    value1 = "value1",
    value2 = "value2",
}

enum SecondEnum {
    value3 = "value3",
    value4 = "value4",
}

let testEnum = Object.assign({}, FirstEnum, SecondEnum);

console.log(testEnum); // value 4
```

### Unión de Tipos, Alias y Tipos literales

![](.gitbook/assets/selection_093.png)

```typescript
//10, '10'

export {}; // -->idUser ya está siendo usada en otro archivo
let idUser: number | string; //De este modo, ya puede ser tanto number como string
idUser = 10;
idUser = "10";

//Buscar username dado un ID
const getUsernameById = (id: number | string) => {
    //Lógica de negociom find the user
    return "Jeff Espejo";
};

getUsernameById(20);
getUsernameById("20");
```

![](.gitbook/assets/selection_094.png)

```typescript
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
```

![](.gitbook/assets/selection_095.png)

```typescript
type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200"; //--- > Error por tipo
let smallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";
let bigPicture: SquareSize = "1000x1000";
```

### Asserts

![](.gitbook/assets/selection_096%20%281%29.png)

```typescript
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

```

### Funciones en TypeScript

![](.gitbook/assets/selection_097.png)

```typescript
//-------------Funciones en TS---------------

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

```

### Resumen

![](.gitbook/assets/selection_098.png)

```typescript
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

```

## Tipos Personalizados

### Interfaces

![](.gitbook/assets/selection_101.png)

![](.gitbook/assets/selection_102.png)

```typescript
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

```

### Interfaces: propiedades opcionales

```typescript
//-----------Interfaces: propiedades opcionales----------
interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}
function generatePicture(config: PictureConfig) {
    const pic = { title: "Default", date: "2020-03" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log("picture : ", picture);
picture = generatePicture({ title: "Travel Pic" });
console.log("picture : ", picture);
picture = generatePicture({ title: "Travel Pic", date: "2012-05" });
console.log("picture : ", picture);

// Interfaz: usuario
interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean;
}
let user: User;
user = { id: 10, username: "luixaviles", isPro: true };
console.log("user : ", user);
user.username = "paparazzi";
// user.id = 20; // --> Error
console.log("user : ", user);
```

### Extendiendo interfaces

![](.gitbook/assets/selection_103.png)

```typescript
export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}
interface Entity {
    id: number;
    title: string;
}
interface Album extends Entity {
    // copia de los atributos de Entity
    // id: number;
    // titulo: string;
    descripcion: string;
}
interface Picture extends Entity {
    orientation: PhotoOrientation;
}
const album: Album = {
    id: 1,
    title: "Meetups",
    descripcion: "Community events around the world",
};
const picture: Picture = {
    id: 1,
    title: "Family",
    orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = "Moon";

console.log("album : ", album);
console.log("picture : ", picture);
console.log("newPicture : ", newPicture);

```

### Clases

![](.gitbook/assets/selection_104.png)

```typescript
export {};
console.clear();

enum PhotoOrientation {
    Landscape = "Landscape",
    Portrait = "Portrait",
    Square = "Square",
    Panorama = "Panorama",
}

// interface Entity {
//   id: number;
//   title: string;
// }

// class Entity {
//     id: number;
//     title: string;
//   }

class Picture {
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album {
    id: number;
    title: string;
    pictures: Picture[] = [];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        // this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const picture: Picture = new Picture(100, "cool", PhotoOrientation.Square);
const picture1 = new Picture(201, "korn", PhotoOrientation.Square);
const album: Album = new Album(534, "Family");
console.log(picture);
console.log(picture1);
album.addPicture(picture);
album.addPicture(picture1);

console.log("album", album);

```

