import {ngInject} from 'src/decorators';

@ngInject('$http')
export class FooController {
	constructor($http){
		this.$http = $http;
	}
}