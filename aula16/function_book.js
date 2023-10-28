// Imprime o nome e o valor de cada propriedade de o. Retorna undefined.
    function printporps(o) {
        var p = "Eu sou lindo";
        for (var p in o) {
            console.log(p + ": " + o[p] + "\n");
        }
    }

// Calcula a distância entre pontos cartesianos (x1, y1) e (x2, y2). 
    function distance(x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx*dx + dy*dy);
    }

// Uma função recursiva (que chama a si mesma) que calcula fatoriais
// Lembre-se de que x! é o produto de x e todos os inteiros positivos menores do que ele.
    function factorial(x) {
        if (x <= 1) return 1;
        return x * factorial (x-1);
    }

// Funções aninhadas
    function hypotenuse(a, b) {
        function square(x) {
            return x*x;
        }
        return Math.sqrt(square(a) + square(b))
    }

// Chamando funções
printprops({x:1});
var total = distance(0,0,2,1) + distance(2,1,3,5);
var probability = factorial(5)/factorial(13);