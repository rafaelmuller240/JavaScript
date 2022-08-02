let soma = 0;
let divisor = 1;
let media = 0;
for (let num = 14; num < 73; num++) {
   soma += num;
   media = soma / divisor;
   console.log(`numero: ${num} soma: ${soma} divisor: ${divisor} e a media ${media}`);
   divisor++;
 }