document.addEventListener('DOMContentLoaded', () => {
  const heroScrollButton = document.getElementById('hero-scroll-button');
  const musicSection = document.getElementById('music-section');

  const momentsList = document.getElementById('moments-list');

  const openLetterButton = document.getElementById('open-letter-button');
  const closeLetterButton = document.getElementById('close-letter-button');
  const captureLetterButton = document.getElementById('capture-letter-button');
  const letterModal = document.getElementById('letter-modal');
  const letterText = document.getElementById('letter-text');

  const featuredSongCover = document.getElementById('featured-song-cover');
  const featuredSongTitle = document.getElementById('featured-song-title');
  const featuredSongArtist = document.getElementById('featured-song-artist');
  const featuredSongDescription = document.getElementById('featured-song-description');
  const featuredSongButton = document.getElementById('featured-song-button');
  const featuredSongButtonIcon = document.getElementById('featured-song-button-icon');
  const featuredSongButtonText = document.getElementById('featured-song-button-text');
  const featuredSongAudio = document.getElementById('featured-song-audio');

  const floatingPlayer = document.getElementById('floating-player');
  const floatingPlayerCover = document.getElementById('floating-player-cover');
  const floatingPlayerTitle = document.getElementById('floating-player-title');
  const floatingPlayerArtist = document.getElementById('floating-player-artist');
  const floatingPlayerToggle = document.getElementById('floating-player-toggle');

  const isMobile = window.innerWidth < 640;

  let isDraggingPlayer = false;
  let playerStartX = 0;
  let playerCurrentX = 0;

  const escapeHtml = (text) =>
    text
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');

  const smoothScrollTo = (targetY, duration = 2000) => {
    const initialY = window.scrollY;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      window.scrollTo(0, initialY + (targetY - initialY) * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const openLetterModal = () => {
    letterModal.classList.remove('pointer-events-none', 'opacity-0');
    letterModal.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
  };

  const closeLetterModal = () => {
    letterModal.classList.add('pointer-events-none', 'opacity-0');
    letterModal.classList.remove('opacity-100');
    document.body.classList.remove('overflow-hidden');
  };

  const captureLetterAsImage = () => {
    try {
      const paragraphs = Array.from(letterText.querySelectorAll('p')).map((paragraph) =>
        paragraph.innerText.trim()
      );

      const width = 1080;
      const padding = 80;
      const titleY = 140;
      const startY = 260;
      const lineHeight = 52;
      const maxCharsPerLine = 42;
      const lines = [];

      paragraphs.forEach((paragraph) => {
        const words = paragraph.split(' ');
        let currentLine = '';

        words.forEach((word) => {
          const nextLine = currentLine ? `${currentLine} ${word}` : word;

          if (nextLine.length > maxCharsPerLine) {
            if (currentLine) {
              lines.push(currentLine);
            }

            currentLine = word;
          } else {
            currentLine = nextLine;
          }
        });

        if (currentLine) {
          lines.push(currentLine);
        }

        lines.push('');
      });

      const contentHeight = lines.length * lineHeight;
      const height = Math.max(1400, startY + contentHeight + 180);

      const textSvg = lines
        .map((line, index) => {
          if (!line) {
            return '';
          }

          const y = startY + index * lineHeight;

          return `<text x="${padding}" y="${y}" fill="rgba(255,255,255,0.88)" font-size="30" font-family="Arial, sans-serif">${escapeHtml(line)}</text>`;
        })
        .join('');

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <defs>
            <radialGradient id="glow" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stop-color="rgba(37,99,235,0.22)" />
              <stop offset="100%" stop-color="rgba(37,99,235,0)" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="#081126" rx="40" />
          <rect x="28" y="28" width="${width - 56}" height="${height - 56}" rx="32" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
          <rect width="100%" height="420" fill="url(#glow)" rx="40" />

          <text x="${padding}" y="90" fill="rgba(255,255,255,0.45)" font-size="18" font-family="Arial, sans-serif" letter-spacing="6">
            Para você
          </text>

          <text x="${padding}" y="${titleY}" fill="#ffffff" font-size="64" font-weight="600" font-family="Arial, sans-serif">
            Minha carta
          </text>

          ${textSvg}

          <line x1="${padding}" y1="${height - 120}" x2="${width - padding}" y2="${height - 120}" stroke="rgba(255,255,255,0.10)" />
          <text x="${padding}" y="${height - 70}" fill="rgba(255,255,255,0.60)" font-size="24" font-family="Arial, sans-serif">
            feito com carinho
          </text>
        </svg>
      `;

      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const previewWindow = window.open('', '_blank');

      previewWindow.document.write(`
        <html>
          <head>
            <title>Minha carta</title>
            <style>
              body {
                margin: 0;
                background: #020617;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
              }

              img {
                max-width: 100%;
                height: auto;
                display: block;
              }
            </style>
          </head>
          <body>
            <img src="${url}" alt="Carta capturada" />
          </body>
        </html>
      `);

      previewWindow.document.close();
    } catch (error) {
      console.error('Erro ao capturar a carta:', error);
    }
  };

  const renderMoments = () => {
    moments.forEach((moment) => {
      const card = document.createElement('article');

      card.className =
        'rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07] sm:p-6';

      card.innerHTML = `
        <p class="text-xs uppercase tracking-[0.2em] text-white/40">
          ${moment.displayDate}
        </p>

        <h3 class="mt-3 text-lg font-semibold text-white sm:text-xl">
          ${moment.title}
        </h3>

        <p class="mt-4 text-sm leading-7 text-white/70 sm:text-base">
          ${moment.description}
        </p>
      `;

      momentsList.appendChild(card);
    });
  };
  const renderLetter = () => {
    const paragraphsHtml = letter.paragraphs.map((p) => `<p>${p}</p>`).join('');

    letterText.innerHTML = `
    <p>${letter.greeting}</p>
    ${paragraphsHtml}
    <p>
      Com carinho,
      <br />
      ${letter.signature}
    </p>
  `;
  };

  const populateFeaturedSong = () => {
    featuredSongCover.src = featuredSong.cover;
    featuredSongTitle.textContent = featuredSong.title;
    featuredSongArtist.textContent = featuredSong.artist;
    featuredSongDescription.textContent = featuredSong.description;
    featuredSongAudio.src = featuredSong.audio;

    floatingPlayerCover.src = featuredSong.cover;
    floatingPlayerTitle.textContent = featuredSong.title;
    floatingPlayerArtist.textContent = featuredSong.artist;
  };

  const resetFloatingPlayerPosition = () => {
    floatingPlayer.style.transform = '';
    floatingPlayer.style.opacity = '';
    floatingPlayer.style.transition = '';
  };

  const showFloatingPlayer = () => {
    resetFloatingPlayerPosition();
    floatingPlayer.classList.remove('pointer-events-none', 'opacity-0');
    floatingPlayer.classList.add('opacity-100');
  };

  const hideFloatingPlayer = () => {
    floatingPlayer.classList.add('pointer-events-none', 'opacity-0');
    floatingPlayer.classList.remove('opacity-100');
  };

  const updateSongButtons = () => {
    const isPlaying = !featuredSongAudio.paused;

    featuredSongButtonIcon.textContent = isPlaying ? '❚❚' : '▶';
    featuredSongButtonText.textContent = isPlaying ? 'Pausar música' : 'Tocar música';
    floatingPlayerToggle.textContent = isPlaying ? '❚❚' : '▶';
  };

  const dismissFloatingPlayer = () => {
    floatingPlayer.style.transition = 'transform 300ms ease, opacity 300ms ease';
    floatingPlayer.style.transform = 'translateX(-150%)';
    floatingPlayer.style.opacity = '0';

    featuredSongAudio.pause();
    featuredSongAudio.currentTime = 0;
    updateSongButtons();

    setTimeout(() => {
      hideFloatingPlayer();
      resetFloatingPlayerPosition();
    }, 300);
  };

  const getClientX = (event) => {
    if (event.touches?.length) {
      return event.touches[0].clientX;
    }

    return event.clientX;
  };

  const startPlayerDrag = (event) => {
    isDraggingPlayer = true;
    playerStartX = getClientX(event);
    playerCurrentX = 0;
    floatingPlayer.style.transition = 'none';
  };

  const movePlayerDrag = (event) => {
    if (!isDraggingPlayer) {
      return;
    }

    const currentX = getClientX(event);
    const deltaX = currentX - playerStartX;

    if (deltaX < 0) {
      playerCurrentX = deltaX;
      floatingPlayer.style.transform = `translateX(${deltaX}px)`;
    }
  };

  const endPlayerDrag = () => {
    if (!isDraggingPlayer) {
      return;
    }

    isDraggingPlayer = false;

    if (playerCurrentX <= -120) {
      dismissFloatingPlayer();
      return;
    }

    floatingPlayer.style.transition = 'transform 300ms ease';
    floatingPlayer.style.transform = 'translateX(0)';
  };

  const toggleFeaturedSong = async () => {
    if (featuredSongAudio.paused) {
      await featuredSongAudio.play();
      showFloatingPlayer();
    } else {
      featuredSongAudio.pause();
    }

    updateSongButtons();
  };

  const initializeParticles = () => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: isMobile ? 35 : 55,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: ['#ffffff', '#f8fafc', '#fde68a', '#bfdbfe'],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: isMobile ? 2 : 3,
          random: true,
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.12 : 0.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  };

  heroScrollButton.addEventListener('click', () => {
    smoothScrollTo(musicSection.offsetTop, 1500);
  });

  openLetterButton.addEventListener('click', openLetterModal);
  closeLetterButton.addEventListener('click', closeLetterModal);
  captureLetterButton.addEventListener('click', captureLetterAsImage);

  letterModal.addEventListener('click', (event) => {
    if (event.target === letterModal) {
      closeLetterModal();
    }
  });

  featuredSongButton.addEventListener('click', toggleFeaturedSong);
  floatingPlayerToggle.addEventListener('click', toggleFeaturedSong);

  featuredSongAudio.addEventListener('play', () => {
    showFloatingPlayer();
    updateSongButtons();
  });

  featuredSongAudio.addEventListener('pause', updateSongButtons);

  featuredSongAudio.addEventListener('ended', () => {
    hideFloatingPlayer();
    updateSongButtons();
  });

  floatingPlayer.addEventListener('mousedown', startPlayerDrag);
  floatingPlayer.addEventListener('touchstart', startPlayerDrag, { passive: true });

  window.addEventListener('mousemove', movePlayerDrag);
  window.addEventListener('mouseup', endPlayerDrag);
  window.addEventListener('touchmove', movePlayerDrag, { passive: true });
  window.addEventListener('touchend', endPlayerDrag);

  renderLetter();
  renderMoments();
  populateFeaturedSong();
  updateSongButtons();
  initializeParticles();
});
