describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([3, 5, 7, 1, 3, 8])).toEqual([
      [3, 5, 7],
      [1, 3, 8],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([], [])).toEqual([]);
    expect(merge([3, 5, 6], [1, 2, 7])).toEqual([1, 2, 3, 5, 6, 7]);
  });
});

describe("MergeSort function", function () {
  it("is able to sort an array using merge sort method", function () {
    expect(mergeSort([3, 5, 6, 1, 2, 7])).toEqual([1, 2, 3, 5, 6, 7]);
    expect(mergeSort([21, 32, 43, 2, 1, 6, 90, 1001])).toEqual([
      1,
      2,
      6,
      21,
      32,
      43,
      90,
      1001,
    ]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([])).toEqual([]);
  });
});
