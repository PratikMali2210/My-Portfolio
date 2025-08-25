// Portfolio App JavaScript
class PortfolioApp {
    constructor() {
        this.data = {
            "personal": {
                "name": "Pratik Mali",
                "title": "IVR & Genesys Cloud Bot Developer",
                "location": "Pune, Maharashtra, India",
                "email": "malipratik999@gmail.com",
                "phone": "+91 7066889505",
                "linkedin": "https://www.linkedin.com/in/pratik-mali-06b172228/",
                "github": "https://github.com/PratikMali2210",
                "credly": "https://www.credly.com/users/pratik-mali",
                "profile": "Results-driven IVR and Contact Center Specialist with over 3 years of experience specializing in Genesys Cloud CX and NICE CXone platforms. Adept at designing and implementing self-service IVR, Omni-Channel Orchestration Routing, and architecting advanced bot flows.",
                "photo": "./assets/Pratik-Mali-Photo.jpeg",
                "photopng": "./assets/Pratik-Mali-Photo.png",
                "resume": "./assets/Pratik-Mali-Resume.pdf"
            },
            "experience": [
                {
                    "title": "NICE CXone & IVR Specialist",
                    "company": "Capgemini Digital",
                    "project": "Chubb Life Indonesia",
                    "duration": "Oct 2024 - July 2025",
                    "responsibilities": [
                        "Designed reusable config-driven IVR architecture for flexible input and routing",
                        "Implemented ANI-based data dips to fetch customer-specific data from backend APIs",
                        "Created agent screen pop features for MS Dynamics (both embedded and external)",
                        "Developed TokenEx (S6) and CRS Payment IVR flows for PCI-compliant transactions",
                        "Enabled marquee messaging on agent desktops for dynamic alert communication",
                        "Configured Personal Connection (PC) outbound campaigns using Agentless, Progressive, and Predictive dialer modes"
                    ]
                },
                {
                    "title": "Genesys Cloud & IVR Specialist",
                    "company": "Capgemini Digital",
                    "duration": "Oct 2023 - May 2025",
                    "responsibilities": [
                        "Designed advanced IVR flows in Genesys Architect for self-service, speech-based routing, and customer treatment strategies",
                        "Integrated Salesforce with Genesys Cloud to enhance data sync and personalize engagement",
                        "Developed and maintained omni-channel bot solutions (voice/non-voice) using Genesys Architect",
                        "Enabled API-driven integrations for dynamic caller identification and backend data dips"
                    ]
                },
                {
                    "title": "Technical Support Engineer",
                    "company": "Discover Account (Support Role)",
                    "duration": "Feb - Oct 2023",
                    "responsibilities": [
                        "Provided technical support with SQL and UNIX systems to troubleshoot and optimize system performance",
                        "Assisted backend teams by resolving system issues, ensuring 99%+ operational uptime"
                    ]
                }
            ],
            "projects": [
                {
                    "title": "Movix - Movie & TV Show App",
                    "description": "Modern React application for browsing movies and TV shows with advanced search, filtering, and detailed information views. Features responsive design and smooth user experience.",
                    "technologies": ["React", "Redux Toolkit", "React Router", "API Integration", "CSS3"],
                    "github": "https://github.com/PratikMali2210/pratik-mali-movix-new-app",
                    "demo": "https://pratik-mali-movix-new-app.netlify.app/",
                    "category": "react frontend",
                    "highlights": ["Movie/TV Show Database", "Search & Filter", "Responsive Design", "API Integration"]
                },
                {
                    "title": "E-Commerce Platform",
                    "description": "Full-featured e-commerce web application with product catalog, shopping cart functionality, user authentication, and modern responsive design.",
                    "technologies": ["React", "JavaScript", "CSS3", "E-commerce Features", "Responsive Design"],
                    "github": "https://github.com/PratikMali2210/e-commerce-site-delay",
                    "demo": "https://e-commerce-site-delay.netlify.app/",
                    "category": "react ecommerce",
                    "highlights": ["Product Catalog", "Shopping Cart", "User Authentication", "Payment Integration"]
                },
                {
                    "title": "Genesys Messenger Integration",
                    "description": "Contact center messaging solution showcasing Genesys Cloud platform integration expertise. Demonstrates real-world application of contact center technologies.",
                    "technologies": ["JavaScript", "Genesys Cloud SDK", "Real-time Messaging", "Contact Center Integration"],
                    "github": "https://github.com/PratikMali2210/genesysmessenger",
                    "demo": "https://genesysmessenger.netlify.app/",
                    "category": "genesys integration",
                    "highlights": ["Genesys Cloud Integration", "Real-time Messaging", "Contact Center SDK", "Professional Implementation"]
                }
            ],
            "skills": {
                "contactCenter": [
                    {"name": "NICE CXone", "level": 95},
                    {"name": "Genesys Cloud", "level": 95},
                    {"name": "IVR Flow Creation", "level": 95},
                    {"name": "Chat Bot Development", "level": 88},
                    {"name": "Kore AI XO11", "level": 85}
                ],
                "programming": [
                    {"name": "JavaScript", "level": 85},
                    {"name": "Java", "level": 80},
                    {"name": "SQL", "level": 85},
                    {"name": "API Development", "level": 90}
                ],
                "cloud": [
                    {"name": "AWS", "level": 75},
                    {"name": "Azure", "level": 70},
                    {"name": "Salesforce", "level": 85}
                ],
                "frameworks": [
                    {"name": "ReactJS", "level": 80},
                    {"name": "AngularJS", "level": 78},
                    {"name": "HTML5/CSS3", "level": 90},
                    {"name": "Redux Toolkit", "level": 70}
                ]
            },
            "certifications": [
                {
                    "id": "nice",
                    "title": "NICE Certified Implementation Engineer",
                    "subtitle": "CXone Mpower ACD/IVR",
                    "provider": "NICE",
                    "verified": true,
                    "skills": ["IVR Configuration", "ACD Management", "CXone Platform", "Contact Center Solutions"]
                },
                {
                    "id": "aws-cp",
                    "title": "AWS Certified Cloud Practitioner",
                    "provider": "Amazon Web Services",
                    "verified": true,
                    "verifyLink": "https://www.credly.com/badges/f72b1c89-bee9-46df-b820-e288dfd3b4c7/linked_in_profile",
                    "skills": ["Cloud Fundamentals", "AWS Services", "Security & Compliance", "Billing Models"]
                },
                {
                    "id": "aws-sa",
                    "title": "AWS Certified Solutions Architect",
                    "subtitle": "Associate",
                    "provider": "Amazon Web Services",
                    "verified": true,
                    "verifyLink": "https://www.credly.com/badges/d7ea00f9-e857-4e6e-8dec-70740497bd4b/linked_in_profile",
                    "skills": ["Architecture Design", "High Performance", "Cost Optimization", "Resilient Systems"]
                },
                {
                    "id": "azure",
                    "title": "Microsoft Azure Fundamentals",
                    "provider": "Microsoft",
                    "verified": true,
                    "skills": ["Azure Services", "Cloud Concepts", "Security Features", "Pricing Models"]
                },
                {
                    "id": "java",
                    "title": "Java OOPs",
                    "provider": "HackerRank",
                    "skills": ["Object-Oriented Programming", "Java Development", "Code Proficiency"]
                },
                {
                    "id": "angular",
                    "title": "Angular",
                    "provider": "HackerRank",
                    "skills": ["Frontend Framework", "Component Development", "TypeScript"]
                },
                {
                    "id": "java-ds",
                    "title": "Data Structures and Algorithms with Java",
                    "provider": "Udemy",
                    "skills": ["Algorithm Design", "Data Structures", "Problem Solving", "Java Programming"]
                }
            ]
        };

        this.typingPhrases = [
            "IVR & Contact Center Specialist",
            "Genesys Cloud Expert",
            "NICE CXone Developer", 
            "Bot Flow Architect",
            "Omni-Channel Solutions Developer",
            "API Integration Specialist"
        ];

        this.currentPhraseIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        this.setupEventListeners();
        this.populateSkills();
        this.populateExperience();
        this.populateProjects();
        this.populateCertifications();
        this.startTypingAnimation();
        this.setupScrollAnimations();
        this.setupThemeToggle();
        this.handleNavbarScroll();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupModalHandlers();
        this.setupContactForm();
    }

    setupEventListeners() {
        // Scroll events
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
            this.animateOnScroll();
        });

        // Resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Keyboard events for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Close mobile menu if open
                const mobileMenu = document.getElementById('nav-links');
                const menuToggle = document.getElementById('mobile-menu-toggle');
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            });
        });
    }

    setupMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('nav-links');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                menuToggle.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        }
    }

    handleNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    startTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        const currentPhrase = this.typingPhrases[this.currentPhraseIndex];
        
        if (!this.isDeleting) {
            // Typing
            typingElement.textContent = currentPhrase.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentPhrase.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.startTypingAnimation();
                }, this.pauseTime);
                return;
            }
            
            setTimeout(() => this.startTypingAnimation(), this.typingSpeed);
        } else {
            // Deleting
            typingElement.textContent = currentPhrase.substring(0, this.currentCharIndex);
            this.currentCharIndex--;
            
            if (this.currentCharIndex < 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.typingPhrases.length;
                setTimeout(() => this.startTypingAnimation(), 500);
                return;
            }
            
            setTimeout(() => this.startTypingAnimation(), this.deletingSpeed);
        }
    }

    populateSkills() {
        Object.keys(this.data.skills).forEach(category => {
            const skillsContainer = document.querySelector(`[data-category="${category}"]`);
            if (!skillsContainer) return;

            this.data.skills[category].forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                skillElement.innerHTML = `
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.level}"></div>
                    </div>
                `;
                skillsContainer.appendChild(skillElement);
            });
        });
    }

    populateExperience() {
        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        this.data.experience.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            const responsibilities = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
            
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content" data-index="${index}">
                    <div class="experience-header">
                        <h3 class="experience-title">${exp.title}</h3>
                        <div class="experience-company">${exp.company}${exp.project ? ` - ${exp.project}` : ''}</div>
                        <div class="experience-duration">${exp.duration}</div>
                    </div>
                    <div class="experience-responsibilities">
                        <ul>${responsibilities}</ul>
                    </div>
                    <div class="expand-indicator">
                        <span>Click to expand details</span>
                        <span class="expand-arrow">▼</span>
                    </div>
                </div>
            `;

            // Add click handler for expansion
            const content = timelineItem.querySelector('.timeline-content');
            content.addEventListener('click', () => {
                content.classList.toggle('expanded');
                const responsibilities = content.querySelector('.experience-responsibilities');
                responsibilities.classList.toggle('expanded');
                
                const indicator = content.querySelector('.expand-indicator span');
                indicator.textContent = content.classList.contains('expanded') ? 
                    'Click to collapse' : 'Click to expand details';
            });

            timeline.appendChild(timelineItem);
        });
    }

    populateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        this.data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);

            const technologies = project.technologies.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');

            const highlights = project.highlights.map(highlight => 
                `<div class="highlight-item">${highlight}</div>`
            ).join('');

            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">${technologies}</div>
                    <div class="project-highlights">
                        <h4>Key Features</h4>
                        <div class="highlights-list">${highlights}</div>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                        <a href="${project.demo}" target="_blank" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15,3 21,3 21,9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            Live Demo
                        </a>
                    </div>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });

        this.setupProjectFilters();
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    }

    populateCertifications() {
        const certificationsGrid = document.getElementById('certifications-grid');
        if (!certificationsGrid) return;

        this.data.certifications.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'cert-card';

            const skills = cert.skills.map(skill => 
                `<span class="cert-skill">${skill}</span>`
            ).join('');

            const verifiedBadge = cert.verified ? 
                '<div class="cert-verified">✓ Verified</div>' : '';

            certCard.innerHTML = `
                ${verifiedBadge}
                <div class="cert-badge">🏆</div>
                <h3 class="cert-title">${cert.title}</h3>
                ${cert.subtitle ? `<div class="cert-subtitle">${cert.subtitle}</div>` : ''}
                <div class="cert-provider">${cert.provider}</div>
                <div class="cert-skills">${skills}</div>
            `;

            // Add click handler for modal
            certCard.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showCertificationModal(cert);
            });

            certificationsGrid.appendChild(certCard);
        });
    }

    showCertificationModal(cert) {
        const modal = document.getElementById('cert-modal');
        const title = document.getElementById('cert-modal-title');
        const body = document.getElementById('cert-modal-body');

        if (!modal || !title || !body) return;

        title.textContent = cert.title;
        
        const skills = cert.skills.map(skill => 
            `<span class="cert-skill">${skill}</span>`
        ).join('');

        const verifyButton = cert.verifyLink ? 
            `<a href="${cert.verifyLink}" target="_blank" class="btn btn--primary" style="margin-top: 16px;">
                Verify Certification
            </a>` : '';

        body.innerHTML = `
            <div class="cert-details">
                <div class="cert-info">
                    <p><strong>Provider:</strong> ${cert.provider}</p>
                    ${cert.subtitle ? `<p><strong>Level:</strong> ${cert.subtitle}</p>` : ''}
                    <p><strong>Status:</strong> ${cert.verified ? 
                        '<span style="color: var(--color-success)">✓ Verified</span>' : 
                        'Issued'}</p>
                </div>
                <div class="cert-skills-section">
                    <h4>Skills Covered:</h4>
                    <div class="cert-skills">${skills}</div>
                </div>
                ${verifyButton}
            </div>
        `;

        modal.classList.remove('hidden');
    }

    setupModalHandlers() {
        // Tutorial modal
        const tutorialBtn = document.getElementById('tutorial-btn');
        const tutorialModal = document.getElementById('tutorial-modal');
        const closeTutorial = document.getElementById('close-tutorial');

        if (tutorialBtn && tutorialModal) {
            tutorialBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                tutorialModal.classList.remove('hidden');
            });
        }

        if (closeTutorial && tutorialModal) {
            closeTutorial.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                tutorialModal.classList.add('hidden');
            });
        }

        // Certification modal
        const certModal = document.getElementById('cert-modal');
        const closeCertModal = document.getElementById('close-cert-modal');

        if (closeCertModal && certModal) {
            closeCertModal.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                certModal.classList.add('hidden');
            });
        }

        // Close modals when clicking backdrop
        const modals = [tutorialModal, certModal].filter(modal => modal);
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal-backdrop') || 
                    e.target.classList.contains('modal')) {
                    modal.classList.add('hidden');
                }
            });
        });
    }

    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            if (submitBtn) submitBtn.classList.add('loading');
            if (btnLoading) btnLoading.classList.add('show');
            
            try {
                // Simulate form submission (multiple fallback methods)
                await this.submitContactForm(data);
                this.showFormMessage('success', 'Message sent successfully! I\'ll get back to you soon.');
                form.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                this.showFormMessage('error', 'Failed to send message. Please try emailing me directly at malipratik999@gmail.com');
            } finally {
                // Reset button state
                if (submitBtn) submitBtn.classList.remove('loading');
                if (btnLoading) btnLoading.classList.remove('show');
            }
        });
    }

    async submitContactForm(data) {
        // Create mailto link as primary method for demo
        const subject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        
        window.open(`mailto:malipratik999@gmail.com?subject=${subject}&body=${body}`, '_blank');
        
        // Simulate successful submission
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }

    showFormMessage(type, message) {
        // Remove existing messages
        const existingMessage = document.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.textContent = message;

        const form = document.getElementById('contact-form');
        if (form) {
            form.appendChild(messageDiv);

            // Auto-remove message after 5 seconds
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 5000);
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');
        
        if (!themeToggle || !themeIcon) return;

        // Check for saved theme preference (don't use localStorage in sandbox)
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Animate skill bars when skills section is visible
                    if (entry.target.id === 'skills') {
                        this.animateSkillBars();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Observe individual elements
        const elements = document.querySelectorAll('.card, .project-card, .cert-card, .timeline-item');
        elements.forEach(element => {
            observer.observe(element);
        });
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
            }, index * 100);
        });
    }

    animateOnScroll() {
        // Add parallax effect to hero section
        const hero = document.querySelector('.hero');
        if (hero && window.scrollY < window.innerHeight) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    handleResize() {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            const mobileMenu = document.getElementById('nav-links');
            const menuToggle = document.getElementById('mobile-menu-toggle');
            
            if (mobileMenu) mobileMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    }
}

// Initialize the portfolio app
const portfolioApp = new PortfolioApp();
portfolioApp.init();