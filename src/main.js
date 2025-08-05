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
    this.init();
  }

  init() {
    this.renderRoadmap();
    this.updateOverallProgress();
    this.setupEventListeners();
    this.setupFilterListeners();
    this.observeAnimations();
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
    } else {
      this.completedSkills.add(skillId);
      this.addToHistory('completed', skillName);
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
    
    const modalHTML = `
      <div class="modal-overlay active">
        <div class="modal profile-modal">
          <div class="modal__header">
            <h3 class="modal__title">👤 Mi Perfil</h3>
            <button class="modal__close" aria-label="Cerrar modal">×</button>
          </div>
          <div class="modal__content">
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
                  <input type="email" id="profileEmail" class="form-input" value="${this.userProfile.email}" placeholder="tu@email.com">
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
}

// ===========================================
// APPLICATION INITIALIZATION
// ===========================================
let roadmapApp;

document.addEventListener('DOMContentLoaded', () => {
  roadmapApp = new RoadmapApp();
  window.roadmapApp = roadmapApp; // Make it globally accessible
});

// ===========================================
// SERVICE WORKER REGISTRATION (PWA)
// ===========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
