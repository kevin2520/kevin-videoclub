'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('peliculas-create', {
        url: '/peliculas-create',
        template: '<peliculas-create></peliculas-create>'
      });
  });
