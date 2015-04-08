import angular from 'angular';
import ng from 'angular-mocks';

import {
  DemoApp,
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

describe('angular module', () => {

  it('should have declared a module',() => {
    expect(ng.module('demoApp'));
  });

});

describe('angular service', () => {

  beforeEach(ng.module('demoApp'));

  it('should have registered a service',ng.inject((DemoService) => {
    expect(DemoService).toBeDefined();
    expect(DemoService.http).toBeDefined();
  }));

});

