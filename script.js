// Jogo Mentes em Jogo: A Jornada Filosófica - Versão Depuração Avançada (Maio 2025)

// --- Dados Iniciais do Jogo ---
const initialGameData = {
  player: {
    name: '',
    avatar: 'images/avatars/placeholder_avatar.png',
    score: 0,
    unlockedPhases: 1,
    completedPhases: [],
  },
  availableAvatars: [
    'images/avatars/coruja_sabia.png',
    'images/avatars/filosofo_classico.png',
    'images/avatars/mente_abstrata.png',
    'images/avatars/estudante_curioso.png',
    'images/avatars/placeholder_avatar.png',
    'images/avatars/avat_re.png',
    'images/avatars/avat_reee.png',
    'images/avatars/avaat_re.png',
  ],
  phaseDetails: {
    1: { title: 'O Despertar Filosófico', theme: 'O sentido da Filosofia da Educação' },
    2: { title: 'As Origens do Pensamento', theme: 'A origem do pensamento ocidental e a preocupação com o conhecimento' },
    3: { title: 'Vozes de Atenas', theme: 'Sócrates e Platão na Educação' },
    4: { title: 'A Lógica de Aristóteles', theme: 'A questão do conhecimento segundo Aristóteles' },
    5: { title: 'Ética e Formação', theme: 'Questões éticas, educação e formação de professores' },
  },
  questions: { // 5 perguntas para cada fase
    1: [
      { question: 'P1-Q1: Qual é o principal objetivo da Filosofia da Educação?', answers: ['Formar cidadãos críticos e reflexivos', 'Transmitir conhecimentos técnicos', 'Preparar para o mercado de trabalho', 'Manter tradições culturais'], correct: 0, explanation: 'A Filosofia da Educação busca formar indivíduos capazes de pensar criticamente.' },
      { question: 'P1-Q2: Qual destes NÃO é um papel da Filosofia da Educação?', answers: ['Questionar os fundamentos da prática educativa', 'Definir métodos pedagógicos únicos e universais', 'Refletir sobre os fins da educação', 'Analisar os valores no processo educativo'], correct: 1, explanation: 'A Filosofia da Educação não define métodos únicos, mas reflete sobre a educação.' },
      { question: "P1-Q3: A Filosofia da Educação é uma construção coletiva. Verdadeiro ou Falso?", answers: ['Verdadeiro', 'Falso'], correct: 0, explanation: 'É um campo construído por diversos pensadores ao longo da história.' },
      { question: 'P1-Q4: A Filosofia da Educação se preocupa principalmente com:', answers: ["O 'como' ensinar (métodos)", "O 'porquê' e 'para quê' ensinar (fins)", 'A avaliação de aprendizagem', 'A gestão escolar'], correct: 1, explanation: 'A Filosofia da Educação reflete sobre os fins e significados.' },
      { question: 'P1-Q5: A natureza do conhecimento é um tema da Filosofia da Educação?', answers: ['Sim', 'Não'], correct: 0, explanation: 'A natureza do conhecimento é um dos aspectos da reflexão filosófica sobre educação.' },
    ],
    2: [
      { question: 'P2-Q1: Qual foi a principal preocupação dos pré-socráticos?', answers: ['A origem e constituição do universo (arché)', 'A vida após a morte', 'A organização política', 'A educação das crianças'], correct: 0, explanation: 'Os pré-socráticos buscavam entender o princípio (arché) de todas as coisas.' },
      { question: 'P2-Q2: Sócrates foi um filósofo pré-socrático?', answers: ['Sim', 'Não'], correct: 1, explanation: 'Sócrates marca a transição para uma filosofia focada em questões humanas, não sendo pré-socrático.' },
      { question: 'P2-Q3: O pensamento filosófico busca explicações baseadas em quê?', answers: ['Mitos e tradições', 'Revelações divinas', 'Razão (logos) e argumentação', 'Intuição e sentimentos'], correct: 2, explanation: 'A filosofia nasce da busca por explicações racionais (logos).' },
      { question: 'P2-Q4: "Logos" é um conceito importante para os pré-socráticos?', answers: ['Sim, especialmente para Heráclito', 'Não, surgiu apenas com Platão', 'Era um conceito apenas poético', 'Referia-se aos deuses olímpicos'], correct: 0, explanation: "O conceito de logos (razão, discurso) foi fundamental para filósofos como Heráclito." },
      { question: 'P2-Q5: O surgimento da filosofia na Grécia Antiga deveu-se a um único fator?', answers: ['Sim, a genialidade dos gregos', 'Sim, a intervenção divina', 'Não, foi um conjunto de fatores sociais, culturais e econômicos', 'Sim, o desenvolvimento da escrita apenas'], correct: 2, explanation: 'Fatores como contato cultural, pólis, e escrita contribuíram para o surgimento da filosofia.' },
    ],
    3: [
      { question: 'P3-Q1: "Conhece-te a ti mesmo" é uma máxima associada a qual filósofo?', answers: ['Platão', 'Aristóteles', 'Sócrates', 'Parmênides'], correct: 2, explanation: 'Esta inscrição no Oráculo de Delfos foi fundamental para a filosofia socrática.' },
      { question: 'P3-Q2: Para Platão, o conhecimento verdadeiro se encontra em qual mundo?', answers: ['No mundo sensível, dos objetos físicos', 'No Mundo das Ideias ou Formas', 'Nas opiniões da maioria', 'Nos livros sagrados'], correct: 1, explanation: 'Platão defendia que o Mundo das Ideias é a realidade perfeita e fonte do conhecimento verdadeiro.' },
      { question: 'P3-Q3: O que é a "maiêutica" socrática?', answers: ['Um discurso longo e persuasivo', 'A arte de ensinar através de punições', 'Um método de perguntas e respostas para "dar à luz" ideias', 'A memorização de diálogos filosóficos'], correct: 2, explanation: 'A maiêutica é o método socrático de auxiliar o interlocutor a encontrar a verdade por si mesmo.' },
      { question: 'P3-Q4: Na "Alegoria da Caverna" de Platão, o que as sombras representam?', answers: ['O conhecimento verdadeiro', 'As Ideias perfeitas', 'As aparências e o mundo sensível, ilusório', 'Os deuses gregos'], correct: 2, explanation: 'As sombras simbolizam o nível mais baixo de conhecimento, baseado em aparências e ilusões.' },
      { question: 'P3-Q5: Sócrates foi condenado à morte por quais acusações principais?', answers: ['Roubo e assassinato', 'Corromper a juventude e não crer nos deuses da cidade', 'Traição política', 'Falsificação de moeda'], correct: 1, explanation: 'As acusações formais contra Sócrates incluíam corromper a juventude e impiedade.' },
    ],
    4: [
      { question: 'P4-Q1: Aristóteles considerava a experiência sensorial importante para o conhecimento?', answers: ['Não, ele valorizava apenas a razão pura como Platão', 'Sim, como ponto de partida para o conhecimento', 'Apenas para conhecimentos práticos, não teóricos', 'Ele não discutiu a experiência sensorial'], correct: 1, explanation: 'Diferente de Platão, Aristóteles via a experiência como crucial para o processo de conhecimento.' },
      { question: 'P4-Q2: Qual das Quatro Causas aristotélicas se refere ao "propósito" ou "fim" de algo?', answers: ['Causa Material', 'Causa Formal', 'Causa Eficiente', 'Causa Final'], correct: 3, explanation: 'A Causa Final (telos) é o propósito para o qual algo existe ou é feito.' },
      { question: 'P4-Q3: O que é "Eudaimonia" na ética de Aristóteles?', answers: ['Um estado de prazer momentâneo', 'A felicidade como realização plena da natureza humana, ou "bem viver"', 'A obediência às leis divinas', 'A riqueza material'], correct: 1, explanation: 'Eudaimonia é o bem supremo para o ser humano, alcançado através da vida virtuosa e racional.' },
      { question: 'P4-Q4: Para Aristóteles, a virtude moral é encontrada como?', answers: ['Em extremos de comportamento (excesso ou falta)', 'Como uma média ou "justa medida" entre dois vícios', 'Através da revelação divina', 'Nascemos com todas as virtudes prontas'], correct: 1, explanation: 'A virtude moral, para Aristóteles, é a mediania entre um excesso e uma deficiência.' },
      { question: 'P4-Q5: Qual obra de Aristóteles é fundamental para o estudo da lógica?', answers: ['"Ética a Nicômaco"', '"Política"', '"Metafísica"', '"Organon" (conjunto de tratados lógicos)'], correct: 3, explanation: 'O "Organon" é a compilação dos trabalhos de Aristóteles sobre lógica, incluindo o silogismo.' },
    ],
    5: [
      { question: 'P5-Q1: Qual é o papel principal do educador?', answers: ['Formar cidadãos críticos, éticos e conscientes', 'Apenas transmitir conteúdos', 'Controlar a disciplina', 'Organizar eventos escolares'], correct: 0, explanation: 'O educador deve formar cidadãos críticos e éticos, não só transmitir conteúdos.' },
      { question: 'P5-Q2: O que significa ética docente?', answers: ['Conduta moral e responsabilidade do professor', 'Regras para decorar a sala', 'Horários de aula', 'Avaliação dos alunos'], correct: 0, explanation: 'É a conduta moral e responsabilidade ética do professor em sua prática.' },
      { question: 'P5-Q3: Por que a formação crítica é importante para professores?', answers: ['Para que possam refletir e melhorar sua prática educativa', 'Para decorar conteúdos', 'Para seguir regras sem questionar', 'Para evitar mudanças'], correct: 0, explanation: 'A formação crítica permite reflexão e melhoria contínua na educação.' },
      { question: 'P5-Q4: A ética na educação visa:', answers: ['Promover justiça, respeito e responsabilidade', 'Garantir punições severas', 'Impor regras rígidas', 'Evitar discussões'], correct: 0, explanation: 'Visa promover valores como justiça, respeito e responsabilidade.' },
      { question: 'P5-Q5: Um professor ético deve:', answers: ['Respeitar a diversidade e incentivar o pensamento crítico', 'Tratar todos da mesma forma sem considerar diferenças', 'Ignorar opiniões dos alunos', 'Aplicar punições arbitrárias'], correct: 0, explanation: 'Deve respeitar a diversidade e estimular o pensamento crítico dos alunos.' },
    ],
  },
  ranking: [],
};

// --- Variáveis Globais ---
let gameData = {};
let currentQuizState = { phase: 1, questionIndex: 0, score: 0, hintsUsed: 0, isAnswered: false };
let isMusicPlaying = false;
const DOM = {}; // Para referências do DOM

// --- Funções Utilitárias ---
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function setEditorMessage(message, type = 'success') {
  if (!DOM.editorFeedbackMessage) return;
  DOM.editorFeedbackMessage.textContent = message;
  DOM.editorFeedbackMessage.className = 'mt-6 text-center font-semibold h-6 ';
  if (type === 'success') DOM.editorFeedbackMessage.classList.add('text-green-400');
  else if (type === 'error') DOM.editorFeedbackMessage.classList.add('text-red-400');
  else DOM.editorFeedbackMessage.classList.add('text-blue-300');
  if (message && type !== 'error') {
    setTimeout(() => { if (DOM.editorFeedbackMessage) DOM.editorFeedbackMessage.textContent = ''; }, 4000);
  }
}

function showSection(sectionId) {
  console.log(`[Nav] Attempting to show section: ${sectionId}`);
  Object.values(DOM.sections).forEach(sectionEl => {
    if (sectionEl) sectionEl.classList.add('hidden');
  });
  if (DOM.sections[sectionId]) {
    DOM.sections[sectionId].classList.remove('hidden');
    console.log(`[Nav] Section ${sectionId} is now visible.`);
    if (sectionId === 'phases') renderPhasesList();
    else if (sectionId === 'ranking') renderRankingList();
    else if (sectionId === 'register') renderAvatarSelection();
    else if (sectionId === 'editor') {
      renderEditorPhaseSelectors();
      renderEditorAvatarList();
      if (Object.keys(gameData.phaseDetails || {}).length > 0) {
        loadPhaseDetailsForEditing();
      }
      setEditorMessage('', 'info');
    }
  } else {
    console.error(`[Nav] Element for section ID "${sectionId}" not found.`);
  }
}

function setupAudio() {
  // ... (código de áudio como antes) ...
  if (DOM.audio.backgroundMusic) DOM.audio.backgroundMusic.volume = 0.2;
  if (DOM.audio.correctSound) DOM.audio.correctSound.volume = 0.5;
  if (DOM.audio.wrongSound) DOM.audio.wrongSound.volume = 0.5;
  if (DOM.audio.completeSound) DOM.audio.completeSound.volume = 0.5;

  const playMusicInteraction = () => {
    if (DOM.audio.backgroundMusic && DOM.audio.backgroundMusic.paused && !isMusicPlaying) {
      DOM.audio.backgroundMusic.play()
        .then(() => {
          isMusicPlaying = true;
          if (DOM.musicControlIcon) DOM.musicControlIcon.className = 'fas fa-pause text-white text-xl';
        })
        .catch(e => console.warn("Background music autoplay prevented.", e));
    }
    // Remove listeners after first interaction
    document.body.removeEventListener('click', playMusicInteraction, { once: true });
    document.body.removeEventListener('keydown', playMusicInteraction, { once: true });
  };
  document.body.addEventListener('click', playMusicInteraction, { once: true });
  document.body.addEventListener('keydown', playMusicInteraction, { once: true });
}

function toggleMusic() {
  // ... (código de áudio como antes) ...
  if (!DOM.audio.backgroundMusic || !DOM.musicControlIcon) return;
  if (isMusicPlaying) {
    DOM.audio.backgroundMusic.pause();
    DOM.musicControlIcon.className = 'fas fa-music text-white text-xl';
  } else {
    DOM.audio.backgroundMusic.play().catch(e => console.warn("Error playing music:", e));
    DOM.musicControlIcon.className = 'fas fa-pause text-white text-xl';
  }
  isMusicPlaying = !isMusicPlaying;
}

function loadGameData() {
  console.log('[Storage] LOAD GAME DATA: Process Started.');
  const savedDataString = localStorage.getItem('mentesEmJogo_v3_data');
  
  gameData = JSON.parse(JSON.stringify(initialGameData)); // Start with a fresh copy of defaults
  console.log('[Storage] LOAD GAME DATA: Initialized gameData with default values.');

  if (savedDataString) {
    console.log('[Storage] LOAD GAME DATA: Found saved data in localStorage.');
    try {
      const parsedData = JSON.parse(savedDataString);
      console.log('[Storage] LOAD GAME DATA: Successfully parsed localStorage data:', parsedData);

      if (parsedData.player) {
        gameData.player = { ...gameData.player, ...parsedData.player };
        console.log('[Storage] LOAD GAME DATA: Player data merged from localStorage.');
      }
      if (parsedData.availableAvatars && Array.isArray(parsedData.availableAvatars)) {
        gameData.availableAvatars = [...new Set([...initialGameData.availableAvatars, ...parsedData.availableAvatars])];
      }
      if (parsedData.phaseDetails && typeof parsedData.phaseDetails === 'object') {
        gameData.phaseDetails = { ...initialGameData.phaseDetails, ...parsedData.phaseDetails };
        console.log('[Storage] LOAD GAME DATA: PhaseDetails merged. Current keys:', Object.keys(gameData.phaseDetails));
      }
      
      // Crucial part: Merging questions
      if (parsedData.questions && typeof parsedData.questions === 'object') {
        console.log('[Storage] LOAD GAME DATA: Merging "questions" object from localStorage.');
        // Iterate over all phases known AFTER merging phaseDetails.
        // This ensures that if a phase was added via editor (and saved in phaseDetails),
        // we check for its questions too.
        Object.keys(gameData.phaseDetails).forEach(phaseKey => {
          if (parsedData.questions.hasOwnProperty(phaseKey) && Array.isArray(parsedData.questions[phaseKey])) {
            // If localStorage has questions for this phase, they take PRECEDENCE.
            gameData.questions[phaseKey] = parsedData.questions[phaseKey];
            console.log(`[Storage] LOAD GAME DATA: Phase ${phaseKey} questions: Loaded from localStorage (${gameData.questions[phaseKey].length} items).`);
          } else {
            // No questions for this phase in localStorage, or invalid format.
            // gameData.questions[phaseKey] ALREADY has initialGameData's questions due to the initial deep copy.
            // So, no action needed here unless we want to log it.
            if (initialGameData.questions.hasOwnProperty(phaseKey)) {
                 console.log(`[Storage] LOAD GAME DATA: Phase ${phaseKey} questions: Using initial default questions (${(initialGameData.questions[phaseKey] || []).length} items) as localStorage had no (valid) entry.`);
            } else {
                 console.log(`[Storage] LOAD GAME DATA: Phase ${phaseKey} questions: No entry in localStorage or initial data. Will be empty array.`);
                 gameData.questions[phaseKey] = []; // Ensure it's an array if phase exists but no questions defined
            }
          }
        });
         // Check for phases in parsedData.questions that might not be in initialGameData (editor created)
         // and ensure they get added if their phaseDetail was also loaded.
        for (const phaseKey in parsedData.questions) {
            if (parsedData.questions.hasOwnProperty(phaseKey) && !gameData.questions.hasOwnProperty(phaseKey) && gameData.phaseDetails[phaseKey]) {
                gameData.questions[phaseKey] = parsedData.questions[phaseKey];
                console.log(`[Storage] LOAD GAME DATA: Phase ${phaseKey} questions (editor-created likely): Added from localStorage (${gameData.questions[phaseKey].length} items).`);
            }
        }

      } else {
        console.log('[Storage] LOAD GAME DATA: No "questions" object in localStorage. Default questions will be used.');
        // gameData.questions already contains initialGameData.questions.
      }
      
      if (parsedData.ranking && Array.isArray(parsedData.ranking)) {
        gameData.ranking = parsedData.ranking;
      }
      console.log('[Storage] LOAD GAME DATA: Successfully merged data from localStorage.');
    } catch (error) {
      console.error('[Storage] LOAD GAME DATA: CRITICAL ERROR parsing localStorage data. Using fresh defaults. Error:', error);
      gameData = JSON.parse(JSON.stringify(initialGameData)); // Reset to defaults
      try {
        localStorage.removeItem('mentesEmJogo_v3_data');
        console.warn('[Storage] LOAD GAME DATA: Attempted to remove corrupted localStorage item.');
      } catch (e) { console.error('[Storage] Error removing localStorage item:', e)}
    }
  } else {
    console.log('[Storage] LOAD GAME DATA: No localStorage data found. Using fresh default gameData.');
    // gameData is already a deep copy of initialGameData.
  }

  // Final check to ensure every phase in phaseDetails has a questions array
  Object.keys(gameData.phaseDetails).forEach(phaseKey => {
    if (!gameData.questions.hasOwnProperty(phaseKey) || !Array.isArray(gameData.questions[phaseKey])) {
      console.warn(`[Storage] LOAD GAME DATA - Post-merge Check: Phase ${phaseKey} is in phaseDetails but questions array is missing/invalid. Initializing.`);
      gameData.questions[phaseKey] = initialGameData.questions.hasOwnProperty(phaseKey) ?
                                     JSON.parse(JSON.stringify(initialGameData.questions[phaseKey])) : [];
    }
  });

  console.log('--- [Storage] LOAD GAME DATA: FINAL LOADED QUESTIONS COUNT (Phases in Details) ---');
  Object.keys(gameData.phaseDetails).sort((a,b) => Number(a) - Number(b)).forEach(phaseKey => {
    const qArray = gameData.questions[phaseKey];
    console.log(`[Storage] Fase ${phaseKey} (${gameData.phaseDetails[phaseKey]?.title || 'N/A'}): ${qArray ? qArray.length : 'MISSING/INVALID'} perguntas.`);
    if (qArray && qArray.length > 0) {
        // console.log(`[Storage] Questions for phase ${phaseKey}:`, JSON.stringify(qArray.map(q => q.question.substring(0,20) + "..."))); // Log first few chars of each question
    } else if (!qArray) {
        console.error(`[Storage] CRITICAL: Phase ${phaseKey} has NO questions array after load!`);
    }
  });
  console.log('--------------------------------------------------------------------------');
}

function saveGameData() {
  // ... (saveGameData como antes, talvez com log mais verboso) ...
  try {
    localStorage.setItem('mentesEmJogo_v3_data', JSON.stringify(gameData));
    console.log('[Storage] SAVE GAME DATA: Successfully saved to localStorage.');
  } catch (error) {
    console.error('[Storage] SAVE GAME DATA: Error saving to localStorage:', error);
    alert("Erro ao salvar o progresso do jogo. O armazenamento do navegador pode estar cheio ou indisponível.");
  }
}

function setupDOMReferences() {
    // ... (como antes) ...
    DOM.sections = {
        home: $('#home'), register: $('#register-section'), phases: $('#phases-section'),
        quiz: $('#quiz-section'), results: $('#results-section'), ranking: $('#ranking-section'),
        editorLogin: $('#editor-login-section'), editor: $('#editor-section'), completion: $('#completion-section'),
    };
    DOM.audio = {
        backgroundMusic: $('#background-music'), correctSound: $('#correct-sound'),
        wrongSound: $('#wrong-sound'), completeSound: $('#complete-sound'),
    };
    DOM.musicControl = $('#music-control');
    DOM.musicControlIcon = DOM.musicControl ? DOM.musicControl.querySelector('i') : null;
    DOM.mobileMenu = $('#mobile-menu');
    DOM.quizAvatarImg = $('#quiz-avatar-img'); DOM.quizPhaseTitle = $('#quiz-phase-title');
    DOM.quizPlayerName = $('#quiz-player-name'); DOM.quizCurrentQuestion = $('#quiz-current-question');
    DOM.quizTotalQuestions = $('#quiz-total-questions'); DOM.quizQuestionText = $('#quiz-question-text');
    DOM.quizAnswersContainer = $('#quiz-answers-container'); DOM.quizFeedback = $('#quiz-feedback');
    DOM.quizExplanation = $('#quiz-explanation'); DOM.quizBtnHint = $('#quiz-btn-hint');
    DOM.quizHintsLeft = $('#quiz-hints-left'); DOM.quizBtnNext = $('#quiz-btn-next');
    DOM.editorLoginToken = $('#editor-login-token'); DOM.editorFeedbackMessage = $('#editor-feedback-message');
    DOM.editorPhaseSelectForQuestion = $('#editor-phase-select-for-question');
    DOM.editorInputQuestionText = $('#editor-input-question-text'); DOM.editorInputExplanation = $('#editor-input-explanation');
    DOM.editorFormQuestion = $('#editor-form-question'); DOM.editorInputNewPhaseTitle = $('#editor-input-new-phase-title');
    DOM.editorInputNewPhaseTheme = $('#editor-input-new-phase-theme'); DOM.editorPhaseSelectForEdit = $('#editor-phase-select-for-edit');
    DOM.editorInputEditPhaseTitle = $('#editor-input-edit-phase-title'); DOM.editorInputEditPhaseTheme = $('#editor-input-edit-phase-theme');
    DOM.editorInputAvatarFilename = $('#editor-input-avatar-filename'); DOM.editorCurrentAvatarsList = $('#editor-current-avatars-list');
    for (let i = 1; i <= 4; i++) {
        DOM[`editorAnswer${i}Radio`] = $(`#editor-answer${i}-radio`);
        DOM[`editorAnswer${i}Text`] = $(`#editor-answer${i}-text`);
    }
    DOM.avatarSelectionContainer = $('#avatar-selection-container');
    DOM.phasesGridContainer = $('#phases-grid-container');
    DOM.playerNameInput = $('#player-name-input');
    console.log("[Init] DOM References set up.");
}

function setupEventListeners() {
    // ... (como antes) ...
    $('#btn-home')?.addEventListener('click', () => showSection('home'));
    $('#btn-phases')?.addEventListener('click', () => showSection('phases'));
    $('#btn-ranking')?.addEventListener('click', () => showSection('ranking'));
    $('#btn-editor-nav')?.addEventListener('click', () => showSection('editorLogin'));
    $('#m-btn-home')?.addEventListener('click', () => { showSection('home'); toggleMobileMenu(); });
    $('#m-btn-phases')?.addEventListener('click', () => { showSection('phases'); toggleMobileMenu(); });
    $('#m-btn-ranking')?.addEventListener('click', () => { showSection('ranking'); toggleMobileMenu(); });
    $('#m-btn-editor-nav')?.addEventListener('click', () => { showSection('editorLogin'); toggleMobileMenu(); });
    $('#btn-menu')?.addEventListener('click', toggleMobileMenu);
    $('#start-game-btn')?.addEventListener('click', () => showSection('register'));
    $('#btn-start-actual-game')?.addEventListener('click', handleStartGame);
    DOM.quizBtnHint?.addEventListener('click', handleHint);
    DOM.quizBtnNext?.addEventListener('click', () => {
        console.log('[Event] Next button clicked. Calling handleNextQuestion.');
        handleNextQuestion();
    });
    $('#results-btn-next-phase')?.addEventListener('click', handleUnlockNextPhase);
    $('#results-btn-back-phases')?.addEventListener('click', () => showSection('phases'));
    $('#ranking-btn-back')?.addEventListener('click', () => showSection('home'));
    $('#completion-btn-ranking')?.addEventListener('click', () => showSection('ranking'));
    $('#completion-btn-home')?.addEventListener('click', () => showSection('home'));
    $('#editor-btn-login-access')?.addEventListener('click', handleEditorLogin);
    $('#editor-login-btn-back')?.addEventListener('click', () => showSection('home'));
    $('#editor-btn-exit')?.addEventListener('click', () => showSection('home'));
    DOM.editorFormQuestion?.addEventListener('submit', handleSaveQuestion);
    $('#editor-btn-save-new-phase')?.addEventListener('click', handleSaveNewPhase);
    DOM.editorPhaseSelectForEdit?.addEventListener('change', loadPhaseDetailsForEditing);
    $('#editor-btn-update-phase')?.addEventListener('click', handleUpdatePhaseDetails);
    $('#editor-btn-add-avatar')?.addEventListener('click', handleAddNewAvatar);
    DOM.musicControl?.addEventListener('click', toggleMusic);
    console.log("[Init] Event listeners set up.");
}

function toggleMobileMenu() {
    // ... (como antes) ...
    DOM.mobileMenu?.classList.toggle('hidden');
}

function handleEditorLogin() {
    // ... (como antes) ...
    if (!DOM.editorLoginToken) return;
    const token = DOM.editorLoginToken.value;
    if (token === 'editweb') { // Senha para o editor
        console.log("[Editor] Access granted.");
        showSection('editor');
        DOM.editorLoginToken.value = '';
    } else {
        alert('Token de acesso incorreto.');
        console.warn("[Editor] Access denied: incorrect token.");
    }
}

function handleSaveQuestion(event) {
    // ... (como antes, com logs já adicionados) ...
    event.preventDefault();
    console.log('[Editor] Attempting to save question...');
    if (!DOM.editorPhaseSelectForQuestion || !DOM.editorInputQuestionText || !DOM.editorInputExplanation) {
        setEditorMessage("Erro: Elementos do formulário do editor não encontrados.", "error");
        console.error("[Editor] Save question error: Form elements missing.");
        return;
    }

    const phaseKey = DOM.editorPhaseSelectForQuestion.value;
    const questionText = DOM.editorInputQuestionText.value.trim();
    const explanationText = DOM.editorInputExplanation.value.trim();
    const answers = [];
    const correctRadio = $('input[name="editor-correct-answer-radio"]:checked');
    
    let allRequiredAnswersFilled = true;
    for (let i = 1; i <= 4; i++) {
        const answerText = DOM[`editorAnswer${i}Text`]?.value.trim();
        // Permitir até 2 respostas obrigatórias, as outras são opcionais
        if (i <= 2 && !answerText) { 
            allRequiredAnswersFilled = false;
            break;
        }
        if (answerText) answers.push(answerText);
    }

    if (!phaseKey) {
        setEditorMessage("Selecione uma fase para adicionar a pergunta.", "error");
        console.warn("[Editor] Save question error: No phase selected.");
        return;
    }
    if (!questionText || !explanationText || !allRequiredAnswersFilled || !correctRadio || answers.length < 2) {
        setEditorMessage("Preencha a pergunta, explicação, pelo menos 2 alternativas e marque a correta.", "error");
        console.warn("[Editor] Save question error: Required fields missing or not enough answers (min 2).");
        return;
    }

    const newQuestion = {
        question: questionText,
        answers: answers,
        correct: parseInt(correctRadio.value),
        explanation: explanationText,
    };

    if (!gameData.questions[phaseKey] || !Array.isArray(gameData.questions[phaseKey])) {
      console.warn(`[Editor] Phase ${phaseKey} had no questions array or was invalid. Initializing.`);
      gameData.questions[phaseKey] = [];
    }
    
    const questionsBefore = gameData.questions[phaseKey].length;
    gameData.questions[phaseKey].push(newQuestion);
    const questionsAfter = gameData.questions[phaseKey].length;

    saveGameData();
    DOM.editorFormQuestion.reset(); 
    setEditorMessage(`Pergunta adicionada à Fase ${phaseKey} com sucesso! Total agora: ${questionsAfter}`, "success");
    console.log(`[Editor] Pergunta adicionada à Fase ${phaseKey}. Antes: ${questionsBefore}, Depois: ${questionsAfter}. Nova pergunta:`, newQuestion);
    
    console.log('[Editor] --- gameData.questions after adding new question ---');
    Object.keys(gameData.questions).sort((a,b) => Number(a) - Number(b)).forEach(pk => {
        console.log(`[Editor] Fase ${pk}: ${gameData.questions[pk] ? gameData.questions[pk].length : 'N/A'} perguntas.`);
    });
    console.log('[Editor] -------------------------------------------------');
}

function handleSaveNewPhase() {
    // ... (como antes) ...
    if (!DOM.editorInputNewPhaseTitle || !DOM.editorInputNewPhaseTheme) return;
    const title = DOM.editorInputNewPhaseTitle.value.trim();
    const theme = DOM.editorInputNewPhaseTheme.value.trim();

    if (!title || !theme) {
        setEditorMessage("Título e tema da nova fase são obrigatórios.", "error");
        return;
    }

    const existingPhaseKeys = Object.keys(gameData.phaseDetails || {}).map(Number);
    const newPhaseKey = existingPhaseKeys.length > 0 ? Math.max(0, ...existingPhaseKeys) + 1 : 1;

    gameData.phaseDetails[newPhaseKey] = { title, theme };
    if (!gameData.questions[newPhaseKey]) { 
      gameData.questions[newPhaseKey] = []; 
    }

    saveGameData();
    DOM.editorInputNewPhaseTitle.value = '';
    DOM.editorInputNewPhaseTheme.value = '';
    setEditorMessage(`Nova Fase ${newPhaseKey} ('${title}') criada com sucesso!`, "success");
    console.log(`[Editor] Nova Fase ${newPhaseKey} criada.`);
    renderEditorPhaseSelectors();
    renderPhasesList();
}

function loadPhaseDetailsForEditing() {
    // ... (como antes) ...
    if (!DOM.editorPhaseSelectForEdit || !DOM.editorInputEditPhaseTitle || !DOM.editorInputEditPhaseTheme) return;
    const selectedPhaseKey = DOM.editorPhaseSelectForEdit.value;

    if (!selectedPhaseKey || !gameData.phaseDetails[selectedPhaseKey]) {
        DOM.editorInputEditPhaseTitle.value = '';
        DOM.editorInputEditPhaseTheme.value = '';
        // console.warn("[Editor] No phase selected or phase details not found for editing form.");
        return;
    }
    DOM.editorInputEditPhaseTitle.value = gameData.phaseDetails[selectedPhaseKey].title;
    DOM.editorInputEditPhaseTheme.value = gameData.phaseDetails[selectedPhaseKey].theme;
    // console.log(`[Editor] Loaded details for phase ${selectedPhaseKey} into editor form.`);
}

function handleUpdatePhaseDetails() {
    // ... (como antes) ...
    if (!DOM.editorPhaseSelectForEdit || !DOM.editorInputEditPhaseTitle || !DOM.editorInputEditPhaseTheme) return;
    const selectedPhaseKey = DOM.editorPhaseSelectForEdit.value;
    const title = DOM.editorInputEditPhaseTitle.value.trim();
    const theme = DOM.editorInputEditPhaseTheme.value.trim();

    if (!selectedPhaseKey) {
        setEditorMessage("Nenhuma fase selecionada para editar.", "error");
        return;
    }
    if (!title || !theme) {
        setEditorMessage("Título e tema não podem ser vazios para editar a fase.", "error");
        return;
    }

    if (gameData.phaseDetails[selectedPhaseKey]) {
        gameData.phaseDetails[selectedPhaseKey] = { title, theme };
        saveGameData();
        setEditorMessage(`Fase ${selectedPhaseKey} atualizada com sucesso!`, "success");
        console.log(`[Editor] Fase ${selectedPhaseKey} details updated.`);
        renderEditorPhaseSelectors();
        renderPhasesList();
    } else {
        setEditorMessage(`Erro: Fase ${selectedPhaseKey} não encontrada para atualização.`, "error");
        console.error(`[Editor] Error updating phase ${selectedPhaseKey}: Not found.`);
    }
}

function handleAddNewAvatar() {
    // ... (como antes) ...
    if (!DOM.editorInputAvatarFilename) return;
    const filename = DOM.editorInputAvatarFilename.value.trim();
    if (!filename) {
        setEditorMessage("Nome do arquivo do avatar é obrigatório.", "error");
        return;
    }
    const avatarPath = `images/avatars/${filename}`;

    if (gameData.availableAvatars.includes(avatarPath)) {
        setEditorMessage("Este avatar já foi adicionado.", "info");
        return;
    }
    gameData.availableAvatars.push(avatarPath);
    saveGameData();
    DOM.editorInputAvatarFilename.value = '';
    setEditorMessage(`Avatar '${filename}' adicionado! Certifique-se que o arquivo está em 'images/avatars/'.`, "success");
    console.log(`[Editor] New avatar added: ${avatarPath}`);
    renderEditorAvatarList();
    renderAvatarSelection();
}

function renderEditorPhaseSelectors() {
    // ... (como antes, talvez com log mais verboso se necessário) ...
    const phaseSelectors = [DOM.editorPhaseSelectForQuestion, DOM.editorPhaseSelectForEdit];
    phaseSelectors.forEach(select => {
        if (select) {
            const currentValue = select.value; 
            select.innerHTML = ''; 
             if (!gameData.phaseDetails || Object.keys(gameData.phaseDetails).length === 0) {
                const defaultOption = document.createElement('option');
                defaultOption.textContent = "Nenhuma fase criada";
                defaultOption.disabled = true;
                select.appendChild(defaultOption);
            } else {
                Object.keys(gameData.phaseDetails).sort((a,b) => Number(a) - Number(b)).forEach(phaseKey => {
                    const phase = gameData.phaseDetails[phaseKey];
                    const option = document.createElement('option');
                    option.value = phaseKey;
                    option.textContent = `Fase ${phaseKey} – ${phase.title || 'Sem Título'}`;
                    select.appendChild(option);
                });
                if (select.querySelector(`option[value="${currentValue}"]`)) {
                    select.value = currentValue;
                } else if (select.options.length > 0) {
                    select.selectedIndex = 0; 
                }
            }
        }
    });
     if (DOM.editorPhaseSelectForEdit && Object.keys(gameData.phaseDetails || {}).length > 0) {
        if (!DOM.editorPhaseSelectForEdit.value && DOM.editorPhaseSelectForEdit.options.length > 0) {
             DOM.editorPhaseSelectForEdit.selectedIndex = 0; // Select first if nothing is selected
        }
        loadPhaseDetailsForEditing(); 
    }
    // console.log("[Editor] Phase selectors rendered.");
}

function renderEditorAvatarList() {
    // ... (como antes) ...
    if (!DOM.editorCurrentAvatarsList) return;
    DOM.editorCurrentAvatarsList.innerHTML = '';
    (gameData.availableAvatars || []).forEach(avatarPath => {
        const li = document.createElement('li');
        li.className = "truncate text-xs py-0.5";
        li.textContent = avatarPath;
        DOM.editorCurrentAvatarsList.appendChild(li);
    });
    // console.log("[Editor] Avatar list rendered.");
}

function handleStartGame() {
    // ... (como antes) ...
    if (!DOM.playerNameInput) return;
    const name = DOM.playerNameInput.value.trim();
    if (!name) {
        alert('Por favor, insira seu nome ou apelido.');
        return;
    }
    if (!gameData.player.avatar || gameData.player.avatar === initialGameData.player.avatar || !(gameData.availableAvatars || []).includes(gameData.player.avatar)) {
        const firstValidAvatar = (gameData.availableAvatars || []).find(path => path !== 'images/avatars/placeholder_avatar.png') || (gameData.availableAvatars || [])[0];
        if (firstValidAvatar) {
            gameData.player.avatar = firstValidAvatar;
        } else {
             alert('Nenhum avatar disponível. Adicione avatares no editor ou verifique os caminhos.');
             console.error("[GameStart] No valid avatars available.");
             return;
        }
    }
    gameData.player.name = name;
    const existingPlayerRecord = (gameData.ranking || []).find(p => p.name === name && p.avatar === gameData.player.avatar);
    if (!existingPlayerRecord || !(gameData.player.completedPhases || []).length) {
        console.log(`[GameStart] New player or no previous progress for ${name}. Resetting score, unlocked, completed phases.`);
        gameData.player.score = 0;
        gameData.player.unlockedPhases = 1;
        gameData.player.completedPhases = [];
    } else {
        console.log(`[GameStart] Returning player ${name}. Resetting current session score. Unlocked/Completed phases kept from load.`);
        gameData.player.score = 0; 
    }
    updatePlayerRanking(); 
    saveGameData();
    showSection('phases');
    console.log(`[GameStart] Game started for player: ${name}, Avatar: ${gameData.player.avatar}`);
}

function renderAvatarSelection() {
    // ... (como antes) ...
    if (!DOM.avatarSelectionContainer) return;
    DOM.avatarSelectionContainer.innerHTML = '';
    const avatars = gameData.availableAvatars || [];
    if (avatars.length === 0) {
        DOM.avatarSelectionContainer.innerHTML = '<p class="text-xs text-red-400 col-span-full">Nenhum avatar configurado. Adicione no editor.</p>';
        return;
    }
    avatars.forEach(avatarPath => {
        const div = document.createElement('div');
        div.className = 'avatar-option group cursor-pointer p-1 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-110';
        div.dataset.avatarPath = avatarPath;
        const img = document.createElement('img');
        img.src = avatarPath;
        img.alt = 'Avatar';
        img.className = 'w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover transition-all duration-200 ease-in-out group-hover:shadow-lg';
        img.onerror = function() { 
            console.warn(`[Avatar] Failed to load avatar: ${this.src}. Using placeholder.`);
            this.src = 'images/avatars/placeholder_avatar.png'; 
            this.alt = 'Avatar Padrão (Erro ao carregar)';
        };
        div.appendChild(img);
        div.addEventListener('click', () => selectPlayerAvatar(avatarPath, div));
        DOM.avatarSelectionContainer.appendChild(div);
    });
    let preSelected = false;
    if (gameData.player.avatar && avatars.includes(gameData.player.avatar)) {
        const currentAvatarDiv = Array.from(DOM.avatarSelectionContainer.children).find(
            (el) => el.dataset.avatarPath === gameData.player.avatar
        );
        if (currentAvatarDiv) {
            selectPlayerAvatar(gameData.player.avatar, currentAvatarDiv);
            preSelected = true;
        }
    } 
    if (!preSelected) {
        const firstValidAvatarPath = avatars.find(path => path !== 'images/avatars/placeholder_avatar.png');
        const firstDiv = DOM.avatarSelectionContainer.querySelector('.avatar-option');
        if (firstValidAvatarPath && firstDiv) {
             selectPlayerAvatar(firstValidAvatarPath, firstDiv);
        } else if (avatars.length > 0 && firstDiv) { 
             selectPlayerAvatar(avatars[0], firstDiv);
        }
    }
    // console.log("[UI] Avatar selection rendered.");
}

function selectPlayerAvatar(avatarPath, selectedDiv) {
    // ... (como antes) ...
    gameData.player.avatar = avatarPath;
    $$('.avatar-option').forEach(el => el.classList.remove('border-yellow-400', 'ring-2', 'ring-yellow-300', 'scale-110'));
    if (selectedDiv) {
        selectedDiv.classList.add('border-yellow-400', 'ring-2', 'ring-yellow-300', 'scale-110');
    }
    // console.log(`[UI] Player avatar selected: ${avatarPath}`);
}

function renderPhasesList() {
    // ... (como antes) ...
    if (!DOM.phasesGridContainer) return;
    DOM.phasesGridContainer.innerHTML = '';
    const phaseDetails = gameData.phaseDetails || {};
    if (Object.keys(phaseDetails).length === 0) {
        DOM.phasesGridContainer.innerHTML = '<p class="text-center text-white/70 md:col-span-2">Nenhuma fase configurada. Crie fases no Modo Editor.</p>';
        return;
    }
    const sortedPhaseKeys = Object.keys(phaseDetails).sort((a,b) => Number(a) - Number(b));
    sortedPhaseKeys.forEach(phaseKey => {
        const phase = phaseDetails[phaseKey];
        if (!phase) {
            console.warn(`[UI] Phase details missing for key ${phaseKey} during phase list rendering.`);
            return;
        }
        const article = document.createElement('article');
        article.className = 'bg-white/10 rounded-xl p-6 shadow-lg border border-yellow-400 hover:bg-white/20 transition-colors hover:shadow-yellow-400/30';
        if (sortedPhaseKeys.length > 2 && phaseKey === sortedPhaseKeys[sortedPhaseKeys.length - 1] && sortedPhaseKeys.length % 2 !== 0) {
            article.classList.add('md:col-span-2');
        }
        const phaseNum = Number(phaseKey);
        const isUnlocked = phaseNum <= (gameData.player.unlockedPhases || 1);
        const isCompleted = (gameData.player.completedPhases || []).includes(phaseNum);
        let buttonText = isUnlocked ? `Iniciar Fase ${phaseKey}` : 'Bloqueado';
        if (isCompleted) buttonText = `Rejogar Fase ${phaseKey}`;
        article.innerHTML = `
            <h3 class="font-greek text-2xl text-yellow-300 mb-2">${phase.title || `Fase ${phaseKey}`} ${isCompleted ? '<i class="fas fa-check-circle text-green-400 ml-2 text-xl"></i>' : ''}</h3>
            <p class="text-white/90 mb-3 font-semibold text-sm">${phase.theme || 'Sem descrição'}</p>
            <button class="mt-4 w-full bg-yellow-400 text-[#0b1e3d] font-semibold px-5 py-3 rounded-md hover:bg-yellow-500 transition-colors 
                           ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}
                           ${isCompleted ? 'bg-green-500 hover:bg-green-600 text-white' : ''}" 
                    data-phase="${phaseKey}" 
                    ${!isUnlocked ? 'disabled' : ''}>
                ${buttonText}
            </button>
        `;
        DOM.phasesGridContainer.appendChild(article);
        if (isUnlocked) {
            article.querySelector('button').addEventListener('click', () => startQuizForPhase(phaseNum));
        }
    });
    // console.log("[UI] Phases list rendered.");
}

// --- QUIZ LOGIC ---
function startQuizForPhase(phaseKey) {
    const phaseNum = Number(phaseKey); // Ensure phaseKey is a number
    console.log(`[QUIZ_DEBUG] >>>>> STARTING QUIZ FOR PHASE: ${phaseNum} <<<<<`);

    if (!gameData.phaseDetails || !gameData.phaseDetails[phaseNum]) {
        console.error(`[QUIZ_DEBUG] ERROR: Phase details for phase ${phaseNum} not found!`);
        alert(`Erro: Detalhes da fase ${phaseNum} não encontrados.`);
        return;
    }
    if (!gameData.questions || !gameData.questions[phaseNum] || !Array.isArray(gameData.questions[phaseNum])) {
        console.error(`[QUIZ_DEBUG] ERROR: Questions array for phase ${phaseNum} is missing or not an array! questions[${phaseNum}]:`, gameData.questions ? gameData.questions[phaseNum] : 'N/A');
        alert(`Erro: Perguntas para a fase ${phaseNum} não encontradas ou formato inválido. Limpe o localStorage e recarregue.`);
        showSection('phases');
        return;
    }
    
    const questionsForThisPhase = gameData.questions[phaseNum];
    console.log(`[QUIZ_DEBUG] Phase ${phaseNum} - Total questions loaded: ${questionsForThisPhase.length}. Questions content (first 20 chars):`);
    questionsForThisPhase.forEach((q, idx) => console.log(`  [${idx}]: ${q.question ? q.question.substring(0,20) + "..." : "INVALID QUESTION OBJECT"}`));

    currentQuizState = { 
        phase: phaseNum, 
        questionIndex: 0, // Always start at index 0 for a new quiz
        score: 0, 
        hintsUsed: 0, 
        isAnswered: false 
    };
    console.log(`[QUIZ_DEBUG] Initialized currentQuizState for Phase ${phaseNum}:`, JSON.stringify(currentQuizState));
    
    if (DOM.quizPhaseTitle) DOM.quizPhaseTitle.textContent = gameData.phaseDetails[phaseNum]?.title || `Fase ${phaseNum}`;
    if (DOM.quizPlayerName) DOM.quizPlayerName.textContent = gameData.player.name;
    if (DOM.quizAvatarImg) DOM.quizAvatarImg.src = gameData.player.avatar || 'images/avatars/placeholder_avatar.png';
    if (DOM.quizHintsLeft) DOM.quizHintsLeft.textContent = 2;
    if (DOM.quizBtnHint) {
        DOM.quizBtnHint.disabled = false;
        DOM.quizBtnHint.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    showSection('quiz');
    renderCurrentQuestion(); // Render the first question (index 0)
}

function renderCurrentQuestion() {
    const phaseNum = currentQuizState.phase;
    const currentQuestionIdx = currentQuizState.questionIndex;
    console.log(`[QUIZ_DEBUG] --- renderCurrentQuestion for Phase ${phaseNum}, Question Index: ${currentQuestionIdx} ---`);

    const phaseQuestions = gameData.questions[phaseNum];

    if (!phaseQuestions || !Array.isArray(phaseQuestions)) {
        console.error(`[QUIZ_DEBUG] CRITICAL ERROR in renderCurrentQuestion: phaseQuestions for phase ${phaseNum} is not a valid array! Value:`, phaseQuestions);
        if (DOM.quizQuestionText) DOM.quizQuestionText.textContent = "Erro crítico: Dados das perguntas inválidos.";
        // Offer a way out
        if (DOM.quizBtnNext) {
            DOM.quizBtnNext.textContent = "Voltar às Fases (Erro)";
            DOM.quizBtnNext.disabled = false;
            DOM.quizBtnNext.onclick = () => showSection('phases');
        }
        return;
    }
    
    const totalQuestionsInPhase = phaseQuestions.length;
    console.log(`[QUIZ_DEBUG] Total questions available for phase ${phaseNum}: ${totalQuestionsInPhase}`);

    if (totalQuestionsInPhase === 0) {
        console.warn(`[QUIZ_DEBUG] No questions found for phase ${phaseNum}. Displaying message.`);
        if (DOM.quizQuestionText) DOM.quizQuestionText.textContent = "Nenhuma pergunta encontrada para esta fase. Adicione perguntas no editor ou limpe os dados do jogo (localStorage) e recarregue.";
        if (DOM.quizAnswersContainer) DOM.quizAnswersContainer.innerHTML = '';
        if (DOM.quizBtnNext) {
            DOM.quizBtnNext.textContent = "Voltar às Fases";
            DOM.quizBtnNext.disabled = false;
            DOM.quizBtnNext.onclick = () => showSection('phases');
        }
        if(DOM.quizTotalQuestions) DOM.quizTotalQuestions.textContent = '0';
        if(DOM.quizCurrentQuestion) DOM.quizCurrentQuestion.textContent = '0';
        return;
    }

    if (currentQuestionIdx >= totalQuestionsInPhase) {
        console.log(`[QUIZ_DEBUG] All questions for phase ${phaseNum} answered (index ${currentQuestionIdx} >= total ${totalQuestionsInPhase}). Showing results.`);
        showQuizResults();
        return;
    }

    const question = phaseQuestions[currentQuestionIdx];
    console.log(`[QUIZ_DEBUG] Attempting to render question at index ${currentQuestionIdx}:`, question ? question.question : "QUESTION OBJECT UNDEFINED/INVALID");

    if (!question || typeof question.question !== 'string' || !Array.isArray(question.answers)) {
        console.error(`[QUIZ_DEBUG] Invalid question object at index ${currentQuestionIdx} for phase ${phaseNum}. Question object:`, question);
        if (DOM.quizQuestionText) DOM.quizQuestionText.textContent = `Erro ao carregar pergunta ${currentQuestionIdx + 1}. Verifique o console e os dados do jogo.`;
        if (DOM.quizBtnNext) { // Allow user to try to skip or go back
            DOM.quizBtnNext.textContent = "Próxima (com erro) / Voltar";
            DOM.quizBtnNext.disabled = false;
            // DOM.quizBtnNext.onclick = handleNextQuestion; // Or directly to phases: () => showSection('phases')
        }
        return;
    }

    if (DOM.quizCurrentQuestion) DOM.quizCurrentQuestion.textContent = currentQuestionIdx + 1;
    if (DOM.quizTotalQuestions) DOM.quizTotalQuestions.textContent = totalQuestionsInPhase;
    if (DOM.quizQuestionText) DOM.quizQuestionText.textContent = question.question;
    if (DOM.quizAnswersContainer) DOM.quizAnswersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'bg-white/5 hover:bg-white/10 border border-yellow-400/50 rounded-md p-4 text-left transition-colors w-full text-white/90';
        button.textContent = answer;
        button.addEventListener('click', () => handleAnswerSelection(index, question.correct, question.explanation));
        DOM.quizAnswersContainer.appendChild(button);
    });

    if (DOM.quizFeedback) DOM.quizFeedback.classList.add('hidden');
    if (DOM.quizExplanation) DOM.quizExplanation.classList.add('hidden');
    if (DOM.quizBtnNext) {
        DOM.quizBtnNext.disabled = true; // Disabled until an answer is selected
        DOM.quizBtnNext.textContent = "Próxima";
        // Ensure onclick is correctly set for next question (event listener already handles this)
    }
    currentQuizState.isAnswered = false; // Reset for the new question
    if (DOM.quizBtnHint) {
      DOM.quizBtnHint.disabled = currentQuizState.hintsUsed >= 2;
      DOM.quizBtnHint.classList.toggle('opacity-50', DOM.quizBtnHint.disabled);
      DOM.quizBtnHint.classList.toggle('cursor-not-allowed', DOM.quizBtnHint.disabled);
    }
    console.log(`[QUIZ_DEBUG] Successfully rendered question ${currentQuestionIdx + 1} of ${totalQuestionsInPhase} for phase ${phaseNum}.`);
}

function handleAnswerSelection(selectedIndex, correctIndex, explanation) {
    // ... (como antes, logs já eram bons) ...
    if (currentQuizState.isAnswered) return;
    currentQuizState.isAnswered = true;

    const buttons = $$('#quiz-answers-container button');
    buttons.forEach(btn => btn.disabled = true); 

    const isCorrect = selectedIndex === correctIndex;
    console.log(`[QUIZ_DEBUG] Answer selected: Index ${selectedIndex}. Correct index: ${correctIndex}. Is correct: ${isCorrect}. Phase: ${currentQuizState.phase}, QIndex: ${currentQuizState.questionIndex}`);

    if (isCorrect) {
        currentQuizState.score++;
        buttons[selectedIndex].classList.remove('bg-white/5', 'hover:bg-white/10', 'border-yellow-400/50');
        buttons[selectedIndex].classList.add('bg-green-500/40', 'border-green-500', 'ring-2', 'ring-green-400');
        if(DOM.quizFeedback) {
            DOM.quizFeedback.textContent = "Resposta Correta!";
            DOM.quizFeedback.className = 'mt-6 text-lg font-semibold rounded-md p-4 bg-green-500/30 border border-green-500 text-green-300';
        }
        DOM.audio.correctSound?.play();
    } else {
        buttons[selectedIndex].classList.remove('bg-white/5', 'hover:bg-white/10', 'border-yellow-400/50');
        buttons[selectedIndex].classList.add('bg-red-500/40', 'border-red-500', 'ring-2', 'ring-red-400');
        if (buttons[correctIndex]) { 
            buttons[correctIndex].classList.remove('bg-white/5', 'hover:bg-white/10', 'border-yellow-400/50');
            buttons[correctIndex].classList.add('bg-green-500/30', 'border-green-500');
        }
         if(DOM.quizFeedback) {
            DOM.quizFeedback.textContent = "Resposta Incorreta!";
            DOM.quizFeedback.className = 'mt-6 text-lg font-semibold rounded-md p-4 bg-red-500/30 border border-red-500 text-red-300';
        }
        DOM.audio.wrongSound?.play();
    }
    if (DOM.quizFeedback) DOM.quizFeedback.classList.remove('hidden');
    if (DOM.quizExplanation) {
        DOM.quizExplanation.textContent = explanation || "Explicação não disponível.";
        DOM.quizExplanation.classList.remove('hidden');
    }
    if (DOM.quizBtnNext) DOM.quizBtnNext.disabled = false;
    if (DOM.quizBtnHint) { 
        DOM.quizBtnHint.disabled = true;
        DOM.quizBtnHint.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function handleHint() {
    // ... (como antes, logs já eram bons) ...
    if (currentQuizState.hintsUsed >= 2 || currentQuizState.isAnswered || !DOM.quizBtnHint) return;
    const phaseQuestions = gameData.questions[currentQuizState.phase];
    if (!phaseQuestions || phaseQuestions.length === 0) return;
    const question = phaseQuestions[currentQuizState.questionIndex];
    if (!question || !question.answers || question.answers.length < 3) {
        console.warn("[QUIZ_DEBUG] Hint not applicable: not enough answers or invalid question.");
        if (DOM.quizBtnHint) { DOM.quizBtnHint.disabled = true; DOM.quizBtnHint.classList.add('opacity-50', 'cursor-not-allowed');}
        return;
    }
    const answerButtons = $$('#quiz-answers-container button');
    let eliminatedCount = 0;
    const incorrectIndices = [];
    question.answers.forEach((_, i) => { if (i !== question.correct) incorrectIndices.push(i); });
    for (let i = incorrectIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [incorrectIndices[i], incorrectIndices[j]] = [incorrectIndices[j], incorrectIndices[i]];
    }
    let toEliminate = 1;
    if (question.answers.length >= 4) toEliminate = 2;
    if (question.answers.length <=2) toEliminate = 0; 
    for (let i = 0; i < incorrectIndices.length && eliminatedCount < toEliminate; i++) {
        const btnIndexToEliminate = incorrectIndices[i];
        if (answerButtons[btnIndexToEliminate] && !answerButtons[btnIndexToEliminate].classList.contains('opacity-30')) {
            answerButtons[btnIndexToEliminate].classList.add('opacity-30', 'line-through', 'pointer-events-none');
            answerButtons[btnIndexToEliminate].disabled = true; 
            eliminatedCount++;
        }
    }
    currentQuizState.hintsUsed++;
    console.log(`[QUIZ_DEBUG] Hint used. Hints left: ${2 - currentQuizState.hintsUsed}. Eliminated: ${eliminatedCount}`);
    if (DOM.quizHintsLeft) DOM.quizHintsLeft.textContent = Math.max(0, 2 - currentQuizState.hintsUsed);
    if (DOM.quizBtnHint) {
        DOM.quizBtnHint.disabled = currentQuizState.hintsUsed >= 2;
        DOM.quizBtnHint.classList.toggle('opacity-50', DOM.quizBtnHint.disabled);
        DOM.quizBtnHint.classList.toggle('cursor-not-allowed', DOM.quizBtnHint.disabled);
    }
}

function handleNextQuestion() {
    console.log(`[QUIZ_DEBUG] handleNextQuestion called. Current index BEFORE increment: ${currentQuizState.questionIndex}`);
    currentQuizState.questionIndex++; // THIS IS THE ONLY PLACE IT SHOULD BE INCREMENTED FOR NEXT QUESTION
    console.log(`[QUIZ_DEBUG] currentQuizState.questionIndex AFTER increment: ${currentQuizState.questionIndex}`);
    renderCurrentQuestion();
}

function getPhaseFeedback(percentage) {
    // ... (como antes) ...
    if (percentage === 100) return "Excelente! Você gabaritou esta fase!";
    if (percentage >= 80) return "Muito bem! Seu conhecimento é notável!";
    if (percentage >= 50) return "Bom trabalho! Você passou para a próxima fase!";
    return "Continue estudando. Você não atingiu o mínimo para passar.";
}

function showQuizResults() {
    // ... (como antes, logs já eram bons) ...
    const phaseNum = currentQuizState.phase;
    const phaseQuestions = gameData.questions[phaseNum] || [];
    const totalQuestions = phaseQuestions.length;
    const percentage = totalQuestions > 0 ? Math.round((currentQuizState.score / totalQuestions) * 100) : 0;
    const phaseScoreValue = currentQuizState.score * phaseNum * 10;
    const phaseCompletedSuccessfully = percentage >= 50;
    console.log(`[QUIZ_DEBUG] Phase ${phaseNum} results - Score: ${currentQuizState.score}/${totalQuestions} (${percentage}%). Phase points: ${phaseScoreValue}`);
    const scoreTextEl = $('#results-score-text');
    const medalContainerEl = $('#results-medal-container');
    const feedbackMsgEl = $('#results-feedback-message');
    const nextPhaseBtnEl = $('#results-btn-next-phase');
    if (scoreTextEl) scoreTextEl.textContent = `Você acertou ${currentQuizState.score} de ${totalQuestions} perguntas (${percentage}%).`;
    if (medalContainerEl) medalContainerEl.innerHTML = '';
    if (phaseCompletedSuccessfully) {
        gameData.player.score += phaseScoreValue; 
        if (medalContainerEl) {
            medalContainerEl.innerHTML = `<div class="flex flex-col items-center"><div class="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-2 ring-4 ring-yellow-500/50"><i class="fas fa-medal text-4xl text-[#0b1e3d]"></i></div><span class="text-yellow-300 font-semibold text-lg">Fase Concluída!</span></div>`;
        }
        if (feedbackMsgEl) feedbackMsgEl.textContent = getPhaseFeedback(percentage);
        if (!(gameData.player.completedPhases || []).includes(phaseNum)) {
            (gameData.player.completedPhases = gameData.player.completedPhases || []).push(phaseNum);
        }
        DOM.audio.completeSound?.play();
        const allAvailablePhaseKeys = Object.keys(gameData.phaseDetails || {}).map(Number).sort((a, b) => a - b);
        const allCompletedByUser = allAvailablePhaseKeys.every(pKey => (gameData.player.completedPhases || []).includes(pKey));
        if (nextPhaseBtnEl) {
            if (allCompletedByUser) {
                nextPhaseBtnEl.textContent = "Ver Resultado Final";
            } else {
                 const lastConfiguredPhase = allAvailablePhaseKeys.length > 0 ? allAvailablePhaseKeys[allAvailablePhaseKeys.length -1] : 0;
                 if (phaseNum === lastConfiguredPhase) {
                     nextPhaseBtnEl.textContent = "Revisar Fases"; 
                 } else {
                     nextPhaseBtnEl.textContent = "Avançar";
                 }
            }
        }
    } else {
        if (feedbackMsgEl) feedbackMsgEl.textContent = "Você não atingiu o mínimo para passar. Tente novamente para desbloquear a próxima fase!";
        if (nextPhaseBtnEl) nextPhaseBtnEl.textContent = "Tentar Novamente";
    }
    updatePlayerRanking();
    saveGameData();
    showSection('results');
}

function handleUnlockNextPhase() {
    // ... (como antes) ...
    const phaseNum = currentQuizState.phase;
    const phaseQuestions = gameData.questions[phaseNum] || [];
    const totalQuestions = phaseQuestions.length;
    const percentage = totalQuestions > 0 ? Math.round((currentQuizState.score / totalQuestions) * 100) : 0;
    const phaseCompletedSuccessfully = percentage >= 50;
    const allAvailablePhaseKeys = Object.keys(gameData.phaseDetails || {}).map(Number).sort((a,b) => a - b);
    const allCompletedByUser = allAvailablePhaseKeys.every(pKey => (gameData.player.completedPhases || []).includes(pKey));
    console.log(`[NextPhase] Handling action. Phase ${phaseNum} completed successfully: ${phaseCompletedSuccessfully}. All phases completed by user: ${allCompletedByUser}`);
    if (phaseCompletedSuccessfully) {
        if (allCompletedByUser) { 
            console.log("[NextPhase] All phases completed. Showing completion screen.");
            showCompletionScreen();
            return;
        }
        if ((gameData.player.unlockedPhases || 1) <= phaseNum) {
            const currentPhaseIndexInAll = allAvailablePhaseKeys.indexOf(phaseNum);
            if (currentPhaseIndexInAll !== -1 && currentPhaseIndexInAll < allAvailablePhaseKeys.length - 1) { 
                 const nextPhaseInSequence = allAvailablePhaseKeys[currentPhaseIndexInAll + 1];
                 if ((gameData.player.unlockedPhases || 1) < nextPhaseInSequence) {
                    gameData.player.unlockedPhases = nextPhaseInSequence;
                    console.log(`[NextPhase] Unlocked phase ${nextPhaseInSequence}.`);
                 }
            }
        }
    } 
    saveGameData();
    showSection('phases');
}

function showCompletionScreen() {
    // ... (como antes) ...
    console.log("[Completion] Showing game completion screen.");
    DOM.audio.completeSound?.play();
    const finalFeedbackEl = $('#completion-final-feedback');
    const totalPossibleScoreMax = Object.keys(gameData.phaseDetails || {}).reduce((sum, phaseKeyStr) => {
        const pk = Number(phaseKeyStr);
        const questionsInPhase = (gameData.questions[pk] || []).length;
        return sum + (questionsInPhase * pk * 10);
    }, 0);
    const performance = totalPossibleScoreMax > 0 ? Math.round(((gameData.player.score || 0) / totalPossibleScoreMax) * 100) : 0;
    let title = "Explorador Filosófico";
    if (finalFeedbackEl) {
        if (performance >= 90) { title = "Sábio Filósofo"; finalFeedbackEl.textContent = "Sua jornada foi brilhante! Você demonstrou um domínio excepcional!"; }
        else if (performance >= 70) { title = "Pensador Iluminado"; finalFeedbackEl.textContent = "Excelente desempenho! Você compreendeu profundamente os temas."; }
        else if (performance >= 50) { title = "Iniciado na Sabedoria"; finalFeedbackEl.textContent = "Parabéns por completar a jornada! Continue refletindo."; }
        else { title = "Aprendiz Curioso"; finalFeedbackEl.textContent = "Jornada concluída! A filosofia é um caminho contínuo de aprendizado."; }
    }
    const playerInRanking = (gameData.ranking || []).find(p => p.name === gameData.player.name && p.avatar === gameData.player.avatar);
    if (playerInRanking) {
      playerInRanking.title = title; 
      if ((gameData.player.score || 0) > (playerInRanking.score || 0) ) {
          playerInRanking.score = gameData.player.score;
      }
    } else {
       (gameData.ranking = gameData.ranking || []).push({ name: gameData.player.name, avatar: gameData.player.avatar, score: gameData.player.score || 0, title: title });
    }
    (gameData.ranking = gameData.ranking || []).sort((a, b) => (b.score || 0) - (a.score || 0));
    if (gameData.ranking.length > 10) gameData.ranking.length = 10;
    saveGameData(); 
    showSection('completion');
}

function updatePlayerRanking() {
    // ... (como antes) ...
    if(!(gameData.player || {}).name) {
        // console.warn("[Ranking] Cannot update ranking: No player name.");
        return;
    }
    gameData.ranking = gameData.ranking || [];
    let playerEntry = gameData.ranking.find(p => p.name === gameData.player.name && p.avatar === gameData.player.avatar);
    if (playerEntry) {
        if ((gameData.player.score || 0) > (playerEntry.score || 0)) {
            playerEntry.score = gameData.player.score;
            // console.log(`[Ranking] Updated score for ${playerEntry.name} to ${playerEntry.score}`);
        }
    } else {
        let playerEntryByName = gameData.ranking.find(p => p.name === gameData.player.name);
        if (playerEntryByName) {
            // console.log(`[Ranking] Player ${gameData.player.name} found with different avatar. Updating avatar and score if higher.`);
            playerEntryByName.avatar = gameData.player.avatar; 
            if ((gameData.player.score || 0) > (playerEntryByName.score || 0)) {
                playerEntryByName.score = gameData.player.score;
            }
            playerEntry = playerEntryByName; 
        } else {
            playerEntry = { name: gameData.player.name, avatar: gameData.player.avatar, score: gameData.player.score || 0, title: "Aprendiz Curioso" };
            gameData.ranking.push(playerEntry);
            // console.log(`[Ranking] Added new player ${playerEntry.name} to ranking with score ${playerEntry.score}`);
        }
    }
    if(playerEntry){
        const score = playerEntry.score || 0;
        if (score >= 2000) playerEntry.title = 'Sábio Filósofo';
        else if (score >= 1500) playerEntry.title = 'Pensador Iluminado';
        else if (score >= 1000) playerEntry.title = 'Iniciado na Sabedoria';
        else if (score >= 500) playerEntry.title = 'Explorador Filosófico';
        else playerEntry.title = 'Aprendiz Curioso'; 
    }
    gameData.ranking.sort((a, b) => (b.score || 0) - (a.score || 0));
    if (gameData.ranking.length > 10) gameData.ranking.length = 10;
}

function renderRankingList() {
    // ... (como antes) ...
    const rankingBody = $('#ranking-list-body');
    if (!rankingBody) {
        console.error("[Ranking] Ranking list body element not found.");
        return;
    }
    rankingBody.innerHTML = '';
    updatePlayerRanking(); 
    const ranking = gameData.ranking || [];
    if (ranking.length === 0) {
        rankingBody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-white/70">Ninguém no ranking ainda. Jogue para aparecer aqui!</td></tr>';
        return;
    }
    ranking.forEach((player, index) => {
        const row = rankingBody.insertRow();
        row.className = 'hover:bg-white/5 transition-colors';
        row.innerHTML = `
            <td class="py-3 px-2 sm:px-4 text-center">${index + 1}</td>
            <td class="py-3 px-2 sm:px-4">${player.name || 'Anônimo'}</td>
            <td class="py-3 px-2 sm:px-4"><img src="${player.avatar || 'images/avatars/placeholder_avatar.png'}" alt="Avatar de ${player.name || 'jogador'}" class="w-10 h-10 rounded-full object-cover mx-auto sm:mx-0" onerror="this.src='images/avatars/placeholder_avatar.png'; console.warn('Error loading avatar in ranking for ${player.name}')"></td>
            <td class="py-3 px-2 sm:px-4 text-center">${player.score || 0}</td>
            <td class="py-3 px-2 sm:px-4">${player.title || 'Aprendiz Curioso'}</td>
        `;
    });
    // console.log("[UI] Ranking list rendered.");
}

// --- Inicialização do Jogo ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("[Init] DOMContentLoaded: Event Fired. Starting game initialization...");
    setupDOMReferences(); 
    loadGameData();       
    setupEventListeners(); 
    setupAudio();         
    
    renderAvatarSelection(); 
    renderPhasesList(); 
    if (Object.keys(gameData.phaseDetails || {}).length > 0) {
        renderEditorPhaseSelectors(); 
    }
    renderEditorAvatarList();

    showSection('home');  
    console.log("[Init] Game initialization complete. Showing 'home' section.");
});
