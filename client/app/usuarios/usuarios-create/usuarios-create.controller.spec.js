'use strict';

describe('Component: UsuariosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var UsuariosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuariosCreateComponent = $componentController('usuarios-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
