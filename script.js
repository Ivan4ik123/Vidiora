// Sample video data
let videos = [
    {
        id: 1,
        title: "Amazing Nature Documentary",
        thumbnail: "https://via.placeholder.com/320x180/4CAF50/FFFFFF?text=Nature",
        duration: "12:34",
        channel: "Nature Channel",
        views: "1.2M views",
        uploadTime: "2 days ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        description: "Explore the beauty of nature in this stunning documentary."
    },
    {
        id: 2,
        title: "Cooking Tutorial: Pasta Carbonara",
        thumbnail: "https://via.placeholder.com/320x180/FF5722/FFFFFF?text=Cooking",
        duration: "8:45",
        channel: "Chef's Kitchen",
        views: "500K views",
        uploadTime: "1 week ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        description: "Learn how to make authentic Italian pasta carbonara."
    },
    {
        id: 3,
        title: "Tech Review: Latest Smartphone",
        thumbnail: "https://via.placeholder.com/320x180/2196F3/FFFFFF?text=Tech",
        duration: "15:20",
        channel: "Tech Reviews",
        views: "2.1M views",
        uploadTime: "3 days ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
        description: "In-depth review of the newest smartphone on the market."
    },
    {
        id: 4,
        title: "Funny Cat Compilation",
        thumbnail: "https://via.placeholder.com/320x180/FFC107/000000?text=Cats",
        duration: "5:30",
        channel: "Pet Videos",
        views: "3.5M views",
        uploadTime: "5 days ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
        description: "The funniest cat videos you've ever seen!"
    },
    {
        id: 5,
        title: "Fitness Workout Routine",
        thumbnail: "https://via.placeholder.com/320x180/9C27B0/FFFFFF?text=Fitness",
        duration: "22:10",
        channel: "Fit Life",
        views: "800K views",
        uploadTime: "1 day ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4",
        description: "Complete home workout routine for all fitness levels."
    },
    {
        id: 6,
        title: "Travel Vlog: Japan Adventure",
        thumbnail: "https://via.placeholder.com/320x180/E91E63/FFFFFF?text=Travel",
        duration: "18:55",
        channel: "Wanderlust",
        views: "1.8M views",
        uploadTime: "4 days ago",
        videoSrc: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_30mb.mp4",
        description: "Exploring the culture and sights of Japan."
    }
];

// User data
let currentUser = null;
let isDarkTheme = false;
let users = JSON.parse(localStorage.getItem('vidoraUsers')) || [];
let currentLanguage = localStorage.getItem('vidoraLanguage') || 'en';
let userVideos = JSON.parse(localStorage.getItem('vidoraUserVideos')) || [];

// Language translations
const translations = {
    en: {
        home: 'Home',
        shorts: 'Shorts',
        subscriptions: 'Subscriptions',
        library: 'Library',
        search: 'Search',
        signIn: 'Sign In',
        signUp: 'Sign Up',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        uploadVideo: 'Upload Video',
        videoTitle: 'Video Title',
        videoDescription: 'Video Description',
        upload: 'Upload',
        editProfile: 'Edit Profile',
        logout: 'Logout',
        settings: 'Settings',
        language: 'Language',
        save: 'Save',
        cancel: 'Cancel',
        videos: 'Videos',
        subscribers: 'Subscribers',
        joined: 'Joined',
        loginSuccess: 'Logged in successfully!',
        signupSuccess: 'Account created successfully!',
        logoutSuccess: 'Logged out successfully!',
        uploadSuccess: 'Video uploaded successfully!',
        invalidCredentials: 'Invalid username or password!',
        usernameExists: 'Username already exists!',
        pleaseLogin: 'Please log in to upload videos.',
        pleaseLoginProfile: 'Please log in to view your profile.',
        editProfileComingSoon: 'Edit profile feature coming soon!',
        fillAllFields: 'Please fill in all fields.',
        bioPlaceholder: 'Tell us about yourself...',
        videoTags: 'Tags',
        profileUpdated: 'Profile updated successfully!',
        noVideosMessage: 'No videos uploaded yet. Be the first to share content!',
        noShortsMessage: 'No shorts available yet.',
        noSubscriptionsMessage: 'No subscription videos available.',
        noLibraryMessage: 'Your library is empty. Upload some videos to get started!'
    },
    ru: {
        home: 'Главная',
        shorts: 'Шортсы',
        subscriptions: 'Подписки',
        library: 'Библиотека',
        search: 'Поиск',
        signIn: 'Войти',
        signUp: 'Регистрация',
        username: 'Имя пользователя',
        email: 'Электронная почта',
        password: 'Пароль',
        uploadVideo: 'Загрузить видео',
        videoTitle: 'Название видео',
        videoDescription: 'Описание видео',
        upload: 'Загрузить',
        editProfile: 'Редактировать профиль',
        logout: 'Выйти',
        settings: 'Настройки',
        language: 'Язык',
        save: 'Сохранить',
        cancel: 'Отмена',
        videos: 'Видео',
        subscribers: 'Подписчики',
        joined: 'Присоединился',
        loginSuccess: 'Успешный вход!',
        signupSuccess: 'Аккаунт создан успешно!',
        logoutSuccess: 'Выход выполнен успешно!',
        uploadSuccess: 'Видео загружено успешно!',
        invalidCredentials: 'Неверное имя пользователя или пароль!',
        usernameExists: 'Имя пользователя уже существует!',
        pleaseLogin: 'Пожалуйста, войдите в систему, чтобы загрузить видео.',
        pleaseLoginProfile: 'Пожалуйста, войдите в систему, чтобы просмотреть свой профиль.',
        editProfileComingSoon: 'Функция редактирования профиля скоро появится!',
        fillAllFields: 'Пожалуйста, заполните все поля.',
        bioPlaceholder: 'Расскажите о себе...',
        videoTags: 'Теги',
        profileUpdated: 'Профиль успешно обновлен!',
        noVideosMessage: 'Видео еще не загружены. Будьте первым, кто поделится контентом!',
        noShortsMessage: 'Шортсы пока недоступны.',
        noSubscriptionsMessage: 'Видео подписок недоступны.',
        noLibraryMessage: 'Ваша библиотека пуста. Загрузите видео, чтобы начать!'
    },
    es: {
        home: 'Inicio',
        shorts: 'Cortos',
        subscriptions: 'Suscripciones',
        library: 'Biblioteca',
        search: 'Buscar',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        username: 'Nombre de usuario',
        email: 'Correo electrónico',
        password: 'Contraseña',
        uploadVideo: 'Subir video',
        videoTitle: 'Título del video',
        videoDescription: 'Descripción del video',
        upload: 'Subir',
        editProfile: 'Editar perfil',
        logout: 'Cerrar sesión',
        settings: 'Configuración',
        language: 'Idioma',
        save: 'Guardar',
        cancel: 'Cancelar',
        videos: 'Videos',
        subscribers: 'Suscriptores',
        joined: 'Se unió',
        loginSuccess: '¡Inicio de sesión exitoso!',
        signupSuccess: '¡Cuenta creada exitosamente!',
        logoutSuccess: '¡Cierre de sesión exitoso!',
        uploadSuccess: '¡Video subido exitosamente!',
        invalidCredentials: '¡Nombre de usuario o contraseña inválidos!',
        usernameExists: '¡El nombre de usuario ya existe!',
        pleaseLogin: 'Por favor, inicia sesión para subir videos.',
        pleaseLoginProfile: 'Por favor, inicia sesión para ver tu perfil.',
        editProfileComingSoon: '¡La función de editar perfil estará disponible pronto!',
        fillAllFields: 'Por favor, completa todos los campos.',
        bioPlaceholder: 'Cuéntanos sobre ti...',
        videoTags: 'Etiquetas',
        profileUpdated: '¡Perfil actualizado exitosamente!',
        noVideosMessage: 'No hay videos subidos aún. ¡Sé el primero en compartir contenido!',
        noShortsMessage: 'No hay shorts disponibles aún.',
        noSubscriptionsMessage: 'No hay videos de suscripciones disponibles.',
        noLibraryMessage: 'Tu biblioteca está vacía. ¡Sube algunos videos para comenzar!'
    },
    fr: {
        home: 'Accueil',
        shorts: 'Shorts',
        subscriptions: 'Abonnements',
        library: 'Bibliothèque',
        search: 'Rechercher',
        signIn: 'Se connecter',
        signUp: 'S\'inscrire',
        username: 'Nom d\'utilisateur',
        email: 'E-mail',
        password: 'Mot de passe',
        uploadVideo: 'Télécharger une vidéo',
        videoTitle: 'Titre de la vidéo',
        videoDescription: 'Description de la vidéo',
        upload: 'Télécharger',
        editProfile: 'Modifier le profil',
        logout: 'Se déconnecter',
        settings: 'Paramètres',
        language: 'Langue',
        save: 'Enregistrer',
        cancel: 'Annuler',
        videos: 'Vidéos',
        subscribers: 'Abonnés',
        joined: 'Rejoint',
        loginSuccess: 'Connexion réussie !',
        signupSuccess: 'Compte créé avec succès !',
        logoutSuccess: 'Déconnexion réussie !',
        uploadSuccess: 'Vidéo téléchargée avec succès !',
        invalidCredentials: 'Nom d\'utilisateur ou mot de passe invalide !',
        usernameExists: 'Le nom d\'utilisateur existe déjà !',
        pleaseLogin: 'Veuillez vous connecter pour télécharger des vidéos.',
        pleaseLoginProfile: 'Veuillez vous connecter pour voir votre profil.',
        editProfileComingSoon: 'La fonction de modification du profil arrive bientôt !',
        fillAllFields: 'Veuillez remplir tous les champs.',
        bioPlaceholder: 'Parlez-nous de vous...',
        videoTags: 'Tags',
        profileUpdated: 'Profil mis à jour avec succès !',
        noVideosMessage: 'Aucune vidéo téléchargée pour le moment. Soyez le premier à partager du contenu !',
        noShortsMessage: 'Aucun short disponible pour le moment.',
        noSubscriptionsMessage: 'Aucune vidéo d\'abonnement disponible.',
        noLibraryMessage: 'Votre bibliothèque est vide. Téléchargez des vidéos pour commencer !'
    },
    de: {
        home: 'Startseite',
        shorts: 'Shorts',
        subscriptions: 'Abonnements',
        library: 'Bibliothek',
        search: 'Suchen',
        signIn: 'Anmelden',
        signUp: 'Registrieren',
        username: 'Benutzername',
        email: 'E-Mail',
        password: 'Passwort',
        uploadVideo: 'Video hochladen',
        videoTitle: 'Videotitel',
        videoDescription: 'Videobeschreibung',
        upload: 'Hochladen',
        editProfile: 'Profil bearbeiten',
        logout: 'Abmelden',
        settings: 'Einstellungen',
        language: 'Sprache',
        save: 'Speichern',
        cancel: 'Abbrechen',
        videos: 'Videos',
        subscribers: 'Abonnenten',
        joined: 'Beigetreten',
        loginSuccess: 'Erfolgreich angemeldet!',
        signupSuccess: 'Konto erfolgreich erstellt!',
        logoutSuccess: 'Erfolgreich abgemeldet!',
        uploadSuccess: 'Video erfolgreich hochgeladen!',
        invalidCredentials: 'Ungültiger Benutzername oder Passwort!',
        usernameExists: 'Benutzername existiert bereits!',
        pleaseLogin: 'Bitte melden Sie sich an, um Videos hochzuladen.',
        pleaseLoginProfile: 'Bitte melden Sie sich an, um Ihr Profil zu sehen.',
        editProfileComingSoon: 'Profilbearbeitungsfunktion kommt bald!',
        fillAllFields: 'Bitte füllen Sie alle Felder aus.',
        bioPlaceholder: 'Erzählen Sie uns von sich...',
        videoTags: 'Tags',
        profileUpdated: 'Profil erfolgreich aktualisiert!',
        noVideosMessage: 'Noch keine Videos hochgeladen. Seien Sie der Erste, der Inhalte teilt!',
        noShortsMessage: 'Noch keine Shorts verfügbar.',
        noSubscriptionsMessage: 'Keine Abonnement-Videos verfügbar.',
        noLibraryMessage: 'Ihre Bibliothek ist leer. Laden Sie Videos hoch, um zu beginnen!'
    }
};

// DOM elements
const videoGrid = document.querySelector('.video-grid');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const closeBtn = document.querySelector('.close');

// Auth modal elements
const authModal = document.getElementById('authModal');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginFormData = document.getElementById('loginFormData');
const signupFormData = document.getElementById('signupFormData');
const authClose = document.getElementById('authClose');
const userAvatar = document.getElementById('userAvatar');

// Upload modal elements
const uploadModal = document.getElementById('uploadModal');
const uploadBtn = document.getElementById('uploadBtn');
const uploadForm = document.getElementById('uploadForm');
const uploadClose = document.getElementById('uploadClose');

// Profile modal elements
const profileModal = document.getElementById('profileModal');
const profileClose = document.getElementById('profileClose');
const profileAvatarImg = document.getElementById('profileAvatarImg');
const profileUsername = document.getElementById('profileUsername');
const profileEmail = document.getElementById('profileEmail');
const profileJoinDate = document.getElementById('profileJoinDate');
const videosCount = document.getElementById('videosCount');
const subscribersCount = document.getElementById('subscribersCount');
const editProfileBtn = document.getElementById('editProfileBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Settings modal elements
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const settingsClose = document.getElementById('settingsClose');
const languageSelect = document.getElementById('languageSelect');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const cancelSettingsBtn = document.getElementById('cancelSettingsBtn');

// Edit profile modal elements
const editProfileModal = document.getElementById('editProfileModal');
const editProfileClose = document.getElementById('editProfileClose');
const editProfileForm = document.getElementById('editProfileForm');
const editUsername = document.getElementById('editUsername');
const editEmail = document.getElementById('editEmail');
const editBio = document.getElementById('editBio');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const avatarFileInput = document.getElementById('avatarFileInput');
const currentAvatarPreview = document.getElementById('currentAvatarPreview');

// Enhanced upload modal elements
const videoUploadArea = document.getElementById('videoUploadArea');
const uploadDetails = document.getElementById('uploadDetails');
const uploadActions = document.getElementById('uploadActions');
const backBtn = document.getElementById('backBtn');
const publishBtn = document.getElementById('publishBtn');
const videoTagsInput = document.getElementById('videoTagsInput');
const thumbnailPreview = document.getElementById('thumbnailPreview');

// Theme toggle
const themeToggle = document.getElementById('themeToggle');

// Current section state
let currentSection = 'home';

// Render video cards
function renderVideos() {
    videoGrid.innerHTML = '';

    let displayVideos = [];

    switch (currentSection) {
        case 'home':
            // Show all user-uploaded videos
            displayVideos = userVideos.length > 0 ? userVideos : [];
            break;
        case 'shorts':
            // Show only short videos (mock - videos under 1 minute)
            displayVideos = userVideos.filter(video => video.duration.includes(':') && parseInt(video.duration.split(':')[0]) < 1);
            break;
        case 'subscriptions':
            // Show videos from subscribed channels (mock - all videos for now)
            displayVideos = userVideos.length > 0 ? userVideos : [];
            break;
        case 'library':
            // Show user's own videos
            displayVideos = userVideos.filter(video => video.uploadedBy === currentUser?.username);
            break;
        default:
            displayVideos = userVideos.length > 0 ? userVideos : [];
    }

    if (displayVideos.length === 0) {
        const sectionMessages = {
            home: 'noVideosMessage',
            shorts: 'noShortsMessage',
            subscriptions: 'noSubscriptionsMessage',
            library: 'noLibraryMessage'
        };

        videoGrid.innerHTML = `
            <div class="no-videos">
                <p>${t(sectionMessages[currentSection] || 'noVideosMessage')}</p>
            </div>
        `;
        return;
    }

    displayVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-meta">${video.channel}</p>
                <p class="video-meta">${video.views} • ${video.uploadTime}</p>
            </div>
        `;
        videoCard.addEventListener('click', () => openVideoModal(video));
        videoGrid.appendChild(videoCard);
    });
}

// Navigate to section
function navigateToSection(section) {
    currentSection = section;

    // Update active sidebar link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });

    const sectionIndex = ['home', 'shorts', 'subscriptions', 'library'].indexOf(section);
    if (sectionIndex !== -1) {
        document.querySelectorAll('.sidebar-link')[sectionIndex].classList.add('active');
    }

    // Re-render videos for the new section
    renderVideos();
}

// Open video modal
function openVideoModal(video) {
    videoPlayer.src = video.videoSrc;
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
    videoModal.style.display = 'block';
}

// Close video modal
function closeVideoModal() {
    videoModal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}

// Event listeners
closeBtn.addEventListener('click', closeVideoModal);

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Auth functions
function openAuthModal() {
    authModal.style.display = 'block';
}

function closeAuthModal() {
    authModal.style.display = 'none';
}

function switchToLogin() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

function switchToSignup() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    // Check if user exists and password matches
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = {
            username: user.username,
            email: user.email,
            bio: user.bio || '',
            videosCount: user.videosCount || 0,
            subscribersCount: user.subscribersCount || 0,
            joinDate: user.joinDate
        };
        saveCurrentUser();
        updateUserUI();
        closeAuthModal();
        alert(t('loginSuccess'));
    } else {
        alert(t('invalidCredentials'));
    }
}

function handleSignup(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Check if username already exists
    if (users.find(u => u.username === username)) {
        alert(t('usernameExists'));
        return;
    }

    // Create new user
    if (username && email && password) {
        const newUser = {
            username,
            email,
            password,
            bio: '',
            videosCount: 0,
            subscribersCount: 0,
            joinDate: new Date().toISOString(),
            avatar: `https://via.placeholder.com/80/4CAF50/FFFFFF?text=${username[0].toUpperCase()}`
        };
        users.push(newUser);
        localStorage.setItem('vidoraUsers', JSON.stringify(users));

        currentUser = {
            username,
            email,
            bio: '',
            videosCount: 0,
            subscribersCount: 0,
            joinDate: newUser.joinDate,
            avatar: newUser.avatar
        };
        saveCurrentUser();
        updateUserUI();
        closeAuthModal();
        alert(t('signupSuccess'));
    }
}

function updateUserUI() {
    if (currentUser) {
        const avatarSrc = currentUser.avatar || `https://via.placeholder.com/32/4CAF50/FFFFFF?text=${currentUser.username[0].toUpperCase()}`;
        userAvatar.innerHTML = `<img src="${avatarSrc}" alt="${currentUser.username}">`;
    } else {
        userAvatar.innerHTML = '<img src="https://via.placeholder.com/32" alt="User">';
    }
}

// Refresh page function
function refreshPage() {
    location.reload();
}

function openProfileModal() {
    if (!currentUser) {
        alert(t('pleaseLoginProfile'));
        openAuthModal();
        return;
    }

    // Update profile information
    profileAvatarImg.src = currentUser.avatar || `https://via.placeholder.com/80/4CAF50/FFFFFF?text=${currentUser.username[0].toUpperCase()}`;
    profileUsername.textContent = currentUser.username;
    profileEmail.textContent = currentUser.email;
    const joinDate = currentUser.joinDate ? new Date(currentUser.joinDate) : new Date();
    profileJoinDate.textContent = `${t('joined')} ${joinDate.toLocaleDateString()}`;

    // Calculate user stats
    videosCount.textContent = currentUser.videosCount || 0;
    subscribersCount.textContent = currentUser.subscribersCount || 0;

    profileModal.style.display = 'block';
}

function closeProfileModal() {
    profileModal.style.display = 'none';
}

// Language functions
function t(key) {
    return translations[currentLanguage][key] || key;
}

function updateLanguage() {
    // Update sidebar links
    document.querySelectorAll('.sidebar-link')[0].textContent = t('home');
    document.querySelectorAll('.sidebar-link')[1].textContent = t('shorts');
    document.querySelectorAll('.sidebar-link')[2].textContent = t('subscriptions');
    document.querySelectorAll('.sidebar-link')[3].textContent = t('library');

    // Update search placeholder
    document.querySelector('.search-input').placeholder = t('search');

    // Update auth tabs
    document.getElementById('loginTab').textContent = t('signIn');
    document.getElementById('signupTab').textContent = t('signUp');

    // Update auth form labels
    const loginInputs = document.querySelectorAll('#loginForm input');
    loginInputs[0].placeholder = t('username');
    loginInputs[1].placeholder = t('password');

    const signupInputs = document.querySelectorAll('#signupForm input');
    signupInputs[0].placeholder = t('username');
    signupInputs[1].placeholder = t('email');
    signupInputs[2].placeholder = t('password');

    // Update upload form
    document.querySelector('#uploadModal h2').textContent = t('uploadVideo');
    document.getElementById('videoTitleInput').placeholder = t('videoTitle');
    document.getElementById('videoDescriptionInput').placeholder = t('videoDescription');
    document.querySelector('#uploadForm button').textContent = t('upload');

    // Update profile modal
    document.querySelector('#profileModal h2').textContent = t('settings');
    document.getElementById('editProfileBtn').textContent = t('editProfile');
    document.getElementById('logoutBtn').textContent = t('logout');

    // Update settings modal
    document.querySelector('#settingsModal h2').textContent = t('settings');
    document.querySelector('.settings-section h3').textContent = t('language');
    document.getElementById('saveSettingsBtn').textContent = t('save');
    document.getElementById('cancelSettingsBtn').textContent = t('cancel');

    // Update stat labels
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 2) {
        statLabels[0].textContent = t('videos');
        statLabels[1].textContent = t('subscribers');
    }
}

function openSettingsModal() {
    languageSelect.value = currentLanguage;
    settingsModal.style.display = 'block';
}

function closeSettingsModal() {
    settingsModal.style.display = 'none';
}

function saveSettings() {
    const newLanguage = languageSelect.value;
    if (newLanguage !== currentLanguage) {
        currentLanguage = newLanguage;
        localStorage.setItem('vidoraLanguage', currentLanguage);
        updateLanguage();
    }
    closeSettingsModal();
}

function logout() {
    currentUser = null;
    saveCurrentUser();
    updateUserUI();
    alert(t('logoutSuccess'));
}

function saveCurrentUser() {
    if (currentUser) {
        localStorage.setItem('vidoraCurrentUser', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('vidoraCurrentUser');
    }
}

function loadCurrentUser() {
    const savedUser = localStorage.getItem('vidoraCurrentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

// Upload functions
function openUploadModal() {
    if (!currentUser) {
        alert(t('pleaseLogin'));
        openAuthModal();
        return;
    }
    uploadModal.style.display = 'block';
}

function closeUploadModal() {
    uploadModal.style.display = 'none';
}

function handleUpload(e) {
    e.preventDefault();
    const title = document.getElementById('videoTitleInput').value;
    const description = document.getElementById('videoDescriptionInput').value;
    const videoFile = document.getElementById('videoFileInput').files[0];
    const thumbnailFile = document.getElementById('thumbnailFileInput').files[0];

    if (title && description && videoFile && thumbnailFile) {
        // Mock upload - in real app, this would upload to server
        const newVideo = {
            id: Date.now(), // Use timestamp as unique ID
            title,
            thumbnail: URL.createObjectURL(thumbnailFile),
            duration: "10:00", // Mock duration
            channel: currentUser.username,
            views: "0 views",
            uploadTime: "Just now",
            videoSrc: URL.createObjectURL(videoFile),
            description,
            uploadedBy: currentUser.username
        };

        userVideos.push(newVideo);
        localStorage.setItem('vidoraUserVideos', JSON.stringify(userVideos));

        // Update user stats
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].videosCount = (users[userIndex].videosCount || 0) + 1;
            localStorage.setItem('vidoraUsers', JSON.stringify(users));
            currentUser.videosCount = users[userIndex].videosCount;
            saveCurrentUser();
        }

        renderVideos();
        closeUploadModal();
        alert(t('uploadSuccess'));
    } else {
        alert(t('fillAllFields'));
    }
}

// Theme functions
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
    themeToggle.classList.toggle('dark', isDarkTheme);

    // Save theme preference
    localStorage.setItem('darkTheme', isDarkTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        isDarkTheme = true;
        document.body.classList.add('dark');
        themeToggle.classList.add('dark');
    }
}

// Event listeners
userAvatar.addEventListener('click', () => {
    if (currentUser) {
        openProfileModal();
    } else {
        openAuthModal();
    }
});

loginTab.addEventListener('click', switchToLogin);
signupTab.addEventListener('click', switchToSignup);
loginFormData.addEventListener('submit', handleLogin);
signupFormData.addEventListener('submit', handleSignup);
authClose.addEventListener('click', closeAuthModal);

uploadBtn.addEventListener('click', openUploadModal);
uploadForm.addEventListener('submit', handleUpload);
uploadClose.addEventListener('click', closeUploadModal);

profileClose.addEventListener('click', closeProfileModal);
editProfileBtn.addEventListener('click', openEditProfileModal);
logoutBtn.addEventListener('click', () => {
    logout();
    closeProfileModal();
});

function openEditProfileModal() {
    editUsername.value = currentUser.username;
    editEmail.value = currentUser.email;
    editBio.value = currentUser.bio || '';
    editBio.placeholder = t('bioPlaceholder');
    currentAvatarPreview.src = currentUser.avatar || `https://via.placeholder.com/80/4CAF50/FFFFFF?text=${currentUser.username[0].toUpperCase()}`;
    editProfileModal.style.display = 'block';

    // Update form labels with current language
    document.querySelector('label[for="editUsername"]').textContent = t('username');
    document.querySelector('label[for="editEmail"]').textContent = t('email');
    document.querySelector('label[for="editBio"]').textContent = t('bio');
}

function closeEditProfileModal() {
    editProfileModal.style.display = 'none';
}

function handleEditProfile(e) {
    e.preventDefault();
    const newUsername = editUsername.value.trim();
    const newEmail = editEmail.value.trim();
    const newBio = editBio.value.trim();

    // Check if username is already taken by another user
    if (newUsername !== currentUser.username && users.find(u => u.username === newUsername)) {
        alert(t('usernameExists'));
        return;
    }

    // Update user data
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex].username = newUsername;
        users[userIndex].email = newEmail;
        users[userIndex].bio = newBio;
        localStorage.setItem('vidoraUsers', JSON.stringify(users));

        // Update current user
        currentUser.username = newUsername;
        currentUser.email = newEmail;
        currentUser.bio = newBio;
        if (currentUser.tempAvatar) {
            currentUser.avatar = currentUser.tempAvatar;
            delete currentUser.tempAvatar;
        }
        saveCurrentUser();

        // Update user data in users array
        const userIndex = users.findIndex(u => u.username === newUsername);
        if (userIndex !== -1) {
            users[userIndex].avatar = currentUser.avatar;
            localStorage.setItem('vidoraUsers', JSON.stringify(users));
        }

        // Update UI
        updateUserUI();
        updateLanguage(); // Refresh profile modal with new data
        closeEditProfileModal();
        alert(t('profileUpdated'));

        // Refresh the page to show updated avatar everywhere
        setTimeout(refreshPage, 1000);

        // Update user avatar in header
        updateUserUI();
    }
}

settingsBtn.addEventListener('click', openSettingsModal);
settingsClose.addEventListener('click', closeSettingsModal);
saveSettingsBtn.addEventListener('click', saveSettings);
cancelSettingsBtn.addEventListener('click', closeSettingsModal);

// Avatar upload functionality
avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            currentAvatarPreview.src = e.target.result;
            // Store avatar in current user temporarily (will be saved on form submit)
            currentUser.tempAvatar = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

themeToggle.addEventListener('click', toggleTheme);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        closeAuthModal();
    }
    if (e.target === uploadModal) {
        closeUploadModal();
    }
    if (e.target === profileModal) {
        closeProfileModal();
    }
    if (e.target === settingsModal) {
        closeSettingsModal();
    }
    if (e.target === editProfileModal) {
        closeEditProfileModal();
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    loadCurrentUser();
    loadTheme();
    updateLanguage();

    // Add click handlers for sidebar navigation
    document.querySelectorAll('.sidebar-link').forEach((link, index) => {
        const sections = ['home', 'shorts', 'subscriptions', 'library'];
        link.addEventListener('click', () => navigateToSection(sections[index]));
    });
});