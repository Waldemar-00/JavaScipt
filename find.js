let object = [
    {id: 1, name: 'Djon'}, 
    {id: 2, name: 'Brian'},
    {id: 3, name: 'Williams'}, 
    ] ;
let obj = object.find(
    function(it) {
        return it.id == 3;
    } 
    );
//alert(obj);
console.log (obj.name);

let arrObj = [
    {id: 1, name: 'Frodo',}, 
    {id: 2, name: 'Bilbo',}, 
    {id: 3, name: 'Bifoor',}, 
    ];
    
    let filterArr = arrObj.filter(
        function(it) {
            return it.id < 3;
        }
        );
        console.log(filterArr);
        filterArr.forEach(
            function() {
                for(let a of filterArr) {
                       console.log(a.name);
                }
            });
            filterArr.map(
                function(item) {
                  console.log(item.name);
                }
                );
                
       filterArr.forEach(
           function(item) {
           console.log(item.name);
           } 
           );
           filterArr.forEach(item => console.log(item.name));
                
                