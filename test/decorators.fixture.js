import {ngInject, ngController} from 'src/decorators';
import angular from 'angular';

angular.module('testApp',[]);


@ngInject('$http')
@ngController({
  module: 'testApp',
  name: 'FooController',
})
export class FooController {
  constructor($http){
    this.$http = $http;
  }
}

@ngController({
  module: 'testApp',
  name: 'BarController',
  inject: ['$http','$window']
})
export class BarController {
  constructor($http,$window){
    this.$http = $http;
    this.$window = $window;
  }
}