//Only change code below this line 
function myEqualFunction(num){
    if (num === 23) {
        return "Equal";
    }
    else {
        return "Not equal";
    }

}
myEqualFunction(23);
myEqualFunction('23');
myEqualFunction("23");
myEqualFunction("text");
//Only change code above this line
module.exports = myEqualFunction;