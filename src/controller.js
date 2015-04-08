import angular from 'angular';
import {getModule} from './module';

export const ngController = (config) => {
  let mod = getModule(config.module);
  if(!mod){
    throw new Error(`module ${config.module} not defined!`)
  }
  return (controllerCtor) => {
    if(config.inject){
      controllerCtor.$inject = config.inject;
    }

  }
}