function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'sol-da-manha.jpg'
        document.body.style.background = '#0075CD'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'sol-da-tarde.jpg'
        document.body.style.background = '#CF6803'
    } else {
        // Boa noite!
        img.src = 'sol-da-noite.jpg'
        document.body.style.background = '#003E3A'
    }
}

// colocar um gradiente
// colocar fotos melhores ou em 4K
