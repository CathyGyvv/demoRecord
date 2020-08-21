import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class UI {
  // 左侧展示隐藏
  @observable collapsed = false;
  @action toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  @action reset() {
    this.collapsed = false;
  }
}

const ui = new UI();

export default ui;
