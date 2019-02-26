/*
    JavaScript serviceWorker v0.0.0
    Copyright (c) 2019 Jason Niebauer
    GitHub: https://github.com/JasonNiebauer/service-worker-template
    License: http://www.opensource.org/licenses/mit-license.php
*/

const staticCacheName = 'staticfiles';

addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName)
        .then( staticCacheName => {
            // Nice to have
            staticCache.addAll([
                '/path/to/font.woff',
                '/path/to/icon.svg'
            ]); // end addAll
            // Must have
            return staticCache.addAll([
                '/path/to/stylesheet.css',
                '/path/to/javascript.js'
            ]); // end return addAll
        }); // end open then
    ); // end waitUntil
}); // end addEventListener

addEventListener('activate', function(event){
    console.log('The service worker is activated.');
});

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        fetch(request)
        .then( responseFromFetch => {
            return responseFromFetch;
        }) // end fetch then
        .catch(error => {
           return new Response('<h1>Oops!</h1> <p>Something went wrong.</p>',
           {
               headers: {'Content-type': 'text/html; charset=utf-8'}
           }); 
        }) // end fetch catch
    ); // end respondWith
}); // end addEventListener