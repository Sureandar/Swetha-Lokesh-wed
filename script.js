// ==========================================================================
// Interactive Wedding Invitation: Ch Swetha & C Lokesh
// Date: October 21, 2026 | Vishnu Mahal, Minjur, Chennai
// ==========================================================================

// Wedding Date: October 21, 2026 at 10:30 AM IST
const weddingDate = new Date("Oct 21, 2026 10:30:00").getTime();
let isMusicPlaying = false;
let audioPlayer = null;
let loveCount = 128;

// Initial warm blessing messages
const defaultBlessings = [
  { text: "May God unite your hearts with endless love and divine grace! Hearty congratulations Swetha & Lokesh! ✝️❤️", time: "Just now" },
  { text: "Wishing you both a joyous married life filled with laughter, peace, and abundance! 💐✨", time: "2 hours ago" },
  { text: "Congratulations dear Swetha and Lokesh! Can't wait to celebrate at Vishnu Mahal, Minjur! 🎉🥂", time: "Yesterday" }
];

// Interactive Caricature dialogues
const welcomeMessages = [
  "Hi there! Welcome to our wedding invitation! 👋",
  "We can't wait to celebrate with you on October 21st! 💖",
  "Marriage Ceremony starts at 10:30 AM morning! 💍",
  "Wedding Reception starts at 12:30 PM afternoon! ✨",
  "Join us at Vishnu Mahal, Minjur, Chennai! 🏛️",
  "Two hearts, one sacred vow united in faith and love! ✝️✨",
  "Your prayers and presence are our greatest blessing! 🌸",
  "Love is patient, love is kind... love never fails! 🕊️",
  "See you soon on our big day! ✨"
];
let messageIndex = 0;

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Audio Player setup
  audioPlayer = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
  audioPlayer.loop = true;
  audioPlayer.volume = 0.12;

  // Start live countdown timer
  startCountdown();

  // Load and display blessings
  loadBlessings();

  // Setup event listeners
  setupEventListeners();
});

function setupEventListeners() {
  // Open Invitation Button
  const openInvBtn = document.getElementById("open-inv-btn");
  if (openInvBtn) {
    openInvBtn.addEventListener("click", openInvitation);
  }

  // Audio Toggle Button
  const musicToggle = document.getElementById("music-toggle");
  if (musicToggle) {
    musicToggle.addEventListener("click", toggleMusic);
  }

  // Caricature Couple click interaction
  const coupleSticker = document.getElementById("cartoon-couple-sticker");
  if (coupleSticker) {
    coupleSticker.addEventListener("click", handleCoupleStickerClick);
  }

  // One-click Phone Calendar (.ics) Download
  const downloadIcsBtn = document.getElementById("download-ics-btn");
  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener("click", downloadICSEvent);
  }

  // Love Heart Button
  const loveHeartBtn = document.getElementById("love-heart-btn");
  if (loveHeartBtn) {
    loveHeartBtn.addEventListener("click", handleLoveHeartClick);
  }

  // Quick preset blessing chips
  document.querySelectorAll(".chip-blessing").forEach(chip => {
    chip.addEventListener("click", () => {
      const wishText = chip.getAttribute("data-wish");
      submitBlessing(wishText);
    });
  });

  // Blessings Form Submit
  const blessingsForm = document.getElementById("blessings-form");
  if (blessingsForm) {
    blessingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("blessing-message");
      if (input && input.value.trim()) {
        submitBlessing(input.value.trim());
        input.value = "";
      }
    });
  }

  // Copy Link Button
  const copyBtn = document.getElementById("copy-link-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyInvitationLink);
  }

  // Share on WhatsApp Button
  const shareWhatsAppBtn = document.getElementById("share-whatsapp-btn");
  if (shareWhatsAppBtn) {
    shareWhatsAppBtn.addEventListener("click", shareOnWhatsApp);
  }
}

// 1. Open Invitation Envelope Experience
function openInvitation() {
  const overlay = document.getElementById("cover-overlay");
  if (overlay) {
    overlay.classList.add("fade-out");
  }

  // Start falling rose petals
  startRosePetalsShower();

  // Attempt to play music gently
  playMusic();

  // Slide in caricature couple after 1.4 seconds
  setTimeout(() => {
    const sticker = document.getElementById("cartoon-couple-sticker");
    const bubble = document.getElementById("couple-speech-bubble");
    if (sticker && bubble) {
      sticker.classList.add("active");
      setTimeout(() => {
        bubble.classList.add("visible");
        triggerBubbleBounce();
      }, 700);
    }
  }, 1400);
}

// 2. Interactive Caricature Bubble Quotes
function handleCoupleStickerClick() {
  const textEl = document.getElementById("bubble-text");
  if (textEl) {
    messageIndex = (messageIndex + 1) % welcomeMessages.length;
    textEl.innerText = welcomeMessages[messageIndex];
    triggerBubbleBounce();
  }
}

function triggerBubbleBounce() {
  const bubble = document.getElementById("couple-speech-bubble");
  if (bubble) {
    bubble.classList.remove("bubble-bounce");
    void bubble.offsetWidth; // Trigger reflow
    bubble.classList.add("bubble-bounce");
  }
}

// 3. Background Music Controls
function playMusic() {
  if (audioPlayer) {
    audioPlayer.play()
      .then(() => {
        isMusicPlaying = true;
        updateMusicButton(true);
      })
      .catch(err => {
        console.log("Autoplay blocked (user interaction may be required):", err);
      });
  }
}

function toggleMusic() {
  if (!audioPlayer) return;
  if (isMusicPlaying) {
    audioPlayer.pause();
    isMusicPlaying = false;
    updateMusicButton(false);
  } else {
    playMusic();
  }
}

function updateMusicButton(isPlaying) {
  const btn = document.getElementById("music-toggle");
  if (!btn) return;
  if (isPlaying) {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>`;
    btn.title = "Pause Music";
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>`;
    btn.title = "Play Music";
  }
}

// 4. Falling Rose & Jasmine Petals Animation
function startRosePetalsShower() {
  const container = document.getElementById("rose-petals-container");
  if (!container) return;
  container.innerHTML = "";

  const numPetals = 40;
  for (let i = 0; i < numPetals; i++) {
    createPetal(container);
  }
}

function createPetal(container) {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  const left = Math.random() * window.innerWidth;
  const size = Math.random() * 10 + 8; // 8px - 18px
  const delay = Math.random() * 8;
  const duration = Math.random() * 5 + 6; // 6s - 11s

  petal.style.left = `${left}px`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.animationDelay = `${delay}s`;
  petal.style.animationDuration = `${duration}s`;

  // Rose pink & ivory tones
  const colors = ["#E68A9A", "#F4BAC4", "#FBE3E8", "#D96B7D", "#FFFDF9"];
  petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
    createPetal(container);
  }, (delay + duration) * 1000);
}

// 5. Live Countdown Timer
function startCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("minutes");
  const secsEl = document.getElementById("seconds");

  function update() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = padZero(days);
    if (hoursEl) hoursEl.innerText = padZero(hours);
    if (minsEl) minsEl.innerText = padZero(minutes);
    if (secsEl) secsEl.innerText = padZero(seconds);
  }

  update();
  setInterval(update, 1000);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

// 6. Direct One-Click Calendar Download (.ics) - No personal details required!
function downloadICSEvent() {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Swetha & Lokesh Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:swetha-lokesh-wedding-20261021@wedding.com",
    "DTSTAMP:20261009T000000Z",
    "DTSTART:20261021T050000Z", // 10:30 AM IST
    "DTEND:20261021T103000Z",   // 4:00 PM IST
    "SUMMARY:Wedding & Reception of Ch Swetha & C Lokesh 💍✝️",
    "DESCRIPTION:Marriage Ceremony starts at 10:30 AM morning and Wedding Reception starts at 12:30 PM afternoon at Vishnu Mahal, Minjur, Chennai. Your prayers and presence are cherished!",
    "LOCATION:Vishnu Mahal, Minjur, Chennai, Tamil Nadu",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Swetha_and_Lokesh_Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 7. Blessings & Love Counter
function handleLoveHeartClick() {
  loveCount++;
  const badge = document.getElementById("love-count-badge");
  if (badge) {
    badge.innerText = loveCount;
  }

  // Floating mini heart effect
  const btn = document.getElementById("love-heart-btn");
  if (btn) {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 60 + 20}%`;
    heart.style.top = "0";
    heart.style.fontSize = "1.2rem";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 0.8s ease-out";
    btn.style.position = "relative";
    btn.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translateY(-40px) scale(1.4)`;
      heart.style.opacity = "0";
    }, 20);

    setTimeout(() => heart.remove(), 850);
  }
}

function loadBlessings() {
  const wall = document.getElementById("blessings-wall");
  if (!wall) return;

  const stored = JSON.parse(localStorage.getItem("swetha_lokesh_blessings") || "null");
  const blessings = stored && stored.length > 0 ? stored : defaultBlessings;

  wall.innerHTML = "";
  blessings.forEach(b => {
    appendBlessingToWall(b.text, b.time);
  });
}

function submitBlessing(text) {
  if (!text) return;

  const newBlessing = {
    text: text,
    time: "Just now"
  };

  const stored = JSON.parse(localStorage.getItem("swetha_lokesh_blessings") || "[]");
  stored.unshift(newBlessing);
  localStorage.setItem("swetha_lokesh_blessings", JSON.stringify(stored));

  appendBlessingToWall(newBlessing.text, newBlessing.time, true);
}

function appendBlessingToWall(text, time, prepend = false) {
  const wall = document.getElementById("blessings-wall");
  if (!wall) return;

  const item = document.createElement("div");
  item.classList.add("blessing-item");
  item.innerHTML = `
    <div class="blessing-text">${escapeHtml(text)}</div>
    <div class="blessing-time">${time}</div>
  `;

  if (prepend && wall.firstChild) {
    wall.insertBefore(item, wall.firstChild);
  } else {
    wall.appendChild(item);
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

// 8. Sharing Features
function copyInvitationLink() {
  const shareInput = document.getElementById("share-link-input");
  const copyBtnText = document.getElementById("copy-btn-text");
  
  if (shareInput) {
    shareInput.select();
    navigator.clipboard.writeText(shareInput.value)
      .then(() => {
        if (copyBtnText) {
          copyBtnText.innerText = "Copied! ✅";
          setTimeout(() => {
            copyBtnText.innerText = "Copy Link";
          }, 2500);
        }
      })
      .catch(() => {
        // Fallback
        document.execCommand("copy");
        if (copyBtnText) copyBtnText.innerText = "Copied! ✅";
      });
  }
}

function shareOnWhatsApp() {
  const text = encodeURIComponent(
    "💍✝️ *You're Cordially Invited!*\n\n" +
    "Together with our families, we invite you to celebrate the Wedding & Reception of *Ch Swetha & C Lokesh*.\n\n" +
    "📅 *Date:* Wednesday, October 21, 2026\n" +
    "⏰ *Timing:*\n" +
    "  • Marriage Ceremony: 10:30 AM (Morning)\n" +
    "  • Wedding Reception: 12:30 PM (Afternoon)\n" +
    "🏛️ *Venue:* Vishnu Mahal, Minjur, Chennai\n\n" +
    "✨ Tap below to view our digital wedding invitation & map directions:\n" +
    window.location.href
  );
  window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
}
