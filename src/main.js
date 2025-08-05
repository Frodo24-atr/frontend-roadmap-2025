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
            resources: ["Grid Garden Game", "CSS Grid Complete Guide", "Grid vs Flexbox"]
          },
          {
            name: "Responsive Design",
            description: "Crea sitios adaptativos con media queries, mobile-first approach y breakpoints.",
            resources: ["Responsive Design Patterns", "Media Queries", "Mobile First Design"]
          },
          {
            name: "CSS Custom Properties",
            description: "Utiliza variables CSS para theming dinámico y mantenimiento eficiente.",
            resources: ["CSS Variables", "Dynamic Theming", "CSS Custom Properties"]
          },
          {
            name: "Animaciones CSS",
            description: "Crea animaciones fluidas con transitions, transforms y keyframes.",
            resources: ["CSS Animations", "Performance Optimization", "Animation Libraries"]
          },
          {
            name: "Sass/SCSS",
            description: "Aprende preprocesadores CSS para código más mantenible y organizado.",
            resources: ["Sass Documentation", "SCSS vs Sass", "Sass Best Practices"]
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
            resources: ["ES6 Features", "Modern JavaScript", "Module Systems"]
          },
          {
            name: "Programación Asíncrona",
            description: "Aprende Promises, async/await y manejo de APIs con fetch.",
            resources: ["Promise Tutorial", "Async/Await Guide", "API Integration"]
          },
          {
            name: "Array Methods Avanzados",
            description: "Utiliza map, filter, reduce, find y otros métodos funcionales.",
            resources: ["Functional Programming", "Array Methods", "Data Transformation"]
          },
          {
            name: "OOP en JavaScript",
            description: "Comprende clases, herencia, prototipos y patrones de diseño.",
            resources: ["JavaScript Classes", "Prototype Chain", "Design Patterns"]
          },
          {
            name: "Error Handling",
            description: "Implementa manejo robusto de errores con try/catch y debugging avanzado.",
            resources: ["Error Handling", "Debugging Strategies", "Testing Basics"]
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
            resources: ["React Documentation", "Create React App", "React Hooks"]
          },
          {
            name: "Vue.js Basics",
            description: "Comprende la sintaxis de Vue, directivas, computed properties y componentes.",
            resources: ["Vue.js Guide", "Vue CLI", "Composition API"]
          },
          {
            name: "State Management",
            description: "Maneja estado global con Context API, Redux o Vuex según el framework.",
            resources: ["Redux Toolkit", "Context API", "State Patterns"]
          },
          {
            name: "Router",
            description: "Implementa navegación SPA con React Router o Vue Router.",
            resources: ["React Router", "Vue Router", "Navigation Patterns"]
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
            resources: ["NPM Documentation", "Package.json Guide", "Dependency Management"]
          },
          {
            name: "Webpack Basics",
            description: "Configura bundling básico, loaders y plugins esenciales.",
            resources: ["Webpack Getting Started", "Webpack Config", "Bundle Optimization"]
          },
          {
            name: "Vite",
            description: "Utiliza Vite para desarrollo rápido y build optimizado.",
            resources: ["Vite Guide", "Fast Development", "Build Optimization"]
          },
          {
            name: "ESLint & Prettier",
            description: "Configura linting y formatting automático para código consistente.",
            resources: ["ESLint Configuration", "Prettier Setup", "Code Quality"]
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
            resources: ["Web Vitals Guide", "Performance Metrics", "Lighthouse Optimization"]
          },
          {
            name: "Bundle Optimization",
            description: "Implementa code splitting, tree shaking y lazy loading para reducir bundle size.",
            resources: ["Code Splitting", "Tree Shaking", "Bundle Analysis"]
          },
          {
            name: "Image Optimization",
            description: "Optimiza imágenes con formatos modernos, lazy loading y responsive images.",
            resources: ["Image Optimization", "WebP Format", "Responsive Images"]
          },
          {
            name: "Caching Strategies",
            description: "Implementa estrategias de cache: browser cache, CDN, service workers.",
            resources: ["Caching Strategies", "Service Workers", "PWA Caching"]
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
            resources: ["Jest Documentation", "Testing Best Practices", "Test Coverage"]
          },
          {
            name: "Integration Testing",
            description: "Implementa tests de integración para componentes y APIs.",
            resources: ["Integration Testing", "API Testing", "Component Testing"]
          },
          {
            name: "E2E Testing",
            description: "Automatiza testing end-to-end con Cypress o Playwright.",
            resources: ["Cypress Tutorial", "Playwright Guide", "E2E Best Practices"]
          },
          {
            name: "Visual Testing",
            description: "Implementa testing visual para detectar cambios de UI no deseados.",
            resources: ["Visual Testing", "Storybook", "Screenshot Testing"]
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
            resources: ["Frontend Patterns", "Component Patterns", "State Patterns"]
          },
          {
            name: "Micro-frontends",
            description: "Arquitectura de micro-frontends para aplicaciones escalables.",
            resources: ["Micro-frontend Architecture", "Module Federation", "Scalable Apps"]
          },
          {
            name: "Monorepos",
            description: "Gestiona proyectos grandes con monorepos usando Lerna, Nx o similares.",
            resources: ["Monorepo Tools", "Workspace Management", "Shared Libraries"]
          },
          {
            name: "API Design",
            description: "Diseña e integra APIs REST y GraphQL eficientemente.",
            resources: ["API Best Practices", "GraphQL", "API Integration"]
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
            resources: ["XSS Prevention", "CSP Implementation", "Security Headers"]
          },
          {
            name: "Authentication",
            description: "Implementa autenticación segura con JWT, OAuth y mejores prácticas.",
            resources: ["JWT Implementation", "OAuth Flows", "Auth Security"]
          },
          {
            name: "HTTPS & Certificates",
            description: "Configura HTTPS, SSL/TLS y certificados para comunicación segura.",
            resources: ["HTTPS Setup", "SSL Certificates", "Security Best Practices"]
          },
          {
            name: "Dependency Security",
            description: "Audita y mantiene dependencias seguras con herramientas de análisis.",
            resources: ["Dependency Auditing", "Security Scanning", "Vulnerability Management"]
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
            resources: ["Code Review Best Practices", "Mentoring Guide", "Technical Standards"]
          },
          {
            name: "Architecture Decisions",
            description: "Toma decisiones arquitectónicas informadas y documenta ADRs.",
            resources: ["Architecture Decision Records", "Technical Decision Making", "System Design"]
          },
          {
            name: "Team Collaboration",
            description: "Facilita colaboración efectiva entre equipos frontend, backend y design.",
            resources: ["Cross-team Collaboration", "Communication Skills", "Agile Practices"]
          },
          {
            name: "Knowledge Sharing",
            description: "Establece procesos de documentación y sharing de conocimiento técnico.",
            resources: ["Documentation Standards", "Knowledge Management", "Tech Talks"]
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
            resources: ["GitHub Actions", "GitLab CI", "Jenkins", "Deployment Automation"]
          },
          {
            name: "Cloud Platforms",
            description: "Deploya aplicaciones en AWS, Azure, GCP con mejores prácticas.",
            resources: ["AWS Frontend", "Azure Static Apps", "GCP Hosting", "CDN Configuration"]
          },
          {
            name: "Monitoring & Analytics",
            description: "Implementa monitoring de performance, error tracking y analytics.",
            resources: ["Error Tracking", "Performance Monitoring", "User Analytics", "Observability"]
          },
          {
            name: "Infrastructure as Code",
            description: "Gestiona infraestructura con Terraform, CloudFormation o similares.",
            resources: ["Terraform", "Infrastructure Automation", "Cloud Architecture"]
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
            resources: ["WebAssembly Tutorial", "WASM Integration", "Performance Optimization"]
          },
          {
            name: "AI/ML Integration",
            description: "Integra modelos de ML en frontend con TensorFlow.js u otras herramientas.",
            resources: ["TensorFlow.js", "ML in Browser", "AI Integration"]
          },
          {
            name: "Web3 & Blockchain",
            description: "Desarrolla dApps con Web3.js, ethers.js y wallets integration.",
            resources: ["Web3 Development", "Ethereum Integration", "DApp Architecture"]
          },
          {
            name: "IoT & Edge Computing",
            description: "Conecta aplicaciones web con dispositivos IoT y edge computing.",
            resources: ["IoT Integration", "Edge Computing", "Real-time Data"]
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
            resources: ["Tech Strategy", "Business Alignment", "Product Development"]
          },
          {
            name: "Cost Optimization",
            description: "Optimiza costos de infraestructura, desarrollo y mantenimiento.",
            resources: ["Cost Management", "Resource Optimization", "ROI Analysis"]
          },
          {
            name: "Risk Assessment",
            description: "Evalúa riesgos técnicos, dependencias y planes de contingencia.",
            resources: ["Risk Management", "Technical Debt", "Mitigation Strategies"]
          },
          {
            name: "Innovation Management",
            description: "Balancea innovación técnica con estabilidad y delivery predecible.",
            resources: ["Innovation Frameworks", "Technology Adoption", "Change Management"]
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
    this.init();
  }

  init() {
    this.renderRoadmap();
    this.updateOverallProgress();
    this.setupEventListeners();
    this.observeAnimations();
  }

  loadProgress() {
    const saved = localStorage.getItem('frontend-roadmap-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  }

  saveProgress() {
    localStorage.setItem('frontend-roadmap-progress', 
      JSON.stringify([...this.completedSkills]));
  }

  generateSkillId(level, category, skillIndex) {
    return `${level}-${category}-${skillIndex}`;
  }

  isSkillCompleted(skillId) {
    return this.completedSkills.has(skillId);
  }

  toggleSkill(skillId) {
    if (this.completedSkills.has(skillId)) {
      this.completedSkills.delete(skillId);
    } else {
      this.completedSkills.add(skillId);
    }
    this.saveProgress();
    this.updateProgress();
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
    
    return `
      <li class="skill-item ${isCompleted ? 'completed' : ''}" data-skill-id="${skillId}">
        <input type="checkbox" 
               class="skill-checkbox" 
               ${isCompleted ? 'checked' : ''}
               data-skill-id="${skillId}">
        <span class="skill-name">${skill.name}</span>
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
document.addEventListener('DOMContentLoaded', () => {
  new RoadmapApp();
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
