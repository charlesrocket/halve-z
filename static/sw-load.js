const data = new String(document.currentScript.getAttribute('data-cache'));
const precache = data.split(" ");
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      if (registration.installing) {
        console.log("Service worker installing");
        navigator.serviceWorker.ready.then((registration) => {
          registration.active.postMessage(precache);
          console.log("Service worker requesting precache");
        });

      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }

    } catch (error) {
      console.error("Service worker registration failed", error);
    }
  }
};

registerServiceWorker();
