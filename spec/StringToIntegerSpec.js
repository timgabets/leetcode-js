describe("StringToInteger", function() {
  var StringToInteger = require('../lib/StringToInteger');
  var solution;

  beforeEach(function() {
    solution = new StringToInteger();
  });

  it("should be able to return true", function() {
    expect(solution.myAtoi('-1')).toEqual(true);
  });
});
