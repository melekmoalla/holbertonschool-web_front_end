
function countPrimeNumbers(){
    var counter = 0
    for (let num = 2; num <= 100; num++) {
        var count = 0;
        for (let i = 1;  i <= num; i++){
            if(num%i == 0){
                count = count + 1;
             }
        }
        if(count == 2){
            counter = counter + 1;
         }

    }
    return counter

}
const startTime = performance.now();
console.log(countPrimeNumbers());
const endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
