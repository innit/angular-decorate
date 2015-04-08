import {ngInject} from 'src/decorators';

@ngInject('$http')
export class FooController {
	constructor($http){
		this.$http = $http;
	}
}

@ngInject('$http','$window')
export class BarController {
	constructor($http,$window){
		this.$http = $http;
		this.$window = $window;
	}
}