'use strict';

(function(){
    angular.module('videoClubApp')
    .run(function($rootScope, $state , AuthService){
      $rootScope.$on('$stateChangeStart',function(event, next){
        if(!next.authenticate){
          return;
        }
        if(typeof next.authenticate == 'object'){
          var stateRoles = next.authenticate;
          var roles = AuthService.getRoles();
          if(roles == false){

              for (var j = 0; j < stateRoles.length; j++) {
                if(roles.indexOf(stateRoles[j]) !== 1){
                  return;
                }
              }
            event.preventDefault();
            $state.go("forbidden");
          }else{
            event.preventDefault();
            $state.go("forbidden");
          }
        }else{
          if(AuthService.isAuthenticated()){
            return;
          }else{
            event.preventDefault();
            $state.go("login");
          }
        }

      });
    });
})();
