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

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
