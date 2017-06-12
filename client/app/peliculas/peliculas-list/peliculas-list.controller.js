'use strict';

(function(){

class PeliculasListComponent {
  constructor(likesService,peliculasService,AuthService) {
    this.likesService = likesService;
    this.peliculasService = peliculasService;
    this.AuthService = AuthService;
    this.likeItem={
      pelicula:null,
      usuario:null,
      like:false
    }
  }
  $onInit(){
  	
  		this.peliculasService.query().$promise
  			.then(response => {
  				this.peliculas = response;
  				console.log("PELICULAS..",this.peliculas);
  			});

	}

	meGusta(idPelicula){
    console.log(this.AuthService.idUsuario());
    this.likeItem.usuario = this.AuthService.idUsuario();
    this.likeItem.pelicula = idPelicula;

    if(!this.likeItem.like){
      this.likeItem.like = true;
    }else{
      this.likeItem.like = false;  
    }

		console.log("Like..",this.likeItem);
    this.likesService.updateLike(this.likeItem).$promise
    .then(response =>{
      console.log(response);
      this.$onInit();
    })
    .catch(err => console.log(err));
	}	
}
angular.module('videoClubApp')
  .component('peliculasList', {
    templateUrl: 'app/peliculas/peliculas-list/peliculas-list.html',
    controller: PeliculasListComponent,
    controllerAs: 'vm'
  });

})();
