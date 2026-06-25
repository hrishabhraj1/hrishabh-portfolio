document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScroll();
  setupAnimationsObserver();
  setupVideoModal();
});

/**
 * Toggles a scrolled background and border on the header
 * depending on how far the user has scrolled. On project detail
 * pages, the header stays scrolled/opaque by default.
 */
function setupHeaderScroll() {
  const header = document.getElementById('main-header');
  const heroSection = document.getElementById('hero-section');

  if (!header) return;

  // Helper function to toggle header state
  const checkScroll = () => {
    // If there is no hero section (i.e. on case study detail page), keep it opaque
    if (!heroSection) {
      header.classList.add('scrolled');
      return;
    }

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      if (window.scrollY <= 50) {
        header.classList.remove('scrolled');
      }
    }
  };

  // Run immediately and on scroll
  checkScroll();
  window.addEventListener('scroll', checkScroll, { passive: true });
}

/**
 * Intersection Observer for animating elements into view.
 * Detects elements with classes 'fade-up-element' or 'fade-in-element'
 * and adds the 'visible' class when they enter the viewport.
 */
function setupAnimationsObserver() {
  const animatableElements = document.querySelectorAll('.fade-up-element, .fade-in-element');

  if (animatableElements.length === 0) return;

  const observerOptions = {
    root: null, // use the viewport
    rootMargin: '0px 0px -80px 0px', // trigger slightly before entering the full screen
    threshold: 0.05 // trigger when at least 5% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatableElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Implements lightbox modal video playback controls.
 * Clicking a reel card opens the modal, starts video playback, and locks page scroll.
 * Clicking overlays or close buttons terminates playback and unlocks scroll.
 */
function setupVideoModal() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('modal-player');
  const closeOverlay = document.getElementById('modal-close-overlay');
  const closeBtn = document.getElementById('modal-close-btn');
  const reelCards = document.querySelectorAll('.reel-card');

  if (!modal || !player) return;

  const openModal = (videoUrl) => {
    player.src = videoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // lock scroll
    player.load();
    player.play().catch(error => {
      console.warn("Autoplay was prevented by the browser. User action required to play.", error);
    });
  };

  const closeModal = () => {
    modal.classList.remove('active');
    player.pause();
    player.removeAttribute('src'); // clear source
    player.load();
    document.body.style.overflow = ''; // unlock scroll
  };

  // Attach click listeners to cards
  reelCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.getAttribute('data-video-url');
      if (videoUrl) {
        openModal(videoUrl);
      }
    });
  });

  // Close triggers
  closeOverlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  // Esc key close support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
