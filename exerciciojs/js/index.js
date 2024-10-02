

function getDados(){
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let resultado = document.getElementById('span')
    valor1.style.backgroundColor = '#ffffff'
    valor2.style.backgroundColor = '#ffffff'
    
 }
function somar() { 
    if(setValidateCaixa() != false){
      resultado.innerHTML = parseInt(valor1.value) + parseInt(valor2.value)
    }
 } 
 function subtrair() { 
    if(setValidateCaixa() != false){
      resultado.innerHTML = parseInt(valor1.value) - parseInt(valor2.value)
    }
 }
 function multiplicar() { 
    if(setValidateCaixa() != false){
      resultado.innerHTML = parseInt(valor1.value) * parseInt(valor2.value)
    }
    
 }
 function dividir() { 
   if(setValidateCaixa() != false){
      resultado.innerHTML = parseInt(valor1.value) / parseInt(valor2.value)
    }
    if(valor2.value == 0)
        alert('Não existe divisão por 0, digite um número maior ou igual a 1')
 }
 function setResetDados(){
    valor1.value=''
    valor2.value=''
    valor1.focus()
    setClearBackground()
    
 }
 function setClearBackground() {
   valor1.style.backgroundColor = '#ffffff'
   valor2.style.backgroundColor = '#ffffff'
 }
 function setValidateCaixa(){
   if(valor1.value == '' || valor2.value == ''){
      alert('É obrigatório o preenchimento de todos os dados')
      if(valor1.value == ''){
          valor1.style.backgroundColor = '#f2a2a2'
      }
      if(valor2.value ==''){
          valor2.style.backgroundColor = '#f2a2a2'
      }
      return false
    }
   
 }
