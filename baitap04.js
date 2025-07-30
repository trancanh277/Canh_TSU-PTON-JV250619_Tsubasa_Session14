const original = {
    name: "Bob",
    age: 30,
};
const coppy = JSON.parse(JSON.stringify(original));
original.name = "Charlie";
console.log(original);
console.log(coppy);