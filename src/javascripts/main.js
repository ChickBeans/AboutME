import EditClass from "./EditClass.js";
import ScrollObserver from "./ScrollObserve.js";
import TextAnimation from "./TextAnimation.js";

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = new EditClass(
    "#header__mobile-menu__button",
    "#global-container"
  );
  mobileMenu.tglCls("click", "menu-open");

  const main = new EditClass("#main", "#global-container");
  main.removeCls("click", "menu-open");

  const mobileMenuItems = new EditClass(
    ".mobile-menu__item",
    "#global-container"
  );
  mobileMenuItems.removeCls("click", "menu-open");

  // *******Slide Show***********
  const images = ['../images/airbnb-img.png', '../images/iSara-img.png', '../images/airbnb-img.png'];
  let current = 0;

  const changeImage = (num) => {
    if (current + num >= 0 && current + num < images.length) {
      current += num;
      document.querySelector('.deliverbles__main-image').src = images[current];
      pageNum();
    }
  };

const pageNum = () => {
  document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();

  const prev = document.getElementById('prev');
  console.log('prev: ', prev);
  const next = document.getElementById('next');
  prev.addEventListener('click', function() {
    changeImage(-1);
  });
  next.addEventListener('click', function() {
    changeImage(1);
  });
  // next.addEventListener('click', changeImage(1));
  

  // ********observer********
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb);
});
