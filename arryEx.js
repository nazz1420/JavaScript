//1
let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.log(activities);
console.log(activities[0][1]);


//2
let items = [8, 9, [1, 2],
    [3, 4],
    [5, 6]
];
console.log(items[0][0]);
console.log(items[0][1]);
console.log(items[1][0]);
console.log(items[1][1]);
console.log(items);

//3
let cars = [2345, car1 = {
        "color": "purple",
        "type": "alto",
        "registration no": 09876541,
        "capacity": 7
    },
    car2 = {
        color: "black",
        type: "bmw",
        registrationNo: 1234567,
        capacity: 4
    },
];
console.log(cars);
console.log(cars[2]['color'])
console.log(cars[1].capacity);


//4.
let myObject = {
    person1: {
        name: 'ravi',
        age: 12,
        gender: 'male'
    },
    person2: {
        name: 'rita',
        age: 22,
        gender: 'female'
    }
};

console.log(myObject);
console.log(myObject.person2.name);
console.log(myObject.person1.name);