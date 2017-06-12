'use strict';

describe('Component: PeliculasListComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var PeliculasListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PeliculasListComponent = $componentController('peliculas-list', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
