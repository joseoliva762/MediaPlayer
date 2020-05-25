class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.video;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.container.style.width = "89%";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins(){
        // const player = {
        //     play: (() => this.play()),
        //     pause: (() => this.pause()),
        //     media: this.media,
        //     get muted(){
        //         return this.media.muted;
        //     },
        //     set muted(state){
        //         this.media.muted = state;
        //     }
        // }
        this.plugins.forEach(plugin => {
            plugin.run(/* player */ this);
        });
    }
    isPaused(){
        return this.media.paused;
    }
    play(){
        return this.media.play();
    }
    pause(){
        return this.media.pause();
    }
    togglePlay() {
        return this.isPaused() ? this.play() : this.pause();
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}
export default MediaPlayer;