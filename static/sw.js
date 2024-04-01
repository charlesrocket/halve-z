const cacheName = "v3";
const cacheList = [
  "/",
  "/offline/",
  "/404.html",
  "/atom.xml",
  "/sitemap.xml",
  "/search.js",
  "/elasticlunr.min.js",
  "/glitch.css",
  "/langs.css",
  "/syntax-theme-light.css",
  "/syntax-theme-dark.css",
  "/robots.txt",
  "/webfonts/fa-brands-400.ttf",
  "/webfonts/fa-brands-400.woff2",
  "/webfonts/fa-regular-400.ttf",
  "/webfonts/fa-regular-400.woff2",
  "/webfonts/fa-solid-900.ttf",
  "/webfonts/fa-solid-900.woff2",
  "/webfonts/fa-v4compatibility.ttf",
  "/webfonts/fa-v4compatibility.woff2",
  "/webfonts/Pixeboy.woff2",
  "/webfonts/PressStart2P-latin-v15.woff2",
  "/webfonts/liberation-mono-webfont.eot",
  "/webfonts/liberation-mono-webfont.svg",
  "/webfonts/liberation-mono-webfont.ttf",
  "/webfonts/liberation-mono-webfont.woff",
  "/vendor/font-awesome/solid.css",
  "/vendor/font-awesome/regular.css",
  "/vendor/font-awesome/brands.css",
  "/vendor/font-awesome/fontawesome.css",
  "/vendor/font-awesome/v4-shims.css",
];

oninstall = (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(cacheList)
        .catch((error) => console.log("Service worker failed", error));
    })(),
  );
};

onfetch = (event) => {
  console.log("Service worker fetching", event.request.url);
  event.respondWith(caches.open(cacheName).then((cache) => {
    return cache.match(event.request)
      .then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          if (networkResponse.status < 400) {
            console.log("Caching the response to", event.request.url);
            cache.put(event.request, networkResponse.clone());
          } else {
            console.log("Service worker not caching the response to", event.request.url);
          }

          return networkResponse;
        }).catch(() => caches.match("/offline/"));

        return cachedResponse || fetchedResponse;
      });
  }));
};

onmessage = (event) => {
  const data = event.data;
  console.log("Service worker started precache", data);
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(data)
        .catch((error) => console.log("Service worker failed precache", error));
    })(),
  );
};

onactivate = (event) =>  {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      return keys.map(async (cache) => {
        if(cache !== cacheName) {
          console.log('Removing old service worker cache '+cache);
          return await caches.delete(cache);
        }
      })
    })()
  )
};
