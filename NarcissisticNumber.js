
function narcissistic(value) {
   value = String(value);
   let leng = value.length; 
   let strValue = 0;
   
    for (let i = 0; i < leng; i++) {

        strValue += value[i] ** leng;
        
    }
    
    if (value == strValue ) return true;
    else return false;

}

console.log(narcissistic(9));