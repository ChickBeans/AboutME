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

  // ********observer********
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb);
});
