import binarySearch from "./binarySearch";
const array = [
    'Juan',
    'Marcos',
    'Pedro',
    'Edwin',
    'Gabriel',
    'Sergio',
    'Lautaro',
    'Anselmo',
    'Mariano',
    'Luis'
]
console.log(binarySearch({
    array: array,
    target: 'Edwin'
}))