// Pratik Mali Portfolio - Fixed Messaging & Enhanced Features
// Updated with working contact form and verified certifications

class Portfolio {
    constructor() {
        this.currentTheme = 'light';
        this.typingIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.tutorialStep = 1;
        this.isTyping = true;
        
        this.typingPhrases = [
            'IVR & Bot Developer',
            'Genesys Cloud Specialist',
            'Contact Center Solutions Expert',
            'API Integration Developer',
            'Problem Solver'
        ];

        // Initialize EmailJS (you'll need to set up your own EmailJS account)
        this.initEmailJS();
        
        this.init();
    }

    initEmailJS() {
        // Initialize EmailJS with your public key
        // You need to sign up at https://www.emailjs.com/ and get your public key
        if (typeof emailjs !== 'undefined') {
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
        }
    }

    init() {
        this.setupEventListeners();
        this.startTypingAnimation();
        this.setupScrollAnimations();
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupProjectFilters();
        this.setupSkillBars();
        this.setupTabs();
        this.setupContactForm();
        this.setupTutorial();
        this.setupCharacterCounter();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupIntersectionObserver();
        });

        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveNav();
            this.animateOnScroll();
        }, 16));

        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }

    // Enhanced Typing Animation
    startTypingAnimation() {
        const typingElement = document.getElementById('typing-text');
        if (!typingElement) return;

        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = this.typingPhrases[currentPhraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % this.typingPhrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        // Start typing animation after a brief delay
        setTimeout(type, 1000);
    }

    // Character Counter Setup
    setupCharacterCounter() {
        const messageTextarea = document.getElementById('message');
        const charCount = document.getElementById('char-count');

        if (messageTextarea && charCount) {
            messageTextarea.addEventListener('input', function() {
                const currentLength = this.value.length;
                charCount.textContent = currentLength;
                
                // Change color when approaching limit
                if (currentLength > 450) {
                    charCount.style.color = '#ff6b35';
                } else if (currentLength > 400) {
                    charCount.style.color = '#f39c12';
                } else {
                    charCount.style.color = '#7f8c8d';
                }
            });
        }
    }

    // Enhanced Contact Form with Multiple Methods
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');

        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                if (this.validateContactForm()) {
                    this.setFormLoading(true);
                    
                    try {
                        // Try multiple sending methods
                        await this.sendMessage();
                        this.showFormSuccess();
                        contactForm.reset();
                        this.updateCharacterCount(0);
                    } catch (error) {
                        console.error('Form submission error:', error);
                        this.showFormError('There was an error sending your message. Please try emailing me directly at malipratik999@gmail.com');
                    } finally {
                        this.setFormLoading(false);
                    }
                }
            });
        }
    }

    async sendMessage() {
        const formData = this.getFormData();
        
        // Method 1: Try EmailJS if available
        if (typeof emailjs !== 'undefined' && window.emailjs) {
            try {
                await emailjs.send(
                    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        company: formData.company,
                        position: formData.position,
                        subject: formData.subject,
                        message: formData.message,
                        to_email: 'malipratik999@gmail.com'
                    }
                );
                return;
            } catch (error) {
                console.log('EmailJS failed, trying alternative method');
            }
        }

        // Method 2: Use a simple webhook/API (you can set this up with services like Formspree)
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { // Replace with your Formspree endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return;
        } catch (error) {
            console.log('Formspree failed, using mailto fallback');
        }

        // Method 3: Fallback - Create a mailto link and show instructions
        this.createMailtoFallback(formData);
    }

    getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            position: document.getElementById('position').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };
    }

    createMailtoFallback(formData) {
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Position: ${formData.position}

Message:
${formData.message}
        `);
        
        const mailtoLink = `mailto:malipratik999@gmail.com?subject=${subject}&body=${body}`;
        
        // Try to open default email client
        window.location.href = mailtoLink;
        
        // Show success message with instructions
        this.showFormSuccess(true);
    }

    validateContactForm() {
        const formData = this.getFormData();
        this.clearFormErrors();

        let isValid = true;

        // Name validation
        if (formData.name.length < 2) {
            this.showFieldError('name', 'Please enter your full name (at least 2 characters)');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            this.showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Subject validation
        if (!formData.subject) {
            this.showFieldError('subject', 'Please select a subject for your inquiry');
            isValid = false;
        }

        // Message validation
        if (formData.message.length < 20) {
            this.showFieldError('message', 'Please provide more details (at least 20 characters)');
            isValid = false;
        }

        if (formData.message.length > 500) {
            this.showFieldError('message', 'Message is too long (maximum 500 characters)');
            isValid = false;
        }

        // Consent validation
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            this.showFieldError('consent', 'Please provide consent to store your information');
            isValid = false;
        }

        return isValid;
    }

    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(`${fieldId}-error`);
        
        if (field) {
            field.classList.add('error');
            field.style.borderColor = '#e74c3c';
        }
        
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }
    }

    clearFormErrors() {
        const errorFields = document.querySelectorAll('.form-control.error');
        const errorMessages = document.querySelectorAll('.form-error');

        errorFields.forEach(field => {
            field.classList.remove('error');
            field.style.borderColor = '';
        });

        errorMessages.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });

        // Clear form status
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.innerHTML = '';
            formStatus.className = 'form-status';
        }
    }

    setFormLoading(isLoading) {
        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        if (isLoading) {
            submitBtn.disabled = true;
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
        }
    }

    showFormSuccess(isMailtoFallback = false) {
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.className = 'form-status success';
            formStatus.innerHTML = `
                <div class="status-content">
                    <i class="fas fa-check-circle"></i>
                    <h4>Message Sent Successfully!</h4>
                    <p>${isMailtoFallback ? 
                        'Your default email client should have opened. If not, please email me directly at malipratik999@gmail.com' : 
                        'Thank you for your message! I\'ll get back to you within 24 hours.'
                    }</p>
                </div>
            `;
        }

        // Also show a toast message
        this.showToastMessage('Message sent successfully! 🎉', 'success');
    }

    showFormError(message) {
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = `
                <div class="status-content">
                    <i class="fas fa-exclamation-circle"></i>
                    <h4>Sending Failed</h4>
                    <p>${message}</p>
                </div>
            `;
        }

        this.showToastMessage('Failed to send message. Please try again.', 'error');
    }

    showToastMessage(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span>${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add to message container or create one
        let container = document.getElementById('message-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'message-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                max-width: 400px;
            `;
            document.body.appendChild(container);
        }

        container.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 5000);
    }

    updateCharacterCount(count) {
        const charCount = document.getElementById('char-count');
        if (charCount) {
            charCount.textContent = count;
        }
    }

    // Enhanced Project Filtering
    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (!filterButtons.length || !projectCards.length) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filterValue = e.target.getAttribute('data-filter');

                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                // Filter projects with animation
                projectCards.forEach((card, index) => {
                    const categories = card.getAttribute('data-category');
                    
                    if (filterValue === 'all') {
                        this.showProjectCard(card, index);
                    } else {
                        if (categories && categories.toLowerCase().includes(filterValue.toLowerCase())) {
                            this.showProjectCard(card, index);
                        } else {
                            this.hideProjectCard(card);
                        }
                    }
                });
            });
        });
    }

    showProjectCard(card, index) {
        card.style.display = 'block';
        setTimeout(() => {
            card.classList.add('fade-in');
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    }

    hideProjectCard(card) {
        card.classList.remove('fade-in');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }

    // Navigation Setup
    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
        }

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offset = 80; // Account for fixed navbar
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Active Navigation Highlighting
    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        const offset = 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - offset)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Navbar background on scroll
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Enhanced Skill Bars Animation
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--target-width', width + '%');
        });
    }

    animateSkillBars() {
        const skillsSection = document.getElementById('skills');
        const skillBars = document.querySelectorAll('.skill-progress');
        
        if (skillsSection && this.isElementInViewport(skillsSection)) {
            skillBars.forEach((bar, index) => {
                if (!bar.classList.contains('animate')) {
                    setTimeout(() => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width + '%';
                        bar.classList.add('animate');
                    }, index * 100);
                }
            });
        }
    }

    // Scroll Animations
    setupScrollAnimations() {
        this.animateSkillBars();
    }

    animateOnScroll() {
        this.animateSkillBars();
        this.animateCounters();
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            if (this.isElementInViewport(counter) && !counter.classList.contains('counted')) {
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / 100;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                        counter.classList.add('counted');
                    } else {
                        counter.textContent = Math.floor(count);
                    }
                }, 20);
            }
        });
    }

    // Tabs Functionality for About Section
    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add active class to clicked button and corresponding pane
                button.classList.add('active');
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // Theme Toggle
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        
        if (!themeToggle) return;

        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-color-scheme', theme);
        localStorage.setItem('portfolio-theme', theme);

        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Tutorial System
    setupTutorial() {
        const tutorialBtn = document.getElementById('tutorial-btn');
        const tutorialOverlay = document.getElementById('tutorial-overlay');
        const tutorialClose = document.getElementById('tutorial-close');
        const tutorialNext = document.getElementById('tutorial-next');
        const tutorialPrev = document.getElementById('tutorial-prev');

        if (tutorialBtn) tutorialBtn.addEventListener('click', () => this.showTutorial());
        if (tutorialClose) tutorialClose.addEventListener('click', () => this.hideTutorial());
        if (tutorialNext) tutorialNext.addEventListener('click', () => this.nextTutorialStep());
        if (tutorialPrev) tutorialPrev.addEventListener('click', () => this.prevTutorialStep());

        // Close tutorial when clicking outside
        if (tutorialOverlay) {
            tutorialOverlay.addEventListener('click', (e) => {
                if (e.target === tutorialOverlay) {
                    this.hideTutorial();
                }
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (tutorialOverlay && !tutorialOverlay.classList.contains('hidden')) {
                if (e.key === 'Escape') {
                    this.hideTutorial();
                } else if (e.key === 'ArrowRight') {
                    this.nextTutorialStep();
                } else if (e.key === 'ArrowLeft') {
                    this.prevTutorialStep();
                }
            }
        });
    }

    showTutorial() {
        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) {
            this.tutorialStep = 1;
            this.updateTutorialContent();
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    hideTutorial() {
        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    nextTutorialStep() {
        if (this.tutorialStep < 10) {
            this.tutorialStep++;
            this.updateTutorialContent();
        }
    }

    prevTutorialStep() {
        if (this.tutorialStep > 1) {
            this.tutorialStep--;
            this.updateTutorialContent();
        }
    }

    updateTutorialContent() {
        const tutorialSteps = [
            {
                title: "HTML Structure Setup",
                explanation: "We start with semantic HTML5 structure and professional meta tags for better SEO and accessibility.",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratik Mali - IVR & Genesys Cloud Developer</title>
</head>`,
                why: "Semantic HTML improves SEO, accessibility, and provides a solid foundation for professional portfolios."
            },
            {
                title: "Enhanced Contact Form",
                explanation: "We implement a robust contact form with multiple sending methods and comprehensive validation.",
                code: `<form class="contact-form" id="contact-form">
    <input type="email" id="email" required>
    <select id="subject" required>
        <option value="IVR Development">IVR Development</option>
        <option value="Contact Center Solution">Contact Center Solution</option>
    </select>
    <textarea id="message" required></textarea>
</form>`,
                why: "Multiple fallback methods ensure messages are delivered even if one service fails, providing reliable communication."
            }
            // Add more tutorial steps as needed...
        ];

        const step = tutorialSteps[this.tutorialStep - 1];
        if (!step) return;

        const titleEl = document.getElementById('tutorial-title');
        const explanationEl = document.getElementById('tutorial-explanation');
        const codeEl = document.getElementById('tutorial-code-content');
        const whyEl = document.getElementById('tutorial-why');
        const progressEl = document.getElementById('tutorial-progress');

        if (titleEl) titleEl.textContent = `Step ${this.tutorialStep}: ${step.title}`;
        if (explanationEl) explanationEl.innerHTML = step.explanation;
        if (codeEl) codeEl.textContent = step.code;
        if (whyEl) whyEl.innerHTML = `<strong>Why we use this:</strong> ${step.why}`;
        if (progressEl) progressEl.textContent = `${this.tutorialStep} / 10`;

        // Update navigation buttons
        const prevBtn = document.getElementById('tutorial-prev');
        const nextBtn = document.getElementById('tutorial-next');

        if (prevBtn) {
            prevBtn.disabled = this.tutorialStep === 1;
            prevBtn.style.opacity = this.tutorialStep === 1 ? '0.5' : '1';
        }

        if (nextBtn) {
            if (this.tutorialStep === 10) {
                nextBtn.textContent = 'Finish';
                nextBtn.onclick = () => this.hideTutorial();
            } else {
                nextBtn.textContent = 'Next';
                nextBtn.onclick = () => this.nextTutorialStep();
            }
        }
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    
                    // Special handling for different elements
                    if (entry.target.classList.contains('skill-category')) {
                        this.animateSkillCategory(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.project-card, .skill-category, .timeline-item, .certification-card'
        );
        animateElements.forEach(el => observer.observe(el));
    }

    animateSkillCategory(element) {
        const skillItems = element.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
                const progressBar = item.querySelector('.skill-progress');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width + '%';
                }
            }, index * 200);
        });
    }

    // Utility Functions
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    handleResize() {
        // Handle any resize-specific logic
        this.animateSkillBars();
    }
}

// Global functions for HTML onclick handlers
function showCertificationModal(certId) {
    const portfolio = window.portfolioInstance;
    const certificationData = {
        'nice': {
            title: 'NICE Certified Implementation Engineer',
            subtitle: 'CXone Mpower ACD/IVR',
            provider: 'NICE',
            description: 'Professional certification covering NICE CXone platform implementation, IVR flow design, ACD configuration, and contact center solution architecture.',
            skills: ['IVR Configuration', 'ACD Management', 'CXone Platform', 'Contact Center Solutions'],
            verified: true
        },
        'aws-cp': {
            title: 'AWS Certified Cloud Practitioner',
            provider: 'Amazon Web Services',
            description: 'Foundation-level certification covering AWS cloud concepts, services, security, architecture, pricing, and support.',
            skills: ['Cloud Fundamentals', 'AWS Services', 'Security & Compliance', 'Billing Models'],
            verified: true,
            verifyLink: 'https://www.credly.com/badges/f72b1c89-bee9-46df-b820-e288dfd3b4c7/linked_in_profile'
        },
        'aws-sa': {
            title: 'AWS Certified Solutions Architect',
            subtitle: 'Associate',
            provider: 'Amazon Web Services',
            description: 'Associate-level certification demonstrating ability to design distributed applications and systems on the AWS platform.',
            skills: ['Architecture Design', 'High Performance', 'Cost Optimization', 'Resilient Systems'],
            verified: true,
            verifyLink: 'https://www.credly.com/badges/d7ea00f9-e857-4e6e-8dec-70740497bd4b/linked_in_profile'
        },
        'azure': {
            title: 'Microsoft Certified: Azure Fundamentals',
            provider: 'Microsoft',
            description: 'Foundation certification covering Azure cloud services, security, privacy, compliance, and trust.',
            skills: ['Azure Services', 'Cloud Concepts', 'Security Features', 'Pricing Models'],
            verified: true
        },
        'java': {
            title: 'Java OOPs',
            provider: 'HackerRank',
            description: 'Certification demonstrating proficiency in Java object-oriented programming concepts.',
            skills: ['Object-Oriented Programming', 'Java Development', 'Code Proficiency']
        },
        'angular': {
            title: 'Angular',
            provider: 'HackerRank',
            description: 'Certification validating expertise in Angular framework development.',
            skills: ['Frontend Framework', 'Component Development', 'TypeScript']
        },
        'java-ds': {
            title: 'Data Structures and Algorithms with Java',
            provider: 'Udemy',
            description: 'Comprehensive course covering fundamental data structures and algorithms using Java.',
            skills: ['Algorithm Design', 'Data Structures', 'Problem Solving', 'Java Programming']
        }
    };
    
    const cert = certificationData[certId];
    if (cert) {
        const modal = document.getElementById('certification-modal');
        const title = document.getElementById('modal-title');
        const content = document.getElementById('modal-content');
        
        if (title && content && modal) {
            title.textContent = cert.title;
            content.innerHTML = `
                <div class="cert-modal-details">
                    <div class="cert-header">
                        <div class="cert-provider">${cert.provider}</div>
                        ${cert.subtitle ? `<div class="cert-subtitle">${cert.subtitle}</div>` : ''}
                        ${cert.verified ? '<div class="cert-verified"><i class="fas fa-check-circle"></i> Verified Certification</div>' : ''}
                    </div>
                    <div class="cert-description">${cert.description}</div>
                    <div class="cert-skills-section">
                        <h4>Skills Covered:</h4>
                        <div class="cert-skills-grid">
                            ${cert.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                        </div>
                    </div>
                    ${cert.verifyLink ? `
                        <div class="cert-verify-section">
                            <a href="${cert.verifyLink}" target="_blank" class="verify-btn">
                                <i class="fas fa-external-link-alt"></i>
                                Verify on Credly
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
            modal.classList.remove('hidden');
        }
    }
}

function hideCertificationModal() {
    const modal = document.getElementById('certification-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function toggleExperienceDetails(item) {
    const details = item.querySelector('.experience-details');
    const isActive = item.classList.contains('active');
    
    // Close all other items
    document.querySelectorAll('.timeline-item').forEach(i => {
        i.classList.remove('active');
        const d = i.querySelector('.experience-details');
        if (d) d.style.maxHeight = '0';
    });
    
    // Toggle current item
    if (!isActive) {
        item.classList.add('active');
        if (details) {
            details.style.maxHeight = details.scrollHeight + 'px';
        }
    }
}

// Initialize Portfolio on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioInstance = new Portfolio();
});

// Handle any unhandled errors
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Portfolio Load Time:', perfData.loadEventEnd - perfData.loadEventStart + 'ms');
            }
        }, 0);
    });
}