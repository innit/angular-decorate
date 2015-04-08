import {
	FooController,
	BarController
	//FooService, 
	//FooDirective, 
	//FooFilter
} from './decorators.fixture';

describe('decorators',function(){
	
	it('should add an $inject property to the constructor', function(){
		expect(FooController.$inject).toEqual(['$http']);
	});

	it('should add an $inject property to the constructor and handle multiple injectables', function(){
		expect(BarController.$inject).toEqual(['$http','$window']);
	});
});
