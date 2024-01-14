if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js",
                  { scope: "/" })
        .then(() => {
            console.info("Service Worker loaded");
        }, err => console.error("Service Worker error: ", err));

    navigator.serviceWorker
        .ready
        .then(() => {
            console.info("Service Worker is ready");
        });
}
