let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('API SWAPI',()=>{
    it('Sin parametros', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    });
    it('star_wars no es numeral', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?star_wars=pepe')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    }); 
    it('no encontrado', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?star_wars=50')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    }); 
    it('Encontrado', (done) => {
        chai.request('https://ogahdcdqb3.execute-api.us-east-1.amazonaws.com/dev')
            .get('/obtener?star_wars=5')            
            .end( function(err,res){
                console.log(res.body)                
                done();
            });
    }); 
});