document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const skillCards = document.querySelectorAll('.skill-card');
    const skillModal = document.getElementById('skill-modal');
    const skillModalTitle = document.getElementById('skill-modal-title');
    const skillModalText = document.getElementById('skill-modal-text');
    const closeBtn = document.querySelector('.close-btn');

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(currentTheme);
    updateThemeIcon(currentTheme);

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    const updateParticlesColor = (color) => {
        if (!window.particlesJS || !window.particlesJS.particles) return;

        particlesJS.particles.color.value = color;
        particlesJS.particles.line_linked.color = color;
        particlesJS.fn.particlesDraw();
    };

    themeToggleBtn.addEventListener('click', () => {
        let newTheme = 'dark';
        let newColor = '#ffffff';
        if (body.classList.contains('dark')) {
            newTheme = 'light';
            newColor = '#1f2937';
        }
        body.classList.remove('dark', 'light');
        body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        updateParticlesColor(newColor);
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const showLoadingDots = (element) => {
        element.innerHTML = `<div class="flex justify-center items-center py-4">
                                <span class="loading-dot w-3 h-3 bg-indigo-500 rounded-full mx-1"></span>
                                <span class="loading-dot w-3 h-3 bg-indigo-500 rounded-full mx-1"></span>
                                <span class="loading-dot w-3 h-3 bg-indigo-500 rounded-full mx-1"></span>
                            </div>`;
    };

    const skillExplanations = {
        "HTML5": "The standard markup language for documents designed to be displayed in a web browser, providing the structure and content of a webpage.",
        "CSS3": "A stylesheet language used for describing the presentation of a document written in a markup language, primarily used for styling web pages.",
        "JavaScript": "A high-level programming language that is one of the core technologies of the World Wide Web, used to make web pages interactive and dynamic.",
        "Git": "A distributed version control system for tracking changes in source code during software development, used for coordinating work among programmers.",
        "Github": "A web-based platform for version control and collaboration, built around the Git system, allowing developers to host and review code.",
        "SQL": "A domain-specific language used in programming and managing data held in a relational database management system."
    };

    skillCards.forEach(card => {
        card.addEventListener('click', async (e) => {
            e.stopPropagation();
            const skillName = card.querySelector('p').getAttribute('data-skill');
            skillModalTitle.textContent = skillName;
            showLoadingDots(skillModalText);
            skillModal.style.display = 'block';

            // Use the predefined local explanations
            const explanation = skillExplanations[skillName] || "Explanation not available at this time. Please try again later.";
            skillModalText.textContent = explanation;
        });
    });

    closeBtn.addEventListener('click', () => {
        skillModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === skillModal) {
            skillModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', function(e) {
        // Web3Forms handles the submission, no custom JavaScript needed
    });

    const sections = document.querySelectorAll('.section-reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    updateParticlesColor(currentTheme === 'dark' ? '#ffffff' : '#1f2937');
});