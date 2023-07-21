var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}


var agoras = new Date()
var horas = agoras.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (horas < 12) {
    console.log('Acorda vagabundo!')
} else if  (horas <= 18) {
    console.log('Vai trabalhar vagabundo!')
} else {
    console.log('Vai dormir vagabundo')
}