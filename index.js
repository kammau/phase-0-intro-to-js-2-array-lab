// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
const ralph = "Ralph";
const bob = "Bob";
const newCats = [
    ...cats.slice(0,3),
    "Broom",
];
const newCatsTwo = [
    "Arnold",
    ...cats.slice(0,3),
]

const newCatsThree = [
    ...cats.slice(1,3),
]

const newCatsFour = [
    ...cats.slice(0,2)
]

//Functions:

function destructivelyAppendCat(ralph) {
    cats.push(ralph);
}

function destructivelyPrependCat(bob) {
    cats.unshift(bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    return newCats;
}

function prependCat() {
    return newCatsTwo;
}

function removeFirstCat() {
    return newCatsThree;
}

function removeLastCat() {
    return newCatsFour;
}

