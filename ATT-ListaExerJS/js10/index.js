let numberPlus = Number(prompt());
let somaOsNumber = 0;
while (somaOsNumber < 500) {
  somaOsNumber = somaOsNumber + numberPlus;

  console.log('é o numero atual --------->', numberPlus);
  console.log('é a soma --------->', somaOsNumber);
  numberPlus *= 3;
}