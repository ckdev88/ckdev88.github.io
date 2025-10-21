const CACHE_NAME = 'timer-app-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './img/favicon-32.png',
  './img/favicon-64.png',
  './img/favicon-96.png',
  // Add paths to your audio files if you want them cached
  // '/audio/demo/brownnoise/1.opus',
  // '/audio/demo/lofi/1.opus',
  // '/audio/alert.wav'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Cache installation failed:', error);
      })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip audio files for now (they can be large and dynamic)
  if (event.request.url.includes('./audio/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback for HTML requests - return the cached index.html
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});

// Background sync for timer data (optional enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'timer-sync') {
    console.log('Background sync for timers');
    // You could implement background sync for timer data here
  }
});
