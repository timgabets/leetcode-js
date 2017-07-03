function Player() {
	/**
 	* @param {string} str
 	* @return {number}
 	*/
	function myAtoi(str) {
    	return true;
	};
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

Player.prototype.myAtoi = function(str) {
	return true;
};


module.exports = Player;
