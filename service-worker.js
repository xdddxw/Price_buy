const CACHE_NAME = 'smokehub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/payment.html',
  '/kwiz.html',
  '/reviews.html',
  '/style.css',
  '/images/apple-mixed.jpg',
  '/images/bali-triple-shot.jpg',
  '/images/blackcurrant-grape.jpg',
  '/images/blik-logo.png',
  '/images/blueberry-currant.jpg',
  '/images/cola-lemon.jpg',
  '/images/cranberry-mors.jpg',
  '/images/Double-grape.jpg',
  '/images/ice-shot.jpg',
  '/images/logo.png',
  '/images/monobank-logo.png',
  '/images/multifruit.jpg',
  '/images/pineapple-lemonade.jpg',
  '/images/RedBull-blueraspberry.jpg',
  '/images/spermint.jpg',
  '/images/watermalon-melon.jpg',
  '/images/xros-catridge-2ml.jpg',
  '/images/xros-catridge-3ml.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});



