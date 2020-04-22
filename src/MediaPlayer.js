class MediaPlayer {
    constructor(config) {
        this.media = config.video;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            // plugin.run(this)
        });
    }
    isPaused(){
        return this.media.paused;
    }
    playMedia(){
        return this.media.play();
    }
    pauseMedia(){
        return this.media.pause();
    }
    togglePlay() {
        return this.isPaused() ? this.playMedia() : this.pauseMedia();
    }
    mute(){
        this.media.muted = true;
    }
    unMute(){
        this.media.unmuted = false;
    }
    toggleMute() {
        return this.media.muted ? this.unMute() : this.mute();
    }
}
export default MediaPlayer;