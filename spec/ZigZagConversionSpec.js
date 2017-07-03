describe("ZigZagConversion", function() {
  var ZigZagConversion = require('../lib/ZigZagConversion');
  var solution;

  beforeEach(function() {
    solution = new ZigZagConversion();
  });

  it("should be able to convert string and 1 row", function() {
    expect(solution.convert('PAYPALISHIRING', 3)).toEqual('');
  });
});
