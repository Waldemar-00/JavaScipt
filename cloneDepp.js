let obj = {
    name: 'Jon',
    sourname: {
        first: 'Malik',
        second: 'Shalik',
    }
};

let clone = Object.assign({}, obj);
console.log(clone);
console.log(clone.sourname.first);