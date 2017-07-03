describe("ReverseInteger", function() {
  var ReverseInteger = require('../lib/ReverseInteger');
  var solution;

  beforeEach(function() {
    solution = new ReverseInteger();
  });

  it("should return reverse number", function() {
    expect(solution.reverse(123)).toEqual(321);
  });

  it("should handle negative numbers properly", function() {
    expect(solution.reverse(-487)).toEqual(-784);
  });

  it("should handle leading zeroes", function() {
    expect(solution.reverse(120)).toEqual(21);
  });
});
