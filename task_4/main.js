// const people = ["Tom", "Bob", "Ron","Harry","Hermiona"];


// // i++ = i+=1

// for ( let i = 0; i < people.length; i++) {
//     let result = people[i]
//     console.log(result)
// }


// let array = [['Tom', 16], ['Bob', 17], ['Stan', 36]]
// //console.log(array[2][0])

// for(let i = 0; i < array.lenght; i++) {
//     for(let n = 0; n < array[i].lenght; n++){
//         let result = array[i][n];
//         console.log(result);
// }
//     console.log('----------------')
// }    


// const people = ["Tom", "Bob", "Ron"];

// //for...in - выводит только индексы массива
// //for...of - выводит только элементы массива

// for(let item of people) {
//     // console.log(people[item])
//     console.log(item)
// }


let person = {name: "Tom", age: 17}
// console.log(person["name"])
// item - хранит в себе динамические значения в нашем случае(name,age)


for(let item in person) {
    let result = person[item]
    console.log(result)
}