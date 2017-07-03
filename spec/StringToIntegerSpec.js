describe("StringToInteger", function() {
  var StringToInteger = require('../lib/StringToInteger');
  var solution;

  beforeEach(function() {
    solution = new StringToInteger();
  });

  it("should return 0 on empty string", function() {
    expect(solution.myAtoi('')).toEqual(0);
  });

  it("should return 0 on string containig spaces", function() {
    expect(solution.myAtoi('     ')).toEqual(0);
  });

  it("should be able to convert '0' to 0", function() {
    expect(solution.myAtoi('0')).toEqual(0);
  });

  it("should be able to convert '1' to 1", function() {
    expect(solution.myAtoi('1')).toEqual(1);
  });

  it("should be able to convert '13' to 13", function() {
    expect(solution.myAtoi('13')).toEqual(13);
  });
});
