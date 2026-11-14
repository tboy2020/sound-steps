/* Sound Steps — service worker (offline-first) */
var CACHE = "sound-steps-v5";
var CORE = ["./", "./index.html", "./manifest.json", "./icon.svg", "./install-button.js",
  "audio/kuh.wav","audio/aaa.wav","audio/tuh.wav","audio/sss.wav","audio/uh.wav","audio/nnn.wav","audio/puh.wav","audio/ih.wav","audio/guh.wav","audio/duh.wav","audio/ah.wav","audio/huh.wav","audio/mmm.wav","audio/eh.wav","audio/buh.wav","audio/rab.wav","audio/bit.wav","audio/muff.wav","audio/in.wav","audio/sun.wav","audio/set.wav","audio/roh.wav","audio/bot.wav","audio/pen.wav","audio/sill.wav","audio/zee.wav","audio/bruh.wav","audio/tie.wav","audio/gur.wav","audio/lem.wav","audio/un.wav","audio/nah.wav","audio/nuh.wav","audio/um.wav","audio/brell.wav","audio/but.wav","audio/tur.wav","audio/fly.wav","audio/die.wav","audio/sore.wav","audio/kang.wav","audio/roo.wav","audio/el.wav","audio/funt.wav","audio/ed_yoo.wav","audio/kay.wav","audio/tor.wav","audio/cat.wav","audio/pig.wav","audio/dog.wav","audio/hat.wav","audio/map.wav","audio/net.wav","audio/bug.wav","audio/rabbit.wav","audio/muffin.wav","audio/sunset.wav","audio/robot.wav","audio/pencil.wav","audio/zebra.wav","audio/tiger.wav","audio/lemon.wav","audio/banana.wav","audio/umbrella.wav","audio/butterfly.wav","audio/dinosaur.wav","audio/kangaroo.wav","audio/elephant.wav","audio/educator.wav"];

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
