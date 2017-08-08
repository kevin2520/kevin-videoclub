'use strict';

(function(){

class PeliculasCreateComponent {
  constructor(peliculasService) {
    this.peliculasService = peliculasService;
   /* this.pelicula = {
      tipoImagen:null,
      imagen:null
    };*/
  }
  peliculaCreate(){
    if(this.croppedImage){
      var imagenPelicula = this.croppedImage.split(','); //split genera un arreglo de tantos elementos como comas encuentre en la cadena del objeto this.croppedImage
      this.pelicula.tipoImagen = imagenPelicula[0];
      this.pelicula.imagen = imagenPelicula[1];
    }
    this.peliculasService.save(this.pelicula).$promise
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err));
  }
  imageLoad($fileContent){
  	this.image = $fileContent;
  }
}

angular.module('videoClubApp')
  .component('peliculasCreate', {
    templateUrl: 'app/peliculas/peliculas-create/peliculas-create.html',
    controller: PeliculasCreateComponent,
    controllerAs: 'vm'
  });

})();
