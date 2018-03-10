// function square(x) {
//     return x * x;
// };

// console.log(square(4))

// // const squareArrow = (x) => {
// //   return x * x;  
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(16))


// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Steve Walker'));


const add = function (a, b) {
    console.log(arguments);
        return a + b;
};
console.log(add(55, 1 ,1001));


// const user = {
//     name: 'Steve',
//     cities: ['FL', 'NYC', 'Paris'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);
        
//         this.cities.forEach(function(city){
//         console.log(this.name + ' has lived in ' + city);
//     });
//     }
// };
// user.printPlacesLived();

// const user = {
//     name: 'Steve',
//     cities: ['FL', 'NYC', 'Paris'],
//     printPlacesLived: function() {        
//        this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// user.printPlacesLived();


const user = {
    name: 'Steve',
    cities: ['FL', 'NYC', 'Paris'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

///////////////////////////////////

const multiplier = {
numbers: [10, 20, 35],
multiplyBy: 5,
mulitply(){
    return this.numbers.map((number) => number * this.multiplyBy);
}

};

console.log(multiplier.mulitply());