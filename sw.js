// Service Worker
// A versão é atualizada automaticamente pelo deploy.yml a cada push no GitHub Pages.
const CACHE_VERSION = '10.09.2026-0929';
const CACHE_NAME = `custo-pote-${CACHE_VERSION}`;

const ASSETS = [
  "./",
  "index.html",
  "manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  // Para navegação (HTML), tenta a rede primeiro pra sempre pegar a versão mais nova;
  // cai pro cache só se estiver offline.
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => caches.match("index.html"))
    );
    return;
  }
  // Para os demais arquivos, cache-first com atualização em segundo plano.
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request)
        .then((networkRes) => {
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, networkRes.clone()));
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
