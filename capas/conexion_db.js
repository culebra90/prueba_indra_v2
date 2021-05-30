const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

module.exports = {
    async grabar_dynamodb(titulo, materia_id) {
        return ddb.put({
            TableName: 'materias',
            Item: {
                'materia_id': parseInt(materia_id),
                'titulo': titulo          
            },
        }).promise();
    },
    async leer_datos(clave){
        return ddb.get({
          TableName: 'materias',
          Key: {
            materia_id: parseInt(clave)
          }
        }).promise();    
    }
}

