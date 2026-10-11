const CACHE_NAME = 'netmatik-v1';
const urlsToCache = [
  '/',
  '/giris/giris.html',
  '/giris/kayit.html',
  '/assets/Gemini_Generated_Image_-Photoroom.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});