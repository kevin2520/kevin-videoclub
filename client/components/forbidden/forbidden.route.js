'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('forbidden', {
        url: '/forbidden',
        template: '<forbidden></forbidden>'
      });
  });
