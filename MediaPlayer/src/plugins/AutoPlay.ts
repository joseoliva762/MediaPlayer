// function AutoPlay(){
//     // Constructor AutoPlay...
// }



// AutoPlay.prototype.run = function(player){
//     player.muted = !player.muted;
//     player.play();
// }
import MediaPlayer from "../MediaPlayer";

class AutoPlay{
    constructor() {}
    run = function(player:MediaPlayer){
        player.media.muted = !player.media.muted;
        player.play();
    }
}

export default AutoPlay;