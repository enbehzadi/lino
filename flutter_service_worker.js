'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34f575b4ca26f4a602df159790e433d5",
".git/config": "00b19457bcb47d9dc90bb4bd26b2d821",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "14661734aee20db2e2f47919d253a739",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f65fa39aae7a67876dd79d4fb85d0f9",
".git/logs/refs/heads/gh-pages": "67bb7b547e6e50101cf51a2a9e055f10",
".git/objects/00/1c3801e717b673dbf4cc235c05db1d8b9117a3": "4e0e372ab944ddf744f58a6f84c051dc",
".git/objects/00/be8df1ae46e95f7fe44daeaa42231cf1ebf6f9": "fb664a91301c0990ad1e4c5c9ad729d5",
".git/objects/08/8687d54acd1dc1c413e83a3f2c1d79411bf0ce": "dd5ebda63ddbf9db4266b84a3dbd96b9",
".git/objects/0c/ed4a1498f9c49357e055d2f503cc4ab42d861e": "ee389121762405f517367d71dbcf553d",
".git/objects/10/c9bfdeb6684731d639b8d8802d1c4e78d53241": "c2d5c51146c68c62cd91f3056204ebe3",
".git/objects/15/34ce4c7b5946a574ac9de356faf4ebef3db8d2": "150955ff64985d222d38f5453b84f7c4",
".git/objects/16/3fe6bb96c10179abe0efe4e08bf736a1bacff9": "4016867c22e29863d0f39c5f008f66dd",
".git/objects/1b/ba3c6ac36a55f1c112b1d8a3cbb3c2bea246dd": "285422717eca9df820b156bf04ede13a",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/26/e9615fe6ba3eac1446e689d6514db51ef19d20": "0ed2e247f53b4873f7fbc67501b17946",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/5cf6a4f42ad19aa4733fff20c485e0a308b4e4": "f49d48d94b82c1199c023f46ef419c19",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/dc68dca07b6b89de8162e640e9ea992c13b894": "696a5a21aca789217b7fec121f57de2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d4385af0555bb554363a8e7b137238d1ebc2cc": "37dcd676d98262dc5042675519795eba",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/3af4d9a0329b89be97e336d09181688e14dcd0": "defadb672d6ddece20151d58329575a6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/e68221fc4f2caec722c06bf017465b216962d6": "184153c89fc75f281fa9ddcac8899142",
".git/objects/61/51440beb47250eb7142433d8e712157175ff16": "935038b7833ed5174d39df412f07af00",
".git/objects/68/b6f1461f79972c230e02d19f5f8bd013a30e22": "97607e13775adff2c7493ef6543cdcd7",
".git/objects/6a/27d342640f2df35cafcdca4c0a8dcd8b8c3eb6": "2fc0db3f4b6fbe65211f40025a4ed7ff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/d62bbd188843133762c4ff23e83354530f357c": "d5f1148be6f71a44df625ba3a2aa4263",
".git/objects/6f/b5d40e5f14004b8bef0470478db3e50cfcd544": "2281a918f6801ab85aa25f69126a1838",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/6923f7cec9628845024828926f66f3f529899c": "5d14d9bddda27af725b458bffb4fbf35",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/1169e258421f76edac8accf5321fa11133a65b": "1e9a30187140c9120d5ba019f8587e78",
".git/objects/9d/b614ee5ba18a67a503fda7701cb0955c886008": "67fc55224d71db43a66250471a535d16",
".git/objects/9e/53c37d905af3623d50e97f840332193d593e7c": "62dc5ae8c0a5fdd1be58087bc3c7c7b5",
".git/objects/a0/de526ed5b001be6a779c8df4ac771428acc16a": "593f446d0ddbd9d9fdca7fffb6db250a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/efcd36a3d3abdb2062042527981ffd74e8e83b": "0b0b93fca1f3949d731442fe9d5be69b",
".git/objects/b4/8d280dffe90cb31d072e04d14a07aec922476e": "8171cee0325223b1e022a030b1f64cad",
".git/objects/be/71fe4b2c81a6306153abdff0da1745c73e328f": "ef6671b85ff87f39704bf64d8a30d523",
".git/objects/c2/a49f4fb82f19ffa9089fcf8630e5a2870d3feb": "2f72cd68a9757e77a86a441963ac8242",
".git/objects/c4/d616924c60476e7a9c4b775fc0ad9df2009d63": "785661e98b872ed224f97958476c7f42",
".git/objects/c6/d38a2287717a7e7a7bebc38946e977e6a2b647": "36a513a6d33bef75bd53fec13b5ffbc1",
".git/objects/d0/38403cf152a65cbf13aabbbe6f85c6e3afe204": "1b1daf200f36fafec8294a3060a58b52",
".git/objects/d1/ae9e286289b601d16009e7789d7af968526aac": "513836cba335819884e2cde98aada911",
".git/objects/d2/14020b9af9eaedca9a5743f4ba281c8c3ebfc4": "74f191b05fdaff6632fbeea3101c0084",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/8919b631cc5637bc63ee10df424c5a6ef05923": "db5d746abf8e7c77b176fd3d5cbaa885",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/d5655f67678978ffeef61bd3258341ce2f6b90": "4e4e2b7f5b3c957c9e373a399b4084d1",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/aa27153a3b4ed2d1b724c7c012c4770db378fe": "51db258de12c7bd11348a582591e04c6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0994531b42527c6751ba634f9a83be9691f5db": "36f91449dc0fa4cefff2820eb90721e3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/714626493b9b4bd3cef264217bc599f6c18cde": "71a7f76340416392b988e0df0929d76e",
".git/objects/ff/ad5fa147426c0c16d90d841f363eeb3fce890c": "6b9b753dc26cc4d4cd39b45f211f6215",
".git/refs/heads/gh-pages": "dd083ef72ba4f8c11ff037a8bc6508e4",
"assets/AssetManifest.bin": "4f8a2ebefe23d8aad926786d61fcf9d9",
"assets/AssetManifest.bin.json": "7be98858778e9fc151f8d041a7dd6fa9",
"assets/AssetManifest.json": "eb6e8fc543df45891c59fe20a325bf4d",
"assets/assets/branding/lino_icon.png": "4c0f4106328dc927ac54d10072c8d1c1",
"assets/assets/data/learning_content.json": "28632258034fdf9d7e858a7100f0e9df",
"assets/assets/db/app_database.db": "ea3333a5f9dd7c371ef9995ec128519d",
"assets/assets/images/titles_header.svg": "47396c9cb48b9aec2f61464075e6a990",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9069e6eef25a56d6d4c75ee300bbc831",
"assets/NOTICES": "174addea48465c1a9a8d70e3eb66d0c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "35e01ed777dfe0cc797f78e80df6577f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9750024a6b81e3fe6a40b81a01cd0b6b",
"icons/Icon-192.png": "2e0988743e2bbd133c3b5016a1be811f",
"icons/Icon-512.png": "c88d182002fd7c7729fceae7fe227e5e",
"icons/Icon-maskable-192.png": "2e0988743e2bbd133c3b5016a1be811f",
"icons/Icon-maskable-512.png": "c88d182002fd7c7729fceae7fe227e5e",
"index.html": "90e66916f2c6dbef01d80b8f48985a0c",
"/": "90e66916f2c6dbef01d80b8f48985a0c",
"landing/assets/site.css": "966c801428ad50987ce8339f6ae8fc5d",
"landing/assets/site.js": "f4e466ec3dbd8a9edd568e478bc9513f",
"landing/downloads/README.txt": "c4667f5f1b1202780679c1b4eb2127d8",
"landing/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"landing/index.html": "3eb14da1b1a0a45c1ee9638b1ae6d859",
"landing/robots.txt": "5e0bd1c281a62a380d7a948085bfe2d1",
"main.dart.js": "ae0b355d7a2a700b794b912e2c430812",
"manifest.json": "0bb7f6cf55a9ec89bc590adb92f6831f",
"sqflite_sw.js": "f4ac56fdbc3d69e942ffa2f28ed6ee51",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "ad5caebeaa001be803d237fa6edb5de0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
