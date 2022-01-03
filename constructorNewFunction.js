
function User(name, old, status) {
    this.name = name;
    this.age = old;
    this.isAdmin = status;
}

let us = new User('Jon', '17', 'Administrator');

console.log(`${us.name} - ${us.age}, ${us.isAdmin}`);


let as = new User('Alla', '27', 'Owner');
console.log(`${as.name} - ${as.age}, ${as.isAdmin}`);