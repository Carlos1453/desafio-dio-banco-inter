function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item%2 !== 0;
}


const meuArray = [1, 100, 2, 5,7,6,9,8,22,34];

console.log(filtraPares(meuArray));