function calculo(){
    var num = document.getElementById('num')
    let tabu = document.getElementById('tabuada')
    
    if(num.value.length == 0){
        alert('Por favor digite um numero! ')
    }else{
        var n = Number(num.value)
        var c = 1
        tabu.innerHTML = ``
        while(c <= 10){
            var opt = document.createElement('option')
            opt.text = `${n} x ${c} = ${n*c}`
            c++
            opt.value = `${c}`
            tabuada.appendChild(opt)
        }
    }
    
}