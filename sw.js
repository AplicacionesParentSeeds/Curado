const CACHE_NAME = "calculadora-quimicos-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./portal-icon-192.png",
  "./portal-icon-512.png",
  "./portal-icon-maskable-512.png",
  "./apple-touch-icon.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy=response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy)); return response;
  }).catch(() => caches.match("./index.html"))));
});
