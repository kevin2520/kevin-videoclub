'use strict';

function ciudadesService($resource,API) {
	return $resource(API+"/api/ciudades/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		},
		getCiudades:{
			url:API+'/api/ciudades/find',
			method:'GET',
			isArray:true
		}
	})
}

angular.module('videoClubApp')
  .factory('ciudadesService', ciudadesService);
