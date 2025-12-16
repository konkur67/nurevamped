

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const targetUrl = url.searchParams.get('url');

    if (targetUrl) {
        event.respondWith(fetch(targetUrl, { 
            method: event.request.method,
            headers: event.request.headers
        }));
    }
});
