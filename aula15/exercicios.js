//01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

let cres = [0, 2]
console.log(cres)

//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

let crest = [10, 5, 13]

crest.sort((a, b) => a - b)
console.log(crest)

// 05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let cont = array[i];
                array[i] = array[j];
                array[j] = cont;
            }
        }
    }
}

let numeros = [80, 73, 58, 22, 69, 12, 45, 3]
bubbleSort(numeros);
console.log(numeros);

// 06. Crie uma função que recebe um vetor e um número.
// Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

