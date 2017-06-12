'use strict';

class NavbarController {
  constructor(AuthService){
		  this.menu = [{
		    'title': 'Home',
		    'state': 'main'
		  }];

		  this.isCollapsed = true;
		 
		 this.AuthService = AuthService; 	
  }
 


}

NavbarController.$inject = ['AuthService']
angular.module('videoClubApp')
  .component('navbar', {
  	templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });
