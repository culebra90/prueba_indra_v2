module.exports = {
    async errorResponse(errorMessage, awsRequestId, callback,parametros) {
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            Error: errorMessage,
            Reference: awsRequestId,
            parametros: parametros
          })
        });
    },    
    async salida_callback(callback,datos){      
        let array_body = (datos.tipo=='error' || datos.tipo=='insertar')
          ? {'mensaje':datos.mensaje,'parametros':datos.parametros}
          : {'mensaje':datos.mensaje,'parametros':datos.parametros,'busqueda':datos.busqueda}
        
        callback(null, {statusCode: datos.stado_servidor, body: JSON.stringify(array_body,null,2)});
    }
}

