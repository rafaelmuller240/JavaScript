let idade = Number(prompt("Digite a idade do motorista: "))
let carteiraMotorista = (prompt("Digite se o motorista é Habilitado (S) para sim e (N) para não: ")).toUpperCase()
   if (idade>= 18 && carteiraMotorista === 'S') {
    console.log("Pode dirigir", idade)
   } else if (idade < 18 || carteiraMotorista === 'N'){
    console.log("Não pode dirigir.", idade)
   }