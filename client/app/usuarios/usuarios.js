'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-create', {
        url: '/usuarios-create',
        template: '<usuarios-create></usuarios-create>'
      })
      .state('usuarios-list', {
        url: '/usuarios-list',
        template: '<usuarios-list></usuarios-list>'
      });
  });
