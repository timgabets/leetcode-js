describe("ReverseInteger", function() {
  var ReverseInteger = require('../lib/ReverseInteger');
  var solution;

  beforeEach(function() {
    solution = new ReverseInteger();
  });

  it("should return found substring index", function() {
    expect(solution.reverse(123)).toEqual(321);
  });
});
