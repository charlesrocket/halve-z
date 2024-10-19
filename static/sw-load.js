"use strict";
import {showToast} from "./notifications.js";

const data = document.getElementById("precache-payload").textContent;
const precacheList = data.split(" ");
if ("serviceWorker" in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/sw.js", {
          scope: '/', type: 'module',
        }
      );

      if (registration.installing) {
        showToast("Installing Sevice Worker", "warning");
        console.log("Service Worker installing");
        navigator.serviceWorker.ready.then((registration) => {
          console.log("Service Worker requesting precache");
          registration.active.postMessage({
            payload: precacheList,
            type: "PRECACHE",
          });
        });

      } else if (registration.waiting) {
        showToast("Sevice Worker waiting", "info");
        console.log("Service worker waiting");
      } else if (registration.active) {
        console.log("Service worker active");
      }

    } catch (error) {
      showToast("Sevice Worker registration failed", "error");
      console.error("Service worker registration failed", error);
    }
  })
}

const broadcast = new BroadcastChannel('sw-channel');
broadcast.onmessage = (event) => {
  if (event.data && event.data.type === 'SW_PRECACHE') {
    showToast("Precache started", "warning");
  } else if (event.data && event.data.type === 'SW_PRECACHE_FINISH') {
    showToast("Precache completed ", "success");
  } else if (event.data && event.data.type === 'SW_PRECACHE_ERR') {
    showToast("Precache error", "error");
  } else if (event.data && event.data.type === 'SW_ACTIVATED') {
    showToast("Service Worker activated", "info");
  } else if (event.data && event.data.type === 'SW_INSTALL_FINISH') {
    showToast("Service Worker deployed", "success");
  } else if (event.data && event.data.type === 'SW_INSTALL_ERR') {
    showToast("Service Worker installation failed", "error");
  }
};
