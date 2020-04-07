function split(wholeArray) {

  if (wholeArray.length>1){
    const splitIndex = Math.ceil(wholeArray.length/2);

    const secondHalf = wholeArray.slice(splitIndex);
    const firstHalf = wholeArray.slice(0, splitIndex);

    return [firstHalf, secondHalf];
  }
  return wholeArray;
}

function merge(arrayOne, arrayTwo)  {

  let mergedArray = [];

  while (arrayOne.length>0 || arrayTwo.length>0){
    if (!arrayOne.length){
      return mergedArray.concat(arrayTwo)
    }
    if (!arrayTwo.length){
      return mergedArray.concat(arrayOne)
    }
    if (arrayOne[0]<arrayTwo[0]){
      mergedArray.push(arrayOne.shift())
    } else {
      mergedArray.push(arrayTwo.shift())
    }
  }
  return mergedArray

}

function mergeSort(array, splitArray = null) {

  // if (array.length<=1){
  //   return array
  // } else {
  //   array = split(array)
  // }

}
