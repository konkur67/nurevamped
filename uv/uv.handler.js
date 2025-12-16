
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const target = url.searchParams.get('url');

    if (target) {
        event.respondWith(fetch(target, {
            method: event.request.method,
            headers: event.request.headers
        }));
    }
});

