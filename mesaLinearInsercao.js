function insection(array, value, position) {
    var tempArray = new Array(array.length + 1)

    if(position > array.length || position <= 0) {
        return ('Error, a matriz não possui comprimento suficiente')
    }
    else{
        for(var i =0 ; i < array.length; i++) {
            tempArray[i] = array[i]
            if(i + 1  == position ){
              tempArray[i] = value
              break
            }
          }
    }
    for(i = position; i < tempArray.length; i++ ){
      tempArray[i] = array[i-1]
    }

    return tempArray
}

var score = [1,2,3,4,5,9]

var score = insection(score, 50, 0)

console.log(score)


