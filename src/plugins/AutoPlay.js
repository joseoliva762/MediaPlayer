function AutoPlay(){
    // Constructor AutoPlay...
}

AutoPlay.prototype.run = function(player){
    player.mute()
    player.playMedia()
}
export default AutoPlay;