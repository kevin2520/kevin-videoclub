'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(ciudadesService,departamentosService,usuariosService,Upload,API) {
    this.ciudadesService = ciudadesService;
    this.departamentosService = departamentosService;
    this.usuariosService = usuariosService;
    this.API = API;
    this.Upload = Upload;
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
    this.Upload.upload({
      url:this.API+"/api/usuarios",
      headers : {
        'Content-Type': this.usuario.fotoPerfil.type
      },
      data:{
        usuario:this.usuario
      }
    })
    //this.usuariosService.save(this.usuario).$promise
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
  }
}

angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
