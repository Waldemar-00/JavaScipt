

// function newArray(arr) {
//     let arr1 = [];
//     for (let i of arr) {
//         arr1.unshift(i);
//     }
//     return console.log(arr1);
// }
// let arr = [1, 'a', 'C',];
// newArray(arr);




// function newArr(ar) {
//     let leng = ar.length;

//     for (let i = 0; i <= leng + 1; i++) {

//       ar.unshift(ar[i ++]);  

       
//    }

//    ar.length = leng;
//    return console.log(ar);

// }

// let ar = [1, 'a', 'C',];

// newArr(ar);


// function newArr(ar) {
//     let leng = ar.length;

//     for (let i = 0; i < leng + 2; i++) {

//       ar.unshift(ar[i ++]);  

       
//    }

//    ar.length = leng;
//    return console.log(ar);

// }

// let ar = [1, 'a', 'C',];

// newArr(ar);


// function newArr(ar) {
//     let leng = ar.length;

//     for (let i = 0; i < leng * 2; i += 2) {

//       ar.unshift(ar[i]);  

       
//    }

//    ar.length = leng;
   
//    return console.log(ar);

// }

// let ar = [1, 'a', 'C', 'd', '5', 'r'];

// newArr(ar);


function newArr(ar) {
   let leng = ar.length;

   for (let i = 0; i < leng * 2; i += 2) {

     ar.unshift(ar[i]);  

      
  }
  ar.length = leng;
  
  return console.log(ar);

}

let ar = [1, 'a', 'C', 'd', '5', 'r'];

newArr(ar);