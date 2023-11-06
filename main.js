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
// fadeInFromBelow(".know-detail a", 1, 0.1);
fadeInFromBelow(".product-list a", 0.7, 0.1);



// aboutエリアアニメーション
slideFromSide(".about-area .about-detail:not(.reverse)", 20, 2); // 右から左へのスライドイン
slideFromSide(".about-area .about-detail.reverse", -20, 2); // 左から右へのスライドイン

window.addEventListener('DOMContentLoaded' , function(){
  document.getElementById('video-background').click();
})

// document.addEventListener("DOMContentLoaded", function() {
//   const popup = document.getElementById('popup');
//   const popupContent = document.getElementById('popup-content'); // 追加
//   const closeBtn = document.querySelector('.close-btn');
//   const popupIframe = document.getElementById('popup-iframe');
//   const boxes = document.querySelectorAll('.box');

//   boxes.forEach(function(box) {
//       box.addEventListener('click', function(event) {
//           event.preventDefault();
//           let articleURL = event.currentTarget.getAttribute('href');
//           popupIframe.src = articleURL; 
//           popup.style.display = 'block';
//       });
//   });

//   closeBtn.addEventListener('click', closePopup);

//   // popup-content の外側がクリックされた時のイベントハンドラを追加
//   popup.addEventListener('click', function(event) {
//       if (event.target === popup) {  // クリックされた要素が popup であればモーダルを閉じる
//           closePopup();
//       }
//   });

//   function closePopup() {
//       popup.style.display = 'none';
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');
  const popupIframe = document.getElementById('popup-iframe');
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(function(box) {
      box.addEventListener('click', function(event) {
          event.preventDefault();
          let articleURL = event.currentTarget.getAttribute('href');
          popupIframe.src = articleURL; 

          // モーダルをフェードインさせるための処理
          popup.style.display = 'block'; 
          setTimeout(function() {
              popup.classList.add('show');
          }, 10); // 小さい遅延を入れてopacityのアニメーションをトリガー
      });
  });

  closeBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', function(event) {
      if (event.target === popup) {
          closePopup();
      }
  });

  function closePopup() {
      // モーダルをフェードアウトさせるための処理
      popup.classList.remove('show');
      setTimeout(function() {
          popup.style.display = 'none';
      }, 300); // 0.3sのトランジション時間と同じ
  }
});



function showThanksModal() {
  var modal = document.getElementById('thanksModal');

  // クラスを追加してモーダルを表示
  modal.style.display = "block"; // 最初に表示にする
  setTimeout(function() {
      modal.classList.add('show');
  }, 10); // 小さい遅延を入れてopacityのアニメーションをトリガー

  var closeBtn = document.querySelector(".thanks-close");
  closeBtn.onclick = function() {
      // クラスを削除してモーダルのopacityを0に
      modal.classList.remove('show');
      // トランジション後に実際の非表示にする
      setTimeout(function() {
          modal.style.display = "none";
      }, 300); // 0.3sのトランジション時間と同じ
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.remove('show');
          setTimeout(function() {
              modal.style.display = "none";
          }, 300); // 0.3sのトランジション時間と同じ
      }
  }
}
$(document).ready(function () {
  $(".know-detail").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 3,
    prevArrow: false, // 前への矢印を非表示にする
    nextArrow: false, // 次への矢印を非表示にする
    responsive: [{
      breakpoint: 1023,
           settings: {
                slidesToShow: 1,
           }
      }
 ]
  });
});