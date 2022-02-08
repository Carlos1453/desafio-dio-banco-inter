function somaNumeros(arr){
    return arr.reduce(function(currrentValue, previousValue){
        return previousValue + currrentValue;
    });
}

const arr = [1,2];

console.log(somaNumeros(arr));