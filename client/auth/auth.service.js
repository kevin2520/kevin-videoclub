'use strict';

angular.module("videoClubApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state','usuariosService','localStorageService'];
function AuthService($auth,$state,usuariosService,localStorageService){
	var avatar;
	var Auth = {
		login: login,
		logout: logout,
		isAdmin: isAdmin,
		idUsuario: idUsuario,
		datosUsuario: datosUsuario,
		getImagePerfil: getImagePerfil,
		isAuthenticated: isAuthenticated,
		getRoles: getRoles
	}

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);
			usuariosService.get({id:Auth.idUsuario()}).$promise
			.then(response =>{
				 localStorageService.set('avatar', response.tipoImagen +','+response.fotoPerfil);
				 console.log(response);
			})
			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			$state.go('login');
		})
	}
	function getImagePerfil(){
		if($auth.isAuthenticated()){
			return localStorageService.get('avatar');
		}
	}

	function logout(){
		if($auth.isAuthenticated()){
			$auth.logout()
			.then(respose=>{
				localStorageService.remove('avatar');
				$state.go('main');
			})
		}

	}
	function isAdmin(){
		if(Auth.isAuthenticated()){

				if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}

	function datosUsuario(){
		if(Auth.isAuthenticated()){

			return $auth.getPayload().user;
		}
	}
	function idUsuario(){
		if(Auth.isAuthenticated()){
			return $auth.getPayload().sub;
		} else{
			return null;
		}
	}
	function isAuthenticated(){
		if($auth.isAuthenticated()){
			return true;
		}else{
			return false;
		}
	}

	function getRoles(){
		if(Auth.isAuthenticated()){
			return $auth.getPayload().roles;
		} else{
			return false;
		}
	}

	return Auth;

}
