class EditClass {
  // eventTarget：イベント発火対象、editTarget：クラスを追加・削除する対象
  constructor(eventTargets, editTarget = eventTargets) {
    console.log('eventTargets: ', eventTargets);
    this.eventTargets = document.querySelectorAll(eventTargets);
    this.editTarget = document.querySelector(editTarget);
  }

  // doEvent：イベントの種類(click,mouseover...etc)、editCls：実際に追加・削除するクラス名
  tglCls(doEvent, editCls) {
    let _t = this;
    this.eventTargets.forEach((target) => {
      target.addEventListener(doEvent, function () {
        _t.editTarget.classList.toggle(editCls);
      });
    });
  }
  addCls(doEvent, editCls) {
    let _t = this;
    this.eventTargets.forEach((target) => {
      target.addEventListener(doEvent, function () {
        _t.editTarget.classList.add(editCls);
      });
    });
  }
  removeCls(doEvent, editCls) {
    let _t = this;
    this.eventTargets.forEach((target) => {
      target.addEventListener(doEvent, function () {
        _t.editTarget.classList.remove(editCls);
      });
    });
  }
}

export default EditClass;