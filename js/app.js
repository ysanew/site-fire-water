document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.background-video');
  const swiperEl = document.querySelector('.swiper');

  if (typeof Swiper === 'undefined' || typeof gsap === 'undefined') {
    console.warn('Swiper or GSAP is not loaded.');
    return;
  }

  if (!video || !swiperEl) {
    console.warn('Video element or swiper container not found.');
    return;
  }

  const swiperText = new Swiper('.swiper', {
    speed: 1600,
    mousewheel: {},
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  });

  swiperText.on('slideChange', function () {
    if (video.duration) {
      gsap.to(video, 1.6, {
        currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
        ease: 'power2.out'
      });
    }
  });

  swiperText.on('slideChangeTransitionStart', function () {
    video.classList.add('change');
  }).on('slideChangeTransitionEnd', function () {
    video.classList.remove('change');
  });
});