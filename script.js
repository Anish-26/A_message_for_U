// ===== EASTER EGG =====
console.log(
    '%c সবাইতো আকাশের দিকে তাকিয়ে চাঁদ দেখে আমি নয় সামনে দাঁড়ানো চাঁদটাকে দেখি 🌙',
    'background: linear-gradient(90deg, #004D98, #A50044); color: white; font-size: 18px; padding: 12px 20px; border-radius: 8px; font-family: sans-serif;'
);

// ===== SLIDE DATA =====
const slides = [
    {
        text: 'Hey... I have a few things I wanted to tell you.',
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=1',
        showNext: true,
        showQuiz: false,
        showYesNo: false
    },
    {
        text: 'Since we started talking, my days have felt a lot less lonely.',
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=2',
        showNext: true,
        showQuiz: false,
        showYesNo: false
    },
    {
        text: "I don't want to say or do anything that makes you uncomfortable...",
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=3',
        showNext: true,
        showQuiz: false,
        showYesNo: false
    },
    {
        text: 'But honestly, I just really love looking into your eyes.',
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=4',
        showNext: true,
        showQuiz: false,
        showYesNo: false
    },
    {
        text: 'I once heard that God doesn’t give you the people you want, He gives you the people you need… and lately I feel like that might be true for me.',
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=5',
        showNext: true,
        showQuiz: false,
        showYesNo: false
    },
    {
        text: "Before I ask... A quick check to prove you're a true <span class='highlight-blue'>Culer</span>! Who is Barça's all-time top scorer?",
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=6',
        showNext: false,
        showQuiz: true,
        showYesNo: false
    },
    {
        text: "You passed! 🎉 So... can I just have <span class='highlight-red'>30 minutes</span> of your day, every day? Let's go on a  <span class='highlight-blue'>walk</span>.",
        image: 'https://cataas.com/cat/cute?width=600&height=450&t=7',
        showNext: false,
        showQuiz: false,
        showYesNo: true
    }
];

let currentSlide = 0;
let startTime = Date.now();
let timeSpentText = "00:00";
let timerInterval;

// ===== DOM ELEMENTS =====
const slideImage = document.getElementById('slideImage');
const slideText = document.getElementById('slideText');
const btnNext = document.getElementById('btnNext');
const btnCheck = document.getElementById('btnCheck');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const quizArea = document.getElementById('quizArea');
const quizInput = document.getElementById('quizInput');
const quizError = document.getElementById('quizError');
const btnContainer = document.getElementById('btnContainer');
const polaroidCard = document.getElementById('polaroidCard');
const finalHearts = document.getElementById('finalHearts');
const websiteTimer = document.getElementById('websiteTimer');

// ===== TIMER LOGIC =====
function updateTimer() {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    timeSpentText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (websiteTimer) {
        websiteTimer.textContent = timeSpentText;
    }
}
timerInterval = setInterval(updateTimer, 1000);

// ===== FLOATING HEARTS BACKGROUND =====
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['💙', '❤️', '💛', '🩵', '🤍'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        container.appendChild(heart);
    }
}
createFloatingHearts();

// ===== SLIDE NAVIGATION =====
function updateSlide() {
    const slide = slides[currentSlide];

    // Fade out image
    slideImage.classList.add('fade-out');

    setTimeout(() => {
        slideImage.src = slide.image;
        slideImage.onload = () => {
            slideImage.classList.remove('fade-out');
        };
        // Fallback: remove fade-out even if onload doesn't fire 
        setTimeout(() => slideImage.classList.remove('fade-out'), 600);
    }, 300);

    // Update text with fade
    slideText.style.opacity = 0;
    setTimeout(() => {
        slideText.innerHTML = slide.text;
        slideText.style.opacity = 1;
    }, 300);

    // Toggle buttons
    btnNext.classList.toggle('hidden', !slide.showNext);
    btnCheck.classList.toggle('hidden', !slide.showQuiz);
    quizArea.classList.toggle('active', slide.showQuiz);
    btnYes.classList.toggle('hidden', !slide.showYesNo);
    btnNo.classList.toggle('hidden', !slide.showYesNo);

    // Position No button near Yes button if showing
    if (slide.showYesNo) {
        btnNo.style.position = 'fixed';
        // Place it to the right of Yes initially
        setTimeout(() => {
            const updatedYesRect = btnYes.getBoundingClientRect();
            btnNo.style.top = updatedYesRect.top + 'px';
            btnNo.style.left = (updatedYesRect.right + 14) + 'px';
        }, 100);
    }

    // Reset quiz
    if (slide.showQuiz) {
        quizInput.value = '';
        quizError.classList.remove('visible');
        setTimeout(() => quizInput.focus(), 500);
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

// ===== QUIZ CHECK =====
function checkAnswer() {
    const answer = quizInput.value.trim().toLowerCase();
    if (answer === 'messi') {
        // Correct!
        quizError.textContent = 'Correct! 🎉⚽';
        quizError.style.color = '#004D98';
        quizError.classList.add('visible');
        setTimeout(() => {
            currentSlide++;
            updateSlide();
        }, 1200);
    } else {
        // Wrong - shake input
        quizError.textContent = 'Hmm, not quite! Try again 🤔';
        quizError.style.color = '#A50044';
        quizError.classList.add('visible');
        quizInput.style.animation = 'none';
        quizInput.offsetHeight; // trigger reflow
        quizInput.style.animation = 'shake 0.4s ease';
    }
}

// Allow Enter key for quiz
quizInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

// ===== DODGE BUTTON (NO) =====
function dodgeButton(event) {
    if (event) event.preventDefault(); // Stop click-through on mobile touch

    const btn = btnNo;
    const padding = 20;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;
    const newX = Math.random() * maxX + padding;
    const newY = Math.random() * maxY + padding;
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
    btn.style.transition = 'none';

    // Fun text changes
    const texts = ['Nope! 😜', "Can't catch me!", 'Try again! 😂', 'Haha nice try!', 'Not today! 🏃‍♂️', 'Oops! 😅', 'Almost! 🤭', "Really! 🥺", "Am i that bad ?😓"];
    btn.textContent = texts[Math.floor(Math.random() * texts.length)];
}

// ===== YES CLICKED =====
function yesClicked() {
    // Update content
    slideImage.classList.add('fade-out');
    setTimeout(() => {
        slideImage.src = 'https://cataas.com/cat/cute?width=600&height=450&t=kiss';
        slideImage.onload = () => slideImage.classList.remove('fade-out');
        setTimeout(() => slideImage.classList.remove('fade-out'), 600);
    }, 300);

    slideText.style.opacity = 0;
    setTimeout(() => {
        slideText.innerHTML = 'Perfect! See you at Patuli. <span class="highlight-red">❤️</span><span class="highlight-blue">💙</span>';
        slideText.style.opacity = 1;
    }, 300);

    // Stop and hide timer
    clearInterval(timerInterval);
    if (websiteTimer) websiteTimer.style.opacity = '0';

    // Hide all buttons
    btnContainer.classList.add('hidden');
    btnNo.classList.add('hidden');

    // Add pulse to card
    polaroidCard.classList.add('pulse');

    // Burst hearts
    createHeartBurst();

    // Confetti
    createConfetti();

    // Flying Kisses
    createFlyingKisses();

    // Display final message
    setTimeout(() => {
        const msg = document.createElement('div');
        msg.className = 'final-toast-message';
        msg.innerHTML = `Thanks for your kind gesture!<br>I've already taken ${timeSpentText} of your 30 mins 😅`;
        document.body.appendChild(msg);
        setTimeout(() => msg.style.opacity = '1', 100);
    }, 2500);
}

function createHeartBurst() {
    const hearts = ['❤️', '💙', '💖', '💛', '🤍', '💕', '✨'];
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.className = 'burst-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.setProperty('--tx', (Math.random() - 0.5) * 600 + 'px');
        heart.style.setProperty('--ty', (Math.random() - 0.5) * 600 + 'px');
        heart.style.setProperty('--rot', Math.random() * 720 - 360 + 'deg');
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
        finalHearts.appendChild(heart);
    }
}

function createConfetti() {
    const colors = ['#004D98', '#A50044', '#FFD700', '#FF69B4', '#87CEEB', '#FFA500'];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = (3 + Math.random() * 3) + 'px';
        piece.style.height = (3 + Math.random() * 3) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 3) + 's';
        document.body.appendChild(piece);
    }
}

// ===== FLYING KISSES =====
function createFlyingKisses() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'flying-kiss';
            kiss.textContent = '💋';

            // Start around the center area (near the polaroid card)
            kiss.style.left = (40 + Math.random() * 20) + '%';
            kiss.style.bottom = '30%'; // Changed to bottom positioning since top isn't set

            // Randomize flight path
            const driftXMid = (Math.random() - 0.5) * 150;
            const driftXEnd = driftXMid + (Math.random() - 0.5) * 250;

            kiss.style.setProperty('--drift-x-mid', driftXMid + 'px');
            kiss.style.setProperty('--drift-x', (driftXMid * 1.5) + 'px');
            kiss.style.setProperty('--drift-x-end', driftXEnd + 'px');

            kiss.style.setProperty('--spin-mid', (Math.random() * 60 - 30) + 'deg');
            kiss.style.setProperty('--spin', (Math.random() * 80 - 40) + 'deg');
            kiss.style.setProperty('--spin-end', (Math.random() * 100 - 50) + 'deg');

            // Duration between 2s and 4s
            const duration = 2 + Math.random() * 2;
            kiss.style.setProperty('--duration', duration + 's');

            document.body.appendChild(kiss);

            // Cleanup
            setTimeout(() => kiss.remove(), duration * 1000 + 500);
        }, Math.random() * 1500); // Stagger the kisses over 1.5 seconds
    }
}

