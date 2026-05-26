// Dados de Desenhos e Atividades Originais Estáticos
const STATIC_CARTOON_VIDEOS = [
    {
        id: 'galinha-pintadinha',
        title: 'Galinha Pintadinha - Pintinho Amarelinho',
        category: 'musica',
        description: 'A clássica canção infantil brasileira que estimula o ritmo, a sonoridade dos animais e ensina sobre amizade e natureza de forma muito animada!',
        youtubeId: 'SreW8u4tXQA',
        coverImage: 'https://images.unsplash.com/photo-1598124146163-36819847286d?w=600&auto=format&fit=crop&q=80',
        duration: '3:20',
        skills: ['Ritmo Musical', 'Sons de Animais', 'Expressão Corporal'],
        activityTitle: 'O Pintinho de Esponja 🧽',
        activityText: 'Com uma esponja de cozinha macia cortada em círculo, pinte com tinta guache amarela um círculo no papel. Depois que secar, use canetinha laranja para desenhar o bico e as patinhas, e cole dois olhinhos ou faça com tinta. Essa atividade desenvolve a coordenação motora fina e a exploração sensorial das cores primárias!',
        materialsNeeded: ['Papel branco', 'Tinta guache amarela', 'Esponja de cozinha', 'Canetinha preta e laranja']
    },
    {
        id: 'mundo-bita',
        title: 'Mundo Bita - Safári',
        category: 'historias',
        description: 'Participe de uma grande aventura musical de jipe pela savana africana conhecendo a girafa, o elefante, o leão e muito mais!',
        youtubeId: 'f7Yk0K3I-QY',
        coverImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80',
        duration: '2:53',
        skills: ['Conhecimento da Fauna', 'Vocabulário', 'Curiosidade Científica'],
        activityTitle: 'Imitando os Gigantes 🦣',
        activityText: 'Vamos movimentar o corpo! Peça para a criança imitar o andar pesado e a tromba do elefante (braço esticado), o pescoço alto da girafa (braços pro alto na ponta dos pés) e o rugido forte do leão. Essa brincadeira psicomotora ajuda no desenvolvimento da consciência espacial, no equilíbrio dinâmico e na imitação simbólica.',
        materialsNeeded: ['Espaço amplo para brincar', 'Espelho grande', 'Música alegre']
    },
    {
        id: 'patrulha-canina',
        title: 'Patrulha Canina - Resgate Divertido',
        category: 'desenvolvimento',
        description: 'Acompanhe Ryder e os filhotes heroicos resolvendo problemas do dia a dia, promovendo o trabalho em equipe e a solidariedade.',
        youtubeId: 'Y_t_jRbyoI8',
        coverImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80',
        duration: '4:15',
        skills: ['Trabalho em Equipe', 'Resolução de Problemas', 'Ajuda Mútua'],
        activityTitle: 'Minha Equipe de Resgate 🚑',
        activityText: 'Use os brinquedos favoritos da criança para simular uma missão de resgate de um bichinho de pelúcia caído atrás de um monte de almofadas. Juntos criem caminhos seguros usando barbantes ou rampas feitas de papelão.',
        materialsNeeded: ['Brinquedos diversos', 'Almofadas grandes', 'Barbante colorido']
    },
    {
        id: 'bluey-familia',
        title: 'Bluey - Brincando com o Papai',
        category: 'desenvolvimento',
        description: 'Bluey e Bingo usam o poder da imaginação sem limites para transformar atividades cotidianas em aventuras inesquecíveis, cheias de lições afetivas.',
        youtubeId: 'Z-p_bMyW5Vw',
        coverImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80',
        duration: '5:30',
        skills: ['Inteligência Socioemocional', 'Criatividade Infantil', 'Brincar Livre'],
        activityTitle: 'Construindo o Forte de Almofadas 🎪',
        activityText: 'Pegue almofadas de sala, lençóis e cadeiras velhas para erguer um forte secreto na sala de estar. Coloque lanternas por dentro e use para leitura de contos infantis calmos.',
        materialsNeeded: ['Lençóis macios', 'Cadeiras', 'Almofadas', 'Lanterna portátil']
    },
    {
        id: 'turma-da-monica',
        title: 'Turma da Mônica - Amigos para Sempre',
        category: 'alfabetizacao',
        description: 'Viva histórias clássicas do Bairro do Limoeiro com Mônica, Cebolinha, Cascão e Magali trabalhando empatia, amizade e alfabetização lúdica.',
        youtubeId: 'j-h5EaA-n7Q',
        coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=80',
        duration: '6:10',
        skills: ['Alfabetização Lúdica', 'Expressões de Linguagem', 'Resolução de Conflitos'],
        activityTitle: 'Desenhando Balões de Fala 💬',
        activityText: 'Dobre uma folha sulfite comum ao meio, desenhe palitinhos representando os personagens prediletos e pergunte à criança o que cada um está dizendo. Escreva as respostas em balõezinhos de fala para associar a fala à grafia!',
        materialsNeeded: ['Papel sulfite ou canson', 'Lápis de cor', 'Muita conversa engraçada!']
    },
    {
        id: 'baby-shark-musical',
        title: 'Baby Shark - Ritmo no Fundo do Mar',
        category: 'musica',
        description: 'Cante e dance no fundo do mar com a família Shark! Excelente para coordenação psicomotora fina ao imitar o tamanho dos tubarões com as mãos.',
        youtubeId: 'XqZsoesa55w',
        coverImage: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&auto=format&fit=crop&q=80',
        duration: '2:16',
        skills: ['Coordenação Motora Fina', 'Sequenciamento Auditivo', 'Movimentos de Pinça'],
        activityTitle: 'Tubarão Amigo de Pregador 🏷️',
        activityText: 'Desenhe e recorte em papel o corpinho de um tubarão cortado ao meio horizontalmente. Cole cada metade em uma das pinças de madeira de um pregador de roupas. Ao abrir o pregador, as mandíbulas se mexem! Treina musculatura dos dedinhos da pinça.',
        materialsNeeded: ['Pregador de roupa de madeira', 'Papel colorido ou pintado', 'Cola escolar', 'Tesoura sem ponta']
    }
];

// Lista dinâmica ativa
let CARTOON_VIDEOS = [];

function loadCustomVideos() {
    CARTOON_VIDEOS = [...STATIC_CARTOON_VIDEOS];
    try {
        const saved = localStorage.getItem('pro_milena_custom_videos');
        if (saved) {
            const customList = JSON.parse(saved);
            customList.forEach(v => {
                if (!CARTOON_VIDEOS.some(item => item.id === v.id)) {
                    CARTOON_VIDEOS.push(v);
                }
            });
        }
    } catch (e) {
        console.error("Erro ao carregar vídeos personalizados", e);
    }
}

const DESCOBERTAS_QUIZ = [
    {
        id: 'q1',
        question: 'Qual desses amiguinhos adora cacarejar, usar óculos de carinho e chocar ovinhos em seu ninho?',
        options: ['A Galinha Pintadinha', 'O Elefante do Safári', 'O Filhote Chase'],
        correctAnswer: 0,
        explanation: 'A Galinha Pintadinha adora cantar com o seu galinho de gravata azul!',
        illustration: '🐔'
    },
    {
        id: 'q2',
        question: 'Se fôssemos passear na Savana do Safári, qual é o animal que tem um pescoço gigante que encosta nas nuvens?',
        options: ['O Leão Rugidor', 'A Girafa Altiva', 'O Jacaré Preguiçoso'],
        correctAnswer: 1,
        explanation: 'A girafa tem um pescoço bem compridão para encontrar as folhas mais altas!',
        illustration: '🦒'
    },
    {
        id: 'q3',
        question: 'Qual filhote da Patrulha Canina usa uma roupinha azul de policial e adora ajudar?',
        options: ['Marshall (o bombeiro)', 'Sky (a aviadora)', 'Chase (o policial)'],
        correctAnswer: 2,
        explanation: 'Chase está sempre pronto para proteger a cidade de Adventure Bay!',
        illustration: '🐕'
    }
];

const KIDS_ACHIEVEMENTS = [
    {
        id: 'badge-explorador',
        title: 'Explorador Curioso',
        description: 'Navegou por todo o cantinho pedagógico da Prô Milena.',
        icon: '🧭',
        color: 'from-amber-400 to-orange-400'
    },
    {
        id: 'badge-cantor',
        title: 'Super Cantor',
        description: 'Assistiu a listagem musical e soltou a voz com os desenhos.',
        icon: '🎵',
        color: 'from-pink-400 to-rose-500'
    },
    {
        id: 'badge-artista',
        title: 'Artista das Manualidades',
        description: 'Entrou em um desenho e descobriu uma atividade lúdica incrível!',
        icon: '🎨',
        color: 'from-emerald-400 to-teal-500'
    },
    {
        id: 'badge-genio',
        title: 'Sabe-Tudo Mirim',
        description: 'Acertou as perguntinhas divertidas do Quiz das Descobertas.',
        icon: '💡',
        color: 'from-yellow-300 to-amber-500'
    }
];

// Estado do App
let activeTab = 'home';
let unlockedBadges = [];
let currentQuizIndex = 0;
let selectedQuizOption = null;
let selectedCategory = 'tudo';
let detailVideo = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Pegar relógio real
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    
    // Carregar vídeos personalizados salvos pela Prô Milena
    loadCustomVideos();
    
    // Carregar selos
    const saved = localStorage.getItem('pro_milena_badges');
    if (saved) {
        try { unlockedBadges = JSON.parse(saved); } catch (e) {}
    }
    updateBadgesUI();
    
    // Registrar ícones do lucide
    lucide.createIcons();
    
    // Iniciar com Home renderizada
    renderQuiz();
    renderAchievementsWall();
    renderVideosGrid();
    renderCategoryPills();
});

// Troca de Abas
function switchTab(tabId) {
    activeTab = tabId;
    detailVideo = null;
    
    // Alterar Estilo de Botões da Nav
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.className = "nav-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold transition-all text-gray-600 hover:bg-yellow-50 hover:text-[#FF6B6B]";
    });
    
    const activeBtn = document.getElementById(`tab-${tabId}`);
    if (activeBtn) {
        if (tabId === 'home') activeBtn.className = "nav-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold transition-all bg-[#FF6B6B] text-white shadow-md scale-105";
        if (tabId === 'about') activeBtn.className = "nav-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold transition-all bg-[#A78BFA] text-white shadow-md scale-105";
        if (tabId === 'videos') activeBtn.className = "nav-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold transition-all bg-[#60A5FA] text-white shadow-md scale-105";
        if (tabId === 'admin') activeBtn.className = "nav-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-semibold transition-all bg-[#FBBF24] text-white shadow-md scale-105";
    }

    // Alterar Visibilidade das Seções
    document.getElementById('section-home').classList.add('hidden');
    document.getElementById('section-about').classList.add('hidden');
    document.getElementById('section-videos').classList.add('hidden');
    document.getElementById('section-video-detail').classList.add('hidden');
    document.getElementById('section-admin').classList.add('hidden');
            
    if (tabId === 'home') {
        document.getElementById('section-home').classList.remove('hidden');
    } else if (tabId === 'about') {
        document.getElementById('section-about').classList.remove('hidden');
        unlockBadge('badge-explorador');
    } else if (tabId === 'videos') {
        document.getElementById('section-videos').classList.remove('hidden');
        unlockBadge('badge-cantor');
    } else if (tabId === 'admin') {
        document.getElementById('section-admin').classList.remove('hidden');
        renderAdminSection();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lógica de Administração e Customização de Vídeos (Área da Prô)
let isAdminLoggedIn = localStorage.getItem('pro_milena_admin_logged_in') === 'true';

function renderAdminSection() {
    const loginCard = document.getElementById('admin-login-card');
    const dashboardPanel = document.getElementById('admin-dashboard-panel');
    
    if (isAdminLoggedIn) {
        loginCard.classList.add('hidden');
        dashboardPanel.classList.remove('hidden');
        renderAdminCustomVideosList();
    } else {
        loginCard.classList.remove('hidden');
        dashboardPanel.classList.add('hidden');
        document.getElementById('admin-password-input').value = '';
        document.getElementById('admin-login-error').classList.add('hidden');
    }
}

function handleAdminLogin() {
    const password = document.getElementById('admin-password-input').value;
    if (password.toLowerCase() === 'milena') {
        isAdminLoggedIn = true;
        localStorage.setItem('pro_milena_admin_logged_in', 'true');
        renderAdminSection();
    } else {
        const err = document.getElementById('admin-login-error');
        err.classList.remove('hidden');
    }
}

function handleAdminLogout() {
    isAdminLoggedIn = false;
    localStorage.removeItem('pro_milena_admin_logged_in');
    renderAdminSection();
}

function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
}

function handleAddVideo() {
    const title = document.getElementById('v-title').value.trim();
    const category = document.getElementById('v-category').value;
    const linkRaw = document.getElementById('v-youtube-url').value.trim();
    const duration = document.getElementById('v-duration').value.trim();
    const skillsRaw = document.getElementById('v-skills').value.trim();
    let cover = document.getElementById('v-cover').value.trim();
    const desc = document.getElementById('v-desc').value.trim();
    
    const actTitle = document.getElementById('v-act-title').value.trim();
    const actMaterialsRaw = document.getElementById('v-act-materials').value.trim();
    const actDesc = document.getElementById('v-act-desc').value.trim();

    const youtubeId = extractYouTubeId(linkRaw);
    
    if (!youtubeId || youtubeId.length !== 11) {
        alert('ID do YouTube inválido ou link incompatível. Por favor, coloque um link válido!');
        return;
    }

    if (!cover) {
        cover = `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
    }

    const skills = skillsRaw.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const materialsNeeded = actMaterialsRaw.split(',').map(m => m.trim()).filter(m => m.length > 0);

    const newVideoObj = {
        id: `custom-video-${Date.now()}`,
        title,
        category,
        description: desc,
        youtubeId,
        coverImage: cover,
        duration,
        skills,
        activityTitle: actTitle,
        activityText: actDesc,
        materialsNeeded
    };

    try {
        const saved = localStorage.getItem('pro_milena_custom_videos');
        const list = saved ? JSON.parse(saved) : [];
        list.push(newVideoObj);
        localStorage.setItem('pro_milena_custom_videos', JSON.stringify(list));
        
        loadCustomVideos();
        document.getElementById('add-video-form').reset();
        renderAdminCustomVideosList();
        renderVideosGrid();
        alert('Vídeo publicado com sucesso no seu canal de desenhos! ⭐');
    } catch (e) {
        console.error(e);
        alert('Ops! Ocorreu um problema ao salvar o vídeo.');
    }
}

function handleDeleteCustomVideo(id) {
    if (!confirm('Deseja mesmo remover esse desenho/vídeo do seu catálogo?')) return;
    
    try {
        const saved = localStorage.getItem('pro_milena_custom_videos');
        if (saved) {
            const list = JSON.parse(saved);
            const filtered = list.filter(v => v.id !== id);
            localStorage.setItem('pro_milena_custom_videos', JSON.stringify(filtered));
            loadCustomVideos();
            renderAdminCustomVideosList();
            renderVideosGrid();
        }
    } catch (e) {
        console.error(e);
    }
}

function renderAdminCustomVideosList() {
    const container = document.getElementById('admin-custom-videos-list');
    if (!container) return;
    container.innerHTML = '';

    try {
        const saved = localStorage.getItem('pro_milena_custom_videos');
        const list = saved ? JSON.parse(saved) : [];
        
        if (list.length === 0) {
            container.innerHTML = `
                <div class="p-6 border-2 border-dashed border-gray-200 rounded-3xl text-center space-y-2">
                    <span class="text-4xl text-yellow-500">📺</span>
                    <h4 class="font-display font-bold text-gray-500 text-sm">Nenhum vídeo customizado ativo</h4>
                    <p class="text-xs text-gray-400 font-sans">Cadastre seu primeiro projeto utilizando o formulário de mídias ao lado!</p>
                </div>
            `;
            return;
        }

        list.forEach(v => {
            let catPill = 'bg-blue-100 text-blue-700';
            let catLabel = '🤸 Brincar';
            if (v.category === 'musica') { catPill = 'bg-pink-100 text-pink-700'; catLabel = '🎵 Música'; }
            else if (v.category === 'historias') { catPill = 'bg-amber-100 text-amber-700'; catLabel = '🦒 Histórias'; }
            else if (v.category === 'alfabetizacao') { catPill = 'bg-violet-100 text-violet-700'; catLabel = '📚 Alfabetização'; }

            container.innerHTML += `
                <div class="bg-gray-50/50 p-3.5 rounded-2xl border border-gray-200 flex items-center justify-between gap-3 font-sans">
                    <div class="flex items-center gap-3">
                        <img src="${v.coverImage}" alt="${v.title}" class="w-16 h-12 rounded-xl object-cover border border-gray-200 flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1598124146163-36819847286d?w=100&q=80'" />
                        <div class="text-left font-sans">
                            <h4 class="font-display font-bold text-xs text-gray-800 line-clamp-1">${v.title}</h4>
                            <div class="flex items-center gap-1.5 mt-1">
                                <span class="text-[9px] font-bold px-2 py-0.5 rounded-md ${catPill}">${catLabel}</span>
                                <span class="text-[9px] font-mono text-gray-400">${v.duration}</span>
                            </div>
                        </div>
                    </div>
                    <button onclick="handleDeleteCustomVideo('${v.id}')" class="bg-red-50 hover:bg-red-100 text-red-655 p-2 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer flex-shrink-0" title="Apagar Vídeo">
                        <i data-lucide="trash-2" class="w-4 h-4 text-red-600"></i>
                    </button>
                </div>
            `;
        });
        
        lucide.createIcons();
    } catch (e) {
        console.error(e);
    }
}

function scrollToQuiz() {
    const el = document.getElementById('quiz-section');
    el?.scrollIntoView({ behavior: 'smooth' });
}

function unlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('pro_milena_badges', JSON.stringify(unlockedBadges));
        updateBadgesUI();
        renderAchievementsWall();
    }
}

function updateBadgesUI() {
    const count = unlockedBadges.length;
    document.getElementById('badge-counter').textContent = count;
}

function renderAchievementsWall() {
    const container = document.getElementById('achievements-wall');
    if (!container) return;
    container.innerHTML = '';

    KIDS_ACHIEVEMENTS.forEach(badge => {
        const isUnlocked = unlockedBadges.includes(badge.id);
        const bgClass = isUnlocked ? 'bg-white border-yellow-250 border-3 shadow-md' : 'bg-gray-50/55 border-gray-200 border opacity-60';
        const stampBlock = isUnlocked ? `bg-gradient-to-br ${badge.color}` : 'bg-stone-200';
        const stampIcon = isUnlocked ? badge.icon : '🔒';
        const checkImg = isUnlocked ? `<div class="absolute -top-1.5 -right-1.5 bg-green-500 text-white rounded-full p-0.5 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-3.5 h-3.5"><path d="M20 6 9 17l-5-5"/></svg></div>` : '';

        container.innerHTML += `
            <div class="p-4 rounded-3xl border flex flex-col items-center justify-center space-y-2 relative transition-all ${bgClass}">
                <div class="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-sm ${stampBlock}">
                    ${stampIcon}
                </div>
                <div>
                    <h4 class="font-display font-bold text-xs text-gray-800">${badge.title}</h4>
                    <p class="text-[9px] text-gray-400 font-sans mt-0.5 max-w-[100px] leading-normal mx-auto">${badge.description}</p>
                </div>
                ${checkImg}
            </div>
        `;
    });
}

function renderQuiz() {
    const content = document.getElementById('quiz-content');
    if (currentQuizIndex === DESCOBERTAS_QUIZ.length) {
        content.innerHTML = `
            <div class="text-center py-6 space-y-4">
                <span class="text-6xl text-center inline-block">🏆</span>
                <h3 class="text-xl md:text-2xl font-display font-extrabold text-[#FBBF24]">Parabéns, Pequeno Grande Sábio!</h3>
                <p class="text-xs md:text-sm text-gray-600 max-w-sm mx-auto">
                    Você completou todos os desafios pedagógicos e destravou o selo de <strong>Sabe-Tudo Mirim</strong>!
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button onclick="restartQuiz()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-display font-semibold px-4 py-2 rounded-xl text-xs cursor-pointer">🔄 Jogar de Novo</button>
                    <button onclick="scrollToStickers()" class="bg-yellow-400 hover:bg-yellow-500 text-amber-900 font-display font-bold px-4 py-2 rounded-xl text-xs cursor-pointer">🏅 Ver Selos</button>
                </div>
            </div>
        `;
        unlockBadge('badge-genio');
        return;
    }

    const questionObj = DESCOBERTAS_QUIZ[currentQuizIndex];
    let optionsHTML = '';
    
    questionObj.options.forEach((opt, idx) => {
        let btnStyle = 'border-2 border-gray-200 bg-gray-50 hover:bg-yellow-50/55 cursor-pointer';
        let svgBadge = '';
        
        if (selectedQuizOption !== null) {
            if (idx === questionObj.correctAnswer) {
                btnStyle = 'bg-green-100 border-green-500 text-green-800';
                svgBadge = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-green-600 w-5 h-5"><path d="M20 6 9 17l-5-5"/></svg>`;
            } else if (idx === selectedQuizOption) {
                btnStyle = 'bg-red-100 border-red-400 text-red-800';
            } else {
                btnStyle = 'opacity-50 border-gray-100 bg-gray-50';
            }
        }

        const clickAction = selectedQuizOption === null ? `onclick="onQuizAnswer(${idx})"` : '';

        optionsHTML += `
            <button ${clickAction} class="w-full text-left px-4 py-3.5 rounded-xl font-display font-medium text-sm md:text-base transition-all flex items-center justify-between ${btnStyle}">
                <span>${opt}</span>
                ${svgBadge}
            </button>
        `;
    });

    let feedbackHTML = '';
    if (selectedQuizOption !== null) {
        const activeIsCorrect = selectedQuizOption === questionObj.correctAnswer;
        const feedbackColor = activeIsCorrect ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100';
        const feedbackText = activeIsCorrect ? questionObj.explanation : 'Ops! Tente de novo, com muito amor!';
        
        feedbackHTML = `
            <div class="p-3.5 rounded-xl text-xs font-medium border ${feedbackColor}">
                ${feedbackText}
            </div>
        `;
    }

    const nextActionBtn = selectedQuizOption !== null ? `
        <div class="flex justify-end pt-2">
            <button onclick="nextQuizStep()" class="bg-[#FF6B6B] hover:bg-red-600 text-white font-display font-bold px-5 py-2.5 rounded-xl text-xs shadow-md cursor-pointer">
                ${currentQuizIndex < DESCOBERTAS_QUIZ.length - 1 ? 'Próxima pergunta 👉' : 'Finalizar Desafio 🎉'}
            </button>
        </div>
    ` : '';

    content.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-gray-400 uppercase">DESAFIO ${currentQuizIndex + 1} de ${DESCOBERTAS_QUIZ.length}</span>
                <span class="text-2xl">${questionObj.illustration}</span>
            </div>
            <h3 class="font-display font-bold text-lg md:text-xl text-gray-800 leading-relaxed text-left">${questionObj.question}</h3>
            <div class="grid grid-cols-1 gap-3">${optionsHTML}</div>
            ${feedbackHTML}
            ${nextActionBtn}
        </div>
    `;
}

function onQuizAnswer(optIndex) {
    selectedQuizOption = optIndex;
    renderQuiz();
}

function nextQuizStep() {
    selectedQuizOption = null;
    currentQuizIndex++;
    renderQuiz();
}

function restartQuiz() {
    currentQuizIndex = 0;
    selectedQuizOption = null;
    renderQuiz();
}

function scrollToStickers() {
    const wall = document.getElementById('sticker-wall');
    wall?.scrollIntoView({ behavior: 'smooth' });
}

function renderCategoryPills() {
    const container = document.getElementById('category-pills');
    if(!container) return;
    container.innerHTML = '';
    
    const categories = [
        { key: 'tudo', label: 'Todos os Desenhos', icon: '🎨' },
        { key: 'musica', label: 'Musiquinhas', icon: '🎵' },
        { key: 'historias', label: 'Histórias & Fauna', icon: '🦒' },
        { key: 'alfabetizacao', label: 'Alfabetização', icon: '📚' },
        { key: 'desenvolvimento', label: 'Coordenação e Brincar', icon: '🤸' }
    ];

    categories.forEach(cat => {
        const isActive = selectedCategory === cat.key;
        const pillClass = isActive ? 'bg-[#60A5FA] text-white border-b-2 border-blue-600 scale-105' : 'bg-white text-gray-600 border border-yellow-101 hover:bg-yellow-50/50';
        
        container.innerHTML += `
            <button onclick="selectCategory('${cat.key}')" class="flex items-center gap-1.5 px-4 py-2 rounded-full font-display font-bold text-xs md:text-sm shadow-sm transition-all cursor-pointer ${pillClass}">
                <span>${cat.icon}</span>
                <span>${cat.label}</span>
            </button>
        `;
    });
}

function selectCategory(catKey) {
    selectedCategory = catKey;
    renderCategoryPills();
    filterVideos();
}

function filterVideos() {
    const query = document.getElementById('video-search').value.toLowerCase();
    const grid = document.getElementById('videos-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = CARTOON_VIDEOS.filter(v => {
        const matchCat = selectedCategory === 'tudo' || v.category === selectedCategory;
        const matchSearch = v.title.toLowerCase().includes(query) || v.description.toLowerCase().includes(query);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-3xl border max-w-sm mx-auto space-y-3">
                <span class="text-5xl">🤔</span>
                <h3 class="font-display font-bold text-gray-700">Nenhum desenho localizado!</h3>
                <p class="text-xs text-gray-400 font-sans">Modifique a pesquisa ou a categoria.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(v => {
        let badgeColor = 'bg-emerald-400';
        let tagText = '🤸 Coordenação';
        if(v.category === 'musica') { badgeColor = 'bg-pink-400'; tagText = '🎵 Música'; }
        else if(v.category === 'historias') { badgeColor = 'bg-amber-400'; tagText = '🦒 Histórias'; }
        else if(v.category === 'alfabetizacao') { badgeColor = 'bg-violet-400'; tagText = '📚 Alfabetização'; }

        let skillsHTML = '';
        v.skills.forEach(sk => {
            skillsHTML += `<span class="bg-yellow-50 text-amber-700 font-display font-bold text-[9px] px-2 py-0.5 rounded-lg border border-yellow-101">⭐ ${sk}</span>`;
        });

        grid.innerHTML += `
            <div onclick="showVideoDetail('${v.id}')" class="bg-white rounded-3xl overflow-hidden border-2 border-yellow-100 shadow-sm hover:shadow-xl cursor-pointer flex flex-col h-full transform hover:-translate-y-1.5 transition-all group relative">
                <div class="relative aspect-video overflow-hidden bg-stone-100">
                    <img src="${v.coverImage}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div class="absolute top-3 right-3 bg-white/90 text-gray-700 font-display font-bold text-[10px] px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <i data-lucide="timer" class="w-3 h-3 text-brand-sky"></i>
                        <span>${v.duration}</span>
                    </div>
                    <div class="absolute bottom-3 left-3">
                        <span class="text-[10px] font-display font-bold px-2.5 py-1 rounded-xl shadow-sm bg-white text-gray-800 border-2 border-yellow-50">
                            ${tagText}
                        </span>
                    </div>
                </div>

                <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div class="space-y-2 text-left">
                        <h3 class="font-display font-bold text-base md:text-lg text-gray-800 leading-snug group-hover:text-[#FF6B6B] transition-colors line-clamp-1">${v.title}</h3>
                        <p class="text-xs text-gray-500 line-clamp-3 leading-normal font-sans">${v.description}</p>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t border-yellow-50 text-left">
                        <p class="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase">Estímulos:</p>
                        <div class="flex flex-wrap gap-1">${skillsHTML}</div>
                    </div>
                </div>

                <div class="h-2.5 w-full ${badgeColor}"></div>
            </div>
        `;
    });
    lucide.createIcons();
}

function renderVideosGrid() {
    filterVideos();
}

function showVideoDetail(videoId) {
    const video = CARTOON_VIDEOS.find(v => v.id === videoId);
    if (!video) return;

    detailVideo = video;
    unlockBadge('badge-artista');

    document.getElementById('section-home').classList.add('hidden');
    document.getElementById('section-about').classList.add('hidden');
    document.getElementById('section-videos').classList.add('hidden');
    document.getElementById('section-video-detail').classList.remove('hidden');

    document.getElementById('video-frame-wrapper').innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0"
          title="${video.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute inset-0 w-full h-full"
        ></iframe>
    `;

    document.getElementById('detail-title').textContent = video.title;
    document.getElementById('detail-desc').textContent = video.description;
    document.getElementById('activity-title').textContent = video.activityTitle;
    document.getElementById('activity-text').textContent = video.activityText;

    const skillsWrapper = document.getElementById('detail-skills');
    skillsWrapper.innerHTML = '';
    video.skills.forEach(sk => {
        skillsWrapper.innerHTML += `<span class="bg-yellow-50 text-amber-700 font-display font-bold text-[9px] px-2 py-0.5 rounded-lg border border-yellow-101">⭐ ${sk}</span>`;
    });

    const materialsWrapper = document.getElementById('activity-materials');
    materialsWrapper.innerHTML = '';
    video.materialsNeeded.forEach((mat, mIdx) => {
        materialsWrapper.innerHTML += `
            <div onclick="toggleMaterialCheck('${vRaw(mat)}', this)" class="flex items-start text-left gap-2 py-1.5 px-2.5 rounded-xl hover:bg-yellow-50 transition-colors cursor-pointer group">
                <div class="mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors border-yellow-200 bg-yellow-50 checkbox-indicator">
                    <!-- Inset Check Icon -->
                </div>
                <span class="text-xs font-semibold font-sans text-gray-600 text-label-check">${mat}</span>
            </div>
        `;
    });
    document.getElementById('reaction-toast').className = "hidden";
}

function vRaw(str) {
    return str.replace(/'/g, "\\'");
}

function toggleMaterialCheck(matName, element) {
    const checkbox = element.querySelector('.checkbox-indicator');
    const label = element.querySelector('.text-label-check');
    
    if (checkbox.classList.contains('bg-green-500')) {
        checkbox.className = "mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors border-yellow-200 bg-yellow-50 checkbox-indicator";
        checkbox.innerHTML = '';
        label.className = "text-xs font-semibold font-sans text-gray-600 text-label-check";
    } else {
        checkbox.className = "mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors bg-green-500 border-green-600 text-white checkbox-indicator";
        checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" class="w-3 h-3"><path d="M20 6 9 17l-5-5"/></svg>`;
        label.className = "text-xs font-semibold font-sans line-through text-gray-400 text-label-check";
    }
}

function backToCatalog() {
    document.getElementById('video-frame-wrapper').innerHTML = '';
    switchTab('videos');
}

function throwEmoji(emoji, text) {
    const toast = document.getElementById('reaction-toast');
    const toastText = document.getElementById('reaction-toast-text');
    toast.className = "bg-yellow-50 text-amber-800 rounded-xl p-3 text-center border-yellow-200 border-2 font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm animate-pulse";
    toastText.textContent = text;

    const container = document.getElementById('tv-reactions-container');
    if(!container) return;
    const item = document.createElement('div');
    item.className = "absolute text-5xl select-none splat-emoji-anim pointer-events-none z-30";
    item.style.left = `${Math.random() * 80 + 10}%`;
    item.style.top = `${Math.random() * 60 + 20}%`;
    item.textContent = emoji;

    container.appendChild(item);
    setTimeout(() => {
        item.remove();
    }, 1200);
}

