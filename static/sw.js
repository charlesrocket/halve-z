"use strict";

const broadcast = new BroadcastChannel('sw-channel');
const cacheName =  "v18";
const cacheList = [
  "/",
  "/offline/",
  "/404.html",
  "/notifications.js",
  "/manifest.json",
  "/webfonts/Pixeboy.woff2",
  "/webfonts/PressStart2P-latin-v15.woff2",
  "/webfonts/PressStart2P-latin-ext-v15.woff2",
  "/webfonts/PressStart2P-greek-v15.woff2",
  "/webfonts/PressStart2P-cyrillic-v15.woff2",
  "/webfonts/PressStart2P-cyrillic-ext-v15.woff2",
  "/webfonts/hack-bold.woff2",
  "/webfonts/hack-bolditalic.woff2",
  "/webfonts/hack-italic.woff2",
  "/webfonts/hack-regular.woff2",
];

oninstall = (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(cacheList)
        .catch((error) => {
          broadcast.postMessage({type: 'SW_INSTALL_ERR'});
          console.error("Service worker failed", error);
          return;
        });
    })(),
  );

  broadcast.postMessage({type: 'SW_INSTALL_FINISH'});
};

onfetch = (event) => {
  if (event.request.url.startsWith("https://matrix.cactus.chat")) {
    return;
  }

  console.log("Fetching", event.request.url);
  event.respondWith(caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((cachedResponse) => {
      const fetchedResponse = fetch(event.request).then((networkResponse) => {
        if (networkResponse.status < 400) {
          console.log("Caching the response to", event.request.url);
          cache.put(event.request, networkResponse.clone());
        } else {
          console.log("Not caching the response to", event.request.url);
        }

        return networkResponse;
      });

      return cachedResponse || fetchedResponse
        .catch(() => cache.match('/offline/'));
    });
  }));
}

onmessage = (event) => {
  if (event.data.type === "PRECACHE") {
    const data = [...new Set(event.data.payload)];
    var success = true;
    broadcast.postMessage({type: 'SW_PRECACHE'});
    console.log("Precache started", data);
    event.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(data).catch((error) => {
          broadcast.postMessage({type: 'SW_PRECACHE_ERR'});
          console.error("Precache error", error);
          success = false;
        });
        if (success) broadcast.postMessage({type: 'SW_PRECACHE_FINISH'});
      })(),
    );
  }
};

onactivate = (event) =>  {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      return keys.map(async (cache) => {
        if(cache !== cacheName) {
          console.log("Removing old cache", cache);
          return await caches.delete(cache);
        }
      })
    })()
  );

  broadcast.postMessage({type: 'SW_ACTIVATED'});
};
