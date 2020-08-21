import routerPath from '../router/routerPath';
import loginApi from '../api/login';

const authUtils = (() => {
  const { app, modTypes, modules } = routerPath;
  const storageKeys = ['tokenId', 'userName'];
  let moduleRoles = { newModules: [], oldIndexs: [] };
  let userRoles = [];

  return {
    login: (data) => {
      sessionStorage.setItem(storageKeys[0], data.tokenId);
      sessionStorage.setItem(storageKeys[1], data.userInfo.username);
      window.location.href = app.root;
    },

    logout: () => {
      loginApi.logout().then(() => {
        authUtils.clearStorage();
        window.location.href = app.login;
      });
    },

    getUserName: () => {
      return sessionStorage.getItem(storageKeys[1]);
    },

    getTokenId: () => {
      return sessionStorage.getItem(storageKeys[0]);
    },

    setModuleRoles: (data) => {
      authUtils.clearModuleRoles();

      if (data) {
        userRoles = data;
        for (let i in modules) {
          if (data.find((item) => item.modName === modules[i].name)) {
            moduleRoles.newModules.push(modules[i]);
            moduleRoles.oldIndexs.push(i);
          }
        }
      }
    },

    clearModuleRoles: () => {
      moduleRoles.newModules.length = 0;
      moduleRoles.oldIndexs.length = 0;
    },

    getModuleRoles: () => {
      return moduleRoles;
    },

    getSubModules: (name) => {
      let mod = { path: '', children: [], oldIndexs: [] };
      let module = moduleRoles.newModules.find((item) => item.name === name);
      let modRole = userRoles.find((item) => item.modName === name);

      if (module) {
        mod.path = module.path;
        let children = module.children;
        let childrenRole = modRole.children;
        if (children && childrenRole) {
          for (let i in children) {
            if (childrenRole.find((item) => item.modName === children[i].name)) {
              mod.children.push(children[i]);
              mod.oldIndexs.push(i);
            }
          }
        }
      }

      return mod;
    },

    getHomePath: () => {
      return app.root;
    },

    getLoginPath: () => {
      return app.login;
    },

    getModTypes: () => {
      return modTypes;
    },

    clearStorage: () => {
      storageKeys.map((k) => window.sessionStorage.removeItem(k));
    },

    /*=============以下方法测试使用===============*/
    testLogin: (data) => {
      sessionStorage.setItem(storageKeys[0], 'testid20190101');
      sessionStorage.setItem(storageKeys[1], data.username);
      window.location.href = app.root;
    },

    testSetModuleRoles: () => {
      authUtils.clearModuleRoles();
      if (modules) {
        for (let i in modules) {
          moduleRoles.newModules.push(modules[i]);
          moduleRoles.oldIndexs.push(i);
        }
      }
    },

    testGetSubModules: (name) => {
      let mod = { path: '', children: [], oldIndexs: [] };
      let module = moduleRoles.newModules.find((item) => item.name === name);
      if (module) {
        mod.path = module.path;
        let children = module.children;
        if (children) {
          for (let i in children) {
            mod.children.push(children[i]);
            mod.oldIndexs.push(i);
          }
        }
      }
      return mod;
    }
  };
})();

export default authUtils;
