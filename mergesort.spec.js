describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3, 5, 7, 1, 3, 8])).toEqual([[3, 5, 7], [1, 3, 8]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([], [])).toEqual([]);
    expect(merge([3, 5, 6], [1, 2, 7])).toEqual([1, 2, 3, 5, 6, 7])
  });
});
