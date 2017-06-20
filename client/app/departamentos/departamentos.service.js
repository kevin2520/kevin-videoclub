'use strict';

function departamentosService($resource,API) {
	return $resource(API+"/api/departamentos/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('videoClubApp')
  .factory('departamentosService', departamentosService);
