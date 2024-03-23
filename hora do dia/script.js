function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
//var data = new Date()
var hora =    window.prompt('Digite uma Hora qualquer!') //16 data.getHours()
///msg.innerHTML = `Agora sao ${hora} Horas.. </br>`

if(hora > 0 && hora < 12 ){
    msg.innerHTML += 'Bom Dia!'
    document.body.style.background = '#ba9253'
    img.src = 'fotomanha.png'
}else if(hora >= 12 && hora <= 18) {
   msg.innerHTML = 'Boa Tarde!'
    document.body.style.background = '#ef6703'
    img.src = 'fototarde.png'
} else if(hora > 18 && hora <= 24){
   msg.innerHTML += 'Boa Noite!'
    document.body.style.background = '#392e4d'
    img.src = `fotonoite.png`
} else {
    msg.innerHTML = 'Voce digitou uma Hora Invalida! </br> (Recarregue a pagina)'
    window.alert('Hora invalida!')
}
}