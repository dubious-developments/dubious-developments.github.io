"use strict";var precacheConfig=[["./index.html","884a5441a9e6b0404d9fea018fcfd9af"],["./static/css/main.3661dcb6.css","3661dcb68f114128cf5c3b68d996ceb7"],["./static/js/main.fd52ef54.js","06cb868a8f8cfad35369ad66aa82f8de"],["./static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["./static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["./static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["./static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["./static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["./static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["./static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["./static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["./static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["./static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["./static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["./static/media/keyhandler-minimal.bc7e2217.xml","bc7e2217e5adbd92882ee1de9ebb7a19"],["./static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["./static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["./static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["./static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["./static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"],["./static/media/s2_1.f198bf05.png","f198bf05fa4d83595f170458f40d4727"],["./static/media/s2_2.aee3ace2.png","aee3ace252e47c2332ec34fa88316a65"],["./static/media/s2_3.57430acc.png","57430acc7703f9c75146bd6ae03cae44"],["./static/media/s2_4.88e505b0.png","88e505b079e6c29b2c7a828578e2b314"],["./static/media/s2_6.ed83ef1b.png","ed83ef1bbfe503e795e965ea0404de9a"],["./static/media/s2_7.e11a8199.png","e11a819933c67b5eb2dce1d77963cf27"],["./static/media/s3_3.817387eb.png","817387eb7b9cd182a78743b5bf25c081"],["./static/media/s3_4.dfb865c3.png","dfb865c30c68a934359e9d050cc5c35f"],["./static/media/s3_6.4567488b.png","4567488b95cc57509dd63027e6fdd60e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});