function substituiPares(pares){
    if (!pares)return -1;
    if (!pares.length)return -1;

    for(let i = 0; i < pares.length; i ++){
        if(pares[i] === 0){
            console.log("Voce ja e zero");
        }else if(pares[i] %2===0){
            console.log(`Substituindo ${pares[i]} por 0...`);
            [pares][i] = 0;
        }
    }

    return pares;
}

let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8];
console.log(substituiPares(numeros));