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

  it("should be able to convert '-39' to -39", function() {
    expect(solution.myAtoi('-39')).toEqual(-39);
  });

  it("should treat '--39' as invalid", function() {
    expect(solution.myAtoi('--39')).toEqual(0);
  });

  it("should treat '15-39' as invalid", function() {
    expect(solution.myAtoi('15-39')).toEqual(0);
  });

  it("should treat '-' as invalid", function() {
    expect(solution.myAtoi('-')).toEqual(0);
  });

  it("should convert '+91' to 91", function() {
    expect(solution.myAtoi('+91')).toEqual(91);
  });

  it("should treat '++44' as invalid", function() {
    expect(solution.myAtoi('++44')).toEqual(0);
  });

  it("should trim whitespaces", function() {
    expect(solution.myAtoi('                   1337       ')).toEqual(1337);
  });

  it("should be able to convert INT_MAX", function() {
    expect(solution.myAtoi('2147483647')).toEqual(2147483647);
  });
});
