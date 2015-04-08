import {
	FooController,
	//FooService, 
	//FooDirective, 
	//FooFilter
} from './decorators.fixture';

describe('decorators',function(){
	it('should add an $inject property to the constructor', function(){
		expect(FooController.$inject).toEqual(['$http']);
	});
});
