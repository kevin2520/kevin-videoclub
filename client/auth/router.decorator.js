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
          console.log("ROLES AUTH", roles);
          if(roles !== false){
            for (var i = 0; i < roles.length; i++) {
              for (var j = 0; j < stateRoles.length; j++) {
                if(roles[i] == stateRoles[j]){
                  return;
                }
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
