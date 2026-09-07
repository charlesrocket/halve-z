"use strict";

const broadcast = new BroadcastChannel("hzsw-channel");
const cacheName = "v21";
const cacheList = [
  "/",
  "/offline/",
  "/404.html",
  "/notifications.js",
  "/manifest.json",
  "/webfonts/Jersey10-Regular.woff2",
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

async function cacheEach(cache, urls) {
  let success = true;
  for (const url of urls) {
    try {
      console.info("Caching", url);
      await cache.add(url);
    } catch (error) {
      console.error("Failed to cache", url, error);
      success = false;
    }
  }

  return success;
}

oninstall = (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      const success = await cacheEach(cache, cacheList);
      broadcast.postMessage({
        type: success ? "SW_INSTALL_FINISH" : "SW_INSTALL_ERR",
      });
    })(),
  );
};

onfetch = (event) => {
  if (event.request.method !== "GET") return;
  let reqUrl;

  try {
    reqUrl = new URL(event.request.url);
  } catch (e) {
    console.error("Failed to parse URL", event.request.url, e);
    return;
  }

  if (!reqUrl.protocol.startsWith("http")) return;
  if (reqUrl.hostname === "matrix.cactus.chat") return;

  console.info("Fetching", event.request.url);

  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);
      const cachedResponse = await cache.match(event.request);

      const networkFetch = (async () => {
        try {
          const networkResponse = await fetch(event.request);

          if (
            networkResponse.status < 400 &&
            networkResponse.status !== 206 &&
            networkResponse.type === "basic"
          ) {
            console.info("Caching response", event.request.url);
            cache.put(event.request, networkResponse.clone());
          } else {
            console.info("Not caching response", event.request.url);
          }

          return networkResponse;
        } catch (error) {
          console.error("Fetch failed", event.request.url, error);
          throw error;
        }
      })();

      if (cachedResponse) {
        networkFetch.catch((error) => {
          console.warn("Revalidation failed", event.request.url, error);
        });

        return cachedResponse;
      }

      try {
        return await networkFetch;
      } catch {
        console.warn("Network is offline");
        return cache.match("/offline/");
      }
    })(),
  );
};

onmessage = (event) => {
  if (event.data?.type === "PRECACHE") {
    const data = [...new Set(event.data.payload)];
    broadcast.postMessage({ type: "SW_PRECACHE" });
    console.info("Precache started", data);
    event.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        const success = await cacheEach(cache, data);

        broadcast.postMessage({
          type: success ? "SW_PRECACHE_FINISH" : "SW_PRECACHE_ERR",
        });
      })(),
    );
  }
};

onactivate = (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map(async (cache) => {
          if (cache !== cacheName) {
            console.info("Removing old cache", cache);
            return caches.delete(cache);
          }
        }),
      );

      broadcast.postMessage({ type: "SW_ACTIVATED" });
    })(),
  );
};
