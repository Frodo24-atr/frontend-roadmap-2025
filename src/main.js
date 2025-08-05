import './styles.css'

// ===========================================
// ROADMAP DATA 2025 - Frontend Developer
// ===========================================
const roadmapData = {
  beginner: {
    title: "Principiante",
    icon: "🌱",
    description: "Fundamentos del desarrollo frontend",
    categories: {
      html: {
        title: "HTML Fundamentals",
        icon: "📄",
        skills: [
          {
            name: "Estructura básica HTML",
            description: "Aprende la estructura básica de un documento HTML, incluyendo doctype, head, body y elementos esenciales.",
            resources: ["MDN HTML Basics", "HTML5 Semantic Elements", "Accessibility Guidelines"],
            estimatedHours: 8,
            difficulty: "beginner",
            prerequisites: []
          },
          {
            name: "Elementos semánticos",
            description: "Domina elementos como header, nav, main, section, article, aside, footer para crear código más accesible.",
            resources: ["Semantic HTML Guide", "ARIA Labels", "Screen Reader Testing"],
            estimatedHours: 12,
            difficulty: "beginner",
            prerequisites: ["Estructura básica HTML"]
          },
          {
            name: "Formularios HTML",
            description: "Crea formularios accesibles con validation, diferentes tipos de input y mejores prácticas de UX.",
            resources: ["Form Validation", "Input Types", "Accessibility in Forms"],
            estimatedHours: 16,
            difficulty: "intermediate",
            prerequisites: ["Estructura básica HTML", "Elementos semánticos"]
          },
          {
            name: "Tablas y listas",
            description: "Implementa tablas correctamente estructuradas y listas ordenadas/desordenadas.",
            resources: ["Table Accessibility", "List Semantics", "Data Tables"],
            estimatedHours: 6,
            difficulty: "beginner",
            prerequisites: ["Elementos semánticos"]
          }
        ]
      },
      css: {
        title: "CSS Basics",
        icon: "🎨",
        skills: [
          {
            name: "Sintaxis y selectores CSS",
            description: "Comprende la sintaxis CSS, selectores básicos, especificidad y la cascada.",
            resources: ["CSS Selectors Guide", "Specificity Calculator", "CSS Cascade"],
            estimatedHours: 10,
            difficulty: "beginner",
            prerequisites: ["Estructura básica HTML"]
          },
          {
            name: "Box Model",
            description: "Domina el modelo de caja: margin, border, padding, content y box-sizing.",
            resources: ["Box Model Visualization", "Box-sizing Explained", "Margin Collapsing"],
            estimatedHours: 14,
            difficulty: "beginner",
            prerequisites: ["Sintaxis y selectores CSS"]
          },
          {
            name: "Display y Position",
            description: "Aprende display (block, inline, inline-block) y position (static, relative, absolute, fixed).",
            resources: ["CSS Display Property", "CSS Positioning", "Layout Examples"],
            estimatedHours: 18,
            difficulty: "intermediate",
            prerequisites: ["Box Model"]
          },
          {
            name: "Flexbox básico",
            description: "Introduce layouts flexibles con flexbox para alinear y distribuir elementos.",
            resources: ["Flexbox Froggy Game", "Complete Flexbox Guide", "Flexbox Patterns"],
            estimatedHours: 20,
            difficulty: "intermediate",
            prerequisites: ["Display y Position"]
          }
        ]
      },
      javascript: {
        title: "JavaScript Essentials",
        icon: "⚡",
        skills: [
          {
            name: "Sintaxis y variables",
            description: "Aprende la sintaxis básica, declaración de variables (var, let, const) y tipos de datos.",
            resources: ["JavaScript Basics", "Variable Declarations", "Data Types"],
            estimatedHours: 15,
            difficulty: "beginner",
            prerequisites: []
          },
          {
            name: "Funciones básicas",
            description: "Crea y utiliza funciones, parámetros, return y scope básico.",
            resources: ["Function Declarations", "Arrow Functions", "Function Scope"],
            estimatedHours: 20,
            difficulty: "beginner",
            prerequisites: ["Sintaxis y variables"]
          },
          {
            name: "DOM Manipulation",
            description: "Manipula el DOM: seleccionar elementos, cambiar contenido y manejar eventos básicos.",
            resources: ["DOM Methods", "Event Handling", "Dynamic Content"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["Funciones básicas", "Estructura básica HTML"]
          },
          {
            name: "Condicionales y bucles",
            description: "Implementa lógica con if/else, switch, for, while y forEach.",
            resources: ["Control Flow", "Loop Patterns", "Logical Operators"],
            estimatedHours: 18,
            difficulty: "beginner",
            prerequisites: ["Sintaxis y variables"]
          }
        ]
      },
      tools: {
        title: "Developer Tools",
        icon: "🔧",
        skills: [
          {
            name: "Git básico",
            description: "Aprende comandos básicos de Git: clone, add, commit, push, pull.",
            resources: ["Git Tutorial", "GitHub Desktop", "Git Workflows"],
            estimatedHours: 12,
            difficulty: "beginner",
            prerequisites: []
          },
          {
            name: "DevTools navegador",
            description: "Utiliza las herramientas de desarrollo del navegador para debugging y testing.",
            resources: ["Chrome DevTools", "Firefox DevTools", "Debugging Techniques"],
            estimatedHours: 10,
            difficulty: "beginner",
            prerequisites: ["Estructura básica HTML"]
          },
          {
            name: "Editor de código",
            description: "Configura VS Code con extensiones esenciales y shortcuts.",
            resources: ["VS Code Extensions", "Emmet", "Code Formatting"],
            estimatedHours: 6,
            difficulty: "beginner",
            prerequisites: []
          },
          {
            name: "Live Server",
            description: "Configura un servidor local para desarrollo y testing.",
            resources: ["Live Server Extension", "Local Development", "Browser Sync"],
            estimatedHours: 4,
            difficulty: "beginner",
            prerequisites: ["Editor de código"]
          }
        ]
      }
    }
  },
  
  intermediate: {
    title: "Intermedio",
    icon: "🚀",
    description: "Habilidades avanzadas y mejores prácticas",
    categories: {
      css_advanced: {
        title: "CSS Advanced",
        icon: "🎭",
        skills: [
          {
            name: "CSS Grid",
            description: "Domina CSS Grid para layouts complejos bidimensionales y responsive design.",
            resources: ["Grid Garden Game", "CSS Grid Complete Guide", "Grid vs Flexbox"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["Flexbox básico", "Display y Position"]
          },
          {
            name: "Responsive Design",
            description: "Crea sitios adaptativos con media queries, mobile-first approach y breakpoints.",
            resources: ["Responsive Design Patterns", "Media Queries", "Mobile First Design"],
            estimatedHours: 30,
            difficulty: "intermediate",
            prerequisites: ["CSS Grid", "Box Model"]
          },
          {
            name: "CSS Custom Properties",
            description: "Utiliza variables CSS para theming dinámico y mantenimiento eficiente.",
            resources: ["CSS Variables", "Dynamic Theming", "CSS Custom Properties"],
            estimatedHours: 15,
            difficulty: "intermediate",
            prerequisites: ["Sintaxis y selectores CSS"]
          },
          {
            name: "Animaciones CSS",
            description: "Crea animaciones fluidas con transitions, transforms y keyframes.",
            resources: ["CSS Animations", "Performance Optimization", "Animation Libraries"],
            estimatedHours: 35,
            difficulty: "intermediate",
            prerequisites: ["CSS Custom Properties", "Display y Position"]
          },
          {
            name: "Sass/SCSS",
            description: "Aprende preprocesadores CSS para código más mantenible y organizado.",
            resources: ["Sass Documentation", "SCSS vs Sass", "Sass Best Practices"],
            estimatedHours: 20,
            difficulty: "intermediate",
            prerequisites: ["CSS Custom Properties", "Responsive Design"]
          }
        ]
      },
      javascript_advanced: {
        title: "JavaScript Advanced",
        icon: "⚡",
        skills: [
          {
            name: "ES6+ Features",
            description: "Domina destructuring, spread operator, template literals, modules y más.",
            resources: ["ES6 Features", "Modern JavaScript", "Module Systems"],
            estimatedHours: 35,
            difficulty: "intermediate",
            prerequisites: ["Funciones básicas", "Condicionales y bucles"]
          },
          {
            name: "Programación Asíncrona",
            description: "Aprende Promises, async/await y manejo de APIs con fetch.",
            resources: ["Promise Tutorial", "Async/Await Guide", "API Integration"],
            estimatedHours: 40,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features", "DOM Manipulation"]
          },
          {
            name: "Array Methods Avanzados",
            description: "Utiliza map, filter, reduce, find y otros métodos funcionales.",
            resources: ["Functional Programming", "Array Methods", "Data Transformation"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features"]
          },
          {
            name: "OOP en JavaScript",
            description: "Comprende clases, herencia, prototipos y patrones de diseño.",
            resources: ["JavaScript Classes", "Prototype Chain", "Design Patterns"],
            estimatedHours: 45,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features", "Funciones básicas"]
          },
          {
            name: "Error Handling",
            description: "Implementa manejo robusto de errores con try/catch y debugging avanzado.",
            resources: ["Error Handling", "Debugging Strategies", "Testing Basics"],
            estimatedHours: 20,
            difficulty: "intermediate",
            prerequisites: ["Programación Asíncrona", "OOP en JavaScript"]
          }
        ]
      },
      frameworks: {
        title: "Frontend Frameworks",
        icon: "⚛️",
        skills: [
          {
            name: "React Fundamentals",
            description: "Aprende componentes, JSX, props, state y hooks básicos (useState, useEffect).",
            resources: ["React Documentation", "Create React App", "React Hooks"],
            estimatedHours: 60,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features", "DOM Manipulation"]
          },
          {
            name: "Vue.js Basics",
            description: "Comprende la sintaxis de Vue, directivas, computed properties y componentes.",
            resources: ["Vue.js Guide", "Vue CLI", "Composition API"],
            estimatedHours: 50,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features", "DOM Manipulation"]
          },
          {
            name: "State Management",
            description: "Maneja estado global con Context API, Redux o Vuex según el framework.",
            resources: ["Redux Toolkit", "Context API", "State Patterns"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["React Fundamentals"]
          },
          {
            name: "Router",
            description: "Implementa navegación SPA con React Router o Vue Router.",
            resources: ["React Router", "Vue Router", "Navigation Patterns"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["React Fundamentals"]
          }
        ]
      },
      build_tools: {
        title: "Build Tools",
        icon: "🛠️",
        skills: [
          {
            name: "NPM/Yarn",
            description: "Gestiona dependencias, scripts y packages con npm o yarn.",
            resources: ["NPM Documentation", "Package.json Guide", "Dependency Management"],
            estimatedHours: 15,
            difficulty: "beginner",
            prerequisites: ["Git básico"]
          },
          {
            name: "Webpack Basics",
            description: "Configura bundling básico, loaders y plugins esenciales.",
            resources: ["Webpack Getting Started", "Webpack Config", "Bundle Optimization"],
            estimatedHours: 35,
            difficulty: "intermediate",
            prerequisites: ["NPM/Yarn", "ES6+ Features"]
          },
          {
            name: "Vite",
            description: "Utiliza Vite para desarrollo rápido y build optimizado.",
            resources: ["Vite Guide", "Fast Development", "Build Optimization"],
            estimatedHours: 20,
            difficulty: "intermediate",
            prerequisites: ["NPM/Yarn"]
          },
          {
            name: "ESLint & Prettier",
            description: "Configura linting y formatting automático para código consistente.",
            resources: ["ESLint Configuration", "Prettier Setup", "Code Quality"],
            estimatedHours: 12,
            difficulty: "beginner",
            prerequisites: ["NPM/Yarn", "Editor de código"]
          }
        ]
      }
    }
  },
  
  advanced: {
    title: "Avanzado",
    icon: "💎",
    description: "Optimización y arquitectura avanzada",
    categories: {
      performance: {
        title: "Performance",
        icon: "⚡",
        skills: [
          {
            name: "Web Vitals",
            description: "Optimiza Core Web Vitals: LCP, FID, CLS para mejor experiencia de usuario.",
            resources: ["Web Vitals Guide", "Performance Metrics", "Lighthouse Optimization"],
            estimatedHours: 30,
            difficulty: "advanced",
            prerequisites: ["Webpack Basics", "React Fundamentals"]
          },
          {
            name: "Bundle Optimization",
            description: "Implementa code splitting, tree shaking y lazy loading para reducir bundle size.",
            resources: ["Code Splitting", "Tree Shaking", "Bundle Analysis"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["Webpack Basics", "State Management"]
          },
          {
            name: "Image Optimization",
            description: "Optimiza imágenes con formatos modernos, lazy loading y responsive images.",
            resources: ["Image Optimization", "WebP Format", "Responsive Images"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["Responsive Design", "Web Vitals"]
          },
          {
            name: "Caching Strategies",
            description: "Implementa estrategias de cache: browser cache, CDN, service workers.",
            resources: ["Caching Strategies", "Service Workers", "PWA Caching"],
            estimatedHours: 45,
            difficulty: "advanced",
            prerequisites: ["Web Vitals", "Programación Asíncrona"]
          }
        ]
      },
      testing: {
        title: "Testing",
        icon: "🧪",
        skills: [
          {
            name: "Unit Testing",
            description: "Escribe tests unitarios con Jest, Vitest o herramientas similares.",
            resources: ["Jest Documentation", "Testing Best Practices", "Test Coverage"],
            estimatedHours: 35,
            difficulty: "intermediate",
            prerequisites: ["ES6+ Features", "Error Handling"]
          },
          {
            name: "Integration Testing",
            description: "Implementa tests de integración para componentes y APIs.",
            resources: ["Integration Testing", "API Testing", "Component Testing"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["Unit Testing", "React Fundamentals"]
          },
          {
            name: "E2E Testing",
            description: "Automatiza testing end-to-end con Cypress o Playwright.",
            resources: ["Cypress Tutorial", "Playwright Guide", "E2E Best Practices"],
            estimatedHours: 50,
            difficulty: "advanced",
            prerequisites: ["Integration Testing", "Router"]
          },
          {
            name: "Visual Testing",
            description: "Implementa testing visual para detectar cambios de UI no deseados.",
            resources: ["Visual Testing", "Storybook", "Screenshot Testing"],
            estimatedHours: 30,
            difficulty: "advanced",
            prerequisites: ["Unit Testing", "CSS Grid"]
          }
        ]
      },
      architecture: {
        title: "Architecture",
        icon: "🏗️",
        skills: [
          {
            name: "Design Patterns",
            description: "Aplica patrones como MVC, Observer, Factory en proyectos frontend.",
            resources: ["Frontend Patterns", "Component Patterns", "State Patterns"],
            estimatedHours: 50,
            difficulty: "advanced",
            prerequisites: ["OOP en JavaScript", "State Management"]
          },
          {
            name: "Micro-frontends",
            description: "Arquitectura de micro-frontends para aplicaciones escalables.",
            resources: ["Micro-frontend Architecture", "Module Federation", "Scalable Apps"],
            estimatedHours: 60,
            difficulty: "advanced",
            prerequisites: ["Design Patterns", "Webpack Basics"]
          },
          {
            name: "Monorepos",
            description: "Gestiona proyectos grandes con monorepos usando Lerna, Nx o similares.",
            resources: ["Monorepo Tools", "Workspace Management", "Shared Libraries"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["NPM/Yarn", "Design Patterns"]
          },
          {
            name: "API Design",
            description: "Diseña e integra APIs REST y GraphQL eficientemente.",
            resources: ["API Best Practices", "GraphQL", "API Integration"],
            estimatedHours: 45,
            difficulty: "advanced",
            prerequisites: ["Programación Asíncrona", "Error Handling"]
          }
        ]
      },
      security: {
        title: "Security",
        icon: "🔒",
        skills: [
          {
            name: "XSS Prevention",
            description: "Previene ataques XSS con sanitización y Content Security Policy.",
            resources: ["XSS Prevention", "CSP Implementation", "Security Headers"],
            estimatedHours: 30,
            difficulty: "advanced",
            prerequisites: ["DOM Manipulation", "API Design"]
          },
          {
            name: "Authentication",
            description: "Implementa autenticación segura con JWT, OAuth y mejores prácticas.",
            resources: ["JWT Implementation", "OAuth Flows", "Auth Security"],
            estimatedHours: 45,
            difficulty: "advanced",
            prerequisites: ["Programación Asíncrona", "State Management"]
          },
          {
            name: "HTTPS & Certificates",
            description: "Configura HTTPS, SSL/TLS y certificados para comunicación segura.",
            resources: ["HTTPS Setup", "SSL Certificates", "Security Best Practices"],
            estimatedHours: 25,
            difficulty: "intermediate",
            prerequisites: ["API Design"]
          },
          {
            name: "Dependency Security",
            description: "Audita y mantiene dependencias seguras con herramientas de análisis.",
            resources: ["Dependency Auditing", "Security Scanning", "Vulnerability Management"],
            estimatedHours: 20,
            difficulty: "intermediate",
            prerequisites: ["NPM/Yarn", "ESLint & Prettier"]
          }
        ]
      }
    }
  },
  
  senior: {
    title: "Senior",
    icon: "👑",
    description: "Liderazgo técnico y arquitectura empresarial",
    categories: {
      leadership: {
        title: "Technical Leadership",
        icon: "👥",
        skills: [
          {
            name: "Code Review",
            description: "Lidera code reviews efectivos, mentoring y establecimiento de estándares.",
            resources: ["Code Review Best Practices", "Mentoring Guide", "Technical Standards"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["Design Patterns", "Unit Testing"]
          },
          {
            name: "Architecture Decisions",
            description: "Toma decisiones arquitectónicas informadas y documenta ADRs.",
            resources: ["Architecture Decision Records", "Technical Decision Making", "System Design"],
            estimatedHours: 60,
            difficulty: "advanced",
            prerequisites: ["Micro-frontends", "API Design"]
          },
          {
            name: "Team Collaboration",
            description: "Facilita colaboración efectiva entre equipos frontend, backend y design.",
            resources: ["Cross-team Collaboration", "Communication Skills", "Agile Practices"],
            estimatedHours: 35,
            difficulty: "intermediate",
            prerequisites: ["Code Review"]
          },
          {
            name: "Knowledge Sharing",
            description: "Establece procesos de documentación y sharing de conocimiento técnico.",
            resources: ["Documentation Standards", "Knowledge Management", "Tech Talks"],
            estimatedHours: 30,
            difficulty: "intermediate",
            prerequisites: ["Team Collaboration", "Architecture Decisions"]
          }
        ]
      },
      devops: {
        title: "DevOps & Deployment",
        icon: "🚀",
        skills: [
          {
            name: "CI/CD Pipelines",
            description: "Diseña pipelines de CI/CD para deployment automático y testing.",
            resources: ["GitHub Actions", "GitLab CI", "Jenkins", "Deployment Automation"],
            estimatedHours: 50,
            difficulty: "advanced",
            prerequisites: ["E2E Testing", "Bundle Optimization"]
          },
          {
            name: "Cloud Platforms",
            description: "Deploya aplicaciones en AWS, Azure, GCP con mejores prácticas.",
            resources: ["AWS Frontend", "Azure Static Apps", "GCP Hosting", "CDN Configuration"],
            estimatedHours: 60,
            difficulty: "advanced",
            prerequisites: ["CI/CD Pipelines", "Caching Strategies"]
          },
          {
            name: "Monitoring & Analytics",
            description: "Implementa monitoring de performance, error tracking y analytics.",
            resources: ["Error Tracking", "Performance Monitoring", "User Analytics", "Observability"],
            estimatedHours: 40,
            difficulty: "advanced",
            prerequisites: ["Web Vitals", "Authentication"]
          },
          {
            name: "Infrastructure as Code",
            description: "Gestiona infraestructura con Terraform, CloudFormation o similares.",
            resources: ["Terraform", "Infrastructure Automation", "Cloud Architecture"],
            estimatedHours: 55,
            difficulty: "advanced",
            prerequisites: ["Cloud Platforms", "Monitoring & Analytics"]
          }
        ]
      },
      emerging_tech: {
        title: "Emerging Technologies",
        icon: "🔮",
        skills: [
          {
            name: "Web Assembly (WASM)",
            description: "Integra WebAssembly para performance crítica y cross-platform code.",
            resources: ["WebAssembly Tutorial", "WASM Integration", "Performance Optimization"],
            estimatedHours: 70,
            difficulty: "advanced",
            prerequisites: ["Bundle Optimization", "Web Vitals"]
          },
          {
            name: "AI/ML Integration",
            description: "Integra modelos de ML en frontend con TensorFlow.js u otras herramientas.",
            resources: ["TensorFlow.js", "ML in Browser", "AI Integration"],
            estimatedHours: 80,
            difficulty: "advanced",
            prerequisites: ["Web Assembly (WASM)", "Programación Asíncrona"]
          },
          {
            name: "Web3 & Blockchain",
            description: "Desarrolla dApps con Web3.js, ethers.js y wallets integration.",
            resources: ["Web3 Development", "Ethereum Integration", "DApp Architecture"],
            estimatedHours: 90,
            difficulty: "advanced",
            prerequisites: ["Authentication", "API Design"]
          },
          {
            name: "IoT & Edge Computing",
            description: "Conecta aplicaciones web con dispositivos IoT y edge computing.",
            resources: ["IoT Integration", "Edge Computing", "Real-time Data"],
            estimatedHours: 75,
            difficulty: "advanced",
            prerequisites: ["Monitoring & Analytics", "Caching Strategies"]
          }
        ]
      },
      business: {
        title: "Business & Strategy",
        icon: "📊",
        skills: [
          {
            name: "Technical Strategy",
            description: "Alinea decisiones técnicas con objetivos de negocio y roadmap de producto.",
            resources: ["Tech Strategy", "Business Alignment", "Product Development"],
            estimatedHours: 50,
            difficulty: "advanced",
            prerequisites: ["Architecture Decisions", "Knowledge Sharing"]
          },
          {
            name: "Cost Optimization",
            description: "Optimiza costos de infraestructura, desarrollo y mantenimiento.",
            resources: ["Cost Management", "Resource Optimization", "ROI Analysis"],
            estimatedHours: 40,
            difficulty: "intermediate",
            prerequisites: ["Cloud Platforms", "Infrastructure as Code"]
          },
          {
            name: "Risk Assessment",
            description: "Evalúa riesgos técnicos, dependencias y planes de contingencia.",
            resources: ["Risk Management", "Technical Debt", "Mitigation Strategies"],
            estimatedHours: 35,
            difficulty: "advanced",
            prerequisites: ["Technical Strategy", "Dependency Security"]
          },
          {
            name: "Innovation Management",
            description: "Balancea innovación técnica con estabilidad y delivery predecible.",
            resources: ["Innovation Frameworks", "Technology Adoption", "Change Management"],
            estimatedHours: 45,
            difficulty: "advanced",
            prerequisites: ["Technical Strategy", "Risk Assessment"]
          }
        ]
      }
    }
  }
};

// ===========================================
// AUTHENTICATION SYSTEM
// ===========================================
class AuthManager {
  constructor() {
    this.currentUser = null;
    this.isOnline = navigator.onLine;
    this.syncQueue = [];
    this.setupNetworkListeners();
  }

  // Inicializar Google Sign-In
  initGoogleAuth() {
    if (typeof google !== 'undefined') {
      google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com', // Reemplazar con tu Client ID real
        callback: (response) => this.handleGoogleSignIn(response),
        auto_select: false,
        cancel_on_tap_outside: true
      });

      google.accounts.id.renderButton(
        document.getElementById('google-signin-btn'),
        { 
          theme: 'outline', 
          size: 'large',
          width: '100%',
          text: 'signin_with',
          shape: 'rectangular'
        }
      );
    }
  }

  // Manejar respuesta de Google Sign-In
  async handleGoogleSignIn(response) {
    try {
      // Decodificar el JWT token
      const payload = this.parseJwt(response.credential);
      
      const userData = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        provider: 'google',
        verified: payload.email_verified,
        loginTime: new Date().toISOString()
      };

      await this.loginUser(userData);
    } catch (error) {
      console.error('Error en Google Sign-In:', error);
      this.showAuthError('Error al iniciar sesión con Google');
    }
  }

  // Decodificar JWT token
  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  // Login de usuario
  async loginUser(userData) {
    this.currentUser = userData;
    this.saveUserSession();
    
    // Sincronizar datos si hay conexión
    if (this.isOnline) {
      await this.syncUserData();
    }
    
    // Actualizar UI
    this.updateAuthUI();
    this.showWelcomeMessage();
    
    // Cerrar modal de auth si está abierto
    roadmapApp.closeModal();
    
    // Registrar en historial
    roadmapApp.addToHistory('user_logged_in', userData.name);
  }

  // Logout de usuario
  async logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      // Sincronizar antes de cerrar sesión
      if (this.isOnline && this.currentUser) {
        await this.syncUserData();
      }
      
      // Cerrar sesión de Google
      if (typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect();
      }
      
      // Limpiar datos de sesión
      this.currentUser = null;
      localStorage.removeItem('user-session');
      
      // Actualizar UI
      this.updateAuthUI();
      roadmapApp.showNotification('Sesión cerrada', '👋 ¡Hasta pronto!');
      roadmapApp.addToHistory('user_logged_out');
    }
  }

  // Guardar sesión de usuario
  saveUserSession() {
    if (this.currentUser) {
      localStorage.setItem('user-session', JSON.stringify(this.currentUser));
    }
  }

  // Cargar sesión de usuario
  loadUserSession() {
    const saved = localStorage.getItem('user-session');
    if (saved) {
      this.currentUser = JSON.parse(saved);
      this.updateAuthUI();
      return true;
    }
    return false;
  }

  // Sincronizar datos del usuario
  async syncUserData() {
    if (!this.currentUser || !this.isOnline) return;

    try {
      // Aquí implementarías la sincronización con tu backend
      // Por ahora simularemos con localStorage mejorado
      
      const syncData = {
        userId: this.currentUser.id,
        profile: roadmapApp.userProfile,
        progress: [...roadmapApp.completedSkills],
        goals: roadmapApp.goals,
        gamification: roadmapApp.gamificationData,
        lastSync: new Date().toISOString()
      };
      
      // Guardar en localStorage con ID de usuario
      localStorage.setItem(`roadmap-data-${this.currentUser.id}`, JSON.stringify(syncData));
      
      this.updateSyncStatus('synced');
      console.log('Datos sincronizados exitosamente');
      
    } catch (error) {
      console.error('Error al sincronizar:', error);
      this.updateSyncStatus('error');
    }
  }

  // Cargar datos del usuario desde la nube
  async loadUserData() {
    if (!this.currentUser) return;

    try {
      const savedData = localStorage.getItem(`roadmap-data-${this.currentUser.id}`);
      
      if (savedData) {
        const userData = JSON.parse(savedData);
        
        // Preguntar si quiere cargar datos de la nube
        if (confirm('Se encontraron datos guardados en la nube. ¿Quieres cargarlos?')) {
          roadmapApp.userProfile = { ...roadmapApp.userProfile, ...userData.profile };
          roadmapApp.completedSkills = new Set(userData.progress || []);
          roadmapApp.goals = userData.goals || [];
          roadmapApp.gamificationData = { ...roadmapApp.gamificationData, ...userData.gamification };
          
          // Guardar localmente
          roadmapApp.saveUserProfile();
          roadmapApp.saveProgress();
          roadmapApp.saveGoals();
          roadmapApp.saveGamificationData();
          
          // Actualizar UI
          roadmapApp.updateProgress();
          roadmapApp.showNotification('Datos cargados', '✅ Progreso sincronizado desde la nube');
        }
      }
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
    }
  }

  // Configurar listeners de red
  setupNetworkListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.updateSyncStatus('syncing');
      if (this.currentUser) {
        this.syncUserData();
      }
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.updateSyncStatus('offline');
    });
  }

  // Actualizar estado de sincronización
  updateSyncStatus(status) {
    const indicator = document.querySelector('.sync-indicator');
    const statusText = document.querySelector('.sync-status span');
    
    if (indicator && statusText) {
      indicator.className = `sync-indicator ${status}`;
      
      const statusMessages = {
        'synced': 'Sincronizado',
        'syncing': 'Sincronizando...',
        'error': 'Error de sincronización',
        'offline': 'Sin conexión'
      };
      
      statusText.textContent = statusMessages[status] || 'Desconocido';
    }
  }

  // Actualizar UI de autenticación
  updateAuthUI() {
    const profileBtn = document.getElementById('profileBtn');
    
    if (this.currentUser) {
      // Usuario logueado
      profileBtn.innerHTML = `
        <img src="${this.currentUser.picture}" alt="Avatar" class="user-avatar" style="width: 24px; height: 24px; margin-right: 8px;">
        ${this.currentUser.name.split(' ')[0]}
      `;
    } else {
      // Usuario no logueado
      profileBtn.innerHTML = '👤 Perfil';
    }
  }

  // Mostrar mensaje de bienvenida
  showWelcomeMessage() {
    if (this.currentUser) {
      roadmapApp.showNotification(
        `¡Bienvenido ${this.currentUser.name.split(' ')[0]}!`,
        '🎉 Tu progreso se sincronizará automáticamente'
      );
    }
  }

  // Mostrar error de autenticación
  showAuthError(message) {
    roadmapApp.showNotification('Error de autenticación', `❌ ${message}`);
  }

  // Verificar si el usuario está logueado
  isLoggedIn() {
    return this.currentUser !== null;
  }

  // Obtener datos del usuario actual
  getCurrentUser() {
    return this.currentUser;
  }
}

// ===========================================
// APPLICATION STATE MANAGEMENT
// ===========================================
class RoadmapApp {
  constructor() {
    this.completedSkills = this.loadProgress();
    this.currentModal = null;
    this.filters = {
      search: '',
      difficulty: '',
      status: '',
      level: ''
    };
    this.allSkills = this.getAllSkills();
    this.userProfile = this.loadUserProfile();
    this.progressHistory = this.loadProgressHistory();
    this.goals = this.loadGoals();
    this.gamificationData = this.loadGamificationData();
    this.authManager = new AuthManager();
    this.init();
  }

  init() {
    this.renderRoadmap();
    this.updateOverallProgress();
    this.setupEventListeners();
    this.setupFilterListeners();
    this.observeAnimations();
    this.initializeNotifications();
    this.initializeAuth();
  }

  // Inicializar sistema de autenticación
  initializeAuth() {
    // Cargar sesión existente
    this.authManager.loadUserSession();
    
    // Inicializar Google Auth cuando esté disponible
    if (typeof google !== 'undefined') {
      this.authManager.initGoogleAuth();
    } else {
      // Esperar a que se cargue la librería de Google
      window.addEventListener('load', () => {
        setTimeout(() => {
          if (typeof google !== 'undefined') {
            this.authManager.initGoogleAuth();
          }
        }, 1000);
      });
    }
  }

  loadProgress() {
    const saved = localStorage.getItem('frontend-roadmap-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  }

  loadUserProfile() {
    const saved = localStorage.getItem('frontend-roadmap-profile');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      goal: '',
      targetLevel: 'intermediate',
      startDate: new Date().toISOString().split('T')[0],
      avatar: '',
      bio: '',
      preferences: {
        emailNotifications: true,
        weeklyReports: true,
        theme: 'auto'
      }
    };
  }

  loadProgressHistory() {
    const saved = localStorage.getItem('frontend-roadmap-history');
    return saved ? JSON.parse(saved) : [];
  }

  saveProgress() {
    localStorage.setItem('frontend-roadmap-progress', 
      JSON.stringify([...this.completedSkills]));
  }

  saveUserProfile() {
    localStorage.setItem('frontend-roadmap-profile', 
      JSON.stringify(this.userProfile));
  }

  saveProgressHistory() {
    localStorage.setItem('frontend-roadmap-history', 
      JSON.stringify(this.progressHistory));
  }

  loadGoals() {
    const saved = localStorage.getItem('frontend-roadmap-goals');
    return saved ? JSON.parse(saved) : [];
  }

  saveGoals() {
    localStorage.setItem('frontend-roadmap-goals', 
      JSON.stringify(this.goals));
  }

  loadGamificationData() {
    const saved = localStorage.getItem('frontend-roadmap-gamification');
    return saved ? JSON.parse(saved) : {
      xp: 0,
      level: 1,
      badges: [],
      streak: 0,
      lastActiveDate: null,
      totalPoints: 0
    };
  }

  saveGamificationData() {
    localStorage.setItem('frontend-roadmap-gamification', 
      JSON.stringify(this.gamificationData));
  }

  addToHistory(action, skillName = '') {
    const historyEntry = {
      action,
      skillName,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('es-ES')
    };
    
    this.progressHistory.unshift(historyEntry);
    
    // Keep only last 100 entries
    if (this.progressHistory.length > 100) {
      this.progressHistory = this.progressHistory.slice(0, 100);
    }
    
    this.saveProgressHistory();
  }

  generateSkillId(level, category, skillIndex) {
    return `${level}-${category}-${skillIndex}`;
  }

  getAllSkills() {
    const skills = [];
    Object.keys(roadmapData).forEach(levelKey => {
      const level = roadmapData[levelKey];
      Object.keys(level.categories).forEach(categoryKey => {
        level.categories[categoryKey].skills.forEach((skill, index) => {
          skills.push({
            ...skill,
            id: this.generateSkillId(levelKey, categoryKey, index),
            level: levelKey,
            category: categoryKey,
            categoryTitle: level.categories[categoryKey].title
          });
        });
      });
    });
    return skills;
  }

  isSkillCompleted(skillId) {
    return this.completedSkills.has(skillId);
  }

  toggleSkill(skillId) {
    const skill = this.getSkillById(skillId);
    const skillName = skill ? skill.name : skillId;
    
    if (this.completedSkills.has(skillId)) {
      this.completedSkills.delete(skillId);
      this.addToHistory('uncompleted', skillName);
      // Remove XP for uncompleting
      this.updateGamification(skill, false);
    } else {
      this.completedSkills.add(skillId);
      this.addToHistory('completed', skillName);
      // Add XP and check for achievements
      this.updateGamification(skill, true);
      this.checkGoalProgress();
    }
    this.saveProgress();
    this.updateProgress();
  }

  getSkillById(skillId) {
    return this.allSkills.find(skill => skill.id === skillId);
  }

  updateProgress() {
    this.updateOverallProgress();
    this.updateLevelProgress();
  }

  updateOverallProgress() {
    const totalSkills = this.getTotalSkillsCount();
    const completedCount = this.completedSkills.size;
    const percentage = totalSkills > 0 ? Math.round((completedCount / totalSkills) * 100) : 0;
    
    // Calculate time statistics
    const timeStats = this.calculateTimeStatistics();
    
    const progressFill = document.getElementById('overallProgress');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
      progressFill.style.width = `${percentage}%`;
      progressText.innerHTML = `
        ${percentage}% completado (${completedCount}/${totalSkills} skills)<br>
        <small style="opacity: 0.8;">⏱️ ${timeStats.completedHours}h completadas de ${timeStats.totalHours}h estimadas</small>
      `;
    }
  }

  calculateTimeStatistics() {
    let totalHours = 0;
    let completedHours = 0;
    
    Object.keys(roadmapData).forEach(levelKey => {
      const level = roadmapData[levelKey];
      Object.keys(level.categories).forEach(categoryKey => {
        level.categories[categoryKey].skills.forEach((skill, index) => {
          const skillId = this.generateSkillId(levelKey, categoryKey, index);
          const hours = skill.estimatedHours || 0;
          totalHours += hours;
          
          if (this.completedSkills.has(skillId)) {
            completedHours += hours;
          }
        });
      });
    });
    
    return { totalHours, completedHours };
  }

  updateLevelProgress() {
    Object.keys(roadmapData).forEach(levelKey => {
      const level = roadmapData[levelKey];
      const levelSkills = this.getLevelSkills(levelKey);
      const completedInLevel = levelSkills.filter(skillId => 
        this.completedSkills.has(skillId)).length;
      const percentage = levelSkills.length > 0 ? 
        Math.round((completedInLevel / levelSkills.length) * 100) : 0;
      
      const progressFill = document.querySelector(
        `[data-level="${levelKey}"] .level__progress-fill`);
      const progressText = document.querySelector(
        `[data-level="${levelKey}"] .level__progress`);
      
      if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.querySelector('span').textContent = 
          `${percentage}% (${completedInLevel}/${levelSkills.length})`;
      }
    });
  }

  getTotalSkillsCount() {
    let total = 0;
    Object.values(roadmapData).forEach(level => {
      Object.values(level.categories).forEach(category => {
        total += category.skills.length;
      });
    });
    return total;
  }

  getLevelSkills(levelKey) {
    const skills = [];
    const level = roadmapData[levelKey];
    Object.keys(level.categories).forEach(categoryKey => {
      level.categories[categoryKey].skills.forEach((_, index) => {
        skills.push(this.generateSkillId(levelKey, categoryKey, index));
      });
    });
    return skills;
  }

  // ===========================================
  // FILTERING AND SEARCH METHODS
  // ===========================================
  setupFilterListeners() {
    const searchInput = document.getElementById('searchInput');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const statusFilter = document.getElementById('statusFilter');
    const levelFilter = document.getElementById('levelFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const profileBtn = document.getElementById('profileBtn');

    // Debounce search input
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.filters.search = e.target.value.toLowerCase();
        this.applyFilters();
      }, 300);
    });

    difficultyFilter?.addEventListener('change', (e) => {
      this.filters.difficulty = e.target.value;
      this.applyFilters();
    });

    statusFilter?.addEventListener('change', (e) => {
      this.filters.status = e.target.value;
      this.applyFilters();
    });

    levelFilter?.addEventListener('change', (e) => {
      this.filters.level = e.target.value;
      this.applyFilters();
    });

    clearFiltersBtn?.addEventListener('click', () => {
      this.clearAllFilters();
    });

    profileBtn?.addEventListener('click', () => {
      this.showProfileModal();
    });

    const goalsBtn = document.getElementById('goalsBtn');
    goalsBtn?.addEventListener('click', () => {
      this.showGoalsModal();
    });
  }

  applyFilters() {
    const filteredData = this.getFilteredData();
    this.renderFilteredRoadmap(filteredData);
    this.updateResultsInfo(filteredData);
  }

  getFilteredData() {
    const filteredData = {};
    
    Object.keys(roadmapData).forEach(levelKey => {
      // Skip level if level filter is active and doesn't match
      if (this.filters.level && this.filters.level !== levelKey) {
        return;
      }

      const level = roadmapData[levelKey];
      const filteredLevel = {
        ...level,
        categories: {}
      };

      Object.keys(level.categories).forEach(categoryKey => {
        const category = level.categories[categoryKey];
        const filteredSkills = category.skills.filter((skill, index) => {
          const skillId = this.generateSkillId(levelKey, categoryKey, index);
          
          // Search filter
          if (this.filters.search) {
            const searchLower = this.filters.search;
            const matchesSearch = 
              skill.name.toLowerCase().includes(searchLower) ||
              skill.description.toLowerCase().includes(searchLower) ||
              category.title.toLowerCase().includes(searchLower);
            
            if (!matchesSearch) return false;
          }

          // Difficulty filter
          if (this.filters.difficulty && skill.difficulty !== this.filters.difficulty) {
            return false;
          }

          // Status filter
          if (this.filters.status) {
            const isCompleted = this.isSkillCompleted(skillId);
            if (this.filters.status === 'completed' && !isCompleted) return false;
            if (this.filters.status === 'pending' && isCompleted) return false;
          }

          return true;
        });

        if (filteredSkills.length > 0) {
          filteredLevel.categories[categoryKey] = {
            ...category,
            skills: filteredSkills
          };
        }
      });

      if (Object.keys(filteredLevel.categories).length > 0) {
        filteredData[levelKey] = filteredLevel;
      }
    });

    return filteredData;
  }

  renderFilteredRoadmap(filteredData) {
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = '';

    if (Object.keys(filteredData).length === 0) {
      roadmapContainer.innerHTML = `
        <div class="no-results">
          <h3>🔍 No se encontraron resultados</h3>
          <p>Intenta ajustar los filtros o términos de búsqueda</p>
        </div>
      `;
      return;
    }

    Object.keys(filteredData).forEach(levelKey => {
      const level = filteredData[levelKey];
      const levelElement = this.createLevelElement(levelKey, level);
      roadmapContainer.appendChild(levelElement);
    });

    // Re-update progress after filtering
    this.updateLevelProgress();
  }

  updateResultsInfo(filteredData) {
    const resultsInfo = document.getElementById('resultsInfo');
    if (!resultsInfo) return;

    let totalFilteredSkills = 0;
    Object.values(filteredData).forEach(level => {
      Object.values(level.categories).forEach(category => {
        totalFilteredSkills += category.skills.length;
      });
    });

    const totalSkills = this.getTotalSkillsCount();
    const isFiltered = this.filters.search || this.filters.difficulty || 
                      this.filters.status || this.filters.level;

    if (isFiltered) {
      resultsInfo.querySelector('.results-count').textContent = 
        `Mostrando ${totalFilteredSkills} de ${totalSkills} skills`;
    } else {
      resultsInfo.querySelector('.results-count').textContent = 
        'Mostrando todas las skills';
    }
  }

  clearAllFilters() {
    // Reset filters
    this.filters = {
      search: '',
      difficulty: '',
      status: '',
      level: ''
    };

    // Reset form inputs
    const searchInput = document.getElementById('searchInput');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const statusFilter = document.getElementById('statusFilter');
    const levelFilter = document.getElementById('levelFilter');

    if (searchInput) searchInput.value = '';
    if (difficultyFilter) difficultyFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (levelFilter) levelFilter.value = '';

    // Re-render full roadmap
    this.renderRoadmap();
    this.updateOverallProgress();
    this.updateLevelProgress();
    this.updateResultsInfo(roadmapData);
  }

  highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  // ===========================================
  // PROFILE & SYNC METHODS
  // ===========================================
  showProfileModal() {
    const stats = this.calculateProfileStats();
    const isLoggedIn = this.authManager.isLoggedIn();
    const currentUser = this.authManager.getCurrentUser();
    
    const authSection = isLoggedIn ? `
      <div class="user-info">
        <img src="${currentUser.picture}" alt="Avatar" class="user-avatar">
        <div class="user-details">
          <div class="user-name">${currentUser.name}</div>
          <div class="user-email">${currentUser.email}</div>
        </div>
        <button class="logout-btn" onclick="roadmapApp.authManager.logout()">Cerrar Sesión</button>
      </div>
      <div class="sync-status">
        <div class="sync-indicator"></div>
        <span>Sincronizado</span>
      </div>
    ` : `
      <div class="auth-container">
        <div class="auth-header">
          <h3 class="auth-title">🔐 Iniciar Sesión</h3>
          <p class="auth-subtitle">Sincroniza tu progreso en todos tus dispositivos</p>
        </div>
        
        <div class="auth-form">
          <div class="social-login">
            <div id="google-signin-btn"></div>
            <button class="social-btn github" onclick="roadmapApp.showComingSoon('GitHub')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12 0 17.31 3.435 21.795 8.205 23.385 8.805 23.49 9.03 23.13 9.03 22.815 9.03 22.53 9.015 21.585 9.015 20.055 5.67 20.76 4.965 18.795 4.965 18.795 4.425 17.46 3.63 17.1 3.63 17.1 2.535 16.365 3.72 16.38 3.72 16.38 4.905 16.65 5.58 18.435 5.58 18.435 6.615 20.76 8.25 20.25 9.075 19.965 9.18 19.17 9.495 18.675 9.84 18.405 7.17 18.12 4.38 17.025 4.38 12.12 4.38 10.725 4.845 9.585 5.13 8.385 5.13 8.385 6.105 8.055 9.015 10.065 9.825 9.795 10.65 9.795 11.475 9.795 12.285 10.065 15.195 8.055 16.17 8.385 16.17 8.385 16.455 9.585 16.92 10.725 16.92 12.12 16.92 17.025 14.13 18.12 11.46 18.405 11.805 18.675 12.12 19.17 12.225 19.965 13.05 20.25 14.685 20.76 15.72 18.435 16.395 16.65 17.28 16.38 18.465 16.365 17.37 17.1 16.575 17.46 16.035 18.795 16.035 18.795 15.33 20.76 12.63 20.055 12.63 21.585 12.63 22.53 12.615 22.815 12.615 23.13 12.84 23.49 13.44 23.385 20.565 21.795 24 17.31 24 12 24 5.37 18.63 0 12 0Z"/>
              </svg>
              Continuar con GitHub
            </button>
          </div>
          
          <div class="offline-notice" style="display: ${navigator.onLine ? 'none' : 'block'};">
            📡 Sin conexión - El login estará disponible cuando te conectes
          </div>
          
          <div class="auth-benefits">
            <h4>✨ Beneficios de crear cuenta:</h4>
            <ul>
              <li>☁️ Sincronización automática en todos tus dispositivos</li>
              <li>📊 Estadísticas avanzadas de progreso</li>
              <li>🎯 Sistema de objetivos personalizado</li>
              <li>🏆 Logros y gamificación</li>
              <li>📱 Notificaciones push personalizadas</li>
              <li>💾 Backup automático de tu progreso</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    
    const modalHTML = `
      <div class="modal-overlay active">
        <div class="modal profile-modal">
          <div class="modal__header">
            <h3 class="modal__title">👤 Mi Perfil</h3>
            <button class="modal__close" aria-label="Cerrar modal">×</button>
          </div>
          <div class="modal__content">
            ${authSection}
            
            <div class="profile-tabs">
              <button class="profile-tab active" data-tab="info">📝 Información</button>
              <button class="profile-tab" data-tab="stats">📊 Estadísticas</button>
              <button class="profile-tab" data-tab="history">📋 Historial</button>
              <button class="profile-tab" data-tab="sync">🔄 Sincronización</button>
            </div>
            
            <div class="profile-content active" id="profile-info">
              <div class="profile-section">
                <h4>👤 Información Personal</h4>
                <div class="form-group">
                  <label class="form-label" for="profileName">Nombre:</label>
                  <input type="text" id="profileName" class="form-input" value="${this.userProfile.name}" placeholder="Tu nombre">
                </div>
                <div class="form-group">
                  <label class="form-label" for="profileEmail">Email:</label>
                  <input type="email" id="profileEmail" class="form-input" value="${this.userProfile.email}" placeholder="tu@email.com" ${isLoggedIn ? 'readonly' : ''}>
                </div>
                <div class="form-group">
                  <label class="form-label" for="profileBio">Bio:</label>
                  <textarea id="profileBio" class="form-textarea" placeholder="Cuéntanos sobre ti...">${this.userProfile.bio}</textarea>
                </div>
              </div>
              
              <div class="profile-section">
                <h4>🎯 Objetivos de Aprendizaje</h4>
                <div class="form-group">
                  <label class="form-label" for="profileGoal">Meta Principal:</label>
                  <input type="text" id="profileGoal" class="form-input" value="${this.userProfile.goal}" placeholder="Ej: Conseguir trabajo como Frontend Developer">
                </div>
                <div class="form-group">
                  <label class="form-label" for="profileTargetLevel">Nivel Objetivo:</label>
                  <select id="profileTargetLevel" class="form-select">
                    <option value="beginner" ${this.userProfile.targetLevel === 'beginner' ? 'selected' : ''}>Principiante</option>
                    <option value="intermediate" ${this.userProfile.targetLevel === 'intermediate' ? 'selected' : ''}>Intermedio</option>
                    <option value="advanced" ${this.userProfile.targetLevel === 'advanced' ? 'selected' : ''}>Avanzado</option>
                    <option value="senior" ${this.userProfile.targetLevel === 'senior' ? 'selected' : ''}>Senior</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="profileStartDate">Fecha de Inicio:</label>
                  <input type="date" id="profileStartDate" class="form-input" value="${this.userProfile.startDate}">
                </div>
              </div>
              
              <div class="sync-actions">
                <button class="sync-btn primary" onclick="roadmapApp.saveProfileData()">💾 Guardar Cambios</button>
                ${isLoggedIn ? '<button class="sync-btn secondary" onclick="roadmapApp.authManager.syncUserData()">☁️ Sincronizar Ahora</button>' : ''}
              </div>
            </div>
            
            <div class="profile-content" id="profile-stats">
              <div class="profile-stats">
                <div class="stat-card">
                  <span class="stat-value">${stats.totalCompleted}</span>
                  <span class="stat-label">Skills Completadas</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">${stats.totalHours}h</span>
                  <span class="stat-label">Horas Estudiadas</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">${stats.progressPercentage}%</span>
                  <span class="stat-label">Progreso Total</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">${stats.daysActive}</span>
                  <span class="stat-label">Días Activo</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">${stats.currentStreak}</span>
                  <span class="stat-label">Racha Actual</span>
                </div>
                <div class="stat-card">
                  <span class="stat-value">${stats.averagePerWeek}</span>
                  <span class="stat-label">Skills/Semana</span>
                </div>
              </div>
              
              <div class="profile-section">
                <h4>📈 Progreso por Nivel</h4>
                ${this.generateLevelProgress()}
              </div>
            </div>
            
            <div class="profile-content" id="profile-history">
              <div class="profile-section">
                <h4>📋 Historial de Actividad</h4>
                <div class="history-list">
                  ${this.generateHistoryList()}
                </div>
              </div>
            </div>
            
            <div class="profile-content" id="profile-sync">
              <div class="profile-section">
                <h4>💾 Exportar Datos</h4>
                <div class="sync-actions">
                  <button class="sync-btn primary" onclick="roadmapApp.exportProgress()">📥 Exportar Progreso (JSON)</button>
                  <button class="sync-btn secondary" onclick="roadmapApp.exportCSV()">📊 Exportar CSV</button>
                </div>
              </div>
              
              <div class="profile-section">
                <h4>📂 Importar Datos</h4>
                <div class="file-input-wrapper">
                  <input type="file" id="importFile" class="file-input" accept=".json">
                  <label for="importFile" class="file-input-label">📁 Seleccionar archivo JSON</label>
                </div>
                <div class="sync-actions">
                  <button class="sync-btn secondary" onclick="roadmapApp.importProgress()">📤 Importar Progreso</button>
                </div>
              </div>
              
              <div class="profile-section">
                <h4>🗑️ Gestión de Datos</h4>
                <div class="sync-actions">
                  <button class="sync-btn secondary" onclick="roadmapApp.clearAllData()" style="color: var(--error); border-color: var(--error);">🗑️ Borrar Todos los Datos</button>
                </div>
                <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-top: var(--spacing-sm);">
                  ⚠️ Esta acción eliminará todo tu progreso, perfil e historial permanentemente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.currentModal = document.querySelector('.modal-overlay:last-child');
    document.body.style.overflow = 'hidden';
    
    // Setup profile tab listeners
    this.setupProfileTabListeners();
    
    // Inicializar Google Sign-In si el usuario no está logueado
    if (!isLoggedIn) {
      setTimeout(() => {
        this.authManager.initGoogleAuth();
      }, 100);
    }
  }

  calculateProfileStats() {
    const timeStats = this.calculateTimeStatistics();
    const totalSkills = this.getTotalSkillsCount();
    const progressPercentage = totalSkills > 0 ? Math.round((this.completedSkills.size / totalSkills) * 100) : 0;
    
    // Calculate days active (simplified)
    const startDate = new Date(this.userProfile.startDate);
    const today = new Date();
    const daysActive = Math.max(1, Math.floor((today - startDate) / (1000 * 60 * 60 * 24)));
    
    // Calculate current streak (simplified - based on recent history)
    const recentHistory = this.progressHistory.slice(0, 7);
    const currentStreak = recentHistory.filter(entry => entry.action === 'completed').length;
    
    // Calculate average per week
    const weeksActive = Math.max(1, Math.floor(daysActive / 7));
    const averagePerWeek = Math.round(this.completedSkills.size / weeksActive);
    
    return {
      totalCompleted: this.completedSkills.size,
      totalHours: timeStats.completedHours,
      progressPercentage,
      daysActive,
      currentStreak,
      averagePerWeek
    };
  }

  generateLevelProgress() {
    return Object.keys(roadmapData).map(levelKey => {
      const level = roadmapData[levelKey];
      const levelSkills = this.getLevelSkills(levelKey);
      const completedInLevel = levelSkills.filter(skillId => 
        this.completedSkills.has(skillId)).length;
      const percentage = levelSkills.length > 0 ? 
        Math.round((completedInLevel / levelSkills.length) * 100) : 0;
      
      return `
        <div class="stat-card">
          <span class="stat-value">${percentage}%</span>
          <span class="stat-label">${level.icon} ${level.title} (${completedInLevel}/${levelSkills.length})</span>
        </div>
      `;
    }).join('');
  }

  generateHistoryList() {
    if (this.progressHistory.length === 0) {
      return '<p style="text-align: center; color: var(--text-secondary); padding: var(--spacing-lg);">No hay actividad registrada aún</p>';
    }
    
    return this.progressHistory.slice(0, 20).map(entry => {
      const actionText = entry.action === 'completed' ? '✅ Completó' : '❌ Descompletó';
      const timeAgo = this.getTimeAgo(entry.timestamp);
      
      return `
        <div class="history-item">
          <span class="history-action">${actionText}: ${entry.skillName}</span>
          <span class="history-time">${timeAgo}</span>
        </div>
      `;
    }).join('');
  }

  getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffDays > 0) return `hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
    if (diffHours > 0) return `hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
    if (diffMinutes > 0) return `hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
    return 'hace un momento';
  }

  setupProfileTabListeners() {
    const tabs = document.querySelectorAll('.profile-tab');
    const contents = document.querySelectorAll('.profile-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        contents.forEach(content => {
          content.classList.remove('active');
          if (content.id === `profile-${tabName}`) {
            content.classList.add('active');
          }
        });
      });
    });
  }

  saveProfileData() {
    this.userProfile.name = document.getElementById('profileName')?.value || '';
    this.userProfile.email = document.getElementById('profileEmail')?.value || '';
    this.userProfile.bio = document.getElementById('profileBio')?.value || '';
    this.userProfile.goal = document.getElementById('profileGoal')?.value || '';
    this.userProfile.targetLevel = document.getElementById('profileTargetLevel')?.value || 'intermediate';
    this.userProfile.startDate = document.getElementById('profileStartDate')?.value || '';
    
    this.saveUserProfile();
    this.addToHistory('profile_updated');
    
    // Sincronizar si está logueado
    if (this.authManager.isLoggedIn()) {
      this.authManager.syncUserData();
    }
    
    // Show success message
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✅ Guardado!';
    button.style.backgroundColor = 'var(--success)';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 2000);
  }

  // Mostrar mensaje de "próximamente"
  showComingSoon(feature) {
    this.showNotification(`${feature} próximamente`, '🚧 Esta función estará disponible pronto');
  }

  // ===========================================
  // SYNC & EXPORT METHODS
  // ===========================================
  exportProgress() {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      userProfile: this.userProfile,
      completedSkills: [...this.completedSkills],
      progressHistory: this.progressHistory,
      metadata: {
        totalSkills: this.getTotalSkillsCount(),
        completedCount: this.completedSkills.size,
        ...this.calculateTimeStatistics()
      }
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `frontend-roadmap-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    this.addToHistory('exported_data');
  }

  exportCSV() {
    const headers = ['Skill', 'Category', 'Level', 'Difficulty', 'Estimated Hours', 'Completed', 'Date Completed'];
    const rows = [headers];
    
    this.allSkills.forEach(skill => {
      const isCompleted = this.completedSkills.has(skill.id);
      const completedDate = isCompleted ? 
        this.progressHistory.find(h => h.action === 'completed' && h.skillName === skill.name)?.date || '' : '';
      
      rows.push([
        skill.name,
        skill.categoryTitle,
        skill.level,
        skill.difficulty || 'beginner',
        skill.estimatedHours || '',
        isCompleted ? 'Yes' : 'No',
        completedDate
      ]);
    });
    
    const csvContent = rows.map(row => 
      row.map(field => `"${field}"`).join(',')
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `frontend-roadmap-progress-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    this.addToHistory('exported_csv');
  }

  importProgress() {
    const fileInput = document.getElementById('importFile');
    const file = fileInput?.files[0];
    
    if (!file) {
      alert('Por favor selecciona un archivo JSON primero.');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importData = JSON.parse(e.target.result);
        
        if (confirm('¿Estás seguro de que quieres importar estos datos? Esto sobrescribirá tu progreso actual.')) {
          if (importData.userProfile) {
            this.userProfile = { ...this.userProfile, ...importData.userProfile };
            this.saveUserProfile();
          }
          
          if (importData.completedSkills) {
            this.completedSkills = new Set(importData.completedSkills);
            this.saveProgress();
          }
          
          if (importData.progressHistory) {
            this.progressHistory = importData.progressHistory;
            this.saveProgressHistory();
          }
          
          this.addToHistory('imported_data');
          this.updateProgress();
          this.closeModal();
          
          alert('¡Datos importados exitosamente!');
          window.location.reload();
        }
      } catch (error) {
        alert('Error al importar el archivo. Asegúrate de que sea un archivo JSON válido.');
      }
    };
    
    reader.readAsText(file);
  }

  clearAllData() {
    if (confirm('⚠️ ¿Estás COMPLETAMENTE seguro de que quieres borrar TODOS tus datos?\n\nEsto incluye:\n- Todo tu progreso\n- Tu perfil personal\n- Tu historial de actividad\n\nEsta acción NO se puede deshacer.')) {
      if (confirm('Última confirmación: ¿Realmente quieres borrar todo?')) {
        localStorage.removeItem('frontend-roadmap-progress');
        localStorage.removeItem('frontend-roadmap-profile');
        localStorage.removeItem('frontend-roadmap-history');
        
        alert('Todos los datos han sido eliminados. La página se recargará.');
        window.location.reload();
      }
    }
  }

  renderRoadmap() {
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = '';

    Object.keys(roadmapData).forEach(levelKey => {
      const level = roadmapData[levelKey];
      const levelElement = this.createLevelElement(levelKey, level);
      roadmapContainer.appendChild(levelElement);
    });
  }

  createLevelElement(levelKey, level) {
    const levelDiv = document.createElement('div');
    levelDiv.className = `level level--${levelKey}`;
    levelDiv.setAttribute('data-level', levelKey);

    levelDiv.innerHTML = `
      <div class="level__header">
        <h2 class="level__title">
          <span class="level__icon">${level.icon}</span>
          ${level.title}
        </h2>
        <div class="level__progress">
          <div class="level__progress-bar">
            <div class="level__progress-fill"></div>
          </div>
          <span>0% (0/0)</span>
        </div>
      </div>
      <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">
        ${level.description}
      </p>
      <div class="skills-grid">
        ${Object.keys(level.categories).map(categoryKey => 
          this.createCategoryElement(levelKey, categoryKey, level.categories[categoryKey])
        ).join('')}
      </div>
    `;

    return levelDiv;
  }

  createCategoryElement(levelKey, categoryKey, category) {
    return `
      <div class="skill-category">
        <h3 class="category__title">
          <span class="category__icon">${category.icon}</span>
          ${category.title}
        </h3>
        <ul class="skills-list">
          ${category.skills.map((skill, index) => 
            this.createSkillElement(levelKey, categoryKey, skill, index)
          ).join('')}
        </ul>
      </div>
    `;
  }

  createSkillElement(levelKey, categoryKey, skill, index) {
    const skillId = this.generateSkillId(levelKey, categoryKey, index);
    const isCompleted = this.isSkillCompleted(skillId);
    
    // Generate difficulty badge
    const difficultyClass = `skill-badge--${skill.difficulty || 'beginner'}`;
    const difficultyText = skill.difficulty || 'beginner';
    
    // Generate time badge
    const timeText = skill.estimatedHours ? `${skill.estimatedHours}h` : '~';
    
    // Apply search highlighting
    const highlightedName = this.highlightSearchTerm(skill.name, this.filters.search);
    
    return `
      <li class="skill-item ${isCompleted ? 'completed' : ''}" data-skill-id="${skillId}">
        <input type="checkbox" 
               class="skill-checkbox" 
               ${isCompleted ? 'checked' : ''}
               data-skill-id="${skillId}">
        <span class="skill-name">${highlightedName}</span>
        <div class="skill-metadata">
          <span class="skill-badge skill-badge--time">${timeText}</span>
          <span class="skill-badge skill-badge--difficulty ${difficultyClass}">${difficultyText}</span>
        </div>
        <button class="skill-info" 
                data-skill='${JSON.stringify(skill)}'
                aria-label="Más información sobre ${skill.name}">
          ℹ️
        </button>
      </li>
    `;
  }

  setupEventListeners() {
    // Skill checkbox listeners
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('skill-checkbox')) {
        const skillId = e.target.getAttribute('data-skill-id');
        const skillItem = e.target.closest('.skill-item');
        
        this.toggleSkill(skillId);
        skillItem.classList.toggle('completed', e.target.checked);
      }
    });

    // Skill info button listeners
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('skill-info')) {
        const skillData = JSON.parse(e.target.getAttribute('data-skill'));
        this.showSkillModal(skillData);
      }
    });

    // Modal close listeners
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || 
          e.target.classList.contains('modal__close')) {
        this.closeModal();
      }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.currentModal) {
        this.closeModal();
      }
    });

    // Prevent modal close when clicking inside modal
    document.addEventListener('click', (e) => {
      if (e.target.closest('.modal') && !e.target.classList.contains('modal__close')) {
        e.stopPropagation();
      }
    });
  }

  showSkillModal(skill) {
    // Generate prerequisites HTML
    const prerequisitesHTML = skill.prerequisites && skill.prerequisites.length > 0 
      ? `
        <div class="modal__prerequisites">
          <h3>📋 Prerequisitos:</h3>
          <div class="prerequisites-list">
            ${skill.prerequisites.map(prereq => 
              `<span class="prerequisite-tag">${prereq}</span>`
            ).join('')}
          </div>
        </div>
      `
      : '';

    // Generate metadata
    const difficultyText = skill.difficulty || 'beginner';
    const timeText = skill.estimatedHours || 'No especificado';
    const difficultyIcon = {
      'beginner': '🌱',
      'intermediate': '🚀', 
      'advanced': '💎'
    }[skill.difficulty] || '🌱';

    const modalHTML = `
      <div class="modal-overlay active">
        <div class="modal">
          <div class="modal__header">
            <h3 class="modal__title">${skill.name}</h3>
            <button class="modal__close" aria-label="Cerrar modal">×</button>
          </div>
          <div class="modal__content">
            <div class="modal__metadata">
              <div class="modal__metadata-item">
                <span class="modal__metadata-icon">⏱️</span>
                <span><strong>Tiempo estimado:</strong> ${timeText}${skill.estimatedHours ? ' horas' : ''}</span>
              </div>
              <div class="modal__metadata-item">
                <span class="modal__metadata-icon">${difficultyIcon}</span>
                <span><strong>Dificultad:</strong> ${difficultyText}</span>
              </div>
            </div>
            
            <p>${skill.description}</p>
            
            ${prerequisitesHTML}
            
            <h3>🎯 Recursos recomendados:</h3>
            <ul>
              ${skill.resources.map(resource => `<li>${resource}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.currentModal = document.querySelector('.modal-overlay:last-child');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.currentModal) {
      this.currentModal.classList.remove('active');
      setTimeout(() => {
        this.currentModal.remove();
        this.currentModal = null;
        document.body.style.overflow = '';
      }, 250);
    }
  }

  observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    });

    document.querySelectorAll('.level').forEach(level => {
      observer.observe(level);
    });
  }

  // ===========================================
  // GAMIFICATION SYSTEM
  // ===========================================
  updateGamification(skill, completed) {
    if (!skill) return;

    const xpGain = this.calculateXP(skill);
    
    if (completed) {
      this.gamificationData.xp += xpGain;
      this.gamificationData.totalPoints += xpGain;
      this.updateStreak();
      this.checkLevelUp();
      this.checkBadges();
      this.showXPNotification(xpGain, skill.name);
    } else {
      this.gamificationData.xp = Math.max(0, this.gamificationData.xp - xpGain);
      this.gamificationData.totalPoints = Math.max(0, this.gamificationData.totalPoints - xpGain);
    }
    
    this.saveGamificationData();
  }

  calculateXP(skill) {
    const baseXP = 10;
    const difficultyMultiplier = {
      'beginner': 1,
      'intermediate': 1.5,
      'advanced': 2
    };
    
    const timeMultiplier = skill.estimatedHours ? Math.min(skill.estimatedHours / 10, 2) : 1;
    return Math.round(baseXP * (difficultyMultiplier[skill.difficulty] || 1) * timeMultiplier);
  }

  updateStreak() {
    const today = new Date().toDateString();
    const lastActive = this.gamificationData.lastActiveDate;
    
    if (lastActive === today) {
      // Already active today, streak continues
      return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastActive === yesterday.toDateString()) {
      // Continue streak
      this.gamificationData.streak += 1;
    } else {
      // Reset streak
      this.gamificationData.streak = 1;
    }
    
    this.gamificationData.lastActiveDate = today;
  }

  checkLevelUp() {
    const newLevel = Math.floor(this.gamificationData.xp / 100) + 1;
    if (newLevel > this.gamificationData.level) {
      this.gamificationData.level = newLevel;
      this.showLevelUpNotification(newLevel);
    }
  }

  checkBadges() {
    const badges = this.getAvailableBadges();
    badges.forEach(badge => {
      if (!this.gamificationData.badges.includes(badge.id) && badge.condition()) {
        this.gamificationData.badges.push(badge.id);
        this.showBadgeNotification(badge);
      }
    });
  }

  getAvailableBadges() {
    return [
      {
        id: 'first_skill',
        name: 'Primer Paso',
        description: 'Completa tu primera skill',
        icon: '🌟',
        condition: () => this.completedSkills.size >= 1
      },
      {
        id: 'html_master',
        name: 'Maestro HTML',
        description: 'Completa todas las skills de HTML',
        icon: '📄',
        condition: () => this.isLevelCompleted('beginner', 'html')
      },
      {
        id: 'css_master',
        name: 'Maestro CSS',
        description: 'Completa todas las skills de CSS',
        icon: '🎨',
        condition: () => this.isLevelCompleted('beginner', 'css')
      },
      {
        id: 'js_master',
        name: 'Maestro JavaScript',
        description: 'Completa todas las skills de JavaScript',
        icon: '⚡',
        condition: () => this.isLevelCompleted('beginner', 'javascript')
      },
      {
        id: 'streak_7',
        name: 'Constancia',
        description: '7 días consecutivos aprendiendo',
        icon: '🔥',
        condition: () => this.gamificationData.streak >= 7
      },
      {
        id: 'level_5',
        name: 'Veterano',
        description: 'Alcanza el nivel 5',
        icon: '🏆',
        condition: () => this.gamificationData.level >= 5
      },
      {
        id: 'speed_demon',
        name: 'Velocista',
        description: 'Completa 10 skills en un día',
        icon: '💨',
        condition: () => this.getSkillsCompletedToday() >= 10
      }
    ];
  }

  isLevelCompleted(level, category) {
    const levelData = roadmapData[level];
    if (!levelData || !levelData.categories[category]) return false;
    
    const categorySkills = levelData.categories[category].skills;
    return categorySkills.every((_, index) => {
      const skillId = this.generateSkillId(level, category, index);
      return this.completedSkills.has(skillId);
    });
  }

  getSkillsCompletedToday() {
    const today = new Date().toDateString();
    return this.progressHistory.filter(entry => 
      entry.action === 'completed' && 
      new Date(entry.timestamp).toDateString() === today
    ).length;
  }

  showXPNotification(xp, skillName) {
    this.showNotification(`+${xp} XP`, `🎉 ¡Completaste "${skillName}"!`);
  }

  showLevelUpNotification(level) {
    this.showNotification(`¡Nivel ${level}!`, `🚀 ¡Has subido de nivel!`);
  }

  showBadgeNotification(badge) {
    this.showNotification(`${badge.icon} ${badge.name}`, `🏅 ¡Nueva insignia desbloqueada!`);
  }

  showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">🎉</span>
        <div>
          <div style="font-weight: 600;">${title}</div>
          <div style="font-size: 0.875rem;">${message}</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // ===========================================
  // GOALS SYSTEM
  // ===========================================
  showGoalsModal() {
    const modalHTML = `
      <div class="modal-overlay active">
        <div class="modal goals-modal">
          <div class="modal__header">
            <h3 class="modal__title">🎯 Mis Objetivos</h3>
            <button class="modal__close" aria-label="Cerrar modal">×</button>
          </div>
          <div class="modal__content">
            ${this.renderGamificationHeader()}
            
            <div class="profile-section">
              <h4>📈 Objetivos Activos</h4>
              <div id="goalsList">
                ${this.renderGoalsList()}
              </div>
              <button class="sync-btn primary" onclick="roadmapApp.showCreateGoalForm()">➕ Crear Nuevo Objetivo</button>
            </div>
            
            <div class="profile-section">
              <h4>🏅 Insignias</h4>
              <div class="badges-container">
                ${this.renderBadges()}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.currentModal = document.querySelector('.modal-overlay:last-child');
    document.body.style.overflow = 'hidden';
  }

  renderGamificationHeader() {
    const xpForCurrentLevel = (this.gamificationData.level - 1) * 100;
    const xpForNextLevel = this.gamificationData.level * 100;
    const xpProgress = ((this.gamificationData.xp - xpForCurrentLevel) / 100) * 100;
    
    return `
      <div class="gamification-header">
        <div class="xp-system">
          <div class="level-badge">Nivel ${this.gamificationData.level}</div>
          <div class="xp-bar">
            <div class="xp-fill" style="width: ${xpProgress}%"></div>
          </div>
          <div style="color: rgba(255,255,255,0.9); font-size: 0.875rem;">
            ${this.gamificationData.xp} / ${xpForNextLevel} XP
          </div>
        </div>
        
        <div class="streak-counter">
          <span>🔥</span>
          <span class="streak-number">${this.gamificationData.streak}</span>
          <span>días consecutivos</span>
        </div>
      </div>
    `;
  }

  renderGoalsList() {
    if (this.goals.length === 0) {
      return '<p style="text-align: center; color: var(--text-secondary); padding: var(--spacing-lg);">No tienes objetivos creados aún</p>';
    }
    
    return this.goals.map(goal => {
      const progress = this.calculateGoalProgress(goal);
      const deadline = new Date(goal.deadline);
      const isOverdue = deadline < new Date() && goal.status !== 'completed';
      
      return `
        <div class="goal-item">
          <div class="goal-header">
            <h5 class="goal-title">${goal.title}</h5>
            <span class="goal-status ${goal.status}">${goal.status === 'active' ? 'Activo' : 'Completado'}</span>
          </div>
          <p style="color: var(--text-secondary); margin-bottom: var(--spacing-sm);">${goal.description}</p>
          
          <div class="goal-progress">
            <div class="goal-progress-bar">
              <div class="goal-progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="goal-progress-text">${progress}% completado</div>
          </div>
          
          <div class="goal-deadline ${isOverdue ? 'overdue' : ''}">
            <span>📅</span>
            <span>Fecha límite: ${deadline.toLocaleDateString()}</span>
            ${isOverdue ? '<span style="color: var(--error);">⚠️ Vencido</span>' : ''}
          </div>
          
          <div class="goal-actions">
            <button class="goal-btn secondary" onclick="roadmapApp.editGoal('${goal.id}')">✏️ Editar</button>
            <button class="goal-btn secondary" onclick="roadmapApp.deleteGoal('${goal.id}')" style="color: var(--error); border-color: var(--error);">🗑️ Eliminar</button>
          </div>
        </div>
      `;
    }).join('');
  }

  renderBadges() {
    const allBadges = this.getAvailableBadges();
    
    return allBadges.map(badge => {
      const earned = this.gamificationData.badges.includes(badge.id);
      return `
        <div class="badge ${earned ? 'earned' : ''}">
          <div class="badge-icon">${earned ? badge.icon : '🔒'}</div>
          <div class="badge-name">${badge.name}</div>
          <div class="badge-description">${badge.description}</div>
        </div>
      `;
    }).join('');
  }

  createGoal(goalData) {
    const goal = {
      id: Date.now().toString(),
      ...goalData,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    this.goals.push(goal);
    this.saveGoals();
    this.addToHistory('goal_created', goal.title);
  }

  calculateGoalProgress(goal) {
    switch (goal.type) {
      case 'skills_count':
        return Math.min(100, (this.completedSkills.size / goal.target) * 100);
      case 'level_completion':
        const levelProgress = this.getLevelProgress(goal.level);
        return levelProgress;
      case 'category_completion':
        const categorySkills = this.getCategorySkills(goal.level, goal.category);
        const completedInCategory = categorySkills.filter(skillId => 
          this.completedSkills.has(skillId)).length;
        return Math.min(100, (completedInCategory / categorySkills.length) * 100);
      case 'streak':
        return Math.min(100, (this.gamificationData.streak / goal.target) * 100);
      default:
        return 0;
    }
  }

  checkGoalProgress() {
    this.goals.forEach(goal => {
      if (goal.status === 'active') {
        const progress = this.calculateGoalProgress(goal);
        if (progress >= 100) {
          goal.status = 'completed';
          goal.completedAt = new Date().toISOString();
          this.showNotification(`🎯 ¡Objetivo completado!`, goal.title);
          this.addToHistory('goal_completed', goal.title);
        }
      }
    });
    this.saveGoals();
  }

  getLevelProgress(levelKey) {
    const levelSkills = this.getLevelSkills(levelKey);
    const completedInLevel = levelSkills.filter(skillId => 
      this.completedSkills.has(skillId)).length;
    return Math.min(100, (completedInLevel / levelSkills.length) * 100);
  }

  getCategorySkills(level, category) {
    const skills = [];
    if (roadmapData[level] && roadmapData[level].categories[category]) {
      roadmapData[level].categories[category].skills.forEach((_, index) => {
        skills.push(this.generateSkillId(level, category, index));
      });
    }
    return skills;
  }

  showCreateGoalForm() {
    // Implementation for goal creation form would go here
    // For now, create a sample goal
    const goalData = {
      title: 'Completar 50 skills',
      description: 'Meta de completar 50 habilidades en el roadmap',
      type: 'skills_count',
      target: 50,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
    };
    
    this.createGoal(goalData);
    this.showGoalsModal(); // Refresh the modal
  }

  editGoal(goalId) {
    // Implementation for goal editing would go here
    console.log('Edit goal:', goalId);
  }

  deleteGoal(goalId) {
    if (confirm('¿Estás seguro de que quieres eliminar este objetivo?')) {
      this.goals = this.goals.filter(goal => goal.id !== goalId);
      this.saveGoals();
      this.showGoalsModal(); // Refresh the modal
    }
  }

  // ===========================================
  // PWA NOTIFICATIONS
  // ===========================================
  scheduleProgressNotifications() {
    if ('Notification' in window && Notification.permission === 'granted') {
      // Notificación diaria para mantener la racha
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(19, 0, 0, 0); // 7 PM del día siguiente
      
      const timeUntilNotification = tomorrow.getTime() - now.getTime();
      
      setTimeout(() => {
        this.sendProgressNotification();
        // Programar para el día siguiente
        setInterval(() => {
          this.sendProgressNotification();
        }, 24 * 60 * 60 * 1000); // Cada 24 horas
      }, timeUntilNotification);
    }
  }

  sendProgressNotification() {
    const completedToday = this.getSkillsCompletedToday();
    const totalCompleted = this.completedSkills.size;
    
    let message = '';
    let title = 'Frontend Roadmap 2025';
    
    if (completedToday === 0) {
      message = `¡No olvides mantener tu racha! Tienes ${this.gamificationData.streak} días consecutivos.`;
      title = '🔥 ¡Mantén tu racha!';
    } else {
      message = `¡Excelente! Has completado ${completedToday} skills hoy. Total: ${totalCompleted}`;
      title = '🎉 ¡Gran progreso!';
    }
    
    new Notification(title, {
      body: message,
      icon: '/code.svg',
      badge: '/vite.svg',
      vibrate: [200, 100, 200],
      tag: 'progress-update',
      renotify: true,
      data: {
        url: '/',
        action: 'open-app'
      }
    });
  }

  // Inicializar notificaciones cuando se carga la app
  initializeNotifications() {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        this.scheduleProgressNotifications();
      } else if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            this.scheduleProgressNotifications();
          }
        });
      }
    }
  }
}

// ===========================================
// APPLICATION INITIALIZATION
// ===========================================
let roadmapApp;

document.addEventListener('DOMContentLoaded', () => {
  roadmapApp = new RoadmapApp();
  window.roadmapApp = roadmapApp; // Make it globally accessible
  
  // Registrar Service Worker para PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registrado con éxito:', registration.scope);
          
          // Solicitar permisos para notificaciones
          if ('Notification' in window && 'PushManager' in window) {
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                console.log('Permisos de notificación concedidos');
              }
            });
          }
        })
        .catch(error => {
          console.log('SW falló al registrarse:', error);
        });
    });
  }
  
  // Detectar instalación de PWA
  let deferredPrompt;
  let installButton;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event fired');
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar botón de instalación personalizado
    installButton = document.createElement('button');
    installButton.textContent = '📱 Instalar App';
    installButton.className = 'sync-btn primary';
    installButton.id = 'pwa-install-button';
    installButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      box-shadow: var(--shadow-lg);
      animation: pulse 2s infinite;
    `;
    
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        console.log('Showing install prompt');
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('User choice:', outcome);
        if (outcome === 'accepted') {
          console.log('Usuario instaló la PWA');
          roadmapApp.showNotification('¡Instalación exitosa!', '📱 App instalada correctamente');
        } else {
          console.log('Usuario canceló la instalación');
        }
        deferredPrompt = null;
        installButton.remove();
      }
    });
    
    document.body.appendChild(installButton);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (installButton && installButton.parentNode) {
        installButton.style.opacity = '0.7';
      }
    }, 10000);
  });
  
  // Ocultar botón cuando se instale
  window.addEventListener('appinstalled', (e) => {
    console.log('PWA instalada con éxito', e);
    if (installButton && installButton.parentNode) {
      installButton.remove();
    }
    roadmapApp.showNotification('¡Bienvenido!', '🎉 La app está lista para usar offline');
  });
  
  // Detectar si ya está instalada
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App ya está ejecutándose como PWA');
  }
});
