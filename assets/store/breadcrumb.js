import { action, computed, configure, observable } from 'mobx';

configure({ enforceActions: 'observed' });

class Breadcrumb {
  //面包屑的数据
  @observable values = [];

  @action setValue = (index, crumbArray) => {
    if (index === 0) {
      this.values.length = 0;
    }
    if (crumbArray) {
      if (Array.isArray(crumbArray)) {
        if (this.values.length === 0) {
          index = 0;
        } else {
          this.values.splice(index);
        }
        crumbArray.map((v, i) => {
          this.values[index + i] = v;
        });
      } else {
        this.values[index] = crumbArray;
      }
    }
  };

  @computed get getValues() {
    return this.values.slice();
  }
}

const breadcrumb = new Breadcrumb();

export default breadcrumb;
