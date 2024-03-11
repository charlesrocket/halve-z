const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
 
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  try {
    const responseFromNetwork = await fetch(request.clone());
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
 
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      './',
      './index.html',
      './404.html',
      './atom.xml',
      './sitemap.xml',
      './main.css',
      './glitch.css',
      './syntax-theme-light.css',
      './syntax-theme-dark.css',
      './langs.css',
      './robots.txt',
      './offline/index.html',
      './webfonts/fa-brands-400.ttf',
      './webfonts/fa-brands-400.woff2',
      './webfonts/fa-regular-400.ttf',
      './webfonts/fa-regular-400.woff2',
      './webfonts/fa-solid-900.ttf',
      './webfonts/fa-solid-900.woff2',
      './webfonts/fa-v4compatibility.ttf',
      './webfonts/fa-v4compatibility.woff2',
      './webfonts/Pixeboy.ttf',
      './webfonts/PressStart2P-latin-v15.woff2',
      './vendor/font-awesome/solid.css',
      './vendor/font-awesome/regular.css',
      './vendor/font-awesome/brands.css',
      './vendor/font-awesome/fontawesome.css',
      './vendor/font-awesome/v4-shims.css',
    ])
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: './offline/',
    })
  );
});
