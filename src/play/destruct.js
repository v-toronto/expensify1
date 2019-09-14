//ARRAY DESTRUCTURING
const address = ['23 main st.', 'Toronto', 'Ontario', 'M6N8U7']
// we have local varaiable for all elements of array
//const [street, city, province, zip] = address;
//here are locol variable only for some elements of array
const [, city, province,] = address;


console.log(`city: ${city}  province: ${province}`)




//OBJECT DESTRUCTIng

// const person = {
//   name: 'Victor',
//   age: 61,
//   location: {
//     city: 'Toronto',
//     temp: 21
//   }
// }
// console.log(`${person.name} is ${person.age}.`)

// const { name, age } = person;
// console.log(`${name} is ${age}.`)

// const { city, temp } = person.location;
// console.log(`it is temp: ${temp} is in ${city}.`)

// const { city: place, temp: temperature } = person.location;
// console.log(`it is temperature: ${temperature} is in ${place}.`)

// const person2 = {
//   pwd: 123,
//   location: {
//     city: 'Toronto',
//     temp: 21
//   }
// }
// const { user = "Anonymous", pwd } = person2;
// //both: renaming and default:
// //const { user: firstname = "Anonymous", pwd } = person2;

// console.log(`the User: ${user} has pwd: ${pwd}`)