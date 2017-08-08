'use strict';

(function() {

  class ForbiddenComponent {

    constructor() {

    }

  }

  angular.module('videoClubApp')
    .component('forbidden', {
      templateUrl: 'components/forbidden/forbidden.html',
      controller: ForbiddenComponent
    });
})();
