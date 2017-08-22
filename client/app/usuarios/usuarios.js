'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-create', {
        url: '/usuarios-create',
        authenticate:true,
        template: '<usuarios-create></usuarios-create>',
      })
      .state('usuarios-list', {
        url: '/usuarios-list',
        authenticate: ["ADMIN"],
        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-update', {
        url: '/usuarios-update',
        authenticate: ["ADMIN"],
        template: '<usuarios-update></usuarios-update>'
      });
  });
