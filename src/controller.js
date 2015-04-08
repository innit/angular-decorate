import {getModule} from './module';

export const ngController = (config) => {
  let mod = getModule(config.module);
  return (controllerCtor) => {
    if(config.inject){
      controllerCtor.$inject = config.inject;
    }
    mod.controller(config.name,controllerCtor);

  }
}