'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('peliculas-list', {
        url: '/peliculas-list',
        template: '<peliculas-list></peliculas-list>'
      });
  });
