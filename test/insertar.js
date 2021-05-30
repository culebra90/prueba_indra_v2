
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('Insertar una materia: ',()=>{
    it('Sin parametros', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('Otros parametros', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?codigo=50&nombre=Nueva Materia')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('Sin todos los parametros ', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?materia_id=50')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('materia_id no es numero', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?materia_id=pepe&titulo=pepe')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('materia_id y titulos vacios', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?materia_id=&titulo=')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('Duplicada', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?materia_id=50&titulo=Nueva Materia')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });    
    let nueva_mat = Math.floor(Math.random() * (500 - 1)) + 1;
    it('Nueva Exitosa Aleatorio', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .post('/insertar?materia_id='+nueva_mat+'&titulo=Nueva Materia')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });    
});


