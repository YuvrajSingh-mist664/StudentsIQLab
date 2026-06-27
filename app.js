(() => {
  "use strict";

  const LEVEL_LABELS = {
    primary: "Primary",
    middle: "Middle",
    secondary: "Secondary",
    senior: "Senior secondary",
    college: "College"
  };

  const SPEED_QUESTIONS = {
    primary: [
      q("7 + 6 = ?", ["11", "12", "13", "14"], "13"),
      q("Opposite of cold?", ["Hot", "Tall", "Slow", "Soft"], "Hot"),
      q("2, 4, 6, ?", ["7", "8", "10", "12"], "8"),
      q("Shape with three sides?", ["Square", "Circle", "Triangle", "Cube"], "Triangle"),
      q("9 - 4 = ?", ["3", "4", "5", "6"], "5"),
      q("Largest number?", ["18", "31", "24", "29"], "31"),
      q("Book is to read as ball is to ?", ["Kick", "Sleep", "Write", "Cook"], "Kick"),
      q("A, B, C, ?", ["D", "E", "F", "G"], "D")
    ],
    middle: [
      q("14 + 19 = ?", ["31", "32", "33", "34"], "33"),
      q("3, 6, 12, ?", ["15", "18", "24", "36"], "24"),
      q("If all roses are flowers, a rose is a ?", ["Tree", "Flower", "Fruit", "Seed"], "Flower"),
      q("72 / 8 = ?", ["7", "8", "9", "10"], "9"),
      q("25% of 80 = ?", ["10", "15", "20", "25"], "20"),
      q("Z, X, V, ?", ["T", "S", "U", "R"], "T"),
      q("Odd one out?", ["River", "Lake", "Ocean", "Mountain"], "Mountain"),
      q("Which number is prime?", ["21", "27", "29", "33"], "29")
    ],
    secondary: [
      q("18 x 7 = ?", ["116", "124", "126", "136"], "126"),
      q("4, 9, 16, 25, ?", ["30", "32", "36", "40"], "36"),
      q("If A > B and B > C, then A is ?", ["Less than C", "Equal to C", "Greater than C", "Unrelated"], "Greater than C"),
      q("15% of 240 = ?", ["24", "30", "36", "42"], "36"),
      q("Seed:plant :: egg:?", ["Nest", "Bird", "Feather", "Air"], "Bird"),
      q("2x + 5 = 17. x = ?", ["5", "6", "7", "8"], "6"),
      q("Odd one out?", ["Copper", "Iron", "Oxygen", "Gold"], "Oxygen"),
      q("1, 1, 2, 3, 5, ?", ["7", "8", "9", "10"], "8")
    ],
    senior: [
      q("7, 14, 28, 56, ?", ["84", "96", "112", "128"], "112"),
      q("5 workers need 12 days. 10 workers need about ?", ["4 days", "6 days", "10 days", "24 days"], "6 days"),
      q("x/3 + 4 = 9. x = ?", ["12", "15", "18", "21"], "15"),
      q("Median: 4, 9, 2, 8, 7", ["7", "8", "9", "6"], "7"),
      q("No athletes are lazy. Rina is an athlete. Rina is ?", ["Lazy", "Not lazy", "Not an athlete", "Unknown"], "Not lazy"),
      q("20% increase on 150 gives ?", ["160", "170", "180", "190"], "180"),
      q("2, 6, 12, 20, ?", ["28", "30", "32", "36"], "30"),
      q("Strongest evidence?", ["A single opinion", "A repeated experiment", "A rumor", "A guess"], "A repeated experiment")
    ],
    college: [
      q("1, 4, 9, 16, ?", ["20", "24", "25", "27"], "25"),
      q("High correlation proves causation.", ["Always true", "Usually true", "False", "Cannot be tested"], "False"),
      q("40% complete after 12 hours. Total hours?", ["24", "28", "30", "36"], "30"),
      q("All A are B. Some B are C. Conclusion?", ["All A are C", "Some A are C", "No A are C", "No definite link"], "No definite link"),
      q("500 drops to 425. Percent decrease?", ["12%", "15%", "17%", "20%"], "15%"),
      q("3(x - 2) = 2x + 8. x = ?", ["10", "12", "14", "16"], "14"),
      q("Best way to reduce bias?", ["Larger labels", "Random sampling", "Shorter questions", "Bright colors"], "Random sampling"),
      q("3, 5, 9, 17, 33, ?", ["49", "57", "65", "66"], "65")
    ]
  };

  const REASONING_QUESTIONS = {
    primary: [
      q("10, 20, 30, ?", ["35", "40", "45", "50"], "40"),
      q("A sparrow is a bird. Birds have wings. A sparrow has ?", ["Wings", "Wheels", "Roots", "Pages"], "Wings"),
      q("Pencil, pen, crayon belong with ?", ["Eraser", "Spoon", "Shoe", "Cup"], "Eraser"),
      q("If today is Monday, tomorrow is ?", ["Sunday", "Tuesday", "Friday", "Saturday"], "Tuesday"),
      q("Which is heavier?", ["1 kg cotton", "1 kg iron", "Both same", "Cannot tell"], "Both same"),
      q("Small, medium, ?", ["Tiny", "Large", "Soft", "Quick"], "Large")
    ],
    middle: [
      q("2, 5, 11, 23, ?", ["35", "41", "47", "49"], "47"),
      q("Earth is a planet. Planets orbit stars. Earth orbits a ?", ["Moon", "Star", "Cloud", "River"], "Star"),
      q("Library:books :: museum:?", ["Tickets", "Artifacts", "Windows", "Roads"], "Artifacts"),
      q("3 red and 2 blue balls. Chance of blue?", ["2/5", "3/5", "1/2", "1/5"], "2/5"),
      q("Needed to find speed?", ["Distance and time", "Color and shape", "Age and name", "Height and sound"], "Distance and time"),
      q("Some artists are teachers. All teachers read. What may be true?", ["Some artists read", "No teachers read", "All readers teach", "No artists teach"], "Some artists read")
    ],
    secondary: [
      q("6, 11, 21, 41, ?", ["61", "71", "81", "91"], "81"),
      q("All metals conduct heat. Copper is a metal. Copper ?", ["Conducts heat", "Cannot conduct heat", "Is not metal", "Is always liquid"], "Conducts heat"),
      q("Average of 80, 85, 95?", ["84", "86.7", "90", "92"], "86.7"),
      q("Which claim needs stronger evidence?", ["Water freezes at 0 C", "This medicine cures every disease", "The sun rises east", "Plants need light"], "This medicine cures every disease"),
      q("Square perimeter 32 cm. Side length?", ["6 cm", "8 cm", "10 cm", "16 cm"], "8 cm"),
      q("Best cause-effect summary?", ["More practice can improve skill", "Skill causes calendar", "Practice removes sleep", "Skill is fixed"], "More practice can improve skill")
    ],
    senior: [
      q("1, 4, 10, 22, 46, ?", ["82", "90", "94", "98"], "94"),
      q("Representative sample means it ?", ["Matches the group", "Is tiny", "Ignores differences", "Uses only volunteers"], "Matches the group"),
      q("Argument does not preserve truth. It is ?", ["Valid", "Invalid", "Both", "Unrelated"], "Invalid"),
      q("80 rises to 100. Percent increase?", ["20%", "25%", "30%", "40%"], "25%"),
      q("Hypothesis:experiment :: design:?", ["Prototype", "Weather", "Memory", "Noise"], "Prototype"),
      q("Counterexample to all even numbers divisible by 4?", ["8", "10", "12", "16"], "10")
    ],
    college: [
      q("n squared plus 1: 2, 5, 10, 17, ?", ["24", "25", "26", "27"], "26"),
      q("A valid conclusion is based on ?", ["Premises", "Font size", "Mood", "Speed only"], "Premises"),
      q("Normal distribution values cluster near the ?", ["Mean", "Maximum", "Minimum", "Outlier"], "Mean"),
      q("High reliability gives ?", ["Consistent results", "Beautiful charts", "Random scores", "Only high scores"], "Consistent results"),
      q("Strongest design for cause?", ["Randomized controlled trial", "Anecdote", "Single comment", "Poster"], "Randomized controlled trial"),
      q("If opportunity cost rises, choose by ?", ["Reconsidering tradeoffs", "Ignoring costs", "Choosing randomly", "Stopping measurement"], "Reconsidering tradeoffs")
    ]
  };

  const MEMORY_WORDS = {
    primary: ["river", "pencil", "garden", "window", "orange", "chair"],
    middle: ["planet", "mirror", "cotton", "signal", "forest", "bridge", "silver"],
    secondary: ["compass", "harvest", "voltage", "texture", "journal", "climate", "engine", "orbit"],
    senior: ["matrix", "impulse", "contrast", "protocol", "density", "archive", "vector", "syntax"],
    college: ["inference", "variance", "network", "thesis", "algorithm", "ethics", "schema", "quantum", "model"]
  };

  const DISTRACTORS = ["lamp", "basket", "fabric", "oxygen", "method", "packet", "sample", "culture", "velocity"];
  const SURVEY_ITEMS = [
    "I can focus on one learning task without switching often.",
    "I remember important points after one day.",
    "I solve a new problem step by step before guessing.",
    "I stay calm when a question looks difficult.",
    "I ask for help or use another method when stuck.",
    "I complete homework or study goals on time."
  ];

  const state = {
    speed: emptyTask(),
    reasoning: emptyTask(),
    memory: emptyTask(),
    survey: emptyTask()
  };
  let speedTimer = null;
  let memoryTimer = null;

  function q(prompt, choices, answer) {
    return { prompt, choices, answer };
  }

  function emptyTask() {
    return { completed: false, score: null };
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function $all(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  function level() {
    return $("#studentLevel").value || "middle";
  }

  function age() {
    const value = $("#studentAge").value.trim();
    const parsed = Number(value);
    return value && Number.isFinite(parsed) ? Math.min(25, Math.max(6, parsed)) : null;
  }

  function profileErrors() {
    const errors = [];
    const parsedAge = Number($("#studentAge").value.trim());
    if (!$("#studentName").value.trim()) errors.push("student name");
    if (!$("#studentAge").value.trim()) errors.push("age");
    else if (!Number.isFinite(parsedAge) || parsedAge < 6 || parsedAge > 25) errors.push("valid age from 6 to 25");
    if (!$("#studentClass").value.trim()) errors.push("class or grade");
    return errors;
  }

  function markProfileFields() {
    const parsedAge = Number($("#studentAge").value.trim());
    $("#studentName").classList.toggle("field-invalid", !$("#studentName").value.trim());
    $("#studentAge").classList.toggle("field-invalid", !$("#studentAge").value.trim() || !Number.isFinite(parsedAge) || parsedAge < 6 || parsedAge > 25);
    $("#studentClass").classList.toggle("field-invalid", !$("#studentClass").value.trim());
  }

  function requireProfile(showMessage = true) {
    const errors = profileErrors();
    markProfileFields();
    if (!errors.length) {
      hideProfileNotice();
      return true;
    }
    if (showMessage) {
      const notice = $("#profileNotice");
      notice.textContent = "Please fill " + errors.join(", ") + " before starting the survey.";
      notice.classList.remove("hidden");
    }
    return false;
  }

  function hideProfileNotice() {
    const notice = $("#profileNotice");
    notice.textContent = "";
    notice.classList.add("hidden");
  }

  function activate(sectionId) {
    if (["reasoningSection", "memorySection", "surveySection", "reportSection"].includes(sectionId) && !requireProfile(true)) return;
    $all(".tab-button").forEach((button) => button.classList.toggle("active", button.dataset.target === sectionId));
    $all(".task-section").forEach((section) => section.classList.toggle("active", section.id === sectionId));
    if (sectionId === "reportSection") updateReport();
  }

  function bindEvents() {
    $all(".tab-button").forEach((button) => button.addEventListener("click", () => activate(button.dataset.target)));
    $("#startSpeed").addEventListener("click", startSpeed);
    $("#startMemory").addEventListener("click", startMemory);
    $("#reasoningForm").addEventListener("submit", submitReasoning);
    $("#surveyForm").addEventListener("submit", submitSurvey);
    $("#printReport").addEventListener("click", printReport);
    $("#printReportTop").addEventListener("click", printReport);
    $("#resetApp").addEventListener("click", resetAll);
    $("#studentLevel").addEventListener("change", resetLevelTasks);
    ["#studentName", "#studentAge", "#studentClass"].forEach((selector) => {
      $(selector).addEventListener("input", () => {
        if (!$("#profileNotice").classList.contains("hidden")) requireProfile(false);
        updateReport();
      });
    });
  }

  function resetLevelTasks() {
    clearTimers();
    state.speed = emptyTask();
    state.reasoning = emptyTask();
    state.memory = emptyTask();
    state.survey = emptyTask();
    renderSpeedIntro();
    renderReasoning();
    renderMemoryIntro();
    renderSurvey();
    updateStatus();
    updateReport();
  }

  function resetAll() {
    clearTimers();
    Object.assign(state, { speed: emptyTask(), reasoning: emptyTask(), memory: emptyTask(), survey: emptyTask() });
    $("#studentName").value = "";
    $("#studentAge").value = "";
    $("#studentLevel").value = "middle";
    $("#studentClass").value = "";
    hideProfileNotice();
    $all("#profileForm input").forEach((input) => input.classList.remove("field-invalid"));
    renderSpeedIntro();
    renderReasoning();
    renderMemoryIntro();
    renderSurvey();
    updateStatus();
    updateReport();
    activate("speedSection");
  }

  function clearTimers() {
    window.clearInterval(speedTimer);
    window.clearInterval(memoryTimer);
    speedTimer = null;
    memoryTimer = null;
  }

  function renderSpeedIntro() {
    $("#speedTimer").textContent = "00:00";
    $("#speedStage").innerHTML = '<p class="task-copy">Answer the short timed questions as accurately as possible.</p><button class="primary-button" id="startSpeed" type="button">Start speed task</button>';
    $("#startSpeed").addEventListener("click", startSpeed);
  }

  function startSpeed() {
    if (!requireProfile(true)) return;
    clearInterval(speedTimer);
    state.speed = { completed: false, items: SPEED_QUESTIONS[level()], index: 0, correct: 0, startedAt: Date.now(), score: null };
    speedTimer = setInterval(() => {
      $("#speedTimer").textContent = formatSeconds((Date.now() - state.speed.startedAt) / 1000);
    }, 250);
    renderSpeedQuestion();
  }

  function renderSpeedQuestion() {
    const task = state.speed;
    const item = task.items[task.index];
    const progress = Math.round((task.index / task.items.length) * 100);
    $("#speedStage").innerHTML = `
      <div class="progress-shell"><div class="progress-fill" style="width:${progress}%"></div></div>
      <article class="question-card">
        <div class="question-topline"><span>Question ${task.index + 1} of ${task.items.length}</span><span>${LEVEL_LABELS[level()]}</span></div>
        <p class="question-prompt">${escapeHtml(item.prompt)}</p>
        <div class="choice-grid">${item.choices.map((choice) => `<button class="choice-button" type="button" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join("")}</div>
      </article>`;
    $all("#speedStage .choice-button").forEach((button) => button.addEventListener("click", () => submitSpeed(button.dataset.answer)));
  }

  function submitSpeed(answer) {
    const task = state.speed;
    if (answer === task.items[task.index].answer) task.correct += 1;
    task.index += 1;
    task.index >= task.items.length ? finishSpeed() : renderSpeedQuestion();
  }

  function finishSpeed() {
    clearInterval(speedTimer);
    const seconds = (Date.now() - state.speed.startedAt) / 1000;
    const accuracy = (state.speed.correct / state.speed.items.length) * 100;
    const expected = { primary: 80, middle: 70, secondary: 62, senior: 58, college: 55 }[level()] || 70;
    const timeScore = seconds <= expected ? 100 : Math.max(30, 100 - (seconds - expected) * 2);
    state.speed.score = Math.round(accuracy * 0.68 + timeScore * 0.32);
    state.speed.completed = true;
    $("#speedTimer").textContent = formatSeconds(seconds);
    $("#speedStage").innerHTML = `<div class="feedback">Completed: ${state.speed.correct} of ${state.speed.items.length} correct. Thinking speed index: ${state.speed.score}.</div><button class="text-button" id="retakeSpeed" type="button">Retake speed task</button>`;
    $("#retakeSpeed").addEventListener("click", startSpeed);
    updateStatus();
    updateReport();
  }

  function renderReasoning() {
    const form = $("#reasoningForm");
    form.innerHTML = REASONING_QUESTIONS[level()].map((item, index) => `
      <article class="question-card">
        <div class="question-topline"><span>Reasoning ${index + 1}</span><span>${LEVEL_LABELS[level()]}</span></div>
        <p class="question-prompt">${escapeHtml(item.prompt)}</p>
        <div class="option-row">${item.choices.map((choice) => `<label class="radio-option"><input type="radio" name="reasoning-${index}" value="${escapeHtml(choice)}">${escapeHtml(choice)}</label>`).join("")}</div>
      </article>`).join("") + '<div class="submit-row"><button class="primary-button" type="submit">Save reasoning score</button></div>';
    $("#reasoningChip").textContent = "Not started";
  }

  function submitReasoning(event) {
    event.preventDefault();
    if (!requireProfile(true)) return;
    const bank = REASONING_QUESTIONS[level()];
    const answers = bank.map((_, index) => $("#reasoningForm").querySelector(`input[name="reasoning-${index}"]:checked`));
    if (answers.some((answer) => !answer)) return formMessage("#reasoningForm", "Please answer every reasoning question before saving.", true);
    const correct = answers.reduce((count, answer, index) => count + (answer.value === bank[index].answer ? 1 : 0), 0);
    state.reasoning = { completed: true, correct, total: bank.length, score: Math.round((correct / bank.length) * 100) };
    $("#reasoningChip").textContent = state.reasoning.score + "/100";
    formMessage("#reasoningForm", `Saved: ${correct} of ${bank.length} correct.`, false);
    updateStatus();
    updateReport();
  }

  function renderMemoryIntro() {
    $("#memoryTimer").textContent = "Ready";
    $("#memoryStage").innerHTML = '<p class="task-copy">Study the words, then select the words you remember.</p><button class="primary-button" id="startMemory" type="button">Start memory task</button>';
    $("#startMemory").addEventListener("click", startMemory);
  }

  function startMemory() {
    if (!requireProfile(true)) return;
    clearInterval(memoryTimer);
    const words = MEMORY_WORDS[level()];
    const seconds = level() === "primary" ? 14 : 18;
    state.memory = { completed: false, words, startedAt: Date.now(), seconds, score: null };
    $("#memoryStage").innerHTML = `<p class="task-copy">Study these words until the timer ends.</p><div class="memory-words">${words.map((word) => `<div class="memory-word">${escapeHtml(word)}</div>`).join("")}</div><button class="text-button" id="hideMemory" type="button">Hide words now</button>`;
    $("#hideMemory").addEventListener("click", showMemoryRecall);
    updateMemoryTimer();
    memoryTimer = setInterval(updateMemoryTimer, 250);
  }

  function updateMemoryTimer() {
    const remaining = Math.max(0, Math.ceil(state.memory.seconds - (Date.now() - state.memory.startedAt) / 1000));
    $("#memoryTimer").textContent = remaining + "s";
    if (remaining <= 0) showMemoryRecall();
  }

  function showMemoryRecall() {
    clearInterval(memoryTimer);
    $("#memoryTimer").textContent = "Recall";
    const words = state.memory.words || MEMORY_WORDS[level()];
    const options = words.concat(DISTRACTORS.slice(0, Math.max(4, Math.floor(words.length / 2)))).sort();
    $("#memoryStage").innerHTML = `<p class="task-copy">Select only the words that appeared in the study list.</p><form id="memoryForm" class="question-list"><div class="option-row">${options.map((word) => `<label class="check-option"><input type="checkbox" value="${escapeHtml(word)}">${escapeHtml(word)}</label>`).join("")}</div><div class="submit-row"><button class="primary-button" type="submit">Save memory score</button></div></form>`;
    $("#memoryForm").addEventListener("submit", submitMemory);
  }

  function submitMemory(event) {
    event.preventDefault();
    if (!requireProfile(true)) return;
    const words = state.memory.words || MEMORY_WORDS[level()];
    const selected = $all("#memoryForm input:checked").map((input) => input.value);
    const correct = selected.filter((word) => words.includes(word)).length;
    const falseHits = selected.length - correct;
    const adjusted = Math.max(0, correct - falseHits * 0.5);
    state.memory = { ...state.memory, completed: true, correct, falseHits, total: words.length, score: Math.round((adjusted / words.length) * 100) };
    $("#memoryTimer").textContent = state.memory.score + "/100";
    $("#memoryStage").innerHTML = `<div class="feedback">Saved: ${correct} correct selections, ${falseHits} extra selections. Memory score: ${state.memory.score}.</div><button class="text-button" id="retakeMemory" type="button">Retake memory task</button>`;
    $("#retakeMemory").addEventListener("click", startMemory);
    updateStatus();
    updateReport();
  }

  function renderSurvey() {
    $("#surveyForm").innerHTML = SURVEY_ITEMS.map((item, index) => `
      <article class="question-card">
        <div class="question-topline"><span>Need ${index + 1}</span><span>1 low, 5 high</span></div>
        <p class="question-prompt">${escapeHtml(item)}</p>
        <div class="scale-row">${[1, 2, 3, 4, 5].map((value) => `<label class="scale-option"><input type="radio" name="survey-${index}" value="${value}">${value}</label>`).join("")}</div>
      </article>`).join("") + '<div class="submit-row"><button class="primary-button" type="submit">Save learning needs</button></div>';
    $("#surveyChip").textContent = "Not started";
  }

  function submitSurvey(event) {
    event.preventDefault();
    if (!requireProfile(true)) return;
    const values = SURVEY_ITEMS.map((_, index) => $("#surveyForm").querySelector(`input[name="survey-${index}"]:checked`));
    if (values.some((input) => !input)) return formMessage("#surveyForm", "Please answer every learning-needs item before saving.", true);
    const score = Math.round((values.reduce((sum, input) => sum + Number(input.value), 0) / (SURVEY_ITEMS.length * 5)) * 100);
    state.survey = { completed: true, score };
    $("#surveyChip").textContent = score + "/100";
    formMessage("#surveyForm", "Saved learning-needs survey.", false);
    updateStatus();
    updateReport();
  }

  function formMessage(formSelector, message, warning) {
    const form = $(formSelector);
    const old = form.querySelector(".feedback");
    if (old) old.remove();
    const box = document.createElement("div");
    box.className = "feedback" + (warning ? " warn" : "");
    box.textContent = message;
    form.appendChild(box);
  }

  function updateStatus() {
    [["#speedStatus", state.speed], ["#reasoningStatus", state.reasoning], ["#memoryStatus", state.memory], ["#surveyStatus", state.survey]].forEach(([selector, task]) => {
      $(selector).classList.toggle("done", Boolean(task.completed));
    });
  }

  function allComplete() {
    return state.speed.completed && state.reasoning.completed && state.memory.completed && state.survey.completed;
  }

  function updateReport() {
    if (!allComplete() || !requireProfile(false)) {
      $("#reportEmpty").classList.remove("hidden");
      $("#reportContent").classList.add("hidden");
      return;
    }
    const scores = { speed: state.speed.score, reasoning: state.reasoning.score, memory: state.memory.score, survey: state.survey.score };
    const composite = Math.round(scores.speed * 0.3 + scores.reasoning * 0.38 + scores.memory * 0.2 + scores.survey * 0.12);
    const mentalAge = Math.min(age() + 4, Math.max(Math.max(5, age() - 4), age() + ((composite - 55) / 45) * 3.5));
    const band = scoreBand(composite);
    const need = developmentNeed(composite, scores);
    $("#reportEmpty").classList.add("hidden");
    $("#reportContent").classList.remove("hidden");
    $("#metricSpeed").textContent = scores.speed;
    $("#metricReasoning").textContent = scores.reasoning;
    $("#metricMemory").textContent = scores.memory;
    $("#metricSurvey").textContent = scores.survey;
    $("#overallBand").textContent = `${band.title} (${composite}/100)`;
    $("#iqBand").textContent = `IQ-style level: ${band.iqText}. Use this as a screening estimate only, not an official IQ score.`;
    $("#mentalAge").textContent = `Mental-age style estimate: around ${mentalAge.toFixed(1)} years for these tasks. A validated professional test is needed for a formal result.`;
    $("#developmentNeed").textContent = `Need of mental development support: ${need.label}.`;
    renderRecommendations(scores, need);
    drawReportChart(scores, composite);
  }

  function scoreBand(score) {
    if (score >= 85) return { title: "Advanced performance", iqText: "above expected range" };
    if (score >= 70) return { title: "Strong performance", iqText: "high average range" };
    if (score >= 50) return { title: "Expected performance", iqText: "average range" };
    if (score >= 35) return { title: "Developing performance", iqText: "below average screening range" };
    return { title: "Needs guided support", iqText: "significant support indicated" };
  }

  function developmentNeed(composite, scores) {
    const lowAreas = Object.values(scores).filter((score) => score < 45).length;
    if (composite < 45 || lowAreas >= 2) return { label: "High", value: 3 };
    if (composite < 65 || lowAreas === 1) return { label: "Moderate", value: 2 };
    return { label: "Low", value: 1 };
  }

  function renderRecommendations(scores, need) {
    const items = [];
    if (scores.speed < 60) items.push("Use short timed practice blocks: mental math, reading fluency, and simple pattern drills for 8 to 10 minutes daily.");
    if (scores.reasoning < 60) items.push("Practice step-by-step reasoning: analogies, number patterns, cause-effect questions, and explanation after each answer.");
    if (scores.memory < 60) items.push("Build recall with chunking, spaced review, flash cards, and quick summaries after study sessions.");
    if (scores.survey < 65) items.push("Support study habits: fixed routines, shorter sessions, calm test practice, and early help when stuck.");
    if (!items.length) items.push("Maintain growth with enrichment tasks, deeper projects, peer teaching, and mixed problem-solving practice.");
    items.push(need.value >= 2 ? "Repeat this screening after 4 to 6 weeks of targeted practice and compare the pattern, not only the total score." : "Keep a balanced schedule with sleep, reading, physical activity, and challenging but enjoyable learning tasks.");
    $("#recommendations").innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function drawReportChart(scores, composite) {
    const canvas = $("#reportChart");
    const ctx = canvas.getContext("2d");
    const keys = ["speed", "reasoning", "memory", "survey"];
    const labels = ["Speed", "Reasoning", "Memory", "Readiness"];
    const colors = ["#1f8a70", "#3f6fb5", "#d65f45", "#b88718"];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const left = 72;
    const top = 42;
    const chartW = canvas.width - 110;
    const chartH = canvas.height - 100;
    ctx.strokeStyle = "#d7e0e7";
    ctx.font = "13px Arial";
    ctx.fillStyle = "#5d6872";
    [0, 25, 50, 75, 100].forEach((tick) => {
      const y = top + chartH - (tick / 100) * chartH;
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(left + chartW, y);
      ctx.stroke();
      ctx.fillText(String(tick), 24, y + 4);
    });
    keys.forEach((key, index) => {
      const value = scores[key];
      const barW = chartW / keys.length - 20;
      const x = left + index * (chartW / keys.length) + 10;
      const h = (value / 100) * chartH;
      const y = top + chartH - h;
      ctx.fillStyle = colors[index];
      ctx.fillRect(x, y, barW, h);
      ctx.fillStyle = "#182026";
      ctx.font = "bold 14px Arial";
      ctx.fillText(String(value), x + barW / 2 - 8, y - 8);
      ctx.fillStyle = "#5d6872";
      ctx.font = "12px Arial";
      ctx.fillText(labels[index], x - 6, top + chartH + 24);
    });
    ctx.fillStyle = "#182026";
    ctx.font = "bold 18px Arial";
    ctx.fillText(`Composite ${composite}/100`, left, 26);
  }

  function drawSignalCanvas() {
    const canvas = $("#signalCanvas");
    const ctx = canvas.getContext("2d");
    const nodes = [[55, 70, "#1f8a70"], [125, 45, "#3f6fb5"], [208, 82, "#d65f45"], [302, 55, "#b88718"], [360, 118, "#1f8a70"], [255, 160, "#3f6fb5"], [142, 152, "#d65f45"], [66, 146, "#b88718"]];
    ctx.fillStyle = "#ecf6f1";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(24, 32, 38, 0.16)";
    ctx.lineWidth = 3;
    nodes.forEach((node, index) => {
      const next = nodes[(index + 1) % nodes.length];
      ctx.beginPath();
      ctx.moveTo(node[0], node[1]);
      ctx.lineTo(next[0], next[1]);
      ctx.stroke();
    });
    [[0, 3], [1, 5], [2, 6], [4, 7]].forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[a][0], nodes[a][1]);
      ctx.lineTo(nodes[b][0], nodes[b][1]);
      ctx.stroke();
    });
    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.fillStyle = node[2];
      ctx.arc(node[0], node[1], 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.arc(node[0] - 4, node[1] - 4, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = "#182026";
    ctx.font = "bold 22px Arial";
    ctx.fillText("Mind growth profile", 24, 32);
    ctx.fillStyle = "#5d6872";
    ctx.font = "13px Arial";
    ctx.fillText("Speed, reasoning, recall, and learning habits", 24, 198);
  }

  function formatSeconds(seconds) {
    const total = Math.max(0, Math.round(seconds));
    return String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function printReport() {
    if (!requireProfile(true)) return;
    updateReport();
    activate("reportSection");
    if (allComplete()) window.print();
  }

  function init() {
    bindEvents();
    renderReasoning();
    renderSurvey();
    updateStatus();
    drawSignalCanvas();
    updateReport();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
