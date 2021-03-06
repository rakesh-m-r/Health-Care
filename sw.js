self.addEventListener('install',event=>{
    console.log('Install evnet');
});
self.addEventListener('activate',event=>{
    console.log('Activate evnet');
});
self.addEventListener('fetch',event=>{
    console.log('Install evnet:',event.request.url);
});
const cacheName='cache-v1';
const resourcesToPrecache=[
    '/',
    'index.html',
    'index.css',
    'index.js',
    'logo.png',
    'bg.jpg',
    'ordermedicineonline.html',
    'bgb.svg'
];
self.addEventListener('install',event=>{
    console.log('service worker install event');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache=>{
                return cache.addAll(resourcesToPrecache);
            })
    );
});
self.addEventListener('fetch',event=>{
    event.respondWith(caches.match(event.request)
    .then(cachedResponse=> {
        return cachedResponse||fetch(event.request);
    })
    );
});