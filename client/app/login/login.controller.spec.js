'use strict';

describe('Component: LoginComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var LoginComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    LoginComponent = $componentController('login', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
