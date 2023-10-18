gsap.registerPlugin(ScrollTrigger);

// アニメーション設定を関数化
function slideFromSide(selector, distance, duration) {
  gsap.from(selector, {
    x: distance,
    opacity: 0,
    duration: duration,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: false,
    }
  });
}

function fadeInFromBelow(selector, duration, delayMultiplier) {
  document.querySelectorAll(selector).forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: duration,
      delay: index * delayMultiplier,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        markers: false,
      }
    });
  });
}

// aboutエリアアニメーション
slideFromSide(".about-area .about-detail:not(.reverse)", 20, 2); // 右から左へのスライドイン
slideFromSide(".about-area .about-detail.reverse", -20, 2); // 左から右へのスライドイン

// a要素ごとのアニメーション
fadeInFromBelow(".know-detail a", 1, 0.1);
fadeInFromBelow(".product-list a", 0.7, 0.2);
