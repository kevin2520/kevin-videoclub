'use strict';

describe('Service: usuarios', function () {

  // load the service's module
  beforeEach(module('videoClubApp'));

  // instantiate service
  var usuarios;
  beforeEach(inject(function (_usuarios_) {
    usuarios = _usuarios_;
  }));

  it('should do something', function () {
    expect(!!usuarios).toBe(true);
  });

});
