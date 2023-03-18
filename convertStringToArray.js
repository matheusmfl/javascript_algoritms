// Converter uma string em um Array, cada indice do array recebera os 2 valores iniciais do string



function solution(str){
  var array = []
  
  for(let x = 0 ; x < str.length ; x++) {
    array[x] = str[x]
  }


  var arrayPar= []
  for (i = 0; i < array.length; i+= 2) {
      
        arrayPar[i / 2] = array[i] + array[i+1]

      
  }

  if(str.length % 2 !== 0){
    arrayPar[arrayPar.length - 1] = array[array.length - 1] + '_'
  }

  console.log(array)
  console.log(arrayPar)





  return arrayPar
}
const hello = 'J'
const arrString = solution(hello)

console.log(arrString)