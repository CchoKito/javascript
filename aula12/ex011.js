var idade = 69
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.')
} else  if (idade < 18 || idade > 65) {
        console.log('Voto opcional.')
} else {
    console.log ('Voto obrigatório.')
}


var gym = 80
console.log(`Você tem ${gym} Kg`)
if (gym <= 70) {
    console.log('Você é frango')
} else if (gym <= 75) {
    console.log(`Você é um galizé`)
} else {
    console.log('Parabéns, você é um monstro!')
}