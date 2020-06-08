class ScrollObserver {
    constructor(els, cb, options) {
      this.els = document.querySelectorAll(els);
      const defaultOptions = {
        root: null,
        rootMagin: "0px",
        threshold: 0,
      };
      this.cb = cb;
      // マージ
      this.options = Object.assign(defaultOptions, options);
      this._init();
    }
    _init() {
      const callback = function (entries, observer) {
        //entires enrtyがそれぞれの要素に対応する
        entries.forEach((entry) => {
          // 要素が画面内にいる時監視対象の時
          if (entry.isIntersecting) {
            this.cb(entry.target, true);
            //  監視の終了
            observer.unobserve(entry.target);
          } else {
            this.cb(entry.target, false);
          }
        });
      };
      // observeインスタンス生成
      const io = new IntersectionObserver(callback.bind(this), this.options);
      // 監視対象の追加
      this.els.forEach((el) => io.observe(el));
    }
  }
  
  export default ScrollObserver;