// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glitch effect for text elements with data-text attribute
function initGlitchEffect(element) {
    const text = element.getAttribute('data-text');
    let glitchInterval;

    function startGlitch() {
        const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
        let iterations = 0;
        clearInterval(glitchInterval);
        
        glitchInterval = setInterval(() => {
            element.textContent = text
                .split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            if (iterations >= text.length) {
                clearInterval(glitchInterval);
            }
            
            iterations += 1/3;
        }, 30);
    }

    element.addEventListener('mouseover', startGlitch);
}

// Apply glitch effect to all elements with data-text attribute
document.querySelectorAll('[data-text]').forEach(initGlitchEffect);

// Form handling optimized for performance
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for your message! This is a demo form.');
    });
}

// Simplified intersection observer for performance
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -20px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe only sections for performance
document.querySelectorAll('.pixel-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    observer.observe(section);
});

// Pixel dust cursor effect removed for performance

// Floating animations removed for performance

// toggling the data-active attribute on the project cards
function toggleActive(element) {
    const isActive = element.getAttribute('data-active') === 'true';
    element.setAttribute('data-active', !isActive);
    updateVisibility(element);
}

function updateVisibility(element) {
    if (element.getAttribute('data-active') === 'true') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Example usage: toggleActive(document.querySelector('.project-card'));
