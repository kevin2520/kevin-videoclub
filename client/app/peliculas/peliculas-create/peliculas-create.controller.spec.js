'use strict';

describe('Component: PeliculasCreateComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var PeliculasCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PeliculasCreateComponent = $componentController('peliculas-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
