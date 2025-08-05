// Service Worker para Frontend Roadmap 2025 PWA
const CACHE_NAME = 'frontend-roadmap-v1';
const urlsToCache = [
  '/',
  '/src/main.js',
  '/src/styles.css',
  '/code.svg',
  '/vite.svg'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - devolver respuesta
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Verificar que tenemos una respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      }
    )
  );
});

// Manejo de notificaciones push
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: '/code.svg',
    badge: '/code.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver ahora',
        icon: '/code.svg'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/vite.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Frontend Roadmap 2025', options)
  );
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', event => {
  console.log('Notificación clickeada:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    // Abrir la aplicación
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
