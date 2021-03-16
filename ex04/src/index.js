//Only change code below this line
function compareDifferentValues(m ,n) {
    if (typeof m === typeof n) {
        return "Equal";
    }
        return "Not equal";
    
}
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
//Only change code above this line
module.exports = compareDifferentValues;