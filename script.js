 let image = document.getElementById("lampada")//pega o id da imagem

let button= document.getElementById("button")//pega o id do botão 

let index = false //coloca inicialmente como falso 
//tudo fora da função para executar primeiro,a captura de informações


function lampada(){
   

  if(!index){//se index for diferente mostrar a imagem lampada apagada
      image.src = "lampada apagada.png";
       button.innerText = "Acender" //nome do botão,que depois irá mudar
       index = true //colocar index como true
  }
  else{//senão mostrar a imagem da lampada acessa
      image.src = "lampada acesa.png";
        button.innerText = "Apagar" //botão será reescrito como Apagar
        index = false //coloca-se index = false para o código se repetir 
  }

}
