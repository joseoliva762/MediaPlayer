import MediaPlayer from '@joseoliva762/mediaplayerplugin'
import AutoPlay from '@joseoliva762/mediaplayerplugin/lib/plugins/AutoPlay'
import AutoPause from '@joseoliva762/mediaplayerplugin/lib/plugins/AutoPause'
import Ads from '@joseoliva762/mediaplayerplugin/lib/plugins/Ads'

const video = document.querySelector("video");
const togglePlay: HTMLElement = document.querySelector("button.button__media--toogle-play");
const toggleMute: HTMLElement = document.querySelector("button.button__media--toogle-mute");



const player = new MediaPlayer({ video: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
]});
togglePlay.onclick = () => player.togglePlay();
toggleMute.onclick = () => player.toggleMute();

if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log(`Error: ${err.message}`);
    });
}