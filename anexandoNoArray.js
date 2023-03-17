// Crie uma Matriz unidimensional e adicione um elemento no final de seu conteúdo

// [1,2,3,4,5]

//30

//[1,2,3,4,5,30]
function append(array, value) { 
    var tempArray = new Array(array.length + 1)

    for(var i = 0;i < array.length; i++) {
        tempArray[i] =  array[i]
    }

    tempArray[array.length] = value

    return tempArray
}


var scores = new Array(80,55,79,60,25)

scores = append(scores, 700)

for(var i = 0; i < scores.length; i++) {
    console.log(scores[i])
}

//Esse código adiciona ao final do Array um elemento que é definido como value(parametro) da função append