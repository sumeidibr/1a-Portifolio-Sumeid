function contador(){
var begin = document.getElementById('inicio')
var inicio = Number(begin.value)
var end = document.getElementById('fim')
var fim = Number(end.value)
var  step = document.getElementById('passo')
var passo = Number(step.value)
var res = document.getElementById('res')
var contador = ``

if(fim.length == 0 || inicio.length == 0 || fim.length == 0){
    res.innerHTML = 'Impossivel contar!'
    //alert(`[ERRO] Tente Novamente!`)
}else {
        res.innerHTML = 'Contando:'
    if(fim > inicio){
    contador = inicio
    do{
        res.innerHTML += `${contador}    `
        contador = contador + passo
    }while( contador <= fim)
    }else if(inicio > fim){
        contador = inicio
    do{
        res.innerHTML += (`${contador} `)
        contador = contador - passo
    }while( contador >= fim)
    }
}

}