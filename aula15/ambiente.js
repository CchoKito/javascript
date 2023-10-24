let num = [2, 4, 6, 8, 10]
num[5] = 12
num.push(9)
num.sort()

console.log(num)
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}