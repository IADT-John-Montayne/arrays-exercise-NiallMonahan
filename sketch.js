let names = ["Alice", "Bob", "Charlie", "David"];
console.log(names[2]);

names[1] = "Bobby"; 
console.log(names[1]);

console.log(names.length);

names.push("David");
names.push("Eve");
names.push("Frank");
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift("Zara");
console.log(names);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(names.indexOf("Charlie"));

let guys = names.slice(1, 3);
console.log(guys);

names.splice(2, 1);
console.log(names);

names.splice(1, 1, "Ben");
console.log(names);

//Exercise
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

let x = fruits.indexOf("Banana");
fruits[x] = "Kiwi";
fruits.pop();
fruits.unshift("Mango");

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}

let check = fruits.includes("Orange");
if (check === true) {
  console.log("Orange is in the array at index " + fruits.indexOf("Orange"));
} else {
  console.log("Orange is not in the array.");
}

let middle = fruits.length / 2;
if (fruits.length % 2 === 0) {
  middle = [fruits[middle + 1], fruits[middle]];
} else {
   const midIndex = Math.ceil(fruits.length / 2);
  middle = fruits[midIndex];
}


citrus = middle;
console.log(citrus);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
