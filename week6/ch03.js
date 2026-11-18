function challenge3(array) {
    let total=0;
    for(let i=0;i<array.length;i++){
        total+=array[i];
    }
    return total/array.length;
}
console.log(challenge3([2,3,4,5,6,7,8,9,10]));