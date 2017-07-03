describe("Player", function() {
  var Player = require('../lib/Player');
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("should be able to return true", function() {
    expect(player.myAtoi('-1')).toEqual(true);
  });
});
