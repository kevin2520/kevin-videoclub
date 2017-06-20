'use strict';

function tiposDocumentosService($resource,API) {
	return $resource(API+"/api/tipos_documentos/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('videoClubApp')
  .factory('tiposDocumentosService', tiposDocumentosService);
