const CACHE_NAME = "cogito-pwa-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/service-worker.js"
  // Add any additional files you want to cache (CSS, images, icons, etc.)
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
