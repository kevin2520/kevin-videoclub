'use strict';

(function(){

class UsuariosUpdateComponent {
	constructor(usuariosService,$stateParams,$state,ciudadesService, departamentosService){
		this.usuariosService = usuariosService;
		this.ciudadesService = ciudadesService;
		this.departamentosService = departamentosService;
		this.$stateParams = $stateParams;
		this.$state = $state;
	}
	$onInit(){
		this.departamentosService.query().$promise
		.then(response => {
			this.departamentos = response;
		})
		.catch(err => console.error(err));

		this.usuariosService.get({id:this.$stateParams.idUsuario}).$promise
		.then(response => {
			this.usuario = response;
			console.log(this.usuario);
		})
		.catch(err => console.error(err));
	}

	getCiudades(){
		this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
		.then(response => {
			this.ciudades = response;
			console.log("Ciudades",this.ciudades);
		})
		.catch(err => console.error(err));
	}

	updateUser(){
		this.usuariosService.update({id:this.usuario.id},this.usuario).$promise
		.then(response => {
			console.log("Usuario actualizado")
			this.$state.go('usuarios-list');
		})
		.catch(err => console.error(err));
	}

}

angular.module('videoClubApp')
  .component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs: 'vm'
  });

})();
