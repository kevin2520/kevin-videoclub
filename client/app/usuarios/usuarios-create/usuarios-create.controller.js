'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService,departamentosService,ciudadesService,tiposDocumentosService,$state) {
    this.usuariosService = usuariosService;
    this.departamentosService = departamentosService;
    this.$state = $state;
    this.tiposDocumentosService = tiposDocumentosService;
    this.ciudadesService = ciudadesService;
  }
$onInit(){
  this.departamentosService.query().$promise
    .then(response => {
      this.departamentos = response;
    })
    .catch(err => console.error(err));
   this.tiposDocumentosService.query().$promise
    .then(response => {
      this.tiposDocumento = response;
      console.log(this.tiposDocumento);
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

  createUser(){
  	this.usuariosService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
      this.$state.go('usuarios-list');
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
  	})
  }
}
UsuariosCreateComponent.$inject = ['usuariosService','departamentosService','ciudadesService','tiposDocumentosService','$state'];
angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
