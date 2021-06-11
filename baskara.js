var bhaskara = (A,B,C) => {
    console.log(`O problema é: A:${A} B:${B} C:${C}`);
    
    const resultDelta = Math.pow(B, 2) - 4 * A * C;
    console.log(`Resultado de Delta é ${resultDelta}`);
    
    const bhaskara1 = (-B + Math.sqrt(resultDelta)) / (2 * A);
    console.log(`Logo X linha 1 é igual ${bhaskara1}`)  
    
    const bhaskara2 = (-B - Math.sqrt(resultDelta)) / (2 * A);
    console.log(`Logo X linha 2 é igual ${bhaskara2}`)  
}


bhaskara(2,5,2);