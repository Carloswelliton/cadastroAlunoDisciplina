const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path = require('path');
    

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/cadastrar/aluno", (req, res)=>{
    res.render('cadastrarAluno');
})

app.get("/cadastrar/disciplina", (req, res)=>{
    res.render('cadastrarDisciplina');
})


app.post("/salvar/aluno", (req, res) => {
    const erros = [];

    const aluno = {
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        matricula: req.body.matricula,
        turma: req.body.turma

    }
    res.render("salvarAluno", {
        aluno: aluno
    })
})

app.post("/salvar/disciplina", (req, res) => {

    const disciplina = {
        disciplina: req.body.nomeDisciplina,
        professor: req.body.professor,
        codigo: req.body.codigo,
        turmaCodigo: req.body.turmaCodigo 
    }

    res.render("salvarDisciplina", {    
        disciplina: disciplina
    });
})

app.get("/teste", (req, res) => {
    res.render("teste");
})

app.listen(8080, ()=>{console.log("Runnnig server")});