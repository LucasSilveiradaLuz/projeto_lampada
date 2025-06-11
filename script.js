 let image = document.getElementById("lampada")
let button= document.getElementById("button")

let index = false


function lampada(){
   

  if(!index){
      image.src = "lampada apagada.png";
       button.innerText = "Acender"
       index = true
  }
  else{
      image.src = "lampada acesa.png";
        button.innerText = "Apagar"
        index = false 
  }

}
