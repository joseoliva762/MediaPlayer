const VERSION = "v1"

self.addEventListener('install', event => {
    event.waitUntil(preCache());
});

self.addEventListener('fetch', event => {
    const req = event.request;
    if(req.method !== 'GET'){
        return;
    }

    //buscamos en cache
    event.respondWith(cachedResponse(req));

    // Actualizar el cache
    event.waitUntil(updateCache());
});

async function preCache(){
    const cache = await caches.open(VERSION);
    return  cache.addAll([
        // '/',
        // '/index.html',
        // '/src/MediaPlayer.js',
        // '/src/plugins/AutoPlay.js',
        // '/src/plugins/AutoPause.js',
        // '/assets/styles/styles.css',
        // '/assets/videos/HomeTour.mp4'
    ]);
}

async function cachedResponse(req){
    const cache = await caches.open(VERSION);
    const res = await cache.match(req);
    return res || fetch(req);
}

async function updateCache(req){
    const cache = await caches.open(VERSION);
    const res = await fetch(req);
    return cache.put(req, res);
}