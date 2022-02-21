// INSIRA UUM NÚMERO EM "N", PARA QUE SEJA GERADO UMA AMPULHETA.

let n = 20;

let parOuImpar = n%2;

let empt = ' ';
let points = '#'
let arrayBase = [];
let arrays = []
let a = 1;
let d = n/2
let left = 1
let right = n-2

for(let i = 0; i < n; i++) {
    arrayBase.push(points)
};

console.log(arrayBase.join(''));
console.log(arrayBase.join(''));

for(let j = 0; j < n; j++) {
    arrays.push(points);
};

do {
    
    arrays.splice(left, 1, empt);
    arrays.splice(right, 1, empt);
    left++
    right--
    console.log(arrays.join(''));

} while(left < d-1);

if (parOuImpar === 1) { d = d + 0.5 };

if (left === d-1) {
    if (parOuImpar === 0) {
        console.log(arrays.join(''));
    };
    do {
        arrays.splice(left, 1, empt);
        arrays.splice(right, 1, empt);
        arrays.splice(left-1, 1, points);
        arrays.splice(right+1, 1, points);
        left--
        right++
        console.log(arrays.join(''));
    } while (left > 1);
};
console.log(arrayBase.join(''));





