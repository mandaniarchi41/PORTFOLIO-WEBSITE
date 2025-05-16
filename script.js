document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
        .from('.hero-content h1', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        })
        .from('.subtitle', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.5')
        .from('.cta-buttons', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        }, '-=0.5');

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Skills progress bars animation
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        const progressValue = progress.getAttribute('data-progress');
        
        gsap.to(progress, {
            width: `${progressValue}%`,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: skill,
                start: 'top 80%'
            }
        });
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Contact form animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        input.addEventListener('focus', () => {
            gsap.to(label, {
                y: -25,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                gsap.to(label, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power2.inOut'
            });
        });
    });

    // Section animations on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Social icons hover animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}); 