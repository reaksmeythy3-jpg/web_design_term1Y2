function challenge6(array) {
    let count = [0,0,0];
    for(let i = 0; i < array.length; i++){
        if(array[i] === "a"||array[i] === "A"){
            count[0]++;
        }else if(array[i] === "b"||array[i] === "B"){
            count[1]++;
        }else if(array[i] === "c"||array[i] === "C"){
            count[2]++;
        }
    }
    if(count[0]>count[1]&&count[0]>count[2]){
        return "A is the winner! It has "+count[0]+" votes";
    }else if(count[1]>count[0]&&count[1]>count[2]){
        return "B is the winner!it has "+count[1]+" votes";
    }else if(count[2]>count[0]&&count[2]>count[1]){
        return "C is the winner!it has "+count[2]+" votes";
    }else {
        return(" ");
    }
}
console.log(challenge6(['A','B','A','B','A','A']));
