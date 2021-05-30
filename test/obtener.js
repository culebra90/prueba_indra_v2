let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('Obtener una materia: ',()=>{
    it('Sin parametros', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('otro campo (NO materia_id)', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?codigo=50')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });    
    it('materia_id no es numerico ', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?materia_id=pepe')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    let nueva_mat = Math.floor(Math.random() * (500 - 1)) + 1;
    it('Leer aleatorio', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?materia_id='+nueva_mat)            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('Registro encontrado', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?materia_id=50')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
});