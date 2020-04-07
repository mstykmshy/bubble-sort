describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of 1 value', function () {
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort(['a'])).toEqual(['a']);
  });
  it('handles an array of multiple values', function () {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(bubbleSort([5, 8, 2, 4, 9, 3, 1, 7, 6])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(bubbleSort(['b', 'c', 'a']).toEqual(['a', 'b', 'c']));
    expect(
      bubbleSort(['b', 'd', 'f', 'e', 'a', 'c']).toEqual([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
      ])
    );
  });
});
