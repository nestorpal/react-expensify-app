// OBJECT DESTRUCTURING

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;

// console.log(`${firstname} is ${age}`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Tales of Narnia: The Last Battle',
//     author: 'C.S. Lewis',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// *************************************************************************************

// ARRAY DESTRUCTURING

const address = ['1200 S. Juniper Street', 'Philadelphia', 'Pennsylvania'];
const [, , state, zip = '19147'] = address;
console.log(`Yo are in ${state} with ZIP ${zip}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mprice] = item;
console.log(`A medium ${itemName} costs ${mprice}`)