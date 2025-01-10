// stampa numeri da 1 a 100
// condizioni:
// - multipli di 3 stampa Fizz
// - multipli di 5 stampa Buzz
// - multipli di 3 e 5 stampa FizzBuzz

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        // se è divisibile sia per 3 che per 5 stampa FizzBuzz
        console.log ( `${i} FizzBuzz` );
    } else if (i % 3 == 0) {
        // altrimenti se è divisibile per 3 stampa Fizz
        console.log ( `${i} Fizz` );
    } else if (i % 5 == 0) {
        // altrimenti se è divisibile per 5 stampa Buzz
        console.log ( `${i} Buzz` );
    } else {
        // altrimenti stampa il numero
        console.log ( `${i}` )
    }

}