// Service Worker para Frontend Roadmap 2025 PWA
const CACHE_NAME = 'frontend-roadmap-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/styles.css',
  '/manifest.json',
  '/code.svg',
  '/vite.svg'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('SW: Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', event => {
  console.log('SW: Activating...');
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Tomar control de todas las páginas
      self.clients.claim()
    ])
  );
});

// Interceptar peticiones con estrategia Cache First para assets estáticos
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear peticiones del mismo origen
  if (url.origin !== location.origin) {
    return;
  }

  // Estrategia para assets estáticos
  if (STATIC_ASSETS.includes(url.pathname) || url.pathname.includes('.css') || url.pathname.includes('.js')) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request).then(fetchResponse => {
            return caches.open(STATIC_CACHE).then(cache => {
              cache.put(request, fetchResponse.clone());
              return fetchResponse;
            });
          });
        })
        .catch(() => {
          // Fallback para páginas HTML
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        })
    );
  } 
  // Estrategia Network First para contenido dinámico
  else {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Solo cachear respuestas exitosas
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Manejar notificaciones push
self.addEventListener('push', event => {
  console.log('SW: Push event received');
  let notificationData = {};
  
  if (event.data) {
    try {
      notificationData = event.data.json();
    } catch (e) {
      notificationData = { 
        title: 'Frontend Roadmap 2025',
        body: event.data.text() || 'Nueva actualización disponible'
      };
    }
  }

  const options = {
    body: notificationData.body || '¡Continúa tu progreso en el roadmap!',
    icon: '/code.svg',
    badge: '/vite.svg',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: Date.now(),
      ...notificationData.data
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir App',
        icon: '/code.svg'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/vite.svg'
      }
    ],
    requireInteraction: false,
    silent: false,
    renotify: false,
    tag: 'roadmap-notification'
  };

  event.waitUntil(
    self.registration.showNotification(
      notificationData.title || 'Frontend Roadmap 2025', 
      options
    )
  );
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('SW: Notification click received');
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(clientList => {
          // Si ya hay una ventana abierta, enfocarla
          for (const client of clientList) {
            if (client.url.includes(self.location.origin) && 'focus' in client) {
              return client.focus();
            }
          }
          // Si no hay ventana abierta, abrir una nueva
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
    );
  }
});

// Manejar mensajes desde la aplicación
self.addEventListener('message', event => {
  console.log('SW: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', event => {
  console.log('SW: Background sync triggered');
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Aquí podrías sincronizar datos cuando la conexión se restaure
    console.log('SW: Performing background sync...');
  } catch (error) {
    console.error('SW: Background sync failed:', error);
  }
}
