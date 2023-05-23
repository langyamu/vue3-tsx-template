import { App, Component, Plugin } from 'vue';

type TInstallComp = Component & {
  install: (app:App) => void
}

const withInstall = <T>(comp: Component): Plugin => {
  (comp as TInstallComp).install = function (app: App) {
    app.component(comp.name as string, comp);
  };
  return comp as Plugin;
};

export default {
  withInstall
};
