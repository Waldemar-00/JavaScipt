

// let promptKey = prompt ('What you know?', 'name or sourname or secondname');
// let promptFruit = prompt('What you favorite fruit?', 'apple or orange or limone');

// let obj = {
//     name: 'Sergey',
//     sourname: 'Martynchyk',
//     secondname: 'Victorovych',
//     [promptFruit]: (promptFruit) => {
//         if (promptFruit === 'apple') obj[promptFruit] ='Oh, I am also like APPLE!';
//         else obj[promptFruit] ='There is no comrade for taste and color!';
//         return promptFruit;
//     }
// }

// console.log(obj[promptKey]);
// console.log(obj[promptFruit]);


let promptKey = prompt ('What you know?', 'name or sourname or secondname');
let promptFruit = prompt ('What you favorite fruit?', 'apple or orange or limone');

let obj = {
    name: 'Sergey',
    sourname: 'Martynchyk',
    secondname: 'Victorovych',
    [promptFruit]: function () {
        if (promptFruit === 'apple')
            return 'Oh, I am also like APPLE!';
        else
            return 'There is no comrade for taste and color!';

    }(),
}

console.log(obj[promptKey]);
console.log(obj[promptFruit]);