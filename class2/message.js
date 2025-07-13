// This is name export 
export const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};


// // This is default export 
// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
// };

// export default message;


// export const name = "Jesse";
// export const age = 40;

// const a = 1;
// export const obj = {
//     a,
//     greet: function () {
//         return 'Hello';
//     },
//     greet: () => {
//         return 'Hello';
//     },
//     greet() {
//         return 'Hello';
//     }
// };

// const arr = [1, 2, 2, 3, 4, 4];
// const set = new Set();
// console.log(set, 'set');
// // const array = [...arr]
// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);


// const map = new Map();
// map.set('key', 'value');
// map.set(true, true);

// console.log(map, 'map');


// desctructuring 
const person = {
    name: "Jesse",
    age: 40,
    address: {
        city: "New York",
        state: "ny"
    }, gender: "Male"
};

// const {
//     name,
//     age,
//     address: {
//         city,
//         state
//     }
// } = person
// const {
//     name: personName,
//     age: personAge,
//     address: {
//         city,
//         state = "NY" // Default value if state is not present
//     },
//     address
// } = person

// const { age, name, gender, ...restPerson } = person
const { age, ...restPerson } = person

console.log(restPerson, 'restPerson');


// console.log(person, 'person');
// console.log(personName, 'name');
// console.log(personAge, 'age');
// console.log(city, 'city');
// console.log(state, 'state');
// console.log(person.address, 'address');
// console.log(address, 'address');


// const state = person.address.state;
// const city = person.address.city;
// console.log(city, 'city');
// console.log(city, 'city');
// console.log(state, 'state');
// console.log(state, 'state');
// console.log(state, 'state');
// console.log(person.address.state, 'state');
// console.log(person.address.state, 'state');
// console.log(person.address.state, 'state');
// console.log(person.address.state, 'state');
// console.log(person.address.state, 'state');

// Destructuring
// const { name, age, address: { city, state } } = person;

// console.log(name, age, city, state);
