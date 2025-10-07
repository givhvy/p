// ===== GLOBAL STATE =====
let currentFilter = 'all';
let currentSort = 'popular';
let searchQuery = '';

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    renderPrompts();
    renderContributors();
    initFilters();
    initFAQ();
    initContactForm();
    initModal();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scroll and active state
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');

                // Smooth scroll
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active state
                navLinkItems.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Sticky header effect
        const nav = document.getElementById('navMenu');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .service-card');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== PROMPTS RENDERING =====
function renderPrompts(prompts = promptsData) {
    const promptsGrid = document.getElementById('promptsGrid');

    if (!promptsGrid) return;

    // Apply filters and sorting
    let filteredPrompts = prompts.filter(prompt => {
        const matchesCategory = currentFilter === 'all' || prompt.category === currentFilter;
        const matchesSearch = searchQuery === '' ||
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Sort prompts
    filteredPrompts.sort((a, b) => {
        switch(currentSort) {
            case 'popular':
                return b.views - a.views;
            case 'recent':
                return b.id - a.id;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    // Render
    if (filteredPrompts.length === 0) {
        promptsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 24px; color: #666; margin-bottom: 10px;">Không tìm thấy prompt</h3>
                <p style="color: #999;">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
            </div>
        `;
        return;
    }

    promptsGrid.innerHTML = filteredPrompts.map(prompt => `
        <div class="prompt-card animate-on-scroll" data-prompt-id="${prompt.id}">
            <div class="prompt-image" style="background: ${prompt.gradient}">
                <span class="prompt-category">${categoryInfo[prompt.category].name}</span>
                <div class="prompt-icon">${prompt.icon}</div>
            </div>
            <div class="prompt-info">
                <h3>${prompt.title}</h3>
                <p class="prompt-description">${prompt.description}</p>
                <div class="prompt-meta">
                    <div class="prompt-stats">
                        <span>⭐ ${prompt.rating}</span>
                        <span>👁️ ${formatViews(prompt.views)}</span>
                    </div>
                    <button class="copy-button" onclick="event.stopPropagation(); copyPromptQuick(${prompt.id})">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to open modal
    document.querySelectorAll('.prompt-card').forEach(card => {
        card.addEventListener('click', () => {
            const promptId = parseInt(card.dataset.promptId);
            openPromptModal(promptId);
        });
    });

    // Re-observe for animations
    const newCards = document.querySelectorAll('.prompt-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    newCards.forEach(card => observer.observe(card));
}

// ===== CONTRIBUTORS RENDERING =====
function renderContributors() {
    const ticker = document.getElementById('contributorsTicker');

    if (!ticker) return;

    // Double the array for seamless infinite scroll
    const doubledContributors = [...contributorsData, ...contributorsData];

    ticker.innerHTML = doubledContributors.map(contributor => `
        <div class="contributor-card">
            <div class="contributor-avatar">${contributor.avatar}</div>
            <h4 class="contributor-name">${contributor.name}</h4>
            <p class="contributor-role">${contributor.role}</p>
            <p class="contributor-rating">${contributor.rating} • ${contributor.prompts} prompts</p>
        </div>
    `).join('');
}

// ===== FILTERS & SEARCH =====
function initFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderPrompts();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentFilter = e.target.value;
            renderPrompts();
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderPrompts();
        });
    }
}

// ===== FAQ ACCORDION =====
function initFAQ() {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const faqItem = toggle.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            console.log('Form submitted:', data);

            // Show success message
            alert('Cảm ơn bạn đã đóng góp! Chúng tôi sẽ review prompt của bạn sớm nhất có thể.');

            // Reset form
            contactForm.reset();
        });
    }
}

// ===== MODAL =====
function initModal() {
    const modal = document.getElementById('promptModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openPromptModal(promptId) {
    const prompt = promptsData.find(p => p.id === promptId);

    if (!prompt) return;

    const modal = document.getElementById('promptModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-category">${categoryInfo[prompt.category].name}</span>
            <h2>${prompt.title}</h2>
            <p style="color: #666; margin-bottom: 20px;">${prompt.description}</p>
            <div style="display: flex; gap: 20px; margin-bottom: 20px; color: #666;">
                <span>⭐ ${prompt.rating}/5.0</span>
                <span>👁️ ${formatViews(prompt.views)} lượt xem</span>
            </div>
        </div>

        <div class="modal-prompt-text" id="promptText">${escapeHtml(prompt.prompt)}</div>

        <button class="modal-copy-button" id="modalCopyBtn" onclick="copyPromptFromModal(${prompt.id})">
            📋 Copy Prompt
        </button>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f3f3f3;">
            <h4 style="margin-bottom: 10px;">💡 Hướng dẫn sử dụng:</h4>
            <ol style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>Click nút "Copy Prompt" ở trên</li>
                <li>Mở AI tool của bạn (${categoryInfo[prompt.category].name})</li>
                <li>Paste prompt vào và thay thế các [PLACEHOLDER] bằng thông tin cụ thể</li>
                <li>Chỉnh sửa theo nhu cầu và gửi đi!</li>
            </ol>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('promptModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== COPY FUNCTIONALITY =====
function copyPromptQuick(promptId) {
    const prompt = promptsData.find(p => p.id === promptId);

    if (!prompt) return;

    copyToClipboard(prompt.prompt, 'Đã copy prompt!');
}

function copyPromptFromModal(promptId) {
    const prompt = promptsData.find(p => p.id === promptId);

    if (!prompt) return;

    const btn = document.getElementById('modalCopyBtn');
    const originalText = btn.innerHTML;

    copyToClipboard(prompt.prompt, '✅ Đã copy prompt!', () => {
        btn.innerHTML = '✅ Đã copy!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

function copyToClipboard(text, message, callback) {
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showNotification(message);
                if (callback) callback();
            })
            .catch(err => {
                console.error('Copy failed:', err);
                fallbackCopy(text, message, callback);
            });
    } else {
        fallbackCopy(text, message, callback);
    }
}

function fallbackCopy(text, message, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showNotification(message);
        if (callback) callback();
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showNotification('Copy thất bại. Vui lòng copy thủ công.');
    }

    document.body.removeChild(textArea);
}

// ===== NOTIFICATION =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2C2C2C;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== UTILITY FUNCTIONS =====
function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== SMOOTH SCROLL TO TOP =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional enhancement)
window.addEventListener('scroll', () => {
    // You can add a scroll-to-top button here if needed
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search if needed
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    const debouncedSearch = debounce((value) => {
        searchQuery = value;
        renderPrompts();
    }, 300);

    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

console.log('🚀 PromptHub initialized successfully!');
