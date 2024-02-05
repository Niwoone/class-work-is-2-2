// let person = {
//     name: "Андрей",
//     age: "15",
//     hobbies: ["кушать","спать","Слово пацана"],
//     contacts: {
//         phone: [88005553535,88005553535],
//         email: ["gashchenko62@mail.ru", 'rosa1983@List.ru"],
//         social: "www.github.com"
//     }
// }
// console.log(`Имя - ${person['name']}. Возраст - ${person['age']}`)
// console.log(person)
// console.log(person['contacts']['email'][1])

const students = [
    {name: "Андрей", age: 17, serial: 11111, group: 'Ис-2-2'},
    {name: "Иван", age: 18, serial: 11111, group: 'Ис-2-2'},
    {name: "Стас", age: 19, serial: 11111, group: 'Ис-2-2'},
    {name: "Гена", age: 17, serial: 11111, group: 'Ис-2-2'},
    {name: "Люда", age: 16, serial: 11111, group: 'Ис-2-2'},
    {name: "Павел", age: 20, serial: 11111, group: 'Ис-2-2'},
]

let stundentIndex = 3;
let studentName = students[stundentIndex]["name"];
let studentAge = students[stundentIndex]["age"];

if ( studentAge < 18 ) {
    console.log(`Студенту ${studentName} меньше 18 лет.`);
} else {
    console.log(`Студенту ${studentName} больше 18 лет. Ему ${studentAge} лет.`);
}