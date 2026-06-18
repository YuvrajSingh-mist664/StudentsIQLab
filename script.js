const screens = {
  welcome: document.getElementById('welcome-screen'),
  form: document.getElementById('student-form-screen'),
  game: document.getElementById('game-screen'),
  result: document.getElementById('result-screen'),
};

const startButton = document.getElementById('start-button');
const studentForm = document.getElementById('student-form');
const gameContent = document.getElementById('game-content');
const timerLabel = document.getElementById('timer-label');
const levelLabel = document.getElementById('game-level');
const surprisePanel = document.getElementById('surprise-panel');
const restartButton = document.getElementById('restart-button');
const resultValues = {
  speed: document.getElementById('result-speed'),
  iq: document.getElementById('result-iq'),
  mentalAge: document.getElementById('result-mental-age'),
  need: document.getElementById('result-need'),
};
const resultTexts = {
  speed: document.getElementById('speed-text'),
  iq: document.getElementById('iq-text'),
  mentalAge: document.getElementById('mental-age-text'),
  need: document.getElementById('need-text'),
};
const optionButtons = Array.from(document.querySelectorAll('.option-btn'));

const challengePools = {
  primary: [
    {
      title: 'Speed Burst',
      description: 'Which number is larger? Choose the correct side before the timer runs out.',
      questionHtml: `
        <div class="visual-row">
          <div class="answer-box">
            <span>LEFT</span>
            <strong>8</strong>
          </div>
          <div class="answer-box">
            <span>RIGHT</span>
            <strong>5</strong>
          </div>
        </div>
      `,
      options: ['Left is bigger', 'Right is bigger', 'Both are same', 'Neither'],
      correct: 0,
      type: 'speed',
    },
    {
      title: 'Pattern Puzzle',
      description: 'Choose the shape that completes the pattern.',
      questionHtml: `
        <div class="pattern-row">
          <div class="shape circle"></div>
          <div class="shape square"></div>
          <div class="shape circle"></div>
          <div class="shape unknown">?</div>
        </div>
      `,
      options: ['Triangle', 'Circle', 'Square', 'Star'],
      correct: 2,
      type: 'logic',
    },
    {
      title: 'Memory Match',
      description: 'A quick color sequence is shown. Select the color that was third.',
      questionHtml: `
        <div class="memory-row">
          <div class="color-dot blue"></div>
          <div class="color-dot red"></div>
          <div class="color-dot green"></div>
          <div class="color-dot yellow"></div>
        </div>
        <p class="memory-label">Third color in the sequence?</p>
      `,
      options: ['Blue', 'Red', 'Green', 'Yellow'],
      correct: 2,
      type: 'memory',
    },
    {
      title: 'Focus Test',
      description: 'Find the highlighted number and choose it quickly.',
      questionHtml: `
        <div class="focus-grid">
          <span>3</span>
          <span class="glow">7</span>
          <span>5</span>
          <span>9</span>
        </div>
        <p class="memory-label">Tap the glowing number.</p>
      `,
      options: ['4', '7', '5', '9'],
      correct: 1,
      type: 'focus',
    },
  ],
  middle: [
    {
      title: 'Logic Sequence',
      description: 'Complete the number sequence by choosing the next value.',
      questionHtml: `
        <div class="pattern-row">
          <div class="shape number">2</div>
          <div class="shape number">4</div>
          <div class="shape number">6</div>
          <div class="shape unknown">?</div>
        </div>
      `,
      options: ['6', '7', '8', '9'],
      correct: 2,
      type: 'logic',
    },
    {
      title: 'Word Reasoning',
      description: 'Choose the word that does not belong in this group.',
      questionHtml: `
        <div class="word-row">
          <span>Cat</span>
          <span>Dog</span>
          <span>Bird</span>
          <span>Car</span>
        </div>
      `,
      options: ['Cat', 'Dog', 'Bird', 'Car'],
      correct: 3,
      type: 'logic',
    },
    {
      title: 'Memory Match',
      description: 'Remember the order and select the third item.',
      questionHtml: `
        <div class="memory-row">
          <div class="color-dot yellow"></div>
          <div class="color-dot purple"></div>
          <div class="color-dot blue"></div>
          <div class="color-dot red"></div>
        </div>
        <p class="memory-label">Which color was third?</p>
      `,
      options: ['Yellow', 'Purple', 'Blue', 'Red'],
      correct: 2,
      type: 'memory',
    },
    {
      title: 'Focus Challenge',
      description: 'Pick the number that stands out from the set.',
      questionHtml: `
        <div class="focus-grid">
          <span class="glow">12</span>
          <span>14</span>
          <span>16</span>
          <span>18</span>
        </div>
        <p class="memory-label">Tap the glowing number.</p>
      `,
      options: ['12', '14', '16', '18'],
      correct: 0,
      type: 'focus',
    },
  ],
  high: [
    {
      title: 'Advanced Logic',
      description: 'Find the next number in the pattern.',
      questionHtml: `
        <div class="pattern-row">
          <div class="shape number">5</div>
          <div class="shape number">10</div>
          <div class="shape number">20</div>
          <div class="shape unknown">?</div>
        </div>
      `,
      options: ['25', '30', '35', '40'],
      correct: 1,
      type: 'logic',
    },
    {
      title: 'Analogy Test',
      description: 'Choose the word that best completes the analogy.',
      questionHtml: `
        <div class="word-row">
          <span>Bird</span>
          <span>Wing</span>
          <span>Fish</span>
          <span>?</span>
        </div>
      `,
      options: ['Fin', 'Tail', 'Sea', 'Gills'],
      correct: 0,
      type: 'logic',
    },
    {
      title: 'Memory Sequence',
      description: 'Remember the number order. Which one came third?',
      questionHtml: `
        <div class="memory-row">
          <div class="color-dot blue">4</div>
          <div class="color-dot red">1</div>
          <div class="color-dot green">7</div>
          <div class="color-dot yellow">9</div>
        </div>
        <p class="memory-label">Which number was third?</p>
      `,
      options: ['4', '1', '7', '9'],
      correct: 2,
      type: 'memory',
    },
    {
      title: 'Focus Challenge',
      description: 'Pick the highlighted number from the set quickly.',
      questionHtml: `
        <div class="focus-grid">
          <span>21</span>
          <span class="glow">22</span>
          <span>24</span>
          <span>26</span>
        </div>
        <p class="memory-label">Tap the glowing number.</p>
      `,
      options: ['21', '22', '24', '26'],
      correct: 1,
      type: 'focus',
    },
  ],
};

function getChallengesForLevel(level) {
  return challengePools[level] || challengePools.primary;
}

function getSavedStudent() {
  const saved = localStorage.getItem('studentsIQLabUser');
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function saveStudent() {
  const student = {
    name: state.name,
    age: state.age,
    level: state.level,
  };
  localStorage.setItem('studentsIQLabUser', JSON.stringify(student));
}

const savedStudent = getSavedStudent();
if (savedStudent) {
  state.name = savedStudent.name;
  state.age = savedStudent.age;
  state.level = savedStudent.level;
  startButton.textContent = `Continue as ${state.name}`;
  const heroText = document.querySelector('.hero p');
  if (heroText) {
    heroText.textContent = `Welcome back, ${state.name}. Continue your ${state.level === 'high' ? 'High School' : state.level === 'middle' ? 'Middle' : 'Primary'} challenge.`;
  }
}


const resultMessages = {
  speed: [
    { threshold: 85, label: 'Lightning fast', detail: 'Your brain processes ideas in record time.' },
    { threshold: 70, label: 'Quick and sharp', detail: 'You make smart choices quickly.' },
    { threshold: 50, label: 'Steady thinker', detail: 'Your pace is reliable and thoughtful.' },
    { threshold: 0, label: 'Needs more practice', detail: 'Try the game again to improve reflex speed.' },
  ],
  iq: [
    { threshold: 120, label: 'Genius potential', detail: 'Your problem-solving is excellent.' },
    { threshold: 100, label: 'Very bright', detail: 'You are quick to learn and adapt.' },
    { threshold: 85, label: 'Above average', detail: 'Good reasoning skills with room to grow.' },
    { threshold: 0, label: 'Keep training', detail: 'Practice logic and memory to boost IQ score.' },
  ],
};

let state = {
  name: '',
  age: 0,
  level: '',
  stage: 0,
  score: 0,
  timeBonus: 0,
  correctCount: 0,
  startTime: 0,
  currentTimer: null,
  timerValue: 15,
};

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[name].classList.add('active');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateGameStage() {
  const pool = getChallengesForLevel(state.level);
  const challenge = pool[state.stage % pool.length];
  const challengeOrder = [...challenge.options].sort(() => Math.random() - 0.5);
  const correctOption = challenge.options[challenge.correct];
  const shuffledIndex = challengeOrder.indexOf(correctOption);

  gameContent.innerHTML = `
    <h2>${challenge.title}</h2>
    <p>${challenge.description}</p>
    ${challenge.questionHtml || ''}
  `;

  optionButtons.forEach((button, index) => {
    button.textContent = challengeOrder[index];
    button.dataset.correct = index === shuffledIndex ? 'true' : 'false';
    button.disabled = false;
    button.style.opacity = '1';
  });

  levelLabel.textContent = state.stage + 1;
  startTimer();
}

function startTimer() {
  clearInterval(state.currentTimer);
  state.timerValue = 15 - state.stage * 2;
  if (state.timerValue < 7) state.timerValue = 7;
  timerLabel.textContent = state.timerValue;
  state.currentTimer = setInterval(() => {
    state.timerValue -= 1;
    timerLabel.textContent = state.timerValue;
    if (state.timerValue <= 0) {
      clearInterval(state.currentTimer);
      processAnswer(false);
    }
  }, 1000);
}

function processAnswer(isCorrect) {
  clearInterval(state.currentTimer);
  optionButtons.forEach(button => {
    button.disabled = true;
    button.style.opacity = '0.7';
  });

  if (isCorrect) {
    const stageScore = 25 + state.timerValue * 3;
    state.score += stageScore;
    state.timeBonus += state.timerValue;
    state.correctCount += 1;
  }

  setTimeout(() => {
    state.stage += 1;
    if (state.stage >= 4) {
      renderResult();
    } else {
      generateGameStage();
    }
  }, 700);
}

function calculateResults() {
  const baseSpeed = Math.min(100, Math.max(20, state.timeBonus * 5 + state.correctCount * 10));
  const baseIq = Math.min(140, Math.max(70, Math.round(85 + state.score / 4 + state.correctCount * 3)));
  const mentalAge = Math.round(state.age + (baseIq - 100) / 8 + (baseSpeed - 60) / 20);
  const needByScore = state.score < 120 ? 'Practice focus and memory' : state.score < 180 ? 'Develop reasoning and speed' : 'Keep challenging your brain';

  return {
    speed: baseSpeed,
    iq: baseIq,
    mentalAge: Math.max(6, mentalAge),
    need: needByScore,
  };
}

function pickResultMessage(type, value) {
  return resultMessages[type].find(item => value >= item.threshold);
}

function renderResult() {
  state.score += state.correctCount * 5;
  const results = calculateResults();

  resultValues.speed.textContent = `${results.speed}%`;
  resultValues.iq.textContent = results.iq;
  resultValues.mentalAge.textContent = `${results.mentalAge} years`;
  resultValues.need.textContent = results.need;

  const speedMessage = pickResultMessage('speed', results.speed);
  const iqMessage = pickResultMessage('iq', results.iq);

  resultTexts.speed.textContent = speedMessage.detail;
  resultTexts.iq.textContent = iqMessage.detail;
  resultTexts.mentalAge.textContent = `Your thinking feels around age ${results.mentalAge}.`;
  resultTexts.need.textContent = results.need;

  surprisePanel.innerHTML = `
    <h3>Brain Spark</h3>
    <p>${state.name}, your brain unlocked a <strong>${speedMessage.label}</strong> streak and a <strong>${iqMessage.label}</strong> rating.</p>
    <p>Try again after a short break and watch your score climb higher.</p>
  `;

  showScreen('result');
}

function resetState() {
  state = {
    name: '',
    age: 0,
    level: '',
    stage: 0,
    score: 0,
    timeBonus: 0,
    correctCount: 0,
    startTime: 0,
    currentTimer: null,
    timerValue: 15,
  };
}

startButton.addEventListener('click', () => {
  if (savedStudent) {
    state.stage = 0;
    state.score = 0;
    state.timeBonus = 0;
    state.correctCount = 0;
    showScreen('game');
    generateGameStage();
  } else {
    showScreen('form');
  }
});

studentForm.addEventListener('submit', event => {
  event.preventDefault();
  state.name = document.getElementById('student-name').value.trim();
  state.age = Number(document.getElementById('student-age').value);
  state.level = document.getElementById('student-level').value;
  if (!state.name || !state.age || !state.level) return;
  saveStudent();
  showScreen('game');
  state.stage = 0;
  state.score = 0;
  state.timeBonus = 0;
  state.correctCount = 0;
  generateGameStage();
});

optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const correct = button.dataset.correct === 'true';
    processAnswer(correct);
  });
});

restartButton.addEventListener('click', () => {
  resetState();
  document.getElementById('student-form').reset();
  showScreen('welcome');
});

showScreen('welcome');
