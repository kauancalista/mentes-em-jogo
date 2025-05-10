// Dados do Jogo
const gameData = {
    editorToken: "editweb",
    player: {
        name: "",
        avatar: "avatar1.jpg",
        currentPhase: 1,
        currentQuestion: 0,
        score: 0,
        hintsUsed: 0
    },
    settings: {
        musicEnabled: true,
        volume: 0.5
    },
    ranking: [],
    phases: {
        1: {
            title: "Fase 1: O Despertar Filosófico",
            questions: [
                {
                    question: "Qual é o significado da palavra 'Filosofia'?",
                    answers: ["Amor à sabedoria", "Estudo da natureza", "Conhecimento matemático", "Arte da persuasão"],
                    correct: 0,
                    explanation: "Filosofia vem do grego 'philos' (amor) e 'sophia' (sabedoria)."
                },
                // Mais 4 perguntas...
            ]
        },
        // Fases 2 a 5...
    },
    avatars: ["avatar1.jpg", "avatar2.jpg", "avatar3.jpg"]
};

// Inicialização do Jogo
window.onload = function() {
    loadGameData();
    setupEventListeners();
    renderAvatars();
    renderPhases();
    
    if (!gameData.player.name) {
        showSection('home');
    } else {
        showSection('phases');
    }
    
    // Configurar música
    toggleMusic(gameData.settings.musicEnabled);
    document.getElementById('volume').value = gameData.settings.volume;
    document.getElementById('bg-music').volume = gameData.settings.volume;
};

// ... (FUNÇÕES COMPLETAS NO ARQUIVO JS) ...