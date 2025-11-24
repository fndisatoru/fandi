// ==================== DATA MANAGEMENT ====================
const contentData = [
    // Meme
    { id: 1, type: 'image', category: 'meme', title: 'OWNER APK INI', src: 'assets/saya.jpeg', description: 'Ketika dosen tanya "ada yang mau ditanyakan?" tapi mikir kalo nanya takut disuruh presentasi', likes: 234, isFavorite: false },
    { id: 2, type: 'image', category: 'meme', title: 'Struggle Mahasiswa', src: 'https://picsum.photos/400/500?random=2', description: 'Me: Besok deadline. Also me: Main game sampai subuh', likes: 567, isFavorite: false },
    { id: 3, type: 'image', category: 'meme', title: 'Tugas Kelompok', src: 'https://picsum.photos/500/400?random=3', description: 'Satu orang ngerjain, yang lain cuma ngelike story', likes: 892, isFavorite: false },

    // Kampus
    { id: 4, type: 'image', category: 'kampus', title: 'Kampus Pagi', src: 'https://picsum.photos/400/600?random=4', description: 'Suasana kampus di pagi hari yang cerah', likes: 145, isFavorite: false },
    { id: 5, type: 'video', category: 'kampus', title: 'Campus Tour', src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Keliling kampus bareng temen-temen', likes: 423, isFavorite: false },
    { id: 6, type: 'image', category: 'kampus', title: 'Perpustakaan', src: 'https://picsum.photos/600/400?random=6', description: 'Tempat favorit belajar dan tidur siang', likes: 278, isFavorite: false },

    // Fotografi
    { id: 7, type: 'image', category: 'fotografi', title: 'Golden Hour', src: 'https://picsum.photos/400/400?random=7', description: 'Momen matahari terbenam yang indah', likes: 1234, isFavorite: false },
    { id: 8, type: 'image', category: 'fotografi', title: 'Street Photography', src: 'https://picsum.photos/500/600?random=8', description: 'Kehidupan jalanan yang penuh warna', likes: 876, isFavorite: false },
    { id: 9, type: 'image', category: 'fotografi', title: 'Nature Shot', src: 'https://picsum.photos/600/500?random=9', description: 'Keindahan alam yang menenangkan', likes: 654, isFavorite: false },

    // Cinematic
    { id: 10, type: 'video', category: 'cinematic', title: 'City Lights', src: 'https://www.w3schools.com/html/movie.mp4', description: 'Keindahan lampu kota di malam hari', likes: 2341, isFavorite: false },
    { id: 11, type: 'image', category: 'cinematic', title: 'Moody Portrait', src: 'https://picsum.photos/400/600?random=11', description: 'Portrait dengan tone gelap yang dramatis', likes: 1567, isFavorite: false },
    { id: 12, type: 'image', category: 'cinematic', title: 'Urban Aesthetic', src: 'https://picsum.photos/600/400?random=12', description: 'Estetika perkotaan yang cinematic', likes: 987, isFavorite: false },

    // Artwork
    { id: 13, type: 'image', category: 'artwork', title: 'Digital Art', src: 'https://picsum.photos/500/500?random=13', description: 'Karya seni digital yang kreatif', likes: 756, isFavorite: false },
    { id: 14, type: 'image', category: 'artwork', title: 'Abstract Design', src: 'https://picsum.photos/400/500?random=14', description: 'Desain abstrak yang unik', likes: 543, isFavorite: false },
    { id: 15, type: 'image', category: 'artwork', title: 'Illustration', src: 'https://picsum.photos/600/600?random=15', description: 'Ilustrasi yang menarik dan colorful', likes: 432, isFavorite: false },

    // Motivasi
    { id: 16, type: 'image', category: 'motivasi', title: 'Keep Going', src: 'https://picsum.photos/500/400?random=16', description: 'Jangan menyerah, terus berjuang!', likes: 2876, isFavorite: false },
    { id: 17, type: 'video', category: 'motivasi', title: 'Morning Routine', src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Rutinitas pagi untuk produktivitas maksimal', likes: 1654, isFavorite: false },
    { id: 18, type: 'image', category: 'motivasi', title: 'Hustle Hard', src: 'https://picsum.photos/400/400?random=18', description: 'Kerja keras adalah kunci kesuksesan', likes: 987, isFavorite: false },

    // Vlog
    { id: 19, type: 'video', category: 'vlog', title: 'USH VIRAL HOT JELETOT', src: 'assets/myVideo1.mp4', description: 'Sehari penuh aktivitas mahasiswa yang kompalin soal keadaan, denger denger akun menfes mau di take down ', likes: 3421, isFavorite: false },
    { id: 20, type: 'video', category: 'vlog', title: 'Food Adventure', src: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Jajan murah meriah sekitar kampus', likes: 2134, isFavorite: false },
    { id: 21, type: 'image', category: 'vlog', title: 'Weekend Vibes', src: 'https://picsum.photos/600/400?random=21', description: 'Liburan akhir pekan yang santai', likes: 1876, isFavorite: false },

    // Additional Content
    { id: 22, type: 'image', category: 'meme', title: 'Dosen Killer', src: 'https://picsum.photos/400/500?random=22', description: 'Ketika dosen bilang "ini mudah kok"', likes: 1234, isFavorite: false },
    { id: 23, type: 'image', category: 'fotografi', title: 'Minimalist', src: 'https://picsum.photos/500/500?random=23', description: 'Kesederhanaan yang indah', likes: 876, isFavorite: false },
    { id: 24, type: 'image', category: 'kampus', title: 'Study Group', src: 'https://picsum.photos/600/400?random=24', description: 'Belajar bareng tapi ujungnya ngobrol', likes: 543, isFavorite: false },
];

// ==================== STATE MANAGEMENT ====================
let currentCategory = 'all';
let currentPage = 1;
let isLoading = false;
let currentModalIndex = 0;
let filteredContent = [...contentData];
let searchQuery = '';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadInitialContent();
    setupEventListeners();
    loadUserPreferences();
});

function initializeApp() {
    // Check if localStorage is available
    if (typeof (Storage) !== "undefined") {
        console.log("LocalStorage is available");
        loadFavoritesFromStorage();
        loadLikesFromStorage();
    }
}

// ==================== CONTENT LOADING ====================
function loadInitialContent() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    filteredContent = getFilteredContent();
    const itemsToShow = filteredContent.slice(0, 12);

    itemsToShow.forEach((item, index) => {
        setTimeout(() => {
            gallery.appendChild(createGalleryCard(item));
        }, index * 50);
    });

    currentPage = 1;
}

function loadMoreContent() {
    if (isLoading) return;

    isLoading = true;
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator.classList.add('show');

    setTimeout(() => {
        const gallery = document.getElementById('gallery');
        const startIndex = currentPage * 12;
        const endIndex = startIndex + 12;
        const itemsToShow = filteredContent.slice(startIndex, endIndex);

        itemsToShow.forEach(item => {
            gallery.appendChild(createGalleryCard(item));
        });

        currentPage++;
        isLoading = false;
        loadingIndicator.classList.remove('show');
    }, 1000);
}

function getFilteredContent() {
    let filtered = [...contentData];

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return filtered;
}

// ==================== GALLERY CARD CREATION ====================
function createGalleryCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.dataset.id = item.id;

    const mediaHTML = item.type === 'video'
        ? `<video src="${item.src}" muted loop></video>`
        : `<img src="${item.src}" alt="${item.title}" loading="lazy">`;

    card.innerHTML = `
        <div class="card-media">
            ${mediaHTML}
            <div class="card-type-badge">
                <i class="bi bi-${item.type === 'video' ? 'play-circle' : 'image'}"></i>
                ${item.type.toUpperCase()}
            </div>
            <div class="card-overlay">
                <div class="card-overlay-content">
                    <h4 style="color: white; margin: 0; font-size: 1rem;">${item.title}</h4>
                </div>
            </div>
        </div>
        <div class="card-info">
            <h5 class="card-title">${item.title}</h5>
            <span class="card-category">${item.category}</span>
        </div>
        <div class="card-actions">
            <button class="card-action-btn ${item.likes > 0 ? 'liked' : ''}" onclick="toggleLike(${item.id}, event)">
                <i class="bi bi-heart${item.likes > 0 ? '-fill' : ''}"></i>
                <span>${item.likes}</span>
            </button>
            <button class="card-action-btn ${item.isFavorite ? 'favorited' : ''}" onclick="toggleFavorite(${item.id}, event)">
                <i class="bi bi-bookmark${item.isFavorite ? '-fill' : ''}"></i>
            </button>
            <button class="card-action-btn" onclick="shareContent(${item.id}, event)">
                <i class="bi bi-share"></i>
            </button>
        </div>
    `;

    // Add click event to open modal
    card.querySelector('.card-media').addEventListener('click', () => {
        openModal(item.id);
    });

    // Add hover effect for videos
    if (item.type === 'video') {
        const video = card.querySelector('video');
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }

    return card;
}

// ==================== MODAL FUNCTIONALITY ====================
function openModal(itemId) {
    const item = contentData.find(i => i.id === itemId);
    if (!item) return;

    currentModalIndex = filteredContent.findIndex(i => i.id === itemId);

    const modal = document.getElementById('modalViewer');
    const modalMedia = modal.querySelector('.modal-media');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalLikeBtn = document.getElementById('modalLike');
    const modalLikeCount = document.getElementById('modalLikeCount');
    const modalFavoriteBtn = document.getElementById('modalFavorite');

    // Clear previous content
    modalMedia.innerHTML = '';

    // Add media
    if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        modalMedia.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        modalMedia.appendChild(img);
    }

    // Update info
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category.toUpperCase();
    modalDescription.textContent = item.description;
    modalLikeCount.textContent = item.likes;

    // Update button states
    modalLikeBtn.classList.toggle('active', item.likes > 0);
    modalLikeBtn.querySelector('i').className = `bi bi-heart${item.likes > 0 ? '-fill' : ''}`;
    modalFavoriteBtn.classList.toggle('active', item.isFavorite);
    modalFavoriteBtn.querySelector('i').className = `bi bi-bookmark${item.isFavorite ? '-fill' : ''}`;

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalViewer');
    modal.classList.remove('show');
    document.body.style.overflow = '';

    // Stop video if playing
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
}

function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;

    if (newIndex >= 0 && newIndex < filteredContent.length) {
        currentModalIndex = newIndex;
        openModal(filteredContent[currentModalIndex].id);
    }
}

// ==================== INTERACTION FUNCTIONS ====================
function toggleLike(itemId, event) {
    if (event) event.stopPropagation();

    const item = contentData.find(i => i.id === itemId);
    if (!item) return;

    const likedItems = getLikedItems();

    if (likedItems.includes(itemId)) {
        // Unlike
        item.likes = Math.max(0, item.likes - 1);
        const index = likedItems.indexOf(itemId);
        likedItems.splice(index, 1);
    } else {
        // Like
        item.likes++;
        likedItems.push(itemId);
    }

    saveLikesToStorage(likedItems);
    updateCardDisplay(itemId);
}

function toggleFavorite(itemId, event) {
    if (event) event.stopPropagation();

    const item = contentData.find(i => i.id === itemId);
    if (!item) return;

    item.isFavorite = !item.isFavorite;

    const favorites = getFavorites();
    if (item.isFavorite) {
        favorites.push(itemId);
    } else {
        const index = favorites.indexOf(itemId);
        favorites.splice(index, 1);
    }

    saveFavoritesToStorage(favorites);
    updateCardDisplay(itemId);
}

function shareContent(itemId, event) {
    if (event) event.stopPropagation();

    const item = contentData.find(i => i.id === itemId);
    if (!item) return;

    if (navigator.share) {
        navigator.share({
            title: item.title,
            text: item.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link berhasil disalin!');
    }
}

function updateCardDisplay(itemId) {
    const item = contentData.find(i => i.id === itemId);
    if (!item) return;

    // Update card in gallery
    const card = document.querySelector(`.gallery-card[data-id="${itemId}"]`);
    if (card) {
        const likeBtn = card.querySelector('.card-action-btn:first-child');
        const favoriteBtn = card.querySelector('.card-action-btn:nth-child(2)');

        likeBtn.innerHTML = `
            <i class="bi bi-heart${item.likes > 0 ? '-fill' : ''}"></i>
            <span>${item.likes}</span>
        `;
        likeBtn.classList.toggle('liked', item.likes > 0);

        favoriteBtn.innerHTML = `<i class="bi bi-bookmark${item.isFavorite ? '-fill' : ''}"></i>`;
        favoriteBtn.classList.toggle('favorited', item.isFavorite);
    }

    // Update modal if open
    const modal = document.getElementById('modalViewer');
    if (modal.classList.contains('show')) {
        const currentItem = filteredContent[currentModalIndex];
        if (currentItem.id === itemId) {
            document.getElementById('modalLikeCount').textContent = item.likes;

            const modalLikeBtn = document.getElementById('modalLike');
            modalLikeBtn.classList.toggle('active', item.likes > 0);
            modalLikeBtn.querySelector('i').className = `bi bi-heart${item.likes > 0 ? '-fill' : ''}`;

            const modalFavoriteBtn = document.getElementById('modalFavorite');
            modalFavoriteBtn.classList.toggle('active', item.isFavorite);
            modalFavoriteBtn.querySelector('i').className = `bi bi-bookmark${item.isFavorite ? '-fill' : ''}`;
        }
    }
}

// ==================== CATEGORY FILTER ====================
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    // Reload content
    loadInitialContent();
}

// ==================== SEARCH FUNCTIONALITY ====================
function handleSearch(query) {
    searchQuery = query.trim();

    const clearBtn = document.getElementById('clearSearch');
    clearBtn.classList.toggle('show', searchQuery.length > 0);

    // Debounce search
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        loadInitialContent();
    }, 300);
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchQuery = '';
    document.getElementById('clearSearch').classList.remove('show');
    loadInitialContent();
}

// ==================== THEME TOGGLE ====================
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isDark = !document.body.classList.contains('light-mode');

    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = isDark ? 'bi bi-moon-stars' : 'bi bi-sun';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ==================== AUDIO TOGGLE ====================
function toggleAudio() {
    const audio = document.getElementById('bgAudio');
    const audioBtn = document.getElementById('audioToggle');
    const icon = audioBtn.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.className = 'bi bi-volume-up';
        audioBtn.classList.add('active');
    } else {
        audio.pause();
        icon.className = 'bi bi-volume-mute';
        audioBtn.classList.remove('active');
    }
}

// ==================== LOCAL STORAGE ====================
function getFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

function saveFavoritesToStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavoritesFromStorage() {
    const favorites = getFavorites();
    contentData.forEach(item => {
        item.isFavorite = favorites.includes(item.id);
    });
}

function getLikedItems() {
    const liked = localStorage.getItem('likedItems');
    return liked ? JSON.parse(liked) : [];
}

function saveLikesToStorage(likedItems) {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
}

function loadLikesFromStorage() {
    const likedItems = getLikedItems();
    // Note: This is a simple implementation. In real app, you'd sync with server
}

function loadUserPreferences() {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.querySelector('#themeToggle i').className = 'bi bi-sun';
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

    document.getElementById('clearSearch').addEventListener('click', clearSearch);

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Audio toggle
    document.getElementById('audioToggle').addEventListener('click', toggleAudio);

    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalPrev').addEventListener('click', () => navigateModal(-1));
    document.getElementById('modalNext').addEventListener('click', () => navigateModal(1));

    // Modal actions
    document.getElementById('modalLike').addEventListener('click', () => {
        const item = filteredContent[currentModalIndex];
        toggleLike(item.id);
    });

    document.getElementById('modalFavorite').addEventListener('click', () => {
        const item = filteredContent[currentModalIndex];
        toggleFavorite(item.id);
    });

    document.getElementById('modalShare').addEventListener('click', () => {
        const item = filteredContent[currentModalIndex];
        shareContent(item.id);
    });

    // Close modal on backdrop click
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('modalViewer');
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });

    // Infinite scroll
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 500) {
            loadMoreContent();
        }
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const page = this.dataset.page;
            handleNavigationPage(page);
        });
    });
}

// ==================== BOTTOM NAVIGATION HANDLER ====================
function handleNavigationPage(page) {
    switch (page) {
        case 'home':
            currentCategory = 'all';
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === 'all');
            });
            loadInitialContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;

        case 'explore':
            // Show all categories
            currentCategory = 'all';
            loadInitialContent();
            break;

        case 'favorite':
            // Filter favorites
            const favorites = getFavorites();
            filteredContent = contentData.filter(item => favorites.includes(item.id));
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';

            if (filteredContent.length === 0) {
                gallery.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 50px;"><h3>Belum ada favorit</h3><p>Tambahkan konten ke favorit untuk melihatnya di sini</p></div>';
            } else {
                filteredContent.forEach(item => {
                    gallery.appendChild(createGalleryCard(item));
                });
            }
            break;

        case 'profile':
            alert('Fitur profile akan segera hadir!');
            break;
    }
}

// ==================== UTILITIES ====================
// Lazy loading observer
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

// Service Worker Registration (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}