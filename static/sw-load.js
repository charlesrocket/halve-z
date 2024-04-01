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
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }

      navigator.serviceWorker.ready.then((registration) => {
        registration.active.postMessage(precache);
        console.log("Requesting precache");
      });

    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();
