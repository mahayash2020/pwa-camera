/**
 * ServiceWorkerに関する処理を記載
 */

// キャッシュファイルの指定
var CACHE_NAME = "pwa-sample-caches";
var urlsToCache = ['/index.html', '/js/camera.js'];

/**
 * インストール処理
 */
self.addEventListener("install", function (event) {
  console.log("ServiceWorker install");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

/**
 * フェッチ処理
 */
self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response ? response : fetch(event.request);
      })
    );
  }
});
