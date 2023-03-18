// Sortear a posição de caixas no espaço de acordo com a gravidade definida por R ou L  right left


function flip (direction, array){
    var gravityCube
    
    if(direction == 'R' ) {
      gravityCube = array.sort((a,b) => a-b )
  
      return gravityCube
    }
  
    else if(direction == "L") {
      gravityCube = array.sort((a,b) => b-a)
      return gravityCube
    }
  
    else {
      return 'Direção incorreta'
    }
  
  
  
  
  }
  
  const Right = [3,2,1,2]
  
  const result = flip('g', Right)
  
  console.log(result)