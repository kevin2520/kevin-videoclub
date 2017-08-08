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
      });
  });
