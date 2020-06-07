import ScrollObserver from './ScrollObserve.js';
import TextAnimation from './TextAnimation.js';

document.addEventListener("DOMContentLoaded", function () {
  const globalContainer = document.getElementById("global-container");
  const mobileMenuBtn = document.getElementById("header__mobile-menu__button");

  const _toggleClass = () => {
    globalContainer.classList.toggle("menu-open");
  };

  mobileMenuBtn.addEventListener("click", _toggleClass);

  const main = document.getElementById("main");

  const _removeClass = () => {
    globalContainer.classList.remove("menu-open");
  };

  main.addEventListener("click", function () {
    globalContainer.classList.remove("menu-open");
  });

  const mobileItems = document.querySelectorAll(".mobile-menu__item");
  mobileItems.forEach((item) => {
    item.addEventListener("click", _removeClass);
  });

  // ********observer********
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb);
});
