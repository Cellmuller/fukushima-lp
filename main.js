// Initialize ScrollMagic Controller
const controller = new ScrollMagic.Controller();

// slideFromSide function using ScrollMagic and GSAP
function slideFromSide(selector, distance, duration) {
  let tween = gsap.from(selector, {
    x: distance,
    opacity: 0,
    duration: duration
  });
  
  new ScrollMagic.Scene({
    triggerElement: selector,
    triggerHook: 0.8, // corresponds to "top 80%"
    reverse: false // to ensure the animation plays in reverse when scrolling up
  })
  .setTween(tween)
  .addTo(controller);
}

// fadeInFromBelow function using ScrollMagic and GSAP
function fadeInFromBelow(selector, duration, delayMultiplier) {
  document.querySelectorAll(selector).forEach((element, index) => {
    let tween = gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: duration,
      delay: index * delayMultiplier
    });

    new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 0.8, // corresponds to "top 80%"
      reverse: false // to ensure the animation plays in reverse when scrolling up
    })
    .setTween(tween)
    .addTo(controller);
  });
}

// a要素ごとのアニメーション
fadeInFromBelow(".know-detail a", 1, 0.1);
fadeInFromBelow(".product-list a", 0.7, 0.1);



// aboutエリアアニメーション
slideFromSide(".about-area .about-detail:not(.reverse)", 20, 2); // 右から左へのスライドイン
slideFromSide(".about-area .about-detail.reverse", -20, 2); // 左から右へのスライドイン

window.addEventListener('DOMContentLoaded' , function(){
  document.getElementById('video-background').click();
})

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content'); // 追加
  const closeBtn = document.querySelector('.close-btn');
  const popupIframe = document.getElementById('popup-iframe');
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(function(box) {
      box.addEventListener('click', function(event) {
          event.preventDefault();
          let articleURL = event.currentTarget.getAttribute('href');
          popupIframe.src = articleURL; 
          popup.style.display = 'block';
      });
  });

  closeBtn.addEventListener('click', closePopup);

  // popup-content の外側がクリックされた時のイベントハンドラを追加
  popup.addEventListener('click', function(event) {
      if (event.target === popup) {  // クリックされた要素が popup であればモーダルを閉じる
          closePopup();
      }
  });

  function closePopup() {
      popup.style.display = 'none';
  }
});
