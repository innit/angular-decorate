### Javascript Decorators for Angular 1.x

Writing Angular 1.x apps with ES6? Tired of declaring classes, adding manual injections, and registering everything with your angular modules? Fear not!

```js
//import angular and angular-decorate
import angular from 'angular';
import {ngController} from 'angular-decorate';

//declare your angular app...
angular.module('myApp',['ui.router'])

//decorate a controller class
@ngController({
  module: 'myApp',
  inject: ['$http']
})
class MyController {
  constructor($http){
    this.http = $http;
  }
}

```