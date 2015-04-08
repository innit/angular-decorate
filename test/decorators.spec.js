

import {
  DemoController,
  DemoService
  //FooService, 
  //FooDirective, 
  //FooFilter
} from './decorators.fixture';

describe('$inject decorators',() => {
  
  it('should decorate controllers with $inject',() => {
    expect(DemoController.$inject).toEqual(['$http'])
  });

  it('should decorate services with $inject',() => {
    expect(DemoService.$inject).toEqual(['$http'])
  });

});
