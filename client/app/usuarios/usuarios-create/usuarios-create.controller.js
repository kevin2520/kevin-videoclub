'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(ciudadesService,departamentosService) {
    this.ciudadesService = ciudadesService;
    this.departamentosService = departamentosService;
  }

  $onInit(){
  	this.departamentosService.query().$promise
  	.then(response => {
  		this.departamentos = response;
  	})
  	.catch(err => console.log(err));
  }
  getCiudad(){
  	this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
  	.then(response =>{
  		console.log("Ciudades",response);
  		this.ciudades = response;
  	})
  	.catch(err =>{
  		console.log(err);
  	})
  }

  guardarUsuario(){
  	console.log(this.usuario);
  }
}

angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
