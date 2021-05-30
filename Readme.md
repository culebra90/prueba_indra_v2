# PROYECTO INDRA

Instalar dependencias de npm

1. npm install serverless -g
2. npm install node-fetch
3. npm install mocha
4. npm install chai
5. npm install chai-http

## Crear AWS CLI y configurarlo

Nos dirigimos a la parte “Usuarios”, y le damos a “Crear nuevo usuario” o “Añadir nuevo usuario”
1. Le ponemos el nombre que deseemos al usuario
2. Seleccionamos “Acceso mediante programación”
3. “Siguiente Permisos”
4. “Asociar directamente las políticas existentes”
5. Filtramos las políticas que vamos a usar, y las seleccionamos:
6. AmazonDynamoDBFullAccess
7. AWSLambda_FullAccess
8. AmazonS3FullAccess
9. AmazonAPIGatewayAdministrator
10. AWSLambdaDynamoDBExecutionRole
11. Siguiente Etiquetas
12. Siguiente Revisar
13. Crear Usuario

### IMPORTANTE: Copiar en un lugar seguro el ID de acceso y clave secreta.

## CONFIGURAR CREDENCIALES

serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

## DESPLEGAR PROYECTO

sls deploy

## PRUEBAS UNITARIAS

npm test