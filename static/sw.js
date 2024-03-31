const cacheName = "v3";

oninstall = (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.add("/offline/");
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
