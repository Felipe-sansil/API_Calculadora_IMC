//importação do express
const express = require('express')
const app = express()
//importação da calculadora a atribuição da constante
const calculadora = require('./calculadora');

app.get('/',(req, res) =>{
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(calculadora.validaParametro(req.query.peso) && calculadora.validaParametro(req.query.altura))
    {
    
    //chamo a função da calculadora
    //a função retorna o resultado do calculo imc para a variavel imc a qual ela está atribuida
        let imc = calculadora.efetuarCalculoIMC(peso, altura);
        let status = calculadora.retornaStatusIMC(imc);

        let json = {imc: imc, status: status};
    
        res.json(json);
    }
    else{
        res.status(400).json({'Erro': 'Peso ou altura inválidos. '});
    }
});

app.listen(8080, () =>{
    let data = new Date();
    console.log("Servidor iniciado em: " + data);
} );
    
