let contador = 11
let soma = 0

do {
    let valor = soma
    soma +- contador
    console.log('${valor} + ${contador} = ${soma}')

    contador++
} while (contador < 100)

console.log(soma)