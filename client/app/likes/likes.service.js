'use strict';

function likesService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API+"/api/likes/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		},
		updateLike:{
			url:API+"/api/likes/updateLike/:usuario/:pelicula/:like",
			method:"PUT",
			params:{
				usuario:'@usuario',
				pelicula:'@pelicula',
				like:'@like'
			}
		}
	})
}

angular.module('videoClubApp')
  .factory('likesService', likesService);
