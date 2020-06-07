document.addEventListener('DOMContentLoaded', function() {

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

const ta = new TextAnimation('#ani');
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    ta.animate();
});
})

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((accu, curr) => {
            // 半角スペースの置換
            curr = curr.replace(/\s+/, "&nbsp;");
            return `${accu}<span class="char">${curr}</span>`;
          }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}