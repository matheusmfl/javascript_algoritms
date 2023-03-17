// Exclua o valor do indíce = 2 da Matriz [90, 70, *50*, 80, 60, 85]



function removeIndexArr(array, index) {
    var newArray = new Array(array.length - 1)

    for(let i = 0 ; i < array.length; i++){
      
      
      if(i < index) {
        newArray[i] = array[i]
    }

        if(i > index) {
            newArray[i - 1] = array[i]
        }
    }

   

   return newArray

}
var matriz = new Array(90,  70, 50, 80, 60, 85)
const arrayProcessed = removeIndexArr(matriz, 2)

console.log(arrayProcessed)