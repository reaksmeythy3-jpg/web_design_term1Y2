//let array[];
function challenge2(array) {
    let result = [];
    let index=0;
    for(let i = array.length - 1; i >= 0; i--){
        result[index] = array[i];
        index++;
    }
    return result;
}
console.log(challenge2([2,3,45,5]));
