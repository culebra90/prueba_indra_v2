const validacion = require('./capas/validacion');

module.exports.insertar = (event, context, callback) => { 
  var parametros = event['queryStringParameters']
  validacion.entrada(parametros, context, callback)  
};

module.exports.obtener = (event, context, callback) => {   
  var parametros = event['queryStringParameters']
  validacion.leer(parametros, context, callback)  
};