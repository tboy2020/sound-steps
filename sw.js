/* Sound Steps — service worker (offline-first) */
var CACHE = "sound-steps-v1";
var CORE = ["./", "./index.html", "./manifest.json", "./icon.svg"];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).catch(function(){}));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(function(cached){
    if(cached) return cached;
    return fetch(e.request).then(function(res){
      try{ var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(e.request, copy); }).catch(function(){}); }catch(err){}
      return res;
    }).catch(function(){ if(e.request.mode==="navigate") return caches.match("./index.html"); });
  }));
});
