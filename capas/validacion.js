const dto = require('./conexion_db');
const util = require('./util');
var stado_servidor = 200

module.exports = {
  async entrada(parametros, context, callback){
    if(parametros===null){
      util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Para insertar en la BD debe enviar el campo correspondiente','parametros':parametros,'datos':[],'tipo':'error'})
    }else{
      if(typeof parametros['materia_id'] !== 'undefined' && typeof parametros['titulo'] !== 'undefined'){
        if(Number.isInteger(parseInt(parametros['materia_id']))){        
          dto.leer_datos(parametros['materia_id']).then(function(datos) {          
            if(typeof datos.Item !== 'undefined'){
              util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Ya existe una materia_id con ese ID','parametros':parametros,'tipo':'error'})
            }else{          
              dto.grabar_dynamodb(parametros['titulo'],parametros['materia_id']).then(() => { 
                util.salida_callback(callback,{'stado_servidor':stado_servidor,'mensaje':'Registro Guardado Correctamente','parametros':parametros,'tipo':'insertar'})
              }).catch((err) => {      
                  util.errorResponse(err.message, context.awsRequestId, callback,parametros)
              }); 
            }          
          }).catch((err) => {      
              util.errorResponse(err.message, context.awsRequestId, callback,parametros)
          });                  
        }else{
          util.salida_callback(callback,{'stado_servidor':524,'mensaje':'materia_id no es numero entero','parametros':parametros,'tipo':'error'})
        }
      }else{ 
        util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Debes enviar los parametros adecuados para añadir a la BD','parametros':parametros,'tipo':'error'})
      }
    } 
  },
  async leer(parametros, context, callback){
    if(parametros===null){
      util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Para buscar en la BD debe enviar el campo correspondiente','parametros':parametros,'datos':[],'tipo':'error'})
    }else{
      if(typeof parametros['materia_id'] !== 'undefined'){
        if(Number.isInteger(parseInt(parametros['materia_id']))){
          dto.leer_datos(parametros['materia_id']).then(function(datos) {
            mensaje = (typeof datos.Item !== 'undefined') ? 'Datos encontrados' : 'No se encontraron datos' 
            util.salida_callback(callback,{'stado_servidor':stado_servidor,'mensaje':mensaje,'parametros':parametros,'busqueda':datos.Item,'tipo':'busqueda'})
          }).catch((err) => {      
            util.errorResponse(err.message, context.awsRequestId, callback,parametros)
          });   
        }else{
          util.salida_callback(callback,{'stado_servidor':524,'mensaje':'materia_id debe ser numero entero','parametros':parametros,'datos':[],'tipo':'error'})    
        }   
      }else if(typeof parametros['star_wars'] !== 'undefined'){              
          if(Number.isInteger(parseInt(parametros['star_wars']))){
              const fetch = require('node-fetch');
  
              fetch('https://swapi.dev/api/starships/'+parametros['star_wars']+'/')
              .then(valor => valor.json())
              .then( json => {                  
                  if(json.detail=='Not found'){
                      util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Star War NO encontrado','parametros':parametros,'busqueda':json,'tipo':'star_wars'}) 
                  }else{
                      util.salida_callback(callback,{'stado_servidor':stado_servidor,'mensaje':'Star War encontrado','parametros':parametros,'busqueda':json,'tipo':'star_wars'}) 
                  }                  
              });
          }else{
              util.salida_callback(callback,{'stado_servidor':524,'mensaje':'star_wars debe ser numero entero','parametros':parametros,'datos':[],'tipo':'error'})
          }         
      }else{              
          util.salida_callback(callback,{'stado_servidor':524,'mensaje':'Debe enviar los parametros correspondientes','parametros':parametros,'datos':[],'tipo':'error'}) 
      }
    }  
  }    
}