function comparaNumeros(num1,num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase =criaSegundaFrase(num1,num2);

    return`${primeiraFrase} ${segundaFrase  }`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'nao';
    }
    return `Os numeros ${num1} e ${num2} ${saoIguais} sao iguais`;
}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'maior'
    const compara10 = soma>10;
    const compara20 = soma<20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = "menor";
    }

    return `Sua soma e ${soma}, que e ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(10,20))