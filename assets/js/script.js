// ========== MOBILE NAVIGATION TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== PROJECT CAROUSEL FUNCTIONALITY ==========
const carousel = document.getElementById('projectsCarousel');
const carouselRows = document.querySelectorAll('.carousel-row');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const indicatorsContainer = document.getElementById('carouselIndicators');

let currentPage = 0;
const totalPages = carouselRows.length;

// Create indicator dots
for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToPage(i));
    indicatorsContainer.appendChild(dot);
}

const indicators = document.querySelectorAll('.indicator-dot');

function updateCarousel() {
    const offset = -currentPage * 100;
    carousel.style.transform = `translateY(${offset}%)`;
    
    // Update indicators
    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
    });
    
    // Update button visibility
    prevBtn.style.opacity = currentPage === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentPage === totalPages - 1 ? '0.5' : '1';
}

function goToPage(page) {
    if (page >= 0 && page < totalPages) {
        currentPage = page;
        updateCarousel();
    }
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateCarousel();
    }
});

// Auto-scroll carousel (optional - remove if you don't want auto-scroll)
let autoScrollInterval = setInterval(() => {
    if (currentPage < totalPages - 1) {
        currentPage++;
    } else {
        currentPage = 0;
    }
    updateCarousel();
}, 5000); // Change slide every 5 seconds

// Pause auto-scroll on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

carousel.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
        if (currentPage < totalPages - 1) {
            currentPage++;
        } else {
            currentPage = 0;
        }
        updateCarousel();
    }, 5000);
});

// ========== PROJECT SEARCH FUNCTIONALITY (Updated for Scrolling Carousel) ==========
const searchBox = document.getElementById('projectSearch');
const allProjectCards = document.querySelectorAll('.project-card');
const carouselWrapper = document.querySelector('.carousel-wrapper');

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        // Show carousel when search is empty
        carouselWrapper.style.display = 'flex';
        
        // Remove search results container if it exists
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.remove();
        }
    } else {
        // Hide carousel when searching
        carouselWrapper.style.display = 'none';
        
        // Create or get search results container
        let searchResults = document.getElementById('searchResults');
        if (!searchResults) {
            searchResults = document.createElement('div');
            searchResults.id = 'searchResults';
            searchResults.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; padding: 2rem 0;';
            carouselWrapper.parentNode.insertBefore(searchResults, carouselWrapper.nextSibling);
        }
        
        // Clear previous results
        searchResults.innerHTML = '';
        
        let hasResults = false;
        
        // Filter and display matching projects
        allProjectCards.forEach(card => {
            const title = card.querySelector('.project-title').textContent.toLowerCase();
            const description = card.querySelector('.project-description').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords').toLowerCase();
            const tags = Array.from(card.querySelectorAll('.project-tag'))
                .map(tag => tag.textContent.toLowerCase())
                .join(' ');

            const searchContent = `${title} ${description} ${keywords} ${tags}`;

            if (searchContent.includes(searchTerm)) {
                const clonedCard = card.cloneNode(true);
                searchResults.appendChild(clonedCard);
                hasResults = true;
            }
        });
        
        // Show "no results" message if needed
        if (!hasResults) {
            searchResults.innerHTML = '<p style="text-align: center; color: var(--text-light); grid-column: 1 / -1; padding: 3rem; font-size: 1.2rem;">No projects found matching your search. Try different keywords.</p>';
        }
    }
});

// ========== SMOOTH SCROLL ENHANCEMENT ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== FADE-IN ANIMATION ON SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .expertise-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});


// ========== CONTACT FORM HANDLER WITH FORMSPREE ==========
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Show loading state
    const submitButton = contactForm.querySelector('.form-button');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Send form data to Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            // Error
            formStatus.textContent = '✗ Oops! Something went wrong. Please try again or email me directly.';
            formStatus.className = 'form-status error';
        }
    } catch (error) {
        // Network error
        formStatus.textContent = '✗ Network error. Please check your connection and try again.';
        formStatus.className = 'form-status error';
    } finally {
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});