'use strict';

angular.module("videoClubApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login:login,
		logout:logout,
		isAdmin:isAdmin,
		idUsuario:idUsuario,
		isAuthenticated:isAuthenticated
	}

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);
			
			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			$state.go('login');
		})
	}

	function logout(){
		if($auth.isAuthenticated()){
			$auth.logout()
			.then(respose=>{
				$state.go('main');
			})
		}

	}
	function isAdmin(){
		if(Auth.isAuthenticated()){
				console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}
	function idUsuario(){
		if(Auth.isAuthenticated()){
			return $auth.getPayload().idUsuario;
		}
	}
	function isAuthenticated(){
		if($auth.isAuthenticated()){
			return true;
		}else{
			return false;
		}
	}

	return Auth;

}
