const cacheName = "v3";

oninstall = (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.add("/offline/");
      console.log("Service worker added offline page");
    })(),
  );
};

onfetch = (event) => {
  console.log("Service worker fetching", event.request.url);
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            console.log("Service worker found response in cache:", response);
            return response;
          }

          console.log(
            "No response for %s found in service worker cache. Fetching " +
              "from network",
            event.request.url,
          );

          return fetch(event.request.clone()).then((response) => {
            console.log(
              "Service worker got response for %s from network: %O",
              event.request.url,
              response,
            );

            if (response.status < 400) {
              console.log("Caching the response to", event.request.url);
              cache.put(event.request, response.clone());
            } else {
              console.log("Service worker not caching the response to", event.request.url);
            }

            return response;
          }).catch(() => caches.match("/offline/"));
        })
        .catch((error) => {
          console.error("Error in service worker fetch handler:", error);
          throw error;
        });
    }),
  );
};

self.onactivate = (event) =>  {
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
