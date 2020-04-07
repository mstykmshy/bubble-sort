function bubbleSort (arr) {
  let origArgs = Array.from(arr)
  let swaps = 0
  for (let i = 0 ; i < arr.length -1 ; i++){
    if (arr[i]>arr[i+1]){
      let x = arr[i]
      arr[i]=arr[i+1];
      arr[i+1] = x;
      swaps ++
    }
  }
  if (swaps>0) bubbleSort(arr)
  return arr
};
