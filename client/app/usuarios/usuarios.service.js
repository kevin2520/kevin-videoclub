'use strict';

function usuariosService($resource,API) {
	return $resource(API+"/api/usuarios/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('videoClubApp')
  .factory('usuariosService', usuariosService);
