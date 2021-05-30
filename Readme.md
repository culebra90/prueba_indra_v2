# PROYECTO INDRA

Instalar dependencias de npm

1. npm install serverless -g
2. npm install node-fetch
3. npm install mocha
4. npm install chai
5. npm install chai-http

## Crear AWS CLI y configurarlo

Nos dirigimos a la parte “Usuarios”, y le damos a “Crear nuevo usuario” o “Añadir nuevo usuario”
• Le ponemos el nombre que deseemos al usuario
• Seleccionamos “Acceso mediante programación”
• “Siguiente Permisos”
• “Asociar directamente las políticas existentes”
• Filtramos las políticas que vamos a usar, y las seleccionamos:
o AmazonDynamoDBFullAccess
o AWSLambda_FullAccess
o AmazonS3FullAccess
o AmazonAPIGatewayAdministrator
o AWSLambdaDynamoDBExecutionRole
• Siguiente Etiquetas
• Siguiente Revisar
• Crear Usuario
• IMPORTANTE: Copiar en un lugar seguro el ID de acceso y clave secreta.

## CONFIGURAR CREDENCIALES

serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

## DESPLEGAR PROYECTO

sls deploy

## PRUEBAS UNITARIAS

npm test