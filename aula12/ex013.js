var agora = new Date()
var diaSem = agora.getDay()

/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
    break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break    
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break;
}


var dia = new Date ()
var treino = agora.getDay()

switch (treino) {
    case 0:
        console.log('Domingo do descanso!')
        break;
    case 1:
        console.log('Segunda de peito e tríceps')
        break;
    case 2:
        console.log('Terça de costas e bíceps!')
        break;
    case 3:
        console.log('Quarta do descanso')
        break;
    case 4:
        console.log('Quinta do ombro e trapézio')
        break;
    case 5:
        console.log('Sexta da perna e abdômen')
        break;
    case 6:
        console.log('Sábado geralmente é descanso')   
        break;
    default:
        console.log('Ta pulando treino seu frango?!')
        break;
}