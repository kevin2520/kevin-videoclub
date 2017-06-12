'use strict';

function peliculasService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API+"/api/peliculas/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('videoClubApp')
  .factory('peliculasService', peliculasService);
