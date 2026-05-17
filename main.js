let sommaDispari = 0;
let conteggioDispari = 0;

console.log("Numeri Pari");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        sommaDispari += i;
        conteggioDispari++;
    }
}
if (conteggioDispari > 0) {
    let mediaDispari = sommaDispari / conteggioDispari;
    console.log(`La media dei numeri dispari è: ${mediaDispari}`);
}