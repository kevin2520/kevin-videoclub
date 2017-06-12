'use strict';

describe('Service: ciudades', function () {

  // load the service's module
  beforeEach(module('videoClubApp'));

  // instantiate service
  var ciudades;
  beforeEach(inject(function (_ciudades_) {
    ciudades = _ciudades_;
  }));

  it('should do something', function () {
    expect(!!ciudades).toBe(true);
  });

});
