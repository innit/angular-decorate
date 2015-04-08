import {ngInject, ngController, ngService, ngModule} from 'src/decorators';
import angular from 'angular';

@ngModule({
  name: 'demoApp',
  dependencies: [],
  inject: '$http',
  configure: ['$httpProvider']
})
export class DemoApp {
  static run(http){
    console.log('run',http);
  }
  static config(httpProvider){
    console.log('config',httpProvider);
  }
}

@ngController({
  module: 'demoApp',
  name: 'DemoController',
  inject: ['$http']
})
export class DemoController {
  constructor(http){
    this.http = http;
  }
}

@ngService({
  module: 'demoApp',
  name: 'DemoService',
  inject: ['$http']
})
export class DemoService {
  constructor(){}
}