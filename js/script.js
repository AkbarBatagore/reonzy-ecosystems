/**
 * RE-ONZY ECOSYSTEMS - Main JavaScript
 * Handles all interactivity: slideshow, filters, search, sidebar, GitHub integration
 */

/* ============================================
   GLOBAL STATE & VARIABLES
   ============================================ */
let currentSlide = 1;
const totalSlides = 1;
let allApps = [];
let filteredApps = [];
let currentFilter = 'ALL';
let searchQuery = '';
let autoPlayInterval;

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 RE-ONZY ECOSYSTEMS Starting...');
    
    initGitHubProfile();
    initSlideshow();
    loadAppsData();
    setupEventListeners();
    updateAppDisplay();
    
    console.log('✅ All systems initialized!');
});

/* ============================================
   GITHUB PROFILE INTEGRATION
   ============================================ */
async function initGitHubProfile() {
    try {
        const username = 'AkbarBatagore';
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (response.ok) {
            const userData = await response.json();
            const profileImg = document.getElementById('githubProfileImg');
            profileImg.src = userData.avatar_url;
            profileImg.alt = `${username} GitHub profile`;
            
            console.log('✅ GitHub profile loaded:', username);
        }
    } catch (error) {
        console.error('❌ Error loading GitHub profile:', error);
        // Fallback to placeholder
        const profileImg = document.getElementById('githubProfileImg');
        profileImg.style.background = '#FF00FF';
    }
}

// Click on profile circle to open GitHub profile
document.addEventListener('DOMContentLoaded', () => {
    const profileCircle = document.getElementById('profileCircle');
    profileCircle.addEventListener('click', () => {
        window.(open)('https://github.com/AkbarBatagore', '_blank');
    });
});

/* ============================================
   SLIDESHOW FUNCTIONALITY
   ============================================ */
function initSlideshow() {
    // Create indicators
    const indicatorsContainer = document.getElementById('slideshowIndicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = i === 1 ? 'indicator active' : 'indicator';
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // Setup slide buttons
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Start auto-play
    startAutoPlay();
    
    // Pause auto-play on hover
    const slideshowContainer = document.getElementById('slideshowContainer');
    slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
    slideshowContainer.addEventListener('mouseleave', startAutoPlay);
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // 5 seconds
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    updateSlideshow();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    updateSlideshow();
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    updateSlideshow();
    stopAutoPlay();
    startAutoPlay();
}

function updateSlideshow() {
    const slideshowImage = document.getElementById('slideshowImage');
    const imagePath = `img/slideshow/slideshow-${currentSlide}.png`;
    
    // Add fade animation
    slideshowImage.style.animation = 'none';
    setTimeout(() => {
        slideshowImage.src = imagePath;
        slideshowImage.style.animation = 'slideIn 0.6s ease-in-out';
    }, 10);
    
    // Update indicators
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index + 1 === currentSlide);
    });
}

/* ============================================
   LOAD APPS DATA
   ============================================ */
async function loadAppsData() {
    try {
        // Try to load from JSON file
        const response = await fetch('data/apps.json');
        
        if (response.ok) {
            const data = await response.json();
            allApps = data.apps || [];
            console.log('✅ Apps loaded from JSON:', allApps.length, 'apps');
        } else {
            // Fallback to sample data if JSON doesn't exist
            loadSampleApps();
        }
    } catch (error) {
        console.warn('⚠️ Could not load apps.json, using sample data:', error);
        loadSampleApps();
    }
    
    filteredApps = [...allApps];
    displayApps();
}

function loadSampleApps() {
    // Sample apps for development/testing
    allApps = [
        {
            id: 1,
            title: 'Image Editor Pro',
            description: 'Edit dan manipulasi gambar dengan mudah',
            type: 'IMG-EDITOR',
            icon: 'apps-1.png',
            url: '#'
        },
        {
            id: 2,
            title: 'Video Converter',
            description: 'Konversi video ke berbagai format',
            type: 'VID-CONVERT',
            icon: 'apps-2.png',
            url: '#'
        },
        {
            id: 3,
            title: 'Download Manager',
            description: 'Kelola unduhan dengan fitur advanced',
            type: 'DOWNLOADER',
            icon: 'apps-3.png',
            url: '#'
        },
        {
            id: 4,
            title: 'Image Converter',
            description: 'Konversi gambar dengan kualitas terbaik',
            type: 'IMG-CONVERT',
            icon: 'apps-4.png',
            url: '#'
        },
        {
            id: 5,
            title: 'Video Editor Plus',
            description: 'Edit video profesional dengan fitur lengkap',
            type: 'VID-EDITOR',
            icon: 'apps-5.png',
            url: '#'
        },
        {
            id: 6,
            title: 'PDF Tools',
            description: 'Manipulasi file PDF dengan mudah',
            type: 'PDF-XLCX-MORE',
            icon: 'apps-6.png',
            url: '#'
        },
        {
            id: 7,
            title: 'Universal Converter',
            description: 'Konversi berbagai format file',
            type: 'CONVERT',
            icon: 'apps-7.png',
            url: '#'
        },
        {
            id: 8,
            title: 'Batch Editor',
            description: 'Edit batch gambar sekaligus',
            type: 'IMG-EDITOR',
            icon: 'apps-8.png',
            url: '#'
        },
    ];
}

/* ============================================
   DISPLAY APPS
   ============================================ */
function displayApps() {
    const appsContainer = document.getElementById('appsContainer');
    
    if (filteredApps.length === 0) {
        appsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Tidak ada aplikasi yang sesuai dengan filter</p>';
        return;
    }
    
    appsContainer.innerHTML = filteredApps.map(app => `
        <div class="app-card" data-app-id="${app.id}" data-app-type="${app.type}">
            <div class="app-card-header">
                <div class="app-icon">
                    <img src="img/icon-apps/${app.icon}" alt="${app.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23ccc%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%23999%22%3E${app.icon}%3C/text%3E%3C/svg%3E'">
                </div>
                <div class="app-info">
                    <div class="app-title">[${app.title}]</div>
                    <div class="app-description">${app.description}</div>
                    <div class="app-type">[${app.type}]</div>
                </div>
            </div>
            <div class="app-card-footer">
                <button class="app-btn" data-app-id="${app.id}">GO</button>
                <div style="font-size: 12px; color: #666; font-family: 'Roboto', sans-serif;">#icon-apps</div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners for GO buttons
    document.querySelectorAll('.app-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const appId = e.target.dataset.appId;
            const app = allApps.find(a => a.id == appId);
            if (app && app.url && app.url !== '#') {
                window.open(app.url, '_blank');
            } else {
                alert(`🚀 Aplikasi: ${app.title}\n\nFitur belum tersedia.`);
            }
        });
    });
}

/* ============================================
   FILTER FUNCTIONALITY
   ============================================ */
function applyFilter(filterType) {
    currentFilter = filterType;
    searchQuery = '';
    
    if (filterType === 'ALL') {
        filteredApps = [...allApps];
    } else {
        filteredApps = allApps.filter(app => app.type === filterType);
    }
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filterType);
    });
    
    // Clear search input
    document.getElementById('searchInput').value = '';
    
    displayApps();
    console.log(`✅ Filter applied: ${filterType} (${filteredApps.length} apps)`);
}

/* ============================================
   SEARCH FUNCTIONALITY
   ============================================ */
function performSearch(query) {
    searchQuery = query.toLowerCase();
    
    if (searchQuery.trim() === '') {
        // If search is empty, apply current filter
        if (currentFilter === 'ALL') {
            filteredApps = [...allApps];
        } else {
            filteredApps = allApps.filter(app => app.type === currentFilter);
        }
    } else {
        // Search in title and description
        const filtered = allApps.filter(app => {
            const matchesFilter = currentFilter === 'ALL' || app.type === currentFilter;
            const matchesSearch = 
                app.title.toLowerCase().includes(searchQuery) ||
                app.description.toLowerCase().includes(searchQuery) ||
                app.type.toLowerCase().includes(searchQuery);
            return matchesFilter && matchesSearch;
        });
        
        filteredApps = filtered;
    }
    
    displayApps();
}

/* ============================================
   SIDEBAR FUNCTIONALITY
   ============================================ */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebarMobile');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburger');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebarMobile');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('hamburger');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
}

/* ============================================
   EVENT LISTENERS SETUP
   ============================================ */
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filterType = btn.dataset.filter;
            applyFilter(filterType);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(e.target.value);
        }
    });
    
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    // Hamburger menu
    document.getElementById('hamburger').addEventListener('click', toggleSidebar);
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
    
    // Navigation menu (for future page navigation)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            console.log('📄 Navigating to page:', page);
            
            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            item.classList.add('active');
            
            // For now, just log the action
            if (page === 'list' || page === 'workstation') {
                alert(`⏳ Fitur "${page}" masih sedang dikembangkan. Kembali ke HOME.`);
            }
        });
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function updateAppDisplay() {
    displayApps();
}

// Prevent right-click on images for profile photo protection
document.addEventListener('contextmenu', (e) => {
    if (e.target.id === 'githubProfileImg') {
        e.preventDefault();
    }
});

// Log system info
console.log('%c🎮 RE-ONZY ECOSYSTEMS', 'font-size: 20px; color: #A5FF00; font-weight: bold;');
console.log('%cPowered by GitHub Copilot (Claude Haiku)', 'color: #FF00FF; font-size: 12px;');
console.log('%cFor issues & updates, check AI-NOTES/ folder', 'color: #999; font-size: 11px;');
