'use strict';

function departamentosService($resource,API) {
	return $resource(API+"/api/departamentos/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		},
		getCiudades:{
			url:API+'/api/departamentos/find',
			method:'GET',
			isArray:true
		}
	})
}

angular.module('videoClubApp')
  .factory('departamentosService', departamentosService);
