function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   
   var fano = document.getElementById('nasc')
   var res = document.querySelector('div#resul')
   if (fano.value.length == 0 || Number(fano.value) > ano){
      alert('[ERRO]Verifique os dados e tente novamente')
   }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ``
      var img = document.createElement('img') // = <img>
      img.setAttribute('id', 'foto') // = <img id="foto">
      
      if(fsex[0].checked){
         genero = 'Homem'
         if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'fotocrianca-h.png')
         }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'fotojovem-h.png')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'fotoadulto-h,png')
         }else{
            //isodo
            img.setAttribute('src', 'fotoidoso-h.png')
         }
      }else if(fsex[1].checked){
         genero = `mulher`
         if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'fotocrianca.png')
         }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'fotojovem.png')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'fotoadulta.png')
         }else{
            //idosa
            img.setAttribute('src', 'fotoidoso.png')
         }
      }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.style.textAlign = `center`
      res.appendChild(img)
   }

}