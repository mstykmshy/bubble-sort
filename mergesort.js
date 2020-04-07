function split(wholeArray) {
  if (wholeArray.length > 1) {
    const splitIndex = Math.ceil(wholeArray.length / 2);

    const secondHalf = wholeArray.slice(splitIndex);
    const firstHalf = wholeArray.slice(0, splitIndex);

    return [firstHalf, secondHalf];
  }
  return wholeArray;
}

function merge(arrayOne, arrayTwo) {
  let mergedArray = [];

  while (arrayOne.length > 0 || arrayTwo.length > 0) {

    if (!arrayOne.length) {
      return mergedArray.concat(arrayTwo);
    }
    if (!arrayTwo.length) {
      return mergedArray.concat(arrayOne);
    }
    if (arrayOne[0] < arrayTwo[0]) {
      mergedArray.push(arrayOne.shift());
    } else {
      mergedArray.push(arrayTwo.shift());
    }
  }
  return mergedArray;
}

// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let splitArray = split(array);
//   splitArray.forEach((el) => {
//     if (el.length > 1) {
//       el = mergeSort(el);
//     }
//   });
//   return merge(...splitArray);
// }

function mergeSort(array) {

  if (array.length <= 1) {
    return array;
  }
  let newArray = split(array).map((el) => {
    return mergeSort(el);
  });
  let merged = merge(...newArray);
  console.log(merged);
  return merged;
}

// function mergeSort(array) {
//   // debugger;
//   if (array.length <= 1) {
//     return array;
//   }
//   // let splitArray = split(array);
//   array = split(array).map((el) => {
//     el = mergeSort(el);
//   });
//   let merged = merge(...array);
//   console.log(merged);
//   return merged;
// }
