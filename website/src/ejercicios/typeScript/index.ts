// bool
let muted: boolean = true;
muted = false;

// number
let numerador: number = 46;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = "Jose";

// Arreglo
let people: string[] = [];
people = ['Isabel', 'nicole', 'raul'];
people.push('900');

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('carlos');
peopleAndNumbers.push(90);

// Enums

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es: ${colorFavorito}`);


// Any
let comodin: any = "joker";
comodin = {type: "WildCard"};

// object
let some: object = {};


// Funciones
function add( a: number, b: number): number{
    return a + b;
}

let sum = add(10, 50);

// funciones que retornan otras funciones

function createAdder(a: number): (number) => number{
    return function(b: number){
        return a + b;
    }
}

const addFour = createAdder(50);
const suma = addFour(6);

// parametro opcional
function fullName( firstName: string, lastName : string = 'oliva', secondLastName ?: string): string {
    return `${firstName} ${lastName} ${secondLastName}`;  
}

const jose = fullName('Jose');

// Interfaces
interface Rectangulo{
    ancho: number;
    alto: number;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r: Rectangulo): number{
    return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect);

// Clases
